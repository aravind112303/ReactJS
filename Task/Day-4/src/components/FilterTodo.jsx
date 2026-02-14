import { useState } from "react"
import { useEffect } from "react"


function FilterTodo({filteredTodos}) {
  const [data, setData] = useState()
  useEffect(()=>{
    console.log("child")
    setData(filteredTodos())
  },[filteredTodos]) 
  // let Items = filteredTodos()

  return (
    <div>
         <ul>
          {data?.map((todo) => {
           return <li key={todo.id}>{todo.text} - {todo.completed ? "✅":"❌"}</li>
          })}
        </ul>
    </div>
  )
}

export default FilterTodo