import ReactDom from "react-dom";

function Modal({message , first, setfirst}) {
    
    return ReactDom.createPortal (
        <>
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
  <div className="bg-white text-black p-10 rounded-2xl flex flex-col items-center">
    {message}
    <button className="mt-4 px-4 py-2 rounded-full bg-blue-500 text-white" onClick={() => {
      setfirst(!first)
    }}>
      Close
    </button>
  </div>
</div>

        </>
        ,document.getElementById("modal-root")
    )
}

export default Modal