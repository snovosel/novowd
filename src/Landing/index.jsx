import React, { Component } from 'react';
// import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCount } from './ducks.js';
import { bindActionCreators } from 'redux';

import Card from "Blocks/Card/index.jsx";

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
      <Card />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
