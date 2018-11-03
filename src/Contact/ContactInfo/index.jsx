import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { FaAt, FaHashtag, FaQuestion } from 'react-icons/fa';

import InputText from "components/Inputs/InputText/index.jsx";
import InputSelect from "components/Inputs/InputSelect/index.jsx";

import styles from './index.style.scss';

class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      phone: "",
      strategy: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type, value) {
    this.setState({
      [type]: value
    });
  }

  render() {
    return (
      <div styleName="input-container">
        <InputText Icon={FaAt} value={this.state.email} name="email" onChange={this.props.onChange}  />
        <InputText Icon={FaHashtag} value={this.state.phone} name="phone" onChange={this.handleChange} />
        <InputSelect options={["win", "learn"]} Icon={FaQuestion} name="strategy" value={this.state.strategy} onChange={this.handleChange} />
      </div>
    );
  }
}

const ContactInfoStyled = CSSModules(ContactInfo, styles, {
  allowMultiple: true,
});

export default ContactInfoStyled;
