import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class InputText extends Component {
  render() {
    const { placeholder, Icon } = this.props;

    if (Icon) {
      return (
        <div styleName="input">
          <span styleName="icon-container"><span styleName="icon"><Icon /></span></span>
          <input type="text" />
        </div>
      );
    }

    return (
      <div styleName="input">
        <input type="text" />
      </div>
    );
  }
}

InputText.defaultProps = {
  placeholder: ""
}

const InputTextStyled = CSSModules(InputText, styles, {
  allowMultiple: true,
});

export default InputTextStyled;
