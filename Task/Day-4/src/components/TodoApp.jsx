import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useReducer } from 'react';
import { useTodo } from './useTodo';
import FilterTodo from './FilterTodo';



const TodoApp = () => {
    const {todos , handleAdd, handleToggle, handleDelete} = useTodo();
    const [fil, setFil] = useState("all");
    const inputRef = useRef(null);

    useEffect(() => {
     inputRef.current.focus();
     
    })
    
    const filteredTodos = useCallback(() => {
      return todos.filter((todo) => {
        if(fil === "completed") {
          return todo.completed
        } else if(fil === "pending") {
          return !todo.completed
        } 
        return todos;
      })
    },[fil])
  

    const addTodo = () => {
      if(!inputRef.current.value.trim()) {
        return;
      }
      handleAdd(inputRef.current.value);
      inputRef.current.value = ""
    }

  return ( 
    <div className='p-5 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>TODO APP</h1>
      <div className='flex mb-4'>
        <input ref={inputRef} type="text" placeholder='Enter Todo' className='border p-2 flex-1 mr-2'/>
        <button type='submit' onClick={addTodo}>ADD</button>
      </div>
      <ul> {todos.map((todo) => (<li className={`flex items-center justify-between p-2 m-2 rounded ${todo.completed ? "bg-green-200 line-through" : " "}`} key={todo.id}><span>{todo.text}</span> 
      <div className='flex gap-2'>
        <button className='bg-yellow-400 px-2 rounded' onClick={ () => handleToggle(todo.id)}>TOGGLE</button>
        <button className='bg-red-400 px-2 rounded' onClick={() =>handleDelete(todo.id)} >DELETE</button>
      </div> </li>))} </ul>

        <div className='gap-2'>
          <h2 className='bg-amber-200 mt-10'>Todo List</h2>
           <FilterTodo filteredTodos={filteredTodos}/>
          <button className='bg-gray-400 px-2 rounded' onClick={ () => setFil("all")}>ALL</button>
          <button className='bg-green-400 px-2 rounded' onClick={ () => setFil("completed")}>Completed</button>
          <button className='bg-red-400 px-2 rounded' onClick={ () => setFil("pending")}>Pending</button>
        </div>
    </div>
  )
}


export default TodoApp