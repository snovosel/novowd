import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const StandardContent = ({ header, content, footer, extraStyles }) => {

  const renderFooter = () => {
    if (footer) {
      return (
        <div styleName="footer">
          {footer()}
        </div>
      );
    }
    return null;
  }
  return (
    <div styleName="container">
      <div styleName="header">
        {header()}
      </div>
      <div styleName="content">
        {content()}
      </div>
      {renderFooter()}
    </div>
  );
};

StandardContent.defaultProps = {
  header: () => (<Fragment />),
  content: () => (<Fragment />),
}

const StandardContentStyled = CSSModules(StandardContent, styles);

export default StandardContentStyled;
