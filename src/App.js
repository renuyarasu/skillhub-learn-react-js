
// Use React Router
import './App.css';
import React from 'react'
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <Router>
            <Nav />
        <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

