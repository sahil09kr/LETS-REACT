import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

const[length,setLength]=useState(8)
const[isN0,setN0]=useState(false)
const[isSChar,setSChar]=useState(false)
const[password,setPassword]=useState("")

const generatePassword=useCallback(()=>{
  let pass=""
  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(isN0)string+="0123456789";
  if(isSChar)string+="!@#$%^&*()-_=+?/"
  for(let i=0;i<length;i++){
    let index=Math.floor(Math.random()*string.length);
    pass+=string[index];
  }
  setPassword(pass);

},[length,isN0,isSChar,setPassword])

useEffect(generatePassword,[length,isN0,isSChar,setPassword]);
const passwordRef=useRef("");

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
},[password]);

  return (
    <div className="w-full max-w-md mx-auto rounded-lg px-4 py-8 text-amber-300 bg-gray-800">
      <h1 className="text-white text-center my-8 text-2xl">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-amber-50 text-orange-500"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        ></input>
        <label>Length:{length} </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={isN0}
        id="numberInput"
        onChange={()=>{
          setN0((prev)=> !prev
  )}}        
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={isSChar}
        id="charInput"
        onChange={()=>{
          setSChar((prev)=> !prev
  )}}        
        />
        <label htmlFor="charInput">Numbers</label>
      </div>
      </div>
    </div>
    

    
  )
}

export default App