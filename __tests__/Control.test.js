import React from 'react';
import sinon from 'sinon';
import Controller from '../src/components/Control.jsx';

const controllerProps = {
  room: [
    {
      active: true,
      brightness: 50,
      id: 1,
      name: 'Balcony',
    },
  ],
  getCurrentRoom: () => {},
  getSwitchStatus: () => {},
};


describe('Controller component', () => {
  test('Should render Controller', () => {
    const ControllerWrapper = shallow(<Controller {...controllerProps} />);
    expect(ControllerWrapper).toMatchSnapshot();
  });

  test('Should toggle a switch when user clicks a light switch', () => {
    sinon.spy(Controller.prototype, 'toggleSwitch');
    const ControllerWrapper = mount(<Controller  {...controllerProps} />);
    const lightSwitch = ControllerWrapper.find('.switch');
    lightSwitch.first().simulate('click');
    expect(Controller.prototype.toggleSwitch.calledOnce).toBe(true);
    Controller.prototype.toggleSwitch.restore();
    ControllerWrapper.unmount();
  });
});
