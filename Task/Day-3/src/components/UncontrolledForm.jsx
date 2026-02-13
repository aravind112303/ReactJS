import { useState, useRef } from "react"

const UncontrolledForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const [submitted, setSubmitted] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        console.log("Uncontrolled form submitted");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder="Enter name here"  name='name'/>
            <input ref={emailRef} type="email" placeholder="Enter email here" name='email'/>
            <button type="submit"> Submit</button>
        </form>

        {submitted && <div>
            <h1>UnControlled Form Data</h1>
        <p>Name : {nameRef.current.value}</p>
        <p>Email : {emailRef.current.value}</p>
        </div> }
    </div>
  )
}

export default UncontrolledForm