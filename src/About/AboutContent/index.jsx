import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

import Bio from "./Bio/index.jsx";

import { FaArrowLeft, FaChessPawn } from 'react-icons/fa';

import styles from './index.style.scss';

class AboutContent extends Component {
  render() {
    return (
      <div styleName="content">
        <div styleName="back">
          <Link to="/">
            <FaArrowLeft size="40" color="#74b4be"  />
          </Link>
        </div>
        <div styleName="fixed">
          <FaChessPawn size="700" color="#74b4be" />
        </div>
        <div styleName="scroll">
          <Bio />
        </div>
      </div>
    );
  }
}

const AboutContentStyled = CSSModules(AboutContent, styles, {
  allowMultiple: true
});

export default AboutContentStyled;
