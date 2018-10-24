import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import AboutContent from "./AboutContent/index.jsx";

import Header from "Layout/Header/index.jsx";

import styles from "./index.style.scss";

export class About extends Component {
  render() {
    return (
      <div styleName="about">
        <Header styleType="" title="About" />
        <AboutContent />
      </div>
    );
  }
}

const AboutStyled = CSSModules(About, styles);

export default AboutStyled;
