import './App.css';
import React, { Component } from 'react'
import Display from './Display';

export default class App extends Component {
    state = {
        name: 'React',
        products: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            res => res.json()
        ).then(data => this.setState({ products: data })).catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {/* <h1>Hello {this.state.name}</h1> */}
                <Display data={this.state.products} />
                {/* {this.state.products.map((product) => <li key={product.id}>{product.title}</li>)} */}
                <button onClick={() => this.setState({ name: 'React Learning' })}>Change</button>
            </div>
        )
    }
}
