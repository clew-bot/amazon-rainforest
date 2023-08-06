import './App.css'
import  Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import { useScroll, motion } from 'framer-motion'




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
    
    </>
  )
}

export default App
