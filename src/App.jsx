import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import TechnologyExperties from './components/TechnologyExperties'
import MyProjects from './components/MyProjects'
const [color, setColor] = useState(false); // camelCase better hai

function App() {
  return (
    <>
      <style>
        {`
        .red {
         color:red;
        }
        .blue {
        color:blue;
        }
        `}
      </style>
      <Navbar />
      <Home />
      <Contact />
      <TechnologyExperties />
      <MyProjects />

    </>
  )
}

export default App
