import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import MajorMinor from "components/Layout/MajorMinor/index.jsx";
import ContactInfo from "../ContactInfo/index.jsx";
import MiniHeader from "components/Layout/MiniHeader/index.jsx";
import InputTextArea from "components/Inputs/InputTextArea/index.jsx";

import styles from './index.style.scss';

class ContactForm extends Component {

  render() {
    return (
      <div styleName="form">
        <div styleName="inputs">
          <div styleName="left">
            <MajorMinor orientation="vertical-reverse" major={() => <ContactInfo onSubmit={values => this.handleSubmit(values)}/>} minor={() => <MiniHeader>tell us about yourself</MiniHeader>}/>
          </div>
          <div styleName="right">
            <MajorMinor orientation="vertical-reverse" major={() => <InputTextArea/>} minor={() => <MiniHeader>send a message...</MiniHeader>}/>
          </div>
        </div>
        <button styleName="submit">
          <p>submit</p>
        </button>
      </div>
    );
  }

}

const ContactFormStyled = CSSModules(ContactForm, styles, {
  allowMultiple: true
});


export default ContactFormStyled;
