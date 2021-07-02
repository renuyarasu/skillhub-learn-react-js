import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Home = () => {
    const [auth, setAuth] = useState(false);
    if (auth) {
        return <Redirect to='/dashboard' />
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => setAuth(true)}>Login</button>
        </div>
    )
}

export default Home
