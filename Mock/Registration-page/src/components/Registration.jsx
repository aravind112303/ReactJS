import React, { useState } from 'react'

const Registration = () => {
    // const [form, setform] = useState({name :"", email: ""})
    const [, set] = useState(second)
    function changeHandler() {
        setform(...form , e.target.name = e.target.value);
        console.log("data Submitted in form");
        
    }
    function onSubmit() {
        e.preventDefault();
        // const {name , email } = (...form)
        localStorage.setItem(Object.keys(form) , Object.values(form))
        console.log("Data Saved in localStorage");
        
    }
  return (
    <>
        <h1>Registration Page</h1>
        <form onSubmit={onSubmit}>
            <input type="text" name='name' placeholder='Enter name' onClick={(e) => changeHandler}/>
            <input type="text" name='email' placeholder='Enter email' onClick={(e)=> changeHandler}/>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Registration