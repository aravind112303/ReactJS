import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>Child Component</h1>
        <p>User Name: {props.user.name}</p>
        <p>Id : {props.user.id}</p>
        <p>City : {props.user.city}</p>
    </div>
  )
}

export default Child