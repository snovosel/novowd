import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import ContactContent from "./ContactContent/index.jsx";

import MajorHeader from "Layout/MajorHeader/index.jsx";

import styles from "./index.style.scss";

export class Contact extends Component {
  render() {
    return (
      <div styleName="contact">
        <MajorHeader >Contact</MajorHeader>
        <ContactContent />
      </div>
    );
  }
}

const ContactStyled = CSSModules(Contact, styles);

export default ContactStyled;
