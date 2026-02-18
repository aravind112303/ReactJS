import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState("light");
  const squaredMemo = useMemo(()=> {
    console.log("rendered");
    return num*2;
  },[num]); 
  return (
    <div>
      <h1>Num : {num}</h1> 
      <h1>Squared Num : {squaredMemo}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}>Increment</button> <br />
      <h1>Theme : {theme} </h1>
      <button onClick={() => setTheme(theme==="light"?"dark":"light") }>Toggle</button>
    </div>
  )
}

export default App