import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class Card extends Component {

  render() {
    const { styleType } = this.props;

    return (
      <div styleName={`card-container ${styleType}`} ></div>
    );
  }

}

Card.defaultProps = {
  styleType: 'medium solid',
};

const CardStyled = CSSModules(Card, styles, {
  allowMultiple: true,
});

export default CardStyled;
