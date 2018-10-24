import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// import { Link } from 'react-router-dom';

import styles from './index.style.scss';

class AboutContent extends Component {
  render() {
    return (
      <div styleName="header">
        <div styleName="list">
          <ul>
            <li>name: Steve Novosel</li>
            <li>current location: Philadelphia</li>
            <li>current role: React Engineer</li>
          </ul>
        </div>
        <div styleName="bio">
          <p>I believe that software is a tool. A tool that can be used to improve the
           <b> efficiency</b> and <b>profit</b> of business. What makes software especially appealing is that
          it is entirely based upon <b>ideas</b>, rather than resources. With the power of <b>ideas</b>, software has tackled some of modern life's
          most common struggles. Buying things online has never been this easy. Neither has getting a ride, doing your taxes, keeping track of birthdays, events, and anniverseries.
          Budgeting can be done smoothly using beautiful and sleek user interfaces, and any movie or tv show ever filmed on earth (not to mention the millions upon millions of
          user-uploaded videos) can be accessed in a matter of minutes. Software is a tool,
          </p>
        </div>
      </div>
    );
  }
}

const AboutContentStyled = CSSModules(AboutContent, styles, {
  allowMultiple: true
});

export default AboutContentStyled;
