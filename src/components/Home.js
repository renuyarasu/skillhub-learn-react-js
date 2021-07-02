import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => history.push('/dashboard')}>Dashboard</button>
        </div>
    )
}

export default Home
