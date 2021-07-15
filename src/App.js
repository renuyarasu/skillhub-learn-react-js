import React from 'react';
import { connect } from 'react-redux';
import { incAction, decAction } from './actions';
import './App.css';

const App = ({ local_variable, incAction, decAction }) => {
    return (
        <div>
            <h1>{local_variable}</h1>
            <button onClick={() => incAction(10)}>Increment</button>&nbsp;&nbsp;
            <button onClick={decAction}>Decrement</button>
        </div>
    )
}
const mapStateToProps = state => ({
    local_variable: state,
})
export default connect(mapStateToProps, { incAction, decAction })(App);
