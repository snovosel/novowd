import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import { Link } from 'react-router-dom';
// import Card from "Blocks/Card/index.jsx";
import { FaArrowLeft, FaAt, FaHashtag, FaQuestion } from 'react-icons/fa';

import styles from './index.style.scss';

class ContactContent extends Component {
  render() {
    return (
      <div styleName="content">
        <div styleName="top">
          <Link to="/">
            <div styleName="back">
              <FaArrowLeft size="40" color="#74b4be"  />
            </div>
          </Link>
          <div styleName="header">
            <p>Send me a message, ask a question, or find out more about what I can offer you and your <b>ideas</b>.</p>
          </div>
        </div>
        <div styleName="bottom">
          <div styleName="form">
            <div styleName="inputs">
              <div styleName="left">
                <div styleName="left-container">
                  <div styleName="contact-header"><p>tell us about yourself</p></div>
                  <div styleName="input-container">
                    <div styleName="input">
                      <span styleName="icon-container"><span styleName="icon"><FaAt /></span></span>
                      <input type="text" />
                    </div>
                    <div styleName="input">
                      <span styleName="icon-container"><span styleName="icon"><FaHashtag /></span></span>
                      <input type="text" />
                    </div>
                    <div styleName="input">
                      <span styleName="icon-container"><span styleName="icon"><FaQuestion /></span></span>
                      <select styleName="select">
                        <option styleName="option" disabled selected value />
                        <option styleName="option" value="I have an idea">I have an idea</option>
                        <option styleName="option" value="I want to learn how to code">I want to learn how to code</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div styleName="right">
                <div styleName="right-container">
                  <div styleName="message-header"><p>send a message...</p></div>
                  <div styleName="message-container">
                    <div styleName="message" contentEditable="true" />
                  </div>
                </div>
              </div>
            </div>
            <button styleName="submit">
              <p>submit</p>
            </button>
          </div>
        </div>
        <div styleName="buffer" />
      </div>
    );
  }
}


const ContactContentStyled = CSSModules(ContactContent, styles, {
  allowMultiple: true
});

export default ContactContentStyled;
