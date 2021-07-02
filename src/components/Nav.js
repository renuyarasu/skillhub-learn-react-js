import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/dashboard'><li>Dashboard</li></Link>
            </ul>
        </div>
    )
}

export default Nav;
