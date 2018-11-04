import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from "./index.style.scss";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      formValues: {}
    };

    this.getFormMethods = this.getFormMethods.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  getFormMethods() {
    return {
      formMethods: {
        onSubmit: this.handleFormSubmit,
        onChange: this.handleFormChange,
      }
    };
  }

  handleFormChange(name, value) {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    });
  }

  handleFormSubmit(value) {
    const { submit } = this.props;

    if (this.props.submit) {
      submit(this.state.formValues);
    }
    return this.state.formValues;
  }

  render() {
    return (
      <div styleName="form-container">
        {this.props.children({
          ...this.getFormMethods(),
          ...this.state
        })}
      </div>
    );
  }
}

const FormStyled = CSSModules(Form, styles, {
  allowMultiple: true
});

export default FormStyled;
