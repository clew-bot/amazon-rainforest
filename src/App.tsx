import './App.css'
import  Nav from './components/Nav/Nav'
import Dropdown from './components/Dropdown/Dropdown'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import { useTransform, useScroll, motion, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'




function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    <Nav />
    <Header content="Explore the Rainforest" />
    <Section />
    {/* <Dropdown /> */}
    
    </>
  )
}

export default App
