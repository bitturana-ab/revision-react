import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const increaseValue =() =>{
    if(counter >=10) setCounter(counter);
    else setCounter(counter+1); 
  }
  const decreaseValue = ()=>{
    if(counter <=0) setCounter(counter);
    else setCounter(counter-1);
  }
  return (
    <>
      <h1>Counter in react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
