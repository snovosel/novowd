import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import { Link } from 'react-router-dom';
// import Card from "Blocks/Card/index.jsx";
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
        <div styleName="form">
          <div styleName="inputs">
            <div styleName="left">
              <div styleName="left-container">
                <div styleName="input">
                  <input type="text" placeholder="email" />
                </div>
                <div styleName="input">
                  <input type="text" placeholder="phone" />
                </div>
                <div styleName="input">
                  <input type="text" placeholder="what is your idea" />
                </div>
              </div>
            </div>
            <div styleName="right">
              <div styleName="message" contenteditable="true">
                <p styleName="text">send us a message...</p>
              </div>
            </div>
          </div>
          <button styleName="submit">
            <p>submit</p>
          </button>
        </div>
      </div>
    );
  }
}




const ContactContentStyled = CSSModules(ContactContent, styles, {
  allowMultiple: true
});

export default ContactContentStyled;
