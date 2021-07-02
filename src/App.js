import './App.css';
import React from 'react';
import FrontEndDevelopment from './FrontEndDevelopment.jpg';
import BackEndDeveloper from './BackEndDeveloper.jpg';
import FullStackDeveloper from './FullStackDeveloper.jpg';


const App = () => {
  return (
    <div>
      <h1>Import Images</h1>
      <img src={FrontEndDevelopment} height='250' width='auto' />
      <img src={BackEndDeveloper} height='250' width='auto' />
      <img src={FullStackDeveloper} height='250' width='auto' />
    </div>
  )
}

export default App

