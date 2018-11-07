import React, {Fragment} from 'react';
import CSSModules from 'react-css-modules';

import BackButton from "components/Navigation/BackButton/index.jsx";
import MiniHeader from "components/Layout/MiniHeader/index.jsx";

import styles from './index.style.scss';

const NavHeader = ({copy}) => (
  <Fragment>
    <BackButton/>
    <div styleName="header">
      <MiniHeader>
        {copy}
      </MiniHeader>
    </div>
  </Fragment>
);

NavHeader.defaultProps = {
  copy: ""
};

const NavHeaderStyled = CSSModules(NavHeader, styles);

export default NavHeaderStyled;
