import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';

import MajorMinor from "components/Layout/MajorMinor/index.jsx";
import ContactInfo from "../ContactInfo/index.jsx";

import MiniHeader from "components/Layout/MiniHeader/index.jsx";
import InputTextArea from "components/Inputs/InputTextArea/index.jsx";

import styles from './index.style.scss';


// make split view for the
const ContactForm = ({ formMethods }) => (
  <div styleName="form">
    <div styleName="inputs">
      <div styleName="left">
        <MajorMinor orientation="vertical-reverse" major={() => <ContactInfo {...formMethods} />} minor={() => <MiniHeader>tell us about yourself</MiniHeader>}/>
      </div>
      <div styleName="right">
        <MajorMinor orientation="vertical-reverse" major={() => <InputTextArea {...formMethods} /> } minor={() => <MiniHeader>send a message...</MiniHeader> } />
      </div>
    </div>
    <button styleName="submit" {...formMethods}>
      <p>submit</p>
  </button>
  </div>
);

const ContactFormStyled = CSSModules(ContactForm, styles, {
  allowMultiple: true
});


export default ContactFormStyled;
