import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../../containers/home';
import About from '../about';

const App = () => (
  <div>
    <header>
      <Link to="/" href="/">Home</Link>
      <Link to="/about-us" href="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
