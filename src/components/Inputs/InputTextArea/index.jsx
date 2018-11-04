import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class InputTextArea extends Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div styleName="message-container">
        <textarea styleName="message" onChange={e => onChange(name, e.target.value)} />
      </div>
    );
  }
}

const InputTextAreaStyled = CSSModules(InputTextArea, styles, {
  allowMultiple: true,
});

export default InputTextAreaStyled;
