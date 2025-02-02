import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css'

function App() {
  // let counter =5;
  // const addValue = ()=>{
  //     counter++;
  //     console.log(counter);
  // }
  let [counter,setCounter] = useState(10);

  const addValue =()=> {
    console.log("clicked", counter);
    if(counter<20)setCounter(counter+1);
    
  }
  const decValue=()=>{
    console.log("clicked", counter);
    if(counter>0)setCounter(counter-1);
    
  }

 
  return (
    <>
      <h1>LETS COUNT</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}>PLUS :{counter}</button>
      <br />
      <button
      onClick={decValue}>MINUS :{counter} </button>
      <br />
      <h3>foot:{counter} </h3>
       
    </>
  )
}

export default App
