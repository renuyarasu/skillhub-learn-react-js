import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = ({local_variable}) => {
    return (
        <div>
            <h1>{local_variable}</h1>
        </div>
    )
}
const mapStateToProps = state => ({
    local_variable: state,
})
export default connect(mapStateToProps)(App);
