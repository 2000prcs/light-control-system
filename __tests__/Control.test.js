import React from 'react';
import sinon from 'sinon';
import "isomorphic-fetch";
import App from '../src/components/App.jsx';
import Controller from '../src/components/Control.jsx';

const flushPromises = () => new Promise(resolve => setImmediate(resolve));


const appProps = {
  currentRoom: {
    active: true,
    brightness: 50,
    id: 1,
    name: 'Balcony',
  },
  data: [
    {
      active: true,
      brightness: 50,
      id: 1,
      name: 'Balcony',
    },
    {
      active: false,
      brightness: 70,
      id: 2,
      name: 'Bedroom 01',
    },
    {
      active: false,
      brightness: 70,
      id: 3,
      name: 'Bedroom 02',
    },
  ],
  userData: {
    userName: 'Moyeong Lee',
  },
};


const controllerProps = {
  room: [
    {
      active: true,
      brightness: 50,
      id: 1,
      name: 'Balcony',
    },
    {
      active: false,
      brightness: 70,
      id: 2,
      name: 'Bedroom 01',
    },
    {
      active: false,
      brightness: 70,
      id: 3,
      name: 'Bedroom 02',
    },
  ],
  getCurrentRoom: () => {},
  getSwitchStatus: () => {},
};


describe('Testing Controller', () => {
  // test('Should render Controller', () => {
  //   const ControllerWrapper = shallow(<Controller {...controllerProps} />);
  //   expect(ControllerWrapper).toMatchSnapshot();
  // });

  // test('Should set current room info when room is selected', () => {
  //   sinon.spy(App.prototype, 'getCurrentRoom');
  //   const AppWrapper = mount(<App />);
  //   const ControllerWrapper = mount(<Controller {...controllerProps} />);
  //   AppWrapper.setState({ currentRoom: '' });
  //   ControllerWrapper.instance().selectRoom({
  //     id: 4,
  //     name: 'Entrance',
  //     active: true,
  //     brightness: 100,
  //   });
  //   // ControllerWrapper.update();
  //   expect(App.prototype.getCurrentRoom.calledOnce).toBe(true);
  //   // AppWrapper.update();
  //   console.log(AppWrapper.state());
  //   // expect(AppWrapper.state().currentRoom.id).to.equal(4);
  // });
});
