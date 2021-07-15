import './App.css';
import React from 'react'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            count: 0
        };
    }
    delHeader = () => {
        this.setState({ show: false });
    }

    componentDidMount() {
        console.log('componentDidMount Method!');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate Method!');
    }

    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                <center>
                    {myheader}
                    <button type='button' onClick={this.delHeader}>Delete Header</button><hr /><br /><hr />
                    <h3>Count: {this.state.count}</h3>
                    <button type='button' onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                </center>
            </div>
        )
    }
}
class Child extends React.Component {
    componentWillUnmount() {
        console.log('componentWillUnmount Method!');
    }
    render() {
        return (
            <h1>Hello React</h1>
        );
    }
}

export default Container;

