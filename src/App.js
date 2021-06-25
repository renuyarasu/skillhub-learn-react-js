import './App.css';
import React from 'react'

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const above5 = numbers.filter(item => item > 5)

  return (
    <div>
      <h2>colors</h2>
      {above5.map(item => <li key={item}>{item}</li>)}
    </div>
  )
}

export default App
