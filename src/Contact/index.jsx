import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class Contact extends Component {
  render() {
    return (
      <div>contact page</div>
    );
  }

}

const ContactStyled = CSSModules(Contact, styles, {
  allowMultiple: true,
});

export default ContactStyled;
