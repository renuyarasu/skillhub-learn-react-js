import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      response => setData(response.data)
    )
  }, [])

  return (
    <div>
      <h1>GET API Data Using Axios</h1>
      {data.map(item => <li style={{ textTransform: 'capitalize', letterSpacing: '0.15rem' }} key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App;