import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import ContactContent from "./ContactContent/index.jsx";

import Header from "Layout/Header/index.jsx";

import styles from "./index.style.scss";

export class Contact extends Component {
  render() {
    return (
      <div styleName="contact">
        <Header title="Contact" />
        <ContactContent />
      </div>
    );
  }
}

const ContactStyled = CSSModules(Contact, styles);

export default ContactStyled;
