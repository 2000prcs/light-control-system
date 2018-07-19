import React from 'react';
import Nav from '../src/components/Nav.jsx';

const userData = {
  userName: 'Moyeong Lee',
};

describe('Nav component', () => {
  test('Should render Nav', () => {
    const NavWrapper = shallow(<Nav userData={userData}/>);
    expect(NavWrapper).toMatchSnapshot();
  });
});
