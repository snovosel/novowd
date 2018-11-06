import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from "./index.style.scss";

class MajorMinor extends Component {
  constructor(props) {
    super(props);


    this.renderMinor = this.renderMinor.bind(this);
    this.renderMajor = this.renderMajor.bind(this);
  }

  renderMajor() {
    return (
      <div styleName="major">
        {this.props.major()}
      </div>
    )
  }

  renderMinor() {
    return (
      <div styleName="minor">
        {this.props.minor()}
      </div>
    )
  }

  render() {
    const { orientation } = this.props;
    return (
      <div styleName={`container-${orientation}`}>
        {this.renderMajor()}
        {this.renderMinor()}
      </div>
    );
  }
}

const MajorMinorStyled = CSSModules(MajorMinor, styles, {
  allowMultiple: true,
});

export default MajorMinorStyled;
