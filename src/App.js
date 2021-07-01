import './App.css';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      response => response.json()
    ).then(json => setData(json))
  })
  return (
    <div>
      <h2>Get API Data Using Fetch API</h2>
      {data.map(item => <li style={{ textTransform: 'capitalize' }} key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App

