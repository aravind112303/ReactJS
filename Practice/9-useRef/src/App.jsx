import React from 'react'
import { useRef } from 'react'

const App = () => {
  const myNum = useRef(0);
  myNum.current++;
  const myFocus = useRef(null);
  function handleFocus() {
    myFocus.current.value = "Hello World this is king Steve"
    myFocus.current.focus();
  }
  return (
    <div>
      <h1>Num : {myNum.current}</h1>
      <button onClick={handleFocus}>Action</button>
      <textarea type="text" ref={myFocus}/>
    </div>
  )
}

export default App