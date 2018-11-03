import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const MajorHeader = (props) => (
  <div styleName="major-header">
    <p styleName="title">{props.children}</p>
  </div>
);

const MajorHeaderStyled = CSSModules(MajorHeader, styles);

export default MajorHeaderStyled;
