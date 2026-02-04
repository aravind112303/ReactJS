import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'blue',
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'black',
    tag:'Underserved'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661506655044-1d448d4f4c2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'green',
    tag:'Underbanked'
  }
]

const App = () => {
  return (
    <div>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App