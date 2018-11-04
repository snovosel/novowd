import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import * as emailjs from 'emailjs-com';

import StandardContent from "components/Layout/StandardContent/index.jsx";
import NavHeader from "components/Navigation/NavHeader/index.jsx";
import Form from "components/Inputs/Form/index.jsx";
import ContactForm from "../ContactForm/index.jsx";

import styles from './index.style.scss';

class ContactContent extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log('values', values);
    emailjs.send('default_service', "novowd", values, 'user_HiT7OHmdE0PQD1vcLXya0').then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
  }

  render() {
    return (
      <StandardContent
        header={() => (
          <NavHeader copy="send me a message, ask a question, or find out more about what I can offer you and your ideas."/>
        )}
        content={() => (
          <Form submit={this.handleSubmit}>
            {(formProps) => <ContactForm {...formProps}/>}
          </Form>
        )}
      />
    );
  }
}

const ContactContentStyled = CSSModules(ContactContent, styles, {allowMultiple: true});

export default ContactContentStyled;
