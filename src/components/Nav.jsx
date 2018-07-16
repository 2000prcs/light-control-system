import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'Sunday 15 July, 2018',
      time: '8:13 PM',
      username: 'Moyeong Lee',
    };
  }

  componentDidMount(){
  	setInterval(() => {
    	this.setState({ time: this.getTime() })
    }, 1000);
  }
  
  getDate(){
    return new Date().toLocaleString().slice(0, 9);
  }

  getTime(){
		return new Date().toLocaleString().slice(11);
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
        <div>
          {this.state.username}
        </div>
      </div>
    );
  }
}
