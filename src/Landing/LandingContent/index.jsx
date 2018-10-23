import React from 'react';
import CSSModules from 'react-css-modules';
import Card from "Blocks/Card/index.jsx";
// import { Link } from 'react-router-dom';

import styles from './index.style.scss';

const menuOptions = [
  {
    title: 'About',
    icon: '',
  },
  {
    title: 'Projects',
    icon: '',
  },
  {
    title: 'Contact',
    icon: '',
  }
];

const LandingContent = () => (
  <div styleName="landing-content-container">
    <div styleName="header">
      <p>Self-taught web developer specializing from ReactJs to Nginx</p>
    </div>
    <div styleName="menu-options">
      {menuOptions.map(option => (
        <div styleName="landing-item">
          <Card />
        </div>
      ))}
    </div>
  </div>
);

const LandingContentStyled = CSSModules(LandingContent, styles, {
  allowMultiple: true
});

export default LandingContentStyled;
