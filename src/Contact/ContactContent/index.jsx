import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import * as emailjs from 'emailjs-com';

import {Link} from 'react-router-dom';
import ContactInfo from "../ContactInfo/index.jsx";
import MiniHeader from "components/Layout/MiniHeader/index.jsx";
import Block from "components/Blocks/Block/index.jsx";
import MajorMinor from "components/Layout/MajorMinor/index.jsx";
import InputTextArea from "components/Inputs/InputTextArea/index.jsx";
import {FaArrowLeft} from 'react-icons/fa';

import styles from './index.style.scss';

class ContactContent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

    // var templateParams = {
    //   name: 'James',
    //   notes: 'Check this out!'
    // };
    //
    // emailjs.send('default_service' , "novowd", templateParams, 'user_HiT7OHmdE0PQD1vcLXya0').then(function(response) {
    //   console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //   console.log('FAILED...', error);
    // });
  }

  render() {
    return (<div styleName="content">
      <div styleName="top">
        <Link to="/">
          <div styleName="back">
            <FaArrowLeft size="40" color="#74b4be"/>
          </div>
        </Link>
        <div styleName="header">
          <p>send me a message, ask a question, or find out more about what I can offer you and your
            <b>ideas</b>.</p>
        </div>
      </div>
      <div styleName="bottom">
        <div styleName="form">
          <div styleName="inputs">
            <Block orientation="third-horizontal">
              <div styleName="left">
                <MajorMinor orientation="vertical-reverse" major={() => <ContactInfo onSubmit={values => this.handleSubmit(values)}/>} minor={() => <MiniHeader>tell us about yourself</MiniHeader>}/>
              </div>
              <div styleName="right">
                <MajorMinor orientation="vertical-reverse" major={() => <InputTextArea/>} minor={() => <MiniHeader>send a message...</MiniHeader>}/>
              </div>
            </Block>
          </div>
          <button styleName="submit">
            <p>submit</p>
          </button>
        </div>
      </div>
      <div styleName="buffer"/>
    </div>);
  }
}

const ContactContentStyled = CSSModules(ContactContent, styles, {allowMultiple: true});

export default ContactContentStyled;
