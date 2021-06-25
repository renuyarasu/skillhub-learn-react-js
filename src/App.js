import './App.css';
import React from 'react'

const App = () => {
  const colors = [
    {
      id: 1,
      title: 'White'
    },


    {
      id: 2,
      title: 'Yellow'
    },


    {
      id: 3,
      title: 'Blue'
    },


    {
      id: 4,
      title: 'Red'
    },


    {
      id: 5,
      title: 'Green'
    },


    {
      id: 6,
      title: 'Black'
    },
    {
      id: 7,
      title: 'Brown'
    }
  ]
  return (
    <div>
      <h2>colors</h2>
      {colors.map((value) => <li key={value.id}>{value.title}</li>)}
    </div>
  )
}

export default App
