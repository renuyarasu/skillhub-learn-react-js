import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
    state ={
        name: 'Hello React'
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({name: 'Learning React JS'})}>Change Name</button>
            </div>
        )
    }
}
