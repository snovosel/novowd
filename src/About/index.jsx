import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import AboutContent from "./AboutContent/index.jsx";

import MajorHeader from "Layout/MajorHeader/index.jsx";

import styles from "./index.style.scss";

export class About extends Component {
  render() {
    return (
      <div styleName="about">
        <MajorHeader>About</MajorHeader>
        <AboutContent />
      </div>
    );
  }
}

const AboutStyled = CSSModules(About, styles);

export default AboutStyled;
