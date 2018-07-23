import React from 'react';
import sinon from 'sinon';
import Display from '../src/components/Display.jsx';

const roomData = {
  active: false,
  brightness: 50,
  id: 1,
  name: 'Balcony',
};

describe('Display component', () => {
  test('Should render Display', () => {
    const DisplayWrapper = shallow(<Display room={roomData} />);
    expect(DisplayWrapper).toMatchSnapshot();
  });

  test('Should render the roundSlider upon mounting', () => {
    sinon.spy(Display.prototype, 'renderSlider');
    const DisplayWrapper = mount(<Display room={roomData} />);
    expect(Display.prototype.renderSlider.calledOnce).toBe(true);
    Display.prototype.renderSlider.restore();
    DisplayWrapper.unmount();
  });

  test('Should re-render the roundSlider on prop change', () => {
    sinon.spy(Display.prototype, 'renderSlider');
    const DisplayWrapper = mount(<Display room={roomData} />);
    DisplayWrapper.setProps({
      room: {
        active: false,
        brightness: 70,
        id: 2,
        name: 'Bedroom 01',
      },
    });
    expect(Display.prototype.renderSlider.calledTwice).toBe(true); // Called once on initial mount, and again on prop change
    Display.prototype.renderSlider.restore();
    DisplayWrapper.unmount();
  });

  test('Should destroy the roundSlider when the component unmounts', () => {
    const DisplayWrapper = mount(<Display room={roomData} />);
    DisplayWrapper.unmount();
    DisplayWrapper.update();
    expect(DisplayWrapper.find('#slider')).toHaveLength(0);
    DisplayWrapper.unmount();
  });
});
