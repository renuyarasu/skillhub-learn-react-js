import './App.css';
import React from 'react'
import { useRef } from 'react';

const App = () => {
    const data = useRef(null);
    const submitHandler = e => {
        e.preventDefault();
        console.log(data.current.value); // Hello
    }
    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={submitHandler}>
                <input ref={data} type="text" placeholder="Enter Name"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App
