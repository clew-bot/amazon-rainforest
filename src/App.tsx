
import './App.css'
import  Nav from './components/Nav/Nav'
import Dropdown from './components/Dropdown/Dropdown'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import { useTransform, useScroll, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'




function App() {
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    console.log(scrollYProgress)
  }, [scrollYProgress])

  return (
    <div>
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="">
    <Nav />
    </div>
    <div className="">
    <Header content="Explore the Rainforest" />
    </div>
    <Dropdown />
    <Section />
    </div>
  )
}

export default App
