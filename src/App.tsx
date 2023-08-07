import './App.css'
import  Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Result from './components/Results/Results'
import { useScroll, motion } from 'framer-motion'
import { useState } from 'react'




function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    {/* Start  */}
    <Nav />
    {/* Topics */}
    <Header content="Explore the Rainforest" />
    {/* Dropdown with Quiz */}
    <Section/>
    {/* Quiz Results */}
    <Result/>
    
    
    </>
  )
}

export default App
