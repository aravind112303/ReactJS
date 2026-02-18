import Title from './components/Title'
import Body from './components/Body'
import Footer from './components/Footer'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <h1>Profile Card</h1>
      <Card>
        <Title title="Hello World"/>
        <Body name="Aravind"/>
        <Footer/>
      </Card>
    </div>
  )
}

export default App