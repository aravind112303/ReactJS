import React, { useState } from 'react'

const ErrorShow = () => {
    const [crash, setCrash] = useState(false);
    if(crash) {
        throw new Error("App crashed");
    }
  return (
    <div>
        <button className='px-10 py-5 m-10 bg-green-800 text-white rounded-full' onClick={() => {setCrash(true)}}>Crash App</button>
    </div>
  )
}

export default ErrorShow