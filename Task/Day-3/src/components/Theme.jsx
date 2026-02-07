import { useContext, useState } from "react"
import ThemeContext from "../ThemeContext"


const Theme = () => {
    const {theme , setTheme} = useContext(ThemeContext);
  return (
    <div>
        <h2>Theme:{theme}</h2>
        <button onClick={() => setTheme(theme==="light"?"dark":"light")
        } className="rounded-full bg-red-800">Toggle</button>
    </div>
  )
}

export default Theme