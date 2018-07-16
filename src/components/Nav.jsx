import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav">
        <div>
          Date
        </div>
        <div>
          Time
        </div>
        <div>
          Name
        </div>
      </div>
    );
  }
}
