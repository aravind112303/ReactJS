import { useState } from 'react'
import Display from './components/Display';
import Input from './components/Input';

const App = () => {
      const [name, setName] = useState("");
  return (
      <div>
      <Input name={name} setName={setName}/>
      <Display name={name}/>
    </div>
  )
}

export default App