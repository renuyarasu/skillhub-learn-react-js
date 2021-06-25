import './App.css';

import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <h2>Sumit Form</h2>
      <form onSubmit={submitHandler}>
        <input type='text' name='username' placeholder='username' value={username} onChange={onChange} />
        <br /><br /><input type='password' name='password' placeholder='password' value={password} onChange={onChange} />
        <br /><br />
        <input type='submit' name='submit' />
      </form>

    </div>
  )
}

export default App
