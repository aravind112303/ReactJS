import { useState } from "react";


const Form = () => {
    const [name , setName] = useState('');
    const [email, setmail] = useState('');
    const [age, setAge] = useState('');
    const [hobbies, sethobbies] = useState([" "]);

    function SubmitHandler(e) {
        e.preventDefault();
         if (name === "") {
    alert("Name is required");
    return;
  }
  if (!email.includes("@")) {
    alert("Enter valid email");
    return;
  }
  if (age <= 10) {
    alert("Age must be greater than 10");
    return;
  }
        console.log("Form submitted");
        console.log(`Name : ${name}`);
        console.log(`Email : ${email}`);
        console.log(`Age : ${age}`);
        hobbies.map((hobby, idx) => {
            console.log(`Hobbies ${idx+1} : ${hobby}`);
        })
        
        setName('');
        setAge('');
        setmail('');
    }
  return (
    <>
        <form>
            <input type="text" placeholder="Enter your Name: " value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Enter your Email: " value={email} onChange={(e) => setmail(e.target.value)}/>
            <input type="number" placeholder="Enter your Age: " value={age} onChange={(e) => setAge(e.target.value)}/>

            <div>
            {hobbies.map((hobby, index) => {
               return (
                <div key={index}>
                     <input type="text" placeholder={`Hobby ${index+1}`} value={hobby} onChange={(e) => {
                    const updated = [...hobbies];
                    updated[index] = e.target.value;
                    sethobbies(updated);
                    }}/>

                    <button type="button" onClick={(e) => {
                        const updated = hobbies.filter((_,i) => index !== i)
                        sethobbies(updated);
                    }}>{`Remove ${index+1}`}</button>
               </div>
               )
            })}

            <button type="button" onClick={(e) => {
                        sethobbies([...hobbies,""])
                    }}> + Add Hobby</button>
            </div>

            <button onClick={(e)=> {
                SubmitHandler(e)
            }} >Submit</button>

        </form>
    </>
  )
}

export default Form