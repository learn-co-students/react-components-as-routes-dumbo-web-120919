import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './Home';
import About from './About';
import Login from './Login';
import NavBar from './Navbar';

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
