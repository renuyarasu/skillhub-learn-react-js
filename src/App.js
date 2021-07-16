import './App.css';
import React, { useState } from 'react'
import Data from './city.json';

const App = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <h1>Enter your City Name:</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <br /><br />
            {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
                return <div className='cities'>
                    {city.name}
                </div>
            })}
        </div>
    )
}

export default App
