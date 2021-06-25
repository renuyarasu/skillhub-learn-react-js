import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => console.log(counter), [counter])
  return (
    <div>
      <center>
        <h2>You clicked {counter} times.</h2>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </center>
    </div>
  )
}

export default App
