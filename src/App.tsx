import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Result from "./components/Results/Results";
import Change from "./components/Change/Change";
import { useScroll, motion } from "framer-motion";

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
      <Section />
      {/* Make a Change */}
      <Change />
      {/* Quiz Results */}
      <Result />
    </>
  );
}

export default App;
