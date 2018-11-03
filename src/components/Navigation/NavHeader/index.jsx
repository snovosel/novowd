import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

import BackButton from "components/Navigation/BackButton/index.jsx";
import MiniHeader from "components/Layout/MiniHeader/index.jsx";

const NavHeader = ({ copy }) => (
  <Fragment>
    <BackButton />
    <MiniHeader>
      {copy}
    </MiniHeader>
  </Fragment>
);

const NavHeaderStyled = CSSModules(NavHeader, styles);

export default NavHeaderStyled;
