@include "./util.ne"
@{%
  const rand = function(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  const generateRoller = function(count, sides) {
    return function(c) {
      let countVal = (typeof count === "function")? count(c) : count;
      let sideVal = (typeof sides === "function")? sides(c) : sides;
      let result = []
      for(let i = 0; i < countVal; i++) {
        result.append(rand(sideVal));
      }
      return result.reduce((a,b) => { a + b } , 0);
    }
  }
%}

roller -> ws die_roll ws {% function(d) { return d[1]; } %}

die_roll ->
    integer die_divider integer {% function(d) { return generateRoller(d[0], d[2]) } %}
  | die_divider integer {% function(d) { return function(c) { return rand(d[0]);} } %}

die_divider -> "d"i
