import React, { useState } from 'react'

const ControlledForm = () => {
     const [form, setForm] = useState({ 
        name : " ",
        email : " "
      })
    const [SubmittedData, setSubmittedData] = useState(false)

      function submitHandler(e) {
        e.preventDefault();
        console.log("Controlled Form Submitted");
        setSubmittedData(true);
        
      }
      function handleChange(e) {
        setForm({...form, [e.target.name]:e.target.value})
      }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter name here" value={form.name} name='name' onChange={handleChange}/>
            <input type="email" placeholder="Enter email here" value={form.email} name='email' onChange={handleChange} />
            <button type='submit'>Submit </button>
        </form>

        {SubmittedData && <div>
            <h1>Controlled Form Data</h1>
        <p>Name : {form.name}</p>
        <p>Email : {form.email}</p>
        </div> }
    </div>
  )
}

export default ControlledForm