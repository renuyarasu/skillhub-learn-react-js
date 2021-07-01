import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('');
  const handler = e => {
    setInput(e.target.value);
  }
  const [result, setResult] = useState(0);
  return (
    <div>
      <input type='text' value={input} name='input' onChange={handler} /> <br />
      <button onClick={() => setResult(eval(input))}>Result</button>
      <h3>Result is: <strong style={{ fontWeight: 700, color: '#f2a23c' }}>{result}</strong></h3>

      <button className='button blackbutton' onClick={() => setInput(input + '1')}>1</button>
      <button className='button blackbutton' onClick={() => setInput(input + '2')}>2</button>
      <button className='button blackbutton' onClick={() => setInput(input + '3')}>3</button>
      <button className='button blackbutton' onClick={() => setInput(input + '4')}>4</button>
      <button className='button blackbutton' onClick={() => setInput(input + '5')}>5</button><br />

      <button className='button blackbutton' onClick={() => setInput(input + '6')}>6</button>
      <button className='button blackbutton' onClick={() => setInput(input + '7')}>7</button>
      <button className='button blackbutton' onClick={() => setInput(input + '8')}>8</button>
      <button className='button blackbutton' onClick={() => setInput(input + '9')}>9</button>
      <button className='button blackbutton' onClick={() => setInput(input + '0')}>0</button><br />

      <button className='button graybutton' onClick={() => setInput(input + '+')}>+</button>
      <button className='button graybutton' onClick={() => setInput(input + '-')}>-</button>
      <button className='button graybutton' onClick={() => setInput(input + '*')}>*</button>
      <button className='button graybutton' onClick={() => setInput(input + '/')}>/</button>
      <button className='button orangebutton' onClick={() => setInput('')}>CLR</button>
    </div>
  )
}

export default App
