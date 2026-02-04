import React from 'react'

const RightcardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-14 w-14 justify-center px-5 py-2.5 items-center'>{props.id+1}</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, vero!</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-7 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-5 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        </div>
  )
}

export default RightcardContent