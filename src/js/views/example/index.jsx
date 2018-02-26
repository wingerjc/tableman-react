import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as exampleActions } from '../../redux/modules/example';
import { exampleSelector } from '../../redux/selectors/exampleSelector';
import { Example, ExampleWithError } from '../../common/components/Example';
import { ErrorBoundary } from '../../common/components/Utilities';
import TableParser from '../../common/parsers/TableParser';
import TemplateParser from '../../common/parsers/TemplateParser';

require('../../../style/index.css');

const mapStateToProps = state => ({
  example: exampleSelector(state),
});

const mapDispatchToProps = {
  ...exampleActions,
};

const templateTmp = `
template foo {
twas brillig and the slithy toves.
}
`
const templateExample = `
template hello(@name, @time) {
Hello @name, good @time!
}
`;


@connect(mapStateToProps, mapDispatchToProps)
class ExampleView extends Component {

  replaceVariables(templates, name, variables) {
      let t = templates.filter((tpl) => tpl.name === name)[0];
      console.log(t);
      let result = t.body;
      for(let i = 0; i < variables.length; i++) {
        result = result.replace(new RegExp(t.params[i], 'g'), variables[i]);
      }
      return result;
  }

  componentDidMount() {
    this.props.getAwesomeCode();
  }

  render() {
    const template = templateExample
    let parsed = TemplateParser.parse(template);
    console.log(parsed);
    console.log(this.replaceVariables(parsed, "hello", ["Jaymes", "Evening"]));
    return (
      <Fragment>
        <div>Table Parser: <b>{ TableParser.parse("(3+7)*5") }</b></div>
        <div>Template Parser: <b>*{ TemplateParser.parse(template).apply }*</b></div>
        <Example {...this.props} />
        <ErrorBoundary>
          <ExampleWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

ExampleView.propTypes = {
  example: PropTypes.object.isRequired,
}

ExampleView.defaultProps = {
  example: {},
}

export default ExampleView;
