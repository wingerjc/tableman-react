

identifier -> [a-zA-Z] [a-zA-Z_0-9]:+
  {% function(d) { return d[0] + d[1].join(""); } %}

variable_identifier -> "@" identifier {% function(d) { return d[0] + d[1]; } %}

ws -> [ \n\t\r]:*
sp -> [ ]:+
sp0 -> [ ]:*
eol -> "\r":? "\n"

open_param -> "("
close_param -> ")"
open_block -> "{"
close_block -> "}"

header_separator -> sp0 ":" sp0
list_separator -> ws "," ws

text_line -> [^\r\n]:+ {% function(d) { return d[0].join(""); } %}
text_block -> [^}]:+ {% function(d) { return d[0].join("").trim(); }%}

integer -> [1-9] [0-9]:* {% function(d) { return parseInt([d[0]].concat(d[1]).join("")) } %}
