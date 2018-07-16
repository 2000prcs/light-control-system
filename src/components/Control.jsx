import React, { Component } from 'react';
import { Table, Provider } from 'rendition';
import Switch from 'react-toggle-switch';


export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // Toggle light switch
  toggleSwitch(e) {
    if (e.target.className.indexOf('toggle') === -1) {
      if (e.target.className.indexOf('on') !== -1) {
        e.target.classList.remove('on');
        e.target.nextElementSibling.innerText = 'Off';
        this.props.getSwitchStatus(false);
      } else {
        e.target.classList.add('on');
        e.target.nextElementSibling.innerText = 'On';
        this.props.getSwitchStatus(true);
      }
    }
  }

  render() {

    const { roomData, selectRoom } = this.props;


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
        render: value => <span>{value}%</span>,
      },
    ];


    return (
      <Provider>
        <Table
          columns={columns}
          data={roomData.data}
          rowKey={roomData.id}
          onRowClick={rowKey => selectRoom(rowKey)}
        />
      </Provider>
    );
  }
}
