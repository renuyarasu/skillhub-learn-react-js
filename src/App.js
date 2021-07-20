import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios';

const App = () => {
    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/todos').then(response => console.table(response.data))
        }, []
    )
    return (
        <div>
            <h1>axios</h1>
        </div>
    )
}

export default App
