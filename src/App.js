import './App.css';
import React from 'react'

const App = () => {
  const colors = ['White', 'Yellow', 'Blue', 'Red', 'Green', 'Black', 'Brown']
  return (
    <div>
      <h2>Colors</h2>
      {colors.map((value, index) => <li key={index}>{value}</li>)}
    </div>
  )
}

export default App
