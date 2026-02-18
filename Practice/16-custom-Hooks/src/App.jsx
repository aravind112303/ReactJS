import React from 'react'
import useCounter from './components/useCounter'

const App = () => {
  const [count , increment] = useCounter(5);
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increment}>On click</button>
    </div>
  )
}

export default App