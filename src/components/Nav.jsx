import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'Tuesday 17 July, 2018',
      time: '10:37 PM',
    };
  }

  componentDidMount() {
    this.setState({ time: this.getTime() });
    this.setState({ date: this.getDate() });
    setInterval(() => {
      this.setState({ time: this.getTime() });
    }, 60000);
  }

  // Get current date
  getDate() {
    return new Date().toString().slice(0, 15);
  }

  // Get current time every minute
  getTime() {
    let time = new Date(parseInt(Date.now()));
    let localeSpecificTime = time.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, ' ');
  }


  render() {
    const { userData } = this.props;
    const { date, time } = this.state;

    return (
      <div className="nav">
        <div>
          {date}
        </div>
        <div>
          {time}
        </div>
        <div className="user">
          <div>
            {userData.userName}
          </div>
          <div>
            <svg width="50" height="50">
              <circle cx="25" cy="25" r="15" fill="#484848" />
              <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="15px" fontFamily="Arial" dy=".3em">
                {userData.userName.split(' ')[0][0] + userData.userName.split(' ')[1][0]}
              </text>
                  Sorry, your browser does not support inline SVG.
            </svg>
          </div>
          <div>
            <i className="fas fa-sort-down" />
          </div>
        </div>
      </div>
    );
  }
}
