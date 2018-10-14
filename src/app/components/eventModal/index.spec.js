import React from 'react';
import { shallow } from 'enzyme';

import { EventModal } from './index';
import EventForm from '../eventForm';

let component;
let props;
describe('Component', () => {
  beforeEach(() => {
    component = shallow(<EventModal />);
  });

  describe('initial render', () => {
    it('renders without blowing up', () => {
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders an EventForm', () => {
    expect(component.find(EventForm).exists()).toBeTruthy();
  });

  it('renders the save and close buttons', () => {
    const saveCancel = component.find('.save-cancel-buttons');
    expect(saveCancel.exists()).toBeTruthy();
    expect(saveCancel.find('.btn-danger')).toBeTruthy();
    expect(saveCancel.find('.save-btn')).toBeTruthy();
  });

  it('runs closeEventModal on close click', () => {
    props = {
      closeEventModal: jest.fn()
    };
    component = shallow(<EventModal {...props} />);
    component.find('.btn-danger').simulate('click');
    expect(props.closeEventModal).toHaveBeenCalled();
  });

  it('disables the button if the form is invalid', () => {
    props = {
      initialValues: {
        formValid: false
      }
    };
    component = shallow(<EventModal {...props} />);
    expect(component.find('.save-btn').props().disabled).toBe(true);
  });
});
