import React from 'react';
import { shallow } from 'enzyme';

import { Component } from './index';
import EventPreview from '../../../components/eventPreview';
import EventModal from '../../../components/eventModal';

let component;
let props;
describe('Component', () => {
  describe('initial render', () => {
    beforeEach(() => {
      props = {
        events: [],
        modalOpen: false,
        selectedEvent: {}
      };
    });

    it('renders without blowing up', () => {
      component = shallow(<Component {...props} />);
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders an Event Preview for each event', () => {
    props = {
      ...props,
      events: [
        {
          _id: 1,
          title: 'Thing 1'
        },
        {
          _id: 2,
          title: 'Thing 2'
        }
      ]
    };
    component = shallow(<Component {...props} />);
    const previews = component.find(EventPreview);
    expect(previews.length).toBe(2);
    expect(previews.get(0).props.event).toBe(props.events[0]);
    expect(previews.get(1).props.event).toBe(props.events[1]);
  });

  it('renders the modal when modalOpen', () => {
    props = {
      ...props,
      modalOpen: true
    };
    component = shallow(<Component {...props} />);
    expect(component.find(EventModal).exists()).toBeTruthy();
  });

  it('does not render the modal when !modalOpen', () => {
    props = {
      ...props,
      modalOpen: false
    };
    component = shallow(<Component {...props} />);
    expect(component.find(EventModal).exists()).toBeFalsy();
  });

  it('renders the modal with the correct event', () => {
    props = {
      ...props,
      modalOpen: true,
      selectedEvent: {
        _id: 2,
        title: 'Thing 2'
      }
    };
    component = shallow(<Component {...props} />);
    expect(component.find(EventModal).exists()).toBeTruthy();
    expect(component.find(EventModal).props().event).toBe(props.selectedEvent);
  });
});
