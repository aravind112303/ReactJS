import React from 'react'
import { useState } from 'react'

function init() {
  console.log("Funciton init called");
  return Math.floor(Math.random()*10 + 1);
}

const App = () => {
  const [value, setValue] = useState(init);  //init() => creates new function for every render 
  function incre() {
    setValue(value+1);
  }
  return (
    <div>
      <h1>Value : {value}</h1>
      <button onClick={incre}>Increment</button>
    </div>
  )
}

export default App