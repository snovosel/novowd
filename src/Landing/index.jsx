import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { addCount } from './ducks.js';
import { bindActionCreators } from 'redux';

import LandingContent from "./LandingContent/index.jsx";

import MajorHeader from "Layout/MajorHeader/index.jsx";

import styles from "./index.style.scss";

const mapStateToProps = ({
  landing: {
    count,
  }
}) => ({
  count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCount,
    },
    dispatch
  );

export class Landing extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addCount();
  }

  render() {
    return (
      <div styleName="landing">
        <MajorHeader >Steve Novosel</MajorHeader>
        <LandingContent />
      </div>
    );
  }
}

const LandingStyled = CSSModules(Landing, styles);

export default connect(mapStateToProps, mapDispatchToProps)(LandingStyled);
