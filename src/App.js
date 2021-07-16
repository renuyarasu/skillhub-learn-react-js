import './App.css';
import React from 'react';
import Thumbnail from './react.jpg'

const App = () => {
    return (
        <div>
            <img src={Thumbnail} alt="Thumbnail" width="300" height="auto" />
            <br /><br />
            <a href={Thumbnail} className='button' download='Thumbnail.jpg'>Download Thumbnail</a>
        </div>
    )
}

export default App
