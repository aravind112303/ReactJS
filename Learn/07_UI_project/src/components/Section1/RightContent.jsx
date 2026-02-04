import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id="right" className='h-full p-4 w-2/3 flex flex-nowrap gap-10 overflow-auto'>
        {
          props.users.map(function(elem,idx) {
            return <Rightcard color={elem.color} key={idx} id={idx} img={elem.img} tag={elem.tag}/>
          })
        }
    </div>
  )
}

export default RightContent