import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
   const [value , setValue] = useState(0);
   useEffect(() => {
      document.title =`You clicked ${value}`;
    }) 
  return (
    <div>
      <button onClick={() => {
        setValue(value+1)
      }}>Increment</button>
    </div>
  )
}

export default App;