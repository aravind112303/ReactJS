import React, { useEffect, useState } from 'react'

export default function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log("Updating items");
  }, [getItems])

  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}
