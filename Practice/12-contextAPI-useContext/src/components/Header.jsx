import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'

const Header = () => {
    const {theme , setTheme} = useContext(ThemeContext);
  return (
    <div>
        <h1>theme : {theme}</h1>
        <button onClick={() => {
            setTheme(theme==="light" ? "dark":"light")
        }}>Change</button>
    </div>
  )
}

export default Header