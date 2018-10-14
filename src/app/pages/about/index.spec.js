import React from 'react';
import { shallow } from 'enzyme';
import { AboutPage } from './index';

let component;
describe('About Page', () => {
  describe('initial render', () => {
    beforeEach(() => {
      component = shallow(<AboutPage />);
    });

    it('renders without blowing up', () => {
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders a header', () => {
    const h1 = component.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('About');
  });
});
