import React, { Component } from 'react';
import { Table, Provider } from 'rendition';
import Switch from 'react-toggle-switch';


export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: '',
    };
  }

  // Toggle light switch
  toggleSwitch(e) {
    if (e.target.className.indexOf('toggle') === -1) {
      if (e.target.className.indexOf('on') !== -1) {
        e.target.classList.remove('on');
        e.target.nextElementSibling.innerText = 'Off';
      } else {
        e.target.classList.add('on');
        e.target.nextElementSibling.innerText = 'On';
      }
    }
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
        render: (value) => {
          const active = value ? 'On' : 'Off';
          return (
            <span>
              <Switch onClick={e => this.toggleSwitch(e)} on={value} />
              <span>
                {active}
              </span>
            </span>
          );
        },
      },
      {
        field: 'brightness',
        label: 'Brightness',
        sortable: false,
        render: value => (<code>{value}%</code>),
      },
    ];

    return (
      <Provider>
        <Table
          columns={columns}
          data={this.props.roomData.data}
          rowKey={this.props.roomData.id}
          onRowClick={(rowKey)=> this.props.selectRoom(rowKey)}
        />
      </Provider>
    );
  }
}
