import UserCard from './components/UserCard'
import { useState } from 'react';

const user = {
  name : "Aravind" , 
  age : 23 ,
  location : "Jagtial" , 
  avatarURL : "https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {visible && <UserCard user = {user}/>}
      <button onClick={() => setVisible(!visible)} className='text-white bg-red-700 hover:bg-red-600 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-15 my-15 flex'>{visible ? "Hide Profile" : "Show Profile"}</button>
    </div>
  )
}

export default App