import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class Block extends Component {
  render() {
    const { orientation } = this.props;

    return (
      <div
        styleName={orientation}
      >
        {this.props.children}
      </div>
    );
  }
}

Block.defaultProps = {
  orientation: 'row',
  ratio: [1, 1],
};

const BlockStyled = CSSModules(Block, styles, {
  allowMultiple: true,
});

export default BlockStyled;
