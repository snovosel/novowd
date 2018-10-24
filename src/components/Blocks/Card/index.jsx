import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class Card extends Component {
  render() {
    const { styleType, color } = this.props;

    return (
      <div styleName={`card-container ${styleType}`} style={{backgroundColor: color}}>
        {this.props.children}
      </div>
    );
  }

}

Card.defaultProps = {
  styleType: 'medium solid',
  color: '#e5fff9'
};

const CardStyled = CSSModules(Card, styles, {
  allowMultiple: true,
});

export default CardStyled;
