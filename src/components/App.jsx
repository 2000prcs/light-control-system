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
      currentRoom: {},
    };

    this.getRoomInfo = this.getRoomInfo.bind(this);
    this.selectRoom = this.selectRoom.bind(this);
  }

  // Send GET request to server when the component is mounted
  componentDidMount() {
    this.getRoomInfo();
  }

  // Get room data from Light API
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

  // Hightlight the room and displays its controller when user selects the room
  selectRoom(info) {
    console.log(info);
    this.setState({ currentRoom: info });
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
            <Control roomData={this.state.data} selectRoom={this.selectRoom} />
          </div>
          <div className="display">
            <Display room={this.state.currentRoom} />
          </div>
        </div>
      </div>
    );
  }
}
