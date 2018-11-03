import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const MiniHeader = (props) => (
  <div styleName="mini-header">
    <p>{props.children}</p>
  </div>
);

const MiniHeaderStyled = CSSModules(MiniHeader, styles);

export default MiniHeaderStyled;
