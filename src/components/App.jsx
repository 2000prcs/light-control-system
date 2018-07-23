import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Control from './Control.jsx';
import Display from './Display.jsx';
import Menu from './Menu.jsx';

// Sample data for testing without Light API
import { sampleData } from '../../public/lib/sampleData.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData,
      currentRoom: {},
      userData: {
        userName: 'Moyeong Lee',
      },
    };

    this.getRoomInfo = this.getRoomInfo.bind(this);
    this.getCurrentRoom = this.getCurrentRoom.bind(this);
    this.lightControl = this.lightControl.bind(this);
    this.getSwitchStatus = this.getSwitchStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Send GET request to server when the component is mounted
  componentDidMount() {
    this.getRoomInfo();
  }

  // Fetch room data from Light API
  getRoomInfo() {
    fetch('http://localhost:3000/api/v1/device')
      .then(response => response.json())
      .then((result) => {
        this.setState({ data: result.data });
      })
      .catch(errors => console.error(errors));
  }

  // Hightlight the room and display its controller when user selects the room
  getCurrentRoom(info) {
    this.setState({ currentRoom: info });
  }

  // Check if light switch is on or off
  getSwitchStatus(value) {
    const room = this.state.currentRoom;
    room.active = value;
    if (!value) {
      room.brightness = 0;
    }
    this.setState({ currentRoom: room });
  }

  // Change brightness value dynamically
  lightControl(value) {
    if (value === 0) {
      this.getSwitchStatus(false);
    }
    const room = this.state.currentRoom;
    room.brightness = Math.ceil(value);
    this.setState({ currentRoom: room });
  }

  // Change room name as user types
  handleChange(e) {
    const currentRoomNameNode = document.querySelector('.highlight a span b');
    if (currentRoomNameNode) {
      currentTableNameNode.innerText = e.target.value;
    }
    const room = this.state.currentRoom;
    room.name = e.target.value;
    this.setState({ currentRoom: room });
  }

  render() {
    const { data, currentRoom, userData } = this.state;

    return (
      <div className="container">
        <Nav userData={userData} />
        <Menu room={currentRoom} handleChange={this.handleChange} />
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
