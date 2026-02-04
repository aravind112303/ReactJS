
import RightcardContent from './RightcardContent'

const Rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightcardContent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard