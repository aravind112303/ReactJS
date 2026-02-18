import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'

const Least = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div>
        <h1>{theme}</h1>
    </div>
  )
}

export default Least