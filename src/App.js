import React from 'react';
import { connect } from 'react-redux';
import { IncAction, DecAction } from './actions';
import './App.css';

const App = ({ local_variable, IncAction, DecAction }) => {
    return (
        <div>
            <h1>{local_variable}</h1>
            <button onClick={IncAction}>Increment</button>&nbsp;&nbsp;
            <button onClick={DecAction}>Decrement</button>
        </div>
    )
}
const mapStateToProps = state => ({
    local_variable: state,
})
export default connect(mapStateToProps, { IncAction, DecAction })(App);
