
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skill from './Components/Skill/skill'
import Contact from './Components/Contact/Contact'
import About from "./Components/About/About";
import Project from './Components/Projects/Project'

function App() {

  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  )
}

export default App
