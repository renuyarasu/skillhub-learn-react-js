import React, { useState } from 'react'

const App = () => {
 const [name, setName] = useState ('React Tutorials');
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  )
}

export default App
