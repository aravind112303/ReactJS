import { useState } from "react"
import Modal from "./Modal"
const ModalControl = () => {
    const [first, setfirst] = useState(false)
  return (
    <div>
     <button className="px-10 py-5 m-10 bg-amber-950 text-white rounded-full" onClick={() => {
      setfirst(!first)
     }}>{first ? "Hide": "show"}</button>
      {first && <Modal message={"Hello Popup"} first={first} setfirst={setfirst} />}
   
    </div>
  )
}

export default ModalControl