import React, {Component, Fragment} from 'react';
import CSSModules from 'react-css-modules';
import * as emailjs from 'emailjs-com';

import ContactForm from "../ContactForm/index.jsx";
import StandardContent from "components/Layout/StandardContent/index.jsx";
import MiniHeader from "components/Layout/MiniHeader/index.jsx";
import BackButton from "components/Navigation/BackButton/index.jsx";

import styles from './index.style.scss';

class ContactContent extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('test');
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
    return (
      <StandardContent
        header={() => (
          <Fragment>
            <BackButton />
            <MiniHeader>
              send me a message, ask a question, or find out more about what I can offer you and your <b>ideas</b>.
            </MiniHeader>
          </Fragment>
        )}
        content={() => <ContactForm onSubmit={this.handleSubmit} />}
      />
    );
  }
}

const ContactContentStyled = CSSModules(ContactContent, styles, {allowMultiple: true});

export default ContactContentStyled;
