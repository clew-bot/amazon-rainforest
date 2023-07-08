import { useState } from 'react'
import './App.css'
import  Nav from './components/Nav/Nav'
import Dropdown from './components/Dropdown/Dropdown'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import { LayoutGroup } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Header content="Explore the Rainforest" />
    <Dropdown />
    <Section />
    </>
  )
}

export default App
