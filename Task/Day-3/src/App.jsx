import { useState } from 'react'
import ModalControl from './components/ModalControl'
import ThemeContext from './ThemeContext';
import Theme from './components/Theme';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import ErrorBoundary from './components/ErrorBoundary'
import ErrorShow from './components/ErrorShow';


const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div style={{
  backgroundColor: theme === "light" ? "white" : "black",
  color: theme === "light" ? "black" : "white", // text visible
  height: "100vh"
}}
>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Theme/>
      </ThemeContext.Provider>
      <ModalControl/>
      <ControlledForm/>
      <UncontrolledForm/>
      
      <ErrorBoundary>
        <ErrorShow/>
      </ErrorBoundary>
    </div>
  )
}

export default App