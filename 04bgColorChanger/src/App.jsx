import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
        <div 
        className='fixed flex flex-wrap justify-center top-12 insect-x-0 px-12'
        >
          <div 
          className='flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-4 rounded-lg'
          >
              <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"red"}}
              onClick={()=>setColor("red")}
              >
                red
              </button>
              <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"orange"}}
              onClick={()=>setColor("orange")}
              >
                orange
              </button>
              <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"blue"}}
              onClick={()=>setColor("blue")}
              >
                blue
              </button>
              <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"green"}}
              onClick={()=>setColor("green")}
              >
                green
              </button>
              <button
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"gray"}}
              onClick={()=>setColor("gray")}
              >
                gray
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
