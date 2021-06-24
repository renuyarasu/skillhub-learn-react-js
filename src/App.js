import React, { Component } from 'react';
import Display from './components/Display';

import './App.css';

export default class App extends Component {
  state ={
    name: 'Hello React App'
  }
  render() {
    return (
      <div>
        <center>
          <Display name={this.state.name} />
        </center>
      </div>
    )
  }
}
