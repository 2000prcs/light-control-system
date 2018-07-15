import React, { Component } from 'react';
import { Button, Box, Provider } from 'rendition';


export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: ['Balcony', 'Bedroom 01', 'Bedroom 02', 
      'Entrance', 'Kitchen', 'Living Room', 'Master Bedroom', 'Storage'],
    };
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
