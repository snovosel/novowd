import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const InputGroup = ({ children, orientation }) => (
  <div styleName={`${orientation}`}>
    {children}
  </div>
);

const InputGroupStyled = CSSModules(InputGroup, styles, {
  allowMultiple: true,
});

export default InputGroupStyled;
