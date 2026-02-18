import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import Header from './components/Header';
import Least from './components/Least';

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
       <ThemeContext.Provider value={{theme, setTheme}}>
        <Header/>
        <Least/>
       </ThemeContext.Provider>
    </div>
  )
}

export default App