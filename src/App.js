
// useHistory Hook
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
          <Route path='/home' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

