import { useState } from 'react'
import './App.css'
import  Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
        <h1 className="text-3xl font-bold underline bg-yellow-300">
      Hello world!
    </h1>
    </>
  )
}

export default App
