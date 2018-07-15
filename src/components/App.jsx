import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Control from './Control.jsx';
import Display from './Display.jsx';
import Menu from './Menu.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="nav">
          <Nav />
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div className="main">
          <div className="control">
            <Control />
          </div>
          <div className="display">
            <Display />
          </div>
        </div>
      </div>
    );
  }
}
