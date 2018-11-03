import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const StandardContent = ({ header, content, footer }) => {
  return (
    <div styleName="container">
      <div styleName="header">
        {header()}
      </div>
      <div styleName="content">
        {content()}
      </div>
      <div styleName="footer">
        {footer()}
      </div>
    </div>
  )
};

StandardContent.defaultProps = {
  header: () => (<Fragment />),
  content: () => (<Fragment />),
  footer: () => (<Fragment />)
}

const StandardContentStyled = CSSModules(StandardContent, styles);

export default StandardContentStyled;
