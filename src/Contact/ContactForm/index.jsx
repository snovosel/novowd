import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';
import { FaAt, FaHashtag, FaQuestion } from 'react-icons/fa';

import MajorMinor from "components/Layout/MajorMinor/index.jsx";
import MiniHeader from "components/Layout/MiniHeader/index.jsx";
import InputTextArea from "components/Inputs/InputTextArea/index.jsx";
import InputText from "components/Inputs/InputText/index.jsx";
import InputSelect from "components/Inputs/InputSelect/index.jsx";

import styles from './index.style.scss';

const ContactForm = ({ formMethods: { onChange, onSubmit }, formValues }) => (
  <div styleName="form">
    <div styleName="inputs">
      <div styleName="left">
        <MajorMinor
          orientation="vertical-reverse"
          minor={() => <MiniHeader>tell us about yourself</MiniHeader>}
          major={() => (
            <Fragment>
              <InputText Icon={FaAt} value={formValues.email || ""} name="email" onChange={onChange}  />
              <InputText Icon={FaHashtag} value={formValues.phone || ""} name="phone" onChange={onChange} />
              <InputSelect options={["win", "learn"]} Icon={FaQuestion} name="strategy" value={formValues.strategy || ""} onChange={onChange} />
            </Fragment>
          )}
        />
      </div>
      <div styleName="right">
        <MajorMinor
          orientation="vertical-reverse"
          minor={() => <MiniHeader>send a message...</MiniHeader> }
          major={() => <InputTextArea name="message" value={formValues.message || ""} onChange={onChange} /> }
        />
      </div>
    </div>
    <button styleName="submit" onChange={onChange} onClick={onSubmit} >
      <p>submit</p>
    </button>
</div>
);

const ContactFormStyled = CSSModules(ContactForm, styles, {
  allowMultiple: true
});


export default ContactFormStyled;
