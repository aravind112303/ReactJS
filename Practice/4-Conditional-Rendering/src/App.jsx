import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <button onClick={() => {setValue(!value)}}> {value ? "Hide Profile":"Show Profile"}  </button>
      {value && <div>
        <h1>Name : Aravind</h1>
      </div> }
    </div>
  )
}

export default App