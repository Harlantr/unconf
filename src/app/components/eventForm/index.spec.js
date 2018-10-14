import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';

import { EventForm } from './index';

let component;
let props;
describe('Component', () => {
  describe('initial render', () => {
    it('renders without blowing up', () => {
      component = shallow(<EventForm />);
      expect(component.exists()).toBeTruthy();
    });
  });

  it('renders the correct fields', () => {
    component = shallow(<EventForm />);
    expect(component.find(Field).length).toBe(5);
    expect(component.find(Field).get(0).props.name).toBe('title');
    expect(component.find(Field).get(1).props.name).toBe('creator');
    expect(component.find(Field).get(2).props.name).toBe('type');
    expect(component.find(Field).get(3).props.name).toBe('difficulty');
    expect(component.find(Field).get(4).props.name).toBe('description');
  });

  it('renders a list of tags', () => {
    props = {
      initialValues: {
        tags: [
          'thing 1',
          'thing 2'
        ]
      }
    };
    component = shallow(<EventForm {...props} />);
    expect(component.find('.badge').length).toBe(2);
    expect(component.find('.badge').at(0).text()).toBe('thing 1');
    expect(component.find('.badge').at(1).text()).toBe('thing 2');
  });
});
