import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { username, email, password, confirmPassword } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={submitHandler}>
        <input type='username' name='username' placeholder='username' onChange={changeHandler} /> <br /><br />
        <input type='email' name='email' placeholder='email' onChange={changeHandler} /> <br /><br />
        <input type='password' name='password' placeholder='password' onChange={changeHandler} /> <br /><br />
        <input type='password' name='confirmPassword' placeholder='confirmPassword' onChange={changeHandler} /> <br /><br />
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default App;