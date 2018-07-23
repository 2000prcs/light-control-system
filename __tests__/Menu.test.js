import React from 'react';
import Menu from '../src/components/Menu.jsx';

let roomData = {
  active: false,
  brightness: 50,
  id: 1,
  name: 'Balcony',
};

describe('Menu component', () => {
  test('Should render Menu', () => {
    const MenuWrapper = shallow(<Menu room={roomData} />);
    expect(MenuWrapper).toMatchSnapshot();
  });
});
