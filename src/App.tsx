import { useState } from 'react'
import './App.css'
import  Nav from './components/Nav/Nav'
import Dropdown from './components/Dropdown/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Dropdown />
    </>
  )
}

export default App
