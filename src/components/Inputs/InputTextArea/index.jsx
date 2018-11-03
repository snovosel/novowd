import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class InputTextArea extends Component {
  render() {
    return (
      <div styleName="message-container">
        <div styleName="message" contentEditable="true" />
      </div>
    );
  }
}

const InputTextAreaStyled = CSSModules(InputTextArea, styles, {
  allowMultiple: true,
});

export default InputTextAreaStyled;
