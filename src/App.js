import './App.css';
import React, { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'decrement':
            return { count: state.count - 1 }
        case 'increment':
            return { count: state.count + 1 }
        default:
            throw new Error();
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <strong>Count</strong>: {state.count} <br />
            <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
            <button onClick={() => dispatch({ type: 'increment' })}> + </button>

        </div>
    )
}

export default App
