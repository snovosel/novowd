import React from 'react';
import CSSModules from "react-css-modules";
import { Link } from 'react-router-dom';

import styles from './index.style.scss';

const Bio = () => (
  <div styleName="info">

  </div>
);

const BioStyled = CSSModules(Bio, styles, {
  allowMultiple: true,
});

export default BioStyled;


// <div styleName="list">
//   <ul>
//     <li>name: steve novosel</li>
//     <li>current location: philadelphia</li>
//     <li>current role: react engineer</li>
//   </ul>
// </div>
// <div styleName="bio">
//   <p>I believe that software is a tool. A tool that can be used to improve the
//   <b> efficiency</b> and <b>profit</b> of business. What makes software especially appealing is that
//   it is entirely based upon <b>ideas</b>, rather than resources.
//   With the power of <b>ideas</b>, software has tackled some of modern life's
//   most common inconveniences, connecting the world and everything in it through digital spaces accessed
//   from the comfort of the consumer's home.
//   Buying things has never been easier. Neither has finding and getting quick transportation to anywhere in the world,
//   doing taxes, keeping track of birthdays, events, and anniverseries.
//   Budgeting can be done smoothly using beautiful and sleek user interfaces, and any movie or tv show
//   ever filmed on earth (not to mention the millions upon millions of
//   user-uploaded videos) can be found and watched in a matter of minutes.
//   What all of these have in common is that they were accomplished using the power of software -
//   a tool that is entirely based upon <b>ideas</b>.
//   <br /><br />
//   I have chosen to focus my career on developing and implementing this tool, making it my craft to supply
//   the solutions for whatever the problem-of-the-day may be. I enjoy the collaboration aspect of software development,
//   using two minds to create something never done before, experimenting and exploring the possibilities of abstraction.
//   I'm driven by curiosity, creativity, a quest for maximum efficiency,
//   and my goal is to use my tool to bring your <b>ideas</b> to the world.
//   <br /><br />
//   Whether your <b>idea</b> is to dominate the market with a breakthrough invention, manage your business operations more <b>efficiently </b>
//   and maximize <b>profits</b>, or learn and master the tool of software yourself, I can help you. Head over to the <Link to="/contact" styleName="contact">contact</Link> page to get in touch
//   and get started turning your <b>idea</b> into a <b>reality</b>.
//   </p>
// </div>
