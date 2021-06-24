import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: 'React Tutorials',
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name} </h1>
      </div>
    )
  }
}
