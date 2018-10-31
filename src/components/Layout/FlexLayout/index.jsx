import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class FlexLayout extends Component {
  constructor(props) {
    super(props);

    this.getStyle = this.getStyle.bind(this);
  }

  getStyle() {
    const { orientation } = this.props;

    return orientation;
  }

  render() {
    return (
      <div styleName={this.getStyle()}>
        {this.props.children}
      </div>
    );
  }
}

FlexLayout.defaultProps = {
  orientation: 'row'
};

const FlexLayoutStyled = CSSModules(FlexLayout, styles, {
  allowMultiple: true,
});

export default FlexLayoutStyled;
