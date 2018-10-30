// Generated automatically by nearley, version 2.11.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require('moo');

const lexer = moo.compile({
  WS: /[ \t]+?/,
  eol: { match: /\r?\n/, lineBreaks: true },
  comment: /#.*?$/,
  open_paren: /\(/,
  close_paren: /\)/,
  open_block: /{/,
  close_block: /}/,
  list_separator: /,/,
  variable_identifier: /@[a-z][a-zA-Z_0-9]*/,
  header_separator: /:/,
  identifier: /[a-z][a-zA-Z_0-9]*/,
  integer: /[1-9][0-9]*/,
});

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "ws$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ws$ebnf$1$subexpression$1", "symbols": [(lexer.has("eol") ? {type: "eol"} : eol)]},
    {"name": "ws$ebnf$1", "symbols": ["ws$ebnf$1$subexpression$1"]},
    {"name": "ws$ebnf$1$subexpression$2", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ws$ebnf$1$subexpression$2", "symbols": [(lexer.has("eol") ? {type: "eol"} : eol)]},
    {"name": "ws$ebnf$1", "symbols": ["ws$ebnf$1", "ws$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ws", "symbols": ["ws$ebnf$1"]},
    {"name": "text_line$ebnf$1", "symbols": [/[^\r\n]/]},
    {"name": "text_line$ebnf$1", "symbols": ["text_line$ebnf$1", /[^\r\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "text_line", "symbols": ["text_line$ebnf$1"], "postprocess": function(d) { return d[0].join(""); }},
    {"name": "text_block$ebnf$1", "symbols": [/[^}]/]},
    {"name": "text_block$ebnf$1", "symbols": ["text_block$ebnf$1", /[^}]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "text_block", "symbols": ["text_block$ebnf$1"], "postprocess": function(d) { return d[0].join("").trim(); }}
]
  , ParserStart: "ws"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
