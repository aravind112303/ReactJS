import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const count = useSelector(state => state.counter.count);
  const auth = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Auth : {auth && "True"}</h1>
    </div>
  )
}

export default App