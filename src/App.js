import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state = {
    name: 'ReactApp'
  }
  render() {
    return (
      <div>
        <center>
          <h1>Hello {this.state.name}</h1>
        </center>
      </div>
    )
  }
}
