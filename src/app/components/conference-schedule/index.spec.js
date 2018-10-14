import React from 'react';
import { shallow } from 'enzyme';
import { ConferenceScheduleWrapper } from './index';
import Component from './component';
import Error from './error';
import Loading from './loading';

let props;
let component;
describe('Conference Schedule', () => {
  describe('initial render', () => {
    it('renders without blowing up', () => {
      props = {
        intialDataLoading: false,
        initialDataError: null
      };
      component = shallow(<ConferenceScheduleWrapper {...props} />);
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders the component', () => {
    props = {
      intialDataLoading: false,
      initialDataError: null
    };
    component = shallow(<ConferenceScheduleWrapper {...props} />);
    expect(component.find(Loading).exists()).toBe(false);
    expect(component.find(Component).exists()).toBe(true);
    expect(component.find(Error).exists()).toBe(false);
  });

  it('renders the loading spinner', () => {
    props = {
      intialDataLoading: true,
      initialDataError: null
    };
    component = shallow(<ConferenceScheduleWrapper {...props} />);
    expect(component.find(Loading).exists()).toBe(true);
    expect(component.find(Component).exists()).toBe(false);
    expect(component.find(Error).exists()).toBe(false);
  });

  it('renders the error', () => {
    props = {
      intialDataLoading: false,
      initialDataError: 'Error!'
    };
    component = shallow(<ConferenceScheduleWrapper {...props} />);
    expect(component.find(Loading).exists()).toBe(false);
    expect(component.find(Component).exists()).toBe(false);
    expect(component.find(Error).exists()).toBe(true);
  });
});
