import './App.css';
import React from 'react';

// Import Images
// import FrontEndDevelopment from './FrontEndDevelopment.jpg';
// import BackEndDeveloper from './BackEndDeveloper.jpg';
// import FullStackDeveloper from './FullStackDeveloper.jpg';

// Import Audio File
// import audio from './sathamanambhavatiNanna.ogg';

// Import Video File
import video from './video.mp4';

const App = () => {
  return (
    <div>
      <h1>Import Video</h1>
      {/* <img src={FrontEndDevelopment} height='250' width='auto' />
      <img src={BackEndDeveloper} height='250' width='auto' />
      <img src={FullStackDeveloper} height='250' width='auto' /> */}
      {/*  <audio controls>
       <source src={audio} type='audio/ogg'/>
     </audio> */}
  <video width='400' height='auto' controls>
    <source src={video} type='video/mp4' w />
  </video>
    </div>
  )
}

export default App

