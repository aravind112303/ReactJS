import React from 'react'
import { useReducer } from 'react'

function ChangeReducer(state, action) {
  switch(action.type) {
    case "INCREMENT" : 
      return {count: state.count+1}
    case "DECREMENT" :
      return {count: state.count-1}
    default:
      return state;
  }
}
 
const App = () => {
  const [state, dispatch] = useReducer(ChangeReducer, {count:0})
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({type:'INCREMENT'})} >Increment</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default App