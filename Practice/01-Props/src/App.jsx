import React from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'

const App = () => {
  const user = {
    name : "Aravind",
    id: 1,
    city: "Jagtial"
  }
   function greet() {
        console.log("Hello");
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <Child user={user}/>
      <Child2 name2 ="ARAVIND" city2="JAGTIAL" greet={greet} />
    </div>
  )
}

export default App