import { useState } from 'react'

const App = () => {
  const [names, setNames] =  useState([]);
  const [name, setName] = useState("");
  function addNames() {
    if(name.trim() === " ") return false;
    setNames((prev) => [...prev, name]);
    setName(" ")
  }
  return (
    <div>
      <input type="text" value={name} placeholder='Enter your name to store' onChange={(e) => {
        setName(e.target.value)
      }} />
      <button onClick={addNames}>Add name </button>
      {names.map((n, idx) => <p key={idx} >{n}</p>)}
    </div>
  )
}

export default App