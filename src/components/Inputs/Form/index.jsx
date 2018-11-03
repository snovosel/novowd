import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from "./index.style.scss";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state  = {};

    this.getFormMethods = this.getFormMethods.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  getFormMethods() {
    return {
      onSubmit: this.handleFormSubmit,
      onChange: this.handleFormChange,
    };
  }

  handleFormChange(value) {
    console.log('change', value);
  }

  handleFormSubmit(value) {
    console.log('submit', value);
  }

  render() {
    return (
      <div styleName="form-container">
        {this.props.children({...this.getFormMethods()})}
      </div>
    );
  }
}

const FormStyled = CSSModules(Form, styles, {
  allowMultiple: true
});

export default FormStyled;
