import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
import Nav from './Nav.jsx';
import Control from './Control.jsx';
import Display from './Display.jsx';
import Menu from './Menu.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentRoom: {},
    };

    this.getRoomInfo = this.getRoomInfo.bind(this);
    this.getCurrentRoom = this.getCurrentRoom.bind(this);
    this.lightControl = this.lightControl.bind(this);
    this.getSwitchStatus = this.getSwitchStatus.bind(this);
  }

  // Send GET request to server when the component is mounted
  componentDidMount() {
    this.getRoomInfo();
  }

  // Get room data from Light API
  getRoomInfo() {
    fetch('http://localhost:3000/api/v1/device')
      .then(response => response.json())
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch(errors => console.error(errors));
  }

  // Hightlight the room and displays its controller when user selects the room
  getCurrentRoom(info) {
    this.setState({ currentRoom: info });
  }

  // Change brightness value dynamically
  lightControl(value) {
    const room = this.state.currentRoom;
    room.brightness = Math.ceil(value);
    this.setState({ currentRoom: room });
  }

  // Check if light switch is on or off
  getSwitchStatus(value) {
    const room = this.state.currentRoom;
    room.active = value;
    if (value) {
      this.setState({ currentRoom: room });
    } else {
      room.brightness = 0;
      this.setState({ currentRoom: room });
    }
  }

  render() {
    const { data, currentRoom } = this.state;

    return (
      <div className="container">
        <Nav />
        <Menu room={currentRoom} />
        <div className="main">
          <div className="control">
            <Control room={data} getCurrentRoom={this.getCurrentRoom} getSwitchStatus={this.getSwitchStatus} />
          </div>
          <div className="display">
            <Display room={currentRoom} lightControl={this.lightControl} />
          </div>
        </div>
      </div>
    );
  }
}
