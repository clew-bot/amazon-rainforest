import { useState } from 'react'
import './App.css'
import  Nav from './components/Nav/Nav'
import Dropdown from './components/Dropdown/Dropdown'
import Header from './components/Header/Header'
import { LayoutGroup } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Header content="Explore the Rainforest" />
    <Dropdown />
    </>
  )
}

export default App
