import './App.css';
import React from 'react'

const App = () => {
  const colors = ['White', 'Yellow', 'Blue', 'Red', 'Green', 'Black', 'Brown'];
  const filterColor = colors.filter(color => color.includes('B'));

  return (
    <div>
      <h2>colors</h2>
      {filterColor.map(item => <li key={item}>{item}</li>)}
    </div>
  )
}

export default App
