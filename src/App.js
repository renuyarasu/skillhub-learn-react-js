import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('React App!')
  return (
    <div>
      <center>
        <h2>{name}</h2>
        <button onClick={() => setName('Hello React App!')}>Clicked</button>
      </center>
    </div>
  )
}

export default App
