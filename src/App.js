import './App.css';
import React from 'react';
// import FrontEndDevelopment from './FrontEndDevelopment.jpg';
// import BackEndDeveloper from './BackEndDeveloper.jpg';
// import FullStackDeveloper from './FullStackDeveloper.jpg';

import audio from './sathamanambhavatiNanna.ogg';


const App = () => {
  return (
    <div>
      <h1>Import Audio File</h1>
      {/* <img src={FrontEndDevelopment} height='250' width='auto' />
      <img src={BackEndDeveloper} height='250' width='auto' />
      <img src={FullStackDeveloper} height='250' width='auto' /> */}
     <audio controls>
       <source src={audio} type='audio/ogg'/>
     </audio>
    </div>
  )
}

export default App

