import React from 'react';
import { shallow } from 'enzyme';
import { Route, Link } from 'react-router-dom';

import { App } from './index';
import GlobalMessages from './components/global-messages';
import EventsPage from './pages/events';
import AboutPage from './pages/about';

let component;
describe('App', () => {
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders without blowing up', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('renders a GlobalMessages component', () => {
    expect(component.find(GlobalMessages).exists()).toBe(true);
  });

  describe('header', () => {
    let header;
    beforeEach(() => {
      header = component.find('header');
    });
    it('renders a header component', () => {
      expect(header.exists()).toBe(true);
    });

    it('renders Links inside the header', () => {
      const links = header.find(Link);
      expect(links.length).toBe(2);

      expect(links.get(0).props.href).toBe('/');
      expect(links.get(0).props.to).toBe('/');
      expect(links.get(1).props.href).toBe('/about-us');
      expect(links.get(1).props.to).toBe('/about-us');
    });
  });

  describe('main', () => {
    let main;
    beforeEach(() => {
      main = component.find('main');
    });
    it('renders a main component', () => {
      expect(main.exists()).toBe(true);
    });

    it('renders Routes inside the main', () => {
      const routes = main.find(Route);
      expect(routes.length).toBe(2);

      expect(routes.get(0).props.path).toBe('/');
      expect(routes.get(0).props.component).toBe(EventsPage);
      expect(routes.get(1).props.path).toBe('/about-us');
      expect(routes.get(1).props.component).toBe(AboutPage);
    });
  });
});
