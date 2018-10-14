import React from 'react';
import { shallow } from 'enzyme';

import { Loading } from './index';
import Spinner from '../../spinner';

let component;
describe('Component', () => {
  describe('initial render', () => {
    it('renders without blowing up', () => {
      component = shallow(<Loading />);
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders a jumbotron and a spinner', () => {
    component = shallow(<Loading />);
    expect(component.find('.jumbotron').exists()).toBeTruthy();
    expect(component.find(Spinner).exists()).toBeTruthy();
  });
});
