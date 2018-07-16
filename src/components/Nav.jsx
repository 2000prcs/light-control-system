import React, { Component } from 'react';

// const moment = require('moment');

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'Sunday 15 July, 2018',
      time: '8:13 PM',
      username: 'Moyeong Lee',
      initial: 'ML',
    };
  }

  componentDidMount() {
    this.setState({ time: this.getTime() });
    this.setState({ date: this.getDate() });
  	setInterval(() => {
      this.setState({ time: this.getTime() });
    }, 60000);
  }

  getDate() {
    const date = new Date().toString().slice(0, 15);
    return date;
  }

  getTime() {
    const time = `${new Date().toLocaleString().slice(11, 16)} ${new Date().toLocaleString().slice(20)}`;
    return time;
  }


  render() {
    return (
      <div className="nav">
        <div>
          {this.state.date}
        </div>
        <div>
          {this.state.time}
        </div>
        <div className="user">
          <div>
            {this.state.username}
          </div>
          <div>
            <svg width="50" height="50" >
                  <circle cx="25" cy="25" r="15" fill="#aeaeae" />
                  <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="15px" fontFamily="Arial" dy=".3em">{this.state.initial}</text>
                  Sorry, your browser does not support inline SVG.
            </svg>
          </div>
          <div>
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
    );
  }
}
