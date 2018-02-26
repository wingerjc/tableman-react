// Generated automatically by nearley, version 2.11.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

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
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "identifier$ebnf$1", "symbols": [/[a-zA-Z_0-9]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-zA-Z_0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": [/[a-zA-Z]/, "identifier$ebnf$1"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "variable_identifier", "symbols": [{"literal":"@"}, "identifier"], "postprocess": function(d) { return d[0] + d[1]; }},
    {"name": "ws$ebnf$1", "symbols": []},
    {"name": "ws$ebnf$1", "symbols": ["ws$ebnf$1", /[ \n\t\r]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ws", "symbols": ["ws$ebnf$1"]},
    {"name": "sp$ebnf$1", "symbols": [/[ ]/]},
    {"name": "sp$ebnf$1", "symbols": ["sp$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sp", "symbols": ["sp$ebnf$1"]},
    {"name": "sp0$ebnf$1", "symbols": []},
    {"name": "sp0$ebnf$1", "symbols": ["sp0$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sp0", "symbols": ["sp0$ebnf$1"]},
    {"name": "eol$ebnf$1", "symbols": [{"literal":"\r"}], "postprocess": id},
    {"name": "eol$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "eol", "symbols": ["eol$ebnf$1", {"literal":"\n"}]},
    {"name": "open_param", "symbols": [{"literal":"("}]},
    {"name": "close_param", "symbols": [{"literal":")"}]},
    {"name": "open_block", "symbols": [{"literal":"{"}]},
    {"name": "close_block", "symbols": [{"literal":"}"}]},
    {"name": "header_separator", "symbols": ["sp0", {"literal":":"}, "sp0"]},
    {"name": "list_separator", "symbols": ["ws", {"literal":","}, "ws"]},
    {"name": "text_line$ebnf$1", "symbols": [/[^\r\n]/]},
    {"name": "text_line$ebnf$1", "symbols": ["text_line$ebnf$1", /[^\r\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "text_line", "symbols": ["text_line$ebnf$1"], "postprocess": function(d) { return d[0].join(""); }},
    {"name": "text_block$ebnf$1", "symbols": [/[^}]/]},
    {"name": "text_block$ebnf$1", "symbols": ["text_block$ebnf$1", /[^}]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "text_block", "symbols": ["text_block$ebnf$1"], "postprocess": function(d) { return d[0].join("").trim(); }},
    {"name": "integer$ebnf$1", "symbols": []},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "integer", "symbols": [/[1-9]/, "integer$ebnf$1"], "postprocess": function(d) { return parseInt([d[0]].concat(d[1]).join("")) }},
    {"name": "roller", "symbols": ["ws", "die_roll", "ws"], "postprocess": function(d) { return d[1]; }},
    {"name": "die_roll", "symbols": ["integer", "die_divider", "integer"], "postprocess": function(d) { return generateRoller(d[0], d[2]) }},
    {"name": "die_roll", "symbols": ["die_divider", "integer"], "postprocess": function(d) { return function(c) { return rand(d[0]);} }},
    {"name": "die_divider$subexpression$1", "symbols": [/[dD]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "die_divider", "symbols": ["die_divider$subexpression$1"]}
]
  , ParserStart: "roller"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
