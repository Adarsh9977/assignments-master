import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <input type="text" placeholder='title' /> <br/>
      <input type="text" placeholder='description'/><br/>
      <button onClick >Add Todo</button>
     </div>
    </>
  )
}

export default App
