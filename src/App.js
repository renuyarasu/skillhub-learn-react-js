import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <center>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter+1)}>Clicked</button>
      </center>
    </div>
  )
}

export default App
