
import './App.css'
import  Nav from './components/Nav/Nav'
import Dropdown from './components/Dropdown/Dropdown'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import { LayoutGroup } from 'framer-motion'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <div className="snap-start">
    <Nav />
    </div>
    <div className="border-4 border-blue-700">
    <Header content="Explore the Rainforest" />
    </div>
    <Dropdown />
    <Section />
    </div>
  )
}

export default App
