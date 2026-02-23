import React, { useState } from 'react'
import Registration from './components/Registration'

const App = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div>
      <button onClick={() => {
        settoggle(toggle?false:true)
      }}>{(!toggle)?"Hide Profile":"Show Profile"}</button>

      {(toggle) && <div>Hello</div>}
      {(!toggle) && <div>Aravind</div>} 
    </div>
  )
}

export default App