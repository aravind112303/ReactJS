import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, addByAmount } from './features/counter/CounterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => {dispatch(increment())}}>++</button>
      <button onClick={() => {dispatch(decrement())}}>--</button>
      <button onClick={() => {dispatch(addByAmount(5))}}>Add by 5</button>
    </div>
  )
}

export default App;