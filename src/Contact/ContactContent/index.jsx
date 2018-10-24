import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import { Link } from 'react-router-dom';
import Card from "Blocks/Card/index.jsx";
import { FaArrowLeft } from 'react-icons/fa';

import styles from './index.style.scss';

class ContactContent extends Component {
  render() {
    return (
      <div styleName="content">
        <Link to="/">
          <div styleName="back">
            <FaArrowLeft size="40" color="#74b4be"  />
          </div>
        </Link>
        <div styleName="header">
          <p>Send me a message, ask a question, or find out more about what I can offer you and your <b>ideas</b>.</p>
        </div>
        <Card
          styleType="tall-6 wide solid"
        >
        </Card>
      </div>
    );
  }
}


// <div styleName="contact-content-container">
  // <div styleName="header">
  //   <p>Self-taught web developer specializing from ReactJs to Nginx, and everything in between</p>
  // </div>
//   <div styleName="buffer" />
//   <div styleName="menu-options">
//
//   </div>
// </div>


const ContactContentStyled = CSSModules(ContactContent, styles, {
  allowMultiple: true
});

export default ContactContentStyled;
