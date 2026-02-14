import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [viewId, setViewId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [hasmore, setHasmore] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        let res = await fetch("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5")
        let data = await res.json()
        setUsers(data); 
         
      } catch (error) {
        setErr("Error while fetching");
      } finally {
        setLoading(false)
      }
    }
    fetchUsers();
  },[])

  const axiosFetch = async () => {
    try {
      setLoading(true)
      let start = page*5;
      let response =await axios.get(`https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=5`)
      if(response.data.length ===  0) {
        
      }
      setUsers([...users,...response.data]);
    } catch (error) {
      setErr("Error while loading next 5 data")
      
    } finally {
      setLoading(false)
    }
  }


  return (
    <div>
      <h1 className='text-3xl font-bold m-5 p-5'>USER PROFILE</h1>
      {loading && <p className='m-5 text-blue-300'> Loading...</p>}
      {err && <p className='m-5 text-red-300'>{err}</p>}
      {users.map(user => {
        return <div key={user.id} className='m-5 p-5 bg-blue-200 w-3xs'>
            <p>User id : {user.id}</p>
            <p> Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>City : {user.address.city}</p>
            {viewId === user.id && <div>
              <p>Phone : {user.phone}</p>
              <p>Website : {user.website}</p>
              </div>}

            <button className='bg-red-300 px-2 py-2 rounded m-5' onClick={() => {
              setViewId(viewId === user.id ? null: user.id)
            }}>{viewId === user.id ? "Hide Details" : "View Details"} </button>
        </div>
      })}
      <button className='bg-yellow-200 px-2 rounded m-5' onClick={axiosFetch} disabled={loading}>{loading ? "Loading" : "Load more"}</button>
    </div>
  )
}

export default App