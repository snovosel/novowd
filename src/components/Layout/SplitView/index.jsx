import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const SplitView = ({ children, orientation}) => (
  <div styleName={`split-${orientation}`}>
    {children}
  </div>
);

const SplitViewStyled = CSSModules(SplitView, styles);

export default SplitViewStyled;
