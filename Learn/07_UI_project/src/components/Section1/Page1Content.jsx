import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const page1Content = (props) => {
  return (
    <div className='py-10 flex gap-10 justify-between items-center h-[90vh] px-18'>
        <LeftContent/>
        <RightContent users ={props.users}/>
    </div>
  )
}

export default page1Content