import React, { useState } from 'react'

const App = () => {
  const [name , setName] = useState("");
  function handleForm(e) {
    e.preventDefault();
    console.log("Form Submitted" , name);
    
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" value={name} placeholder='Enter your name' onChange={(e) => {
          setName(e.target.value)
        }} />
        <button type='submit'> Submit</button>
      </form>
    </div>
  )
}

export default App