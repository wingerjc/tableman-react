import peg from 'pegjs';
const TEMPLATE_PARSER_STRING = `
start
  = template_list

begin_block = ws "{" ws
end_block = ws "}" ws
begin_params = ws "(" ws
end_params = ws ")" ws
list_divider = ws "," ws
template_keyword = "template"i ws

template_list
  = ws t:template ws { return [t]; }
  / tl:(ws t:template { return t; })+ ws { return tl; }

template
  = template_keyword name:identifier params:param_list begin_block body:text end_block
  {
    return {
      name: name,
      params: params,
      body: body,
    };
  }

param_list
  = begin_params list:(
    head:variableIdentifier
    tail:(list_divider v:variableIdentifier { return v; })*
    { return [head].concat(tail); }
  )? end_params
  { return (list !== null)? list : []; }

text
  = text:[^}]* { return text.join(""); }

variableIdentifier
  = "@" name:identifier { return "@" + name; }

identifier
  = head:[a-zA-Z] tail:[a-zA-Z0-9_]* { return head + tail.join(""); }

ws
  = [ \\t\\n\\r]*

sp
  = [ ]+
`;

const TemplateParser = peg.generate(TEMPLATE_PARSER_STRING);

export default TemplateParser;
