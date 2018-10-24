import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom';

import Landing from 'Landing/index.jsx';
import About from 'About/index.jsx';
import Contact from 'Contact/index.jsx';
import ComponentLibrary from './components';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div styleName="app-container">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/components" component={ComponentLibrary} />
        </Switch>
      </div>
    );
  }
}

export default CSSModules(App, styles);
