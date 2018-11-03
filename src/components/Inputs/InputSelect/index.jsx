import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

class InputSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    const { onChange, name } = this.props;

    this.setState({
      value
    });

    onChange(name, value);
  }

  render() {
    const { Icon, options, value } = this.props;

    if (Icon) {
      return (
        <div styleName="input">
          <span styleName="icon-container">
            <span styleName="icon"><Icon/></span>
          </span>
          <select styleName="select" value={this.state.value || ''} onChange={value => this.handleChange(value)}>
            <option value=''></option>
            <option styleName="option" disabled="disabled" value="value" >I want to...</option>
            {options.map(item => (
              <option styleName="option" key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div styleName="input">
        <select styleName="select" value={this.state.value || ''} onChange={value => this.handleChange(value)}>
          <option value=''></option>
          <option styleName="option" disabled="disabled" value="value" >I want to...</option>
          {options.map(item => (
            <option styleName="option" key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }

}

InputSelect.defaultProps = {
  placeholder: "",
  value: "",
}

const InputSelectStyled = CSSModules(InputSelect, styles, {allowMultiple: true});

export default InputSelectStyled;
