import React, { Component } from 'react';
import { Table, Provider } from 'rendition';


export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

 

  selectRoom() {
    console.log('Selected');
  }


  render() {
    const columns = [
      {
        field: 'name',
        label: 'Room',
        sortable: true,
      },
      {
        field: 'active',
        label: 'State',
        sortable: false,
        render: value => (value ? 'On' : 'Off'),
      },
      {
        field: 'brightness',
        label: 'Brightness',
        sortable: false,
        render: value => (<code>{value}</code>),
      },
    ];

    return (
      <Provider>
        <Table
          columns={columns}
          data={this.props.roomData.data}
          rowKey={this.props.roomData.id}
          onRowClick={() => this.selectRoom()}
        />
      </Provider>
    );
  }
}
