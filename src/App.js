import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incAction, decAction } from './actions';

const App = ({ local_variable, incAction, decAction }) => {
    return (
        <div>
            <h1>{local_variable}</h1>
            <button onClick={() => incAction(10)}>Increment</button>
            <button onClick={decAction}>Decrement</button>
        </div>
    )
}
const mapStateToProps = state => ({
    local_variable: state,
}
)
export default connect(mapStateToProps, { incAction, decAction })(App);
