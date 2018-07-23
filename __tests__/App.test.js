import React from 'react';
import sinon from 'sinon';
import "isomorphic-fetch";
import App from '../src/components/App.jsx';

let roomData = {
  active: false,
  brightness: 50,
  id: 1,
  name: 'Balcony',
};


describe('App component', () => {
  test('Should render App', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper).toMatchSnapshot();
  });

  test('Should fetch room information from API upon mounting', () => {
    sinon.spy(App.prototype, 'getRoomInfo');
    const AppWrapper = mount(<App />);
    expect(App.prototype.getRoomInfo.calledOnce).toBe(true);
    App.prototype.getRoomInfo.restore();
    AppWrapper.unmount();
  });

  test('Should get a current room info from Controller', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: '' });
    AppWrapper.instance().getCurrentRoom({
      id: 4,
      name: 'Entrance',
      active: true,
      brightness: 100,
    });
    AppWrapper.update();
    const currentRoomId = AppWrapper.state().currentRoom.id;
    expect(currentRoomId).toBe(4);
    AppWrapper.unmount();
  });

  test('Should turn a switch on when getSwitchStatus is invoked with true value', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: roomData });
    AppWrapper.instance().getSwitchStatus(true);
    AppWrapper.update();
    const currentRoomId = AppWrapper.state().currentRoom.active;
    expect(currentRoomId).toBe(true);
    AppWrapper.unmount();
  });

  test('Should set the room\'s brightness to 0 when getSwitchStatus is invoked with false value', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: roomData });
    AppWrapper.instance().getSwitchStatus(false);
    AppWrapper.update();
    const currentRoomId = AppWrapper.state().currentRoom.brightness;
    expect(currentRoomId).toBe(0);
    AppWrapper.unmount();
  });

  test('Should set a brightness when lightControl is invoked', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: roomData });
    AppWrapper.instance().lightControl(77.77);
    AppWrapper.update();
    const currentRoomId = AppWrapper.state().currentRoom.brightness;
    expect(currentRoomId).toBe(78);
    AppWrapper.unmount();
  });

  test('Should change the selected room name as a user types in the input', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: roomData });
    AppWrapper.find('input').simulate('change', { target: { value: 'karaoke' } }); // Mock event object, for testing purposes
    AppWrapper.update();
    expect(AppWrapper.state().currentRoom.name).toBe('karaoke');
    AppWrapper.unmount();
  });
});
