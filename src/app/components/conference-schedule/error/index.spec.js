import React from 'react';
import { shallow } from 'enzyme';

import { Error } from './index';

let component;
describe('Component', () => {
  describe('initial render', () => {
    it('renders without blowing up', () => {
      component = shallow(<Error />);
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders a jumbotron', () => {
    component = shallow(<Error />);
    expect(component.find('.jumbotron').exists()).toBeTruthy();
  });
});
