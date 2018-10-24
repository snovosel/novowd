import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Card from "Blocks/Card/index.jsx";
import { Link } from 'react-router-dom';

import {
  FaChessPawn,
  FaCode,
  FaEnvelope
} from 'react-icons/fa';

import styles from './index.style.scss';

const menuOptions = [
  {
    title: 'About',
    Icon: ({color}) => <FaChessPawn size="130" color={color} />,
    path: '/about'
  },
  {
    title: 'Projects',
    Icon: ({color}) => <FaCode size="130" color={color} />,
    path: '/projects'
  },
  {
    title: 'Contact',
    Icon: ({color}) => <FaEnvelope size="130" color={color} />,
    path: '/contact'
  }
];

class LandingContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  handleMouseEnter(title) {
    this.setState({
      id: title,
    });
  }

  handleMouseLeave() {
    this.setState({
      id: null,
    });
  }

  renderIcon(IconComponent, title) {
    return (
      <IconComponent color={this.state.id === title ? "#b66363" : "#74b4be"} />
    );
  }

  render() {
    return (
      <div styleName="landing-content-container">
        <div styleName="header">
          <p>Self-taught web developer specializing from ReactJs to Nginx, and everything in between</p>
        </div>
        <div styleName="buffer" />
        <div styleName="menu-options">
          {menuOptions.map(({ Icon, title, path }) => (
            <div key={title} styleName={`menu-item`} onMouseEnter={() => this.handleMouseEnter(title)} onMouseLeave={() => {this.handleMouseLeave()}}>
              <Link to={path}>
                <Card
                  title={title}
                  color={this.state.id === title ? 'white' : '#e5fff9'}
                >
                  {this.renderIcon(Icon, title)}
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const LandingContentStyled = CSSModules(LandingContent, styles, {
  allowMultiple: true
});

export default LandingContentStyled;
