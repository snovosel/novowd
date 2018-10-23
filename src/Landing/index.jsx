import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCount } from './ducks.js';
import { bindActionCreators } from 'redux';

import Card from "Blocks/Card/index.jsx";

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
      <div styleName="landing-container">
        <Card styleType="small" />
        <Card styleType="small" />
        <Card styleType="small" />
      </div>
    );
  }
}

const LandingStyled = CSSModules(Landing, styles);

export default connect(mapStateToProps, mapDispatchToProps)(LandingStyled);
