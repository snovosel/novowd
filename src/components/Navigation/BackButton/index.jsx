import React from 'react';
import CSSModules from 'react-css-modules';
import {Link} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';

import styles from './index.style.scss';

const BackButton = () => (
  <Link to="/">
    <div styleName="back">
      <FaArrowLeft size="40" color="#74b4be"/>
    </div>
  </Link>
);

const BackButtonStyled = CSSModules(BackButton, styles);

export default BackButtonStyled;
