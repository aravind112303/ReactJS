
const UserCard = (props) => {
  return (
    <div className='flex-col px-5 py-5 mx-5 my-5 bg-amber-200 w-50 justify-items-center'>
        <img className='h-full w-50' src={props.user.avatarURL} alt="" />
        <h1 className="text-2xl font-bold">{props.user.name}</h1>
        <h2>Age : {props.user.age}</h2>
        <p>Location : {props.user.location}</p>
    </div>
    
  )
}

export default UserCard