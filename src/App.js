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
    if (username.length <= 5) {
      alert('Username must be at 5 characters!')
    } else if (password !== passwordConfirm) {
      alert('Passwords are not matching!')
    }else{
      console.log(data);
    }
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={submitHandler}>
        <input type='username' name='username' placeholder='username' onChange={changeHandler} /> <br />
        <input type='email' name='email' placeholder='email' onChange={changeHandler} /> <br />
        <input type='password' name='password' placeholder='password' onChange={changeHandler} /> <br />
        <input type='password' name='passwordConfirm' placeholder='Confirm password' onChange={changeHandler} /> <br />
        {password !== passwordConfirm ? <p style={{color:'crimson', fontWeight:700}}>Passwords are not matching!</p> : null}
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default App;