import React from 'react';
import { Route, Link } from 'react-router-dom';
import EventsPage from './pages/events';
import AboutPage from './pages/about';
import GlobalMessages from './components/global-messages';

import './index.css';

export const App = () => (
  <div>
    <GlobalMessages />
    <div className="container">
      <header>
        <Link to="/" href="/">Events</Link>
        <Link to="/about-us" href="/about-us">About</Link>
      </header>
      <main>
        <Route exact path="/" component={EventsPage} />
        <Route exact path="/about-us" component={AboutPage} />
      </main>
    </div>
  </div>
);

export default App;
