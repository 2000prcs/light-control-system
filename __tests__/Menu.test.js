import React from 'react';
import Menu from '../src/components/Menu.jsx';


describe('Menu component', () => {
  test('Should render Menu', () => {
    const MenuWrapper = shallow(<Menu />);
    expect(MenuWrapper).toMatchSnapshot();
  });
});
