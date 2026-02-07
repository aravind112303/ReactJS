import { useState } from 'react'
import ModalControl from './components/ModalControl'
import ThemeContext from './ThemeContext';
import Theme from './components/Theme';


const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div style={{
            backgroundColor: theme==="light" ? "white" : "black",
            color: theme==="light" ? "white": "black",
            height:"100vh"
        }}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Theme/>
      </ThemeContext.Provider>
      <ModalControl/>
    </div>
  )
}

export default App