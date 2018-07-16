import React, { Component } from 'react';
import { Button, Provider } from 'rendition';



export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="menu">
        <Button m={2} tertiary square >
          <i className="fas fa-home"></i>
        </Button>
        <Button w={80} m={2} tertiary >
          <i className="fas fa-angle-left"></i>
          <span>Back</span>
        </Button>
        <span>
          <i class="far fa-lightbulb"></i>
          Lighting
        </span>
        <span>
          {this.props.room.name}
        </span>
      </div>
    );
  }
}
