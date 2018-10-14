import React from 'react';
import { shallow } from 'enzyme';
import { EventsPage } from './index';
import ConferenceSchedule from '../../components/conference-schedule';

let props;
let component;
describe('Events Page', () => {
  describe('initial render', () => {
    beforeEach(() => {
      props = {
        getConfData: jest.fn(),
        getEvents: jest.fn()
      };
      component = shallow(<EventsPage {...props} />);
    });

    it('renders without blowing up', () => {
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders a header', () => {
    const h1 = component.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toBe('Events');
  });

  it('renders the ConferenceSchedule', () => {
    expect(component.find(ConferenceSchedule).exists()).toBe(true);
  });

  it('calls the correct functions on load', () => {
    expect(props.getConfData).toHaveBeenCalled();
    expect(props.getEvents).toHaveBeenCalled();
  });
});
