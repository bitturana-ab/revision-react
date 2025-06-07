import {  useCallback,useEffect,useRef,useState } from 'react'
import './App.css'

function App() {
  const [lenght ,setLength] = useState(8);
  const [password,setPassword] = useState('');
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "<>,./;;!@$#%^~`&*";
    for(let i = 1;i<=lenght;i++){
      // console.log(Math.random())
      let charIndex = Math.floor(Math.random() * str.length + 1);
      // console.log(charIndex)
      generatedPassword += str.charAt(charIndex);
      
    }
    setPassword(generatedPassword);
  }, [lenght, numberAllowed, charAllowed,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[charAllowed,numberAllowed,lenght,passwordGenerator])

  // useRef hook for password copy to clipboard
  const passwordRef = useRef(null);
  // copy to clipboard access from window dom
  const copyToClip =useCallback(()=>{
    // select password effect
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  },[password])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center p-3'>Password generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
              className='outline-none w-full py-2 px-3 bg-gray-600'
              value={password}
              placeholder='password'
              readOnly
              ref={passwordRef}
              type="text" 
              />
              <button 
              onClick={copyToClip}
              className='ouline-none bg-blue-700 text-white px-4 py-1.5 shrink-0'>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex item-center text-white gap-x-1'>
              <input 
              value={lenght}
              min={6} 
              max={100} 
              className='cursor-pointer'  
              type="range"
              onChange={(e)=>setLength(e.target.value)}
              />
              <label > Length: {lenght}</label>
            </div>
            <div className='flex item-center text-white gap-x-1'>
              <input 
              defaultChecked={charAllowed}
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
              type="checkbox"  
              />
              <label > Characters</label>
            </div>
            <div className='flex item-center text-white gap-x-1'>
              <label > Numbers</label>
              <input 
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
              type="checkbox" 
              />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
