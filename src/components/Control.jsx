import React, { Component } from 'react';
import { Button, Box, Table, Provider } from 'rendition';


export default class Control extends Component {
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
      <Provider>
        <Box my={3} mx={['auto', 15]}>
          <Button primary emphasized>Click me</Button>
        </Box>

      </Provider>
    );
  }
}
