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


describe('Testing App', () => {
  // test('Should render App', () => {
  //   const AppWrapper = shallow(<App />);
  //   expect(AppWrapper).toMatchSnapshot();
  // });

  test('Should fetch room information from API upon mounting', () => {
    sinon.spy(App.prototype, 'getRoomInfo');
    const AppWrapper = mount(<App />);
    expect(App.prototype.getRoomInfo.calledOnce).toBe(true);
    App.prototype.getRoomInfo.restore();
  });

  test('Should get a currentRoom info from Controller', () => {
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
  });

  test('Should turn a switch on when getSwitchStatus is invoked', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: roomData });
    AppWrapper.instance().getSwitchStatus(true);
    AppWrapper.update();
    const currentRoomId = AppWrapper.state().currentRoom.active;
    expect(currentRoomId).toBe(true);
  });

  test('Should turn a switch off and set the room\'s brightness as 0 when getSwitchStatus is invoked', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: roomData });
    AppWrapper.instance().getSwitchStatus(false);
    AppWrapper.update();
    const currentRoomId = AppWrapper.state().currentRoom.brightness;
    expect(currentRoomId).toBe(0);
  });

  test('Should set a brightness when lightControl is invoked', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ currentRoom: roomData });
    AppWrapper.instance().lightControl(77.77);
    AppWrapper.update();
    const currentRoomId = AppWrapper.state().currentRoom.brightness;
    expect(currentRoomId).toBe(78);
  });
});
