import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

const Header = ({ title }) => (
  <header styleName="header-container">
    <p styleName="title">{title}</p>
  </header>
);

const HeaderStyled = CSSModules(Header, styles);

export default HeaderStyled;
