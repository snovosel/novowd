import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const InputText = ({ Icon, name, value, onChange }) => {
  if (Icon) {
    return (
      <div styleName="input">
        <span styleName="icon-container"><span styleName="icon"><Icon /></span></span>
        <input type="text" value={value} onChange={e => onChange(name, e.target.value)} />
      </div>
    );
  }

  return (
    <div styleName="input">
      <input type="text" onChange={(name, e) => onChange(name, e.target.value)} />
    </div>
  );
}

InputText.defaultProps = {
  placeholder: "",
  value: "",
}

const InputTextStyled = CSSModules(InputText, styles, {
  allowMultiple: true,
});

export default InputTextStyled;
