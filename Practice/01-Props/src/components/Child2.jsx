import React from 'react'

const Child2 = ({name2 , city2, greet}) => {
  return (
    <div>
        <h1>Name : {name2}</h1>
        <h2>City: {city2}</h2>
        <button onClick={greet}>Greet</button>
    </div>
  )
}

export default Child2