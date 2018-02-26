@include "./util.ne"

main -> template_list {% id %}

template_list ->
    ws template ws {% function(d) { return d[2]; } %}
  | template_list_part:+ ws template ws {%
      function(d) { return d[0].concat(d[2]); }
    %}

template_list_part -> ws template {% function(d) { return d[1]; } %}

template -> template_keyword sp identifier sp0 parameter_list ws
  open_block text_block close_block
  {%
    function(d) {
      return {
        name: d[2],
        params: d[4],
        body: d[7],
      }
    }
  %}

parameter_list ->
    open_param close_param {% function(d) { return []; } %}
  | open_param ws variable_identifier ws close_param {% function(d) { return [d[2]]; } %}
  | open_param ws variable_identifier parameter_list_part:+ ws close_param
    {% function(d) { return [d[2]].concat(d[3]); } %}

parameter_list_part -> list_separator variable_identifier
  {% function(d) { return d[1]; } %}

template_keyword -> "template"i
