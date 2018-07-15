import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Control from './Control.jsx';
import Display from './Display.jsx';
import Menu from './Menu.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.getRoomInfo = this.getRoomInfo.bind(this);
  }

  componentDidMount() {
    this.getRoomInfo();
  }


  getRoomInfo() {
    fetch('http://localhost:3000/api/v1/device')
      .then((response) => {
        console.log('Data received');
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ data });
      })
      .catch(errors => console.error(errors));
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
            <Control roomData={this.state.data} />
          </div>
          <div className="display">
            <Display />
          </div>
        </div>
      </div>
    );
  }
}
