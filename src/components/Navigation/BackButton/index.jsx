import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import {Link} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';

import styles from './index.style.scss';

class BackButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "40",
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 700) {
      this.setState({
        size: "25",
      });
    }
  }

  render() {
    return (
      <Link to="/">
        <div styleName="back">
          <FaArrowLeft size={this.state.size} color="#74b4be"/>
        </div>
      </Link>
    );
  }
}

const BackButtonStyled = CSSModules(BackButton, styles);

export default BackButtonStyled;
