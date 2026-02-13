import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducer } from 'react';

    const initialState = [];
function todoReducer(state,action) {
    switch(action.type) {
      case "ADD_TODO" :
        return [...state, {id: Date.now() , text: action.payload , completed: false}];

      case "TOGGLE_TODO" :
        return state.map((todo) => todo.id === action.payload ? {...todo,completed : !todo.completed}: todo)

      case "DELETE_TODO" :
        return state.filter((todo) => todo.id !== action.payload);

      default :
        return state;
    }
}

export function useTodo() {

    const [todos, dispatch] = useReducer(todoReducer , initialState);

    const handleAdd = useCallback((text) => {
      dispatch({type : "ADD_TODO" , payload:text});
    },[])

    const handleToggle = useCallback(
      (id) => { dispatch({type:"TOGGLE_TODO", payload:id})
},[])

    const handleDelete = useCallback(
      (id) => dispatch({type:"DELETE_TODO" , payload: id})
    )
return {todos , handleAdd, handleToggle, handleDelete};

}
