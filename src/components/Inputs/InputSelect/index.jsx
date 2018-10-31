import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class InputSelect extends Component {
  render() {
    const { Icon, options} = this.props;

    if (Icon) {
      return (
        <div styleName="input">
          <span styleName="icon-container">
            <span styleName="icon"><Icon/></span>
          </span>
          <select styleName="select">
            <option disabled="disabled" selected default="default" value="value" hidden />
            <option styleName="option" disabled="disabled" value="value" >I want to...</option>
            {options.map(item => (
              <option styleName="option" key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div styleName="input">
        <select styleName="select">
          <option disabled="disabled" selected default="default" value="value" hidden/>
          <option styleName="option" disabled="disabled" value="value" >I want to...</option>
          {options.map(item => (
            <option styleName="option" key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}

InputSelect.defaultProps = {
  placeholder: ""
}

const InputSelectStyled = CSSModules(InputSelect, styles, {allowMultiple: true});

export default InputSelectStyled;
