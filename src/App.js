import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const { username, email, password, passwordConfirm } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = e => {
    e.preventDefault();
    if (password === passwordConfirm) {
      console.log(data);
    } else {
      console.log('Passwords are not matching!');
    }
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={submitHandler}>
        <input type='username' name='username' placeholder='username' onChange={changeHandler} /> <br /><br />
        <input type='email' name='email' placeholder='email' onChange={changeHandler} /> <br /><br />
        <input type='password' name='password' placeholder='password' onChange={changeHandler} /> <br /><br />
        <input type='password' name='passwordConfirm' placeholder='passwordConfirm' onChange={changeHandler} /> <br />
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default App;