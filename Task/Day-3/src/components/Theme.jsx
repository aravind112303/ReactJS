import { useContext, useState } from "react"
import ThemeContext from "../ThemeContext"


const Theme = () => {
    const {theme , setTheme} = useContext(ThemeContext);
  return (
    <div>
        <h2>Theme:{theme}</h2>
        <button onClick={() => setTheme(theme==="light"?"dark":"light")
        } className="rounded-full bg-red-800 px-8 py-3 m-10">Toggle</button>
    </div>
  )
}

export default Theme