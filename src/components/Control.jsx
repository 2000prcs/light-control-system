import React, { Component } from 'react';
import { Table, Provider } from 'rendition';
import Switch from 'react-toggle-switch';

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: '',
      currentRoom: '',
    };
  }

  // Highlight the selected room
  // Note: There is no class/id selector for each table row so walking DOM elements to get all table rows
  selectRoom(roomInfo, e) {
    let currentTableRow = e.target.parentNode;
    if (currentTableRow.dataset.display === 'table-cell') {
      currentTableRow = currentTableRow.parentNode;
    }
    const talbeRows = currentTableRow.parentNode.childNodes;
    Array.from(talbeRows).forEach(row => row.classList.remove('highlight'));
    currentTableRow.classList.add('highlight');
    
    this.props.getCurrentRoom(roomInfo);
    this.setState({ currentRoom: roomInfo });
  }


  // Toggle light switch
  toggleSwitch(e) {
    if (e.target.className.indexOf('toggle') === -1) {
      if (e.target.className.indexOf('on') !== -1) {
        e.target.classList.remove('on');
        e.target.nextElementSibling.innerText = 'Off';
        this.setState({ switched: false }, () => {
          this.props.getSwitchStatus(false);
        });
      } else {
        e.target.classList.add('on');
        e.target.nextElementSibling.innerText = 'On';
        this.setState({ switched: true }, () => {
          this.props.getSwitchStatus(true);
        });
      }
    }
  }

  render() {
    const { room } = this.props;

    const columns = [
      {
        field: 'name',
        label: 'Room',
        sortable: true,
        render: value => (
<b>
{value}
</b>
),
      },
      {
        field: 'active',
        label: 'State',
        sortable: false,
        render: (value) => {
          const active = value ? 'On' : 'Off';
          return (
            <div className="toggle-switch">
              <Switch
                onClick={e => this.toggleSwitch(e)}
                on={value}
              />
              <div className="active">
                {active}
              </div>
            </div>
          );
        },
      },
      {
        field: 'brightness',
        label: 'Brightness',
        sortable: false,
        render: value => (
<span>
{value}
%
</span>
),
      },
    ];


    return (
      <Provider>
        <Table
          columns={columns}
          data={room}
          rowKey={room.id}
          onRowClick={(data, e) => this.selectRoom(data, e)}
        />
      </Provider>
    );
  }
}
