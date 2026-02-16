import React from 'react'
import { useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import fetchUsers from './usersthunk';

const App = () => {
  const dispatch = useDispatch();
  const {data , loading, error} = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(fetchUsers());
  },[])
  
  if(loading) {
    return <p>Loading...</p>
  }
  else if(error) {
    return <p>Error : {error}</p>
  }
  else 
    return <div>
      <ul>
        {data.map((user) => 
           <li key={user.id}>{user.name}</li>
        )}
      </ul>
    </div>
}

export default App