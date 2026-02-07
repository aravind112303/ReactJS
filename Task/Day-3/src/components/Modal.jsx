import ReactDom from "react-dom";

function Modal({message}) {
    
    return ReactDom.createPortal (
        <>
        <div className="flex m-20 p-20  fixed items-center">
            <div className=" rounded-2xl bg-black text-white p-10 items-center flex">{message}
                <button className="bg-blue-400 white p-5 justify-items-center flex m-10 rounded-full text-white ">Close</button>
            </div>
        
        </div>
        </>
        ,document.getElementById("modal-root")
    )
}

export default Modal