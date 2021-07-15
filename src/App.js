import './App.css';
import React, { Component } from 'react';
import Display from './Display';

export default class App extends Component {
    state = {
        name: 'Hello React'
    }
    render() {
        return (
            <div>
                <Display data={this.state.name} />
                <button onClick={() => this.setState({ name: 'Learning React JS' })}>Change Name</button>
            </div>
        )
    }
}
