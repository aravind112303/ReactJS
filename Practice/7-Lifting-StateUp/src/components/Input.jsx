import React from 'react'

const Input = ({name, setName}) => {
  return (
    <div>
     <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
     <button onClick={() => {console.log("name saved");
     }}></button>
    </div>
  )
}

export default Input