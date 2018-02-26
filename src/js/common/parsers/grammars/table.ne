@include "./util.ne"
@include "./rollers.ne"

main -> table_list {% id %}

table_list -> (ws table {% (d) => d[1] %}):+ ws {% (d) => d[0] %}

table -> open_block ws table_headers close_block
  {% (d) => { return { headers: d[2] } } %}

table_headers -> table_header:* {% id %}

table_header -> header_title header_separator text_line eol
  {% (d) => { return { title: d[0], text: d[2] }; } %}

header_title -> header_prefix identifier {% (d) => d[0] + d[1] %}

header_prefix -> "header-" {% id %}
