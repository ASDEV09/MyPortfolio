import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import TechnologyExperties from './components/TechnologyExperties'
import MyProjects from './components/MyProjects'

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}
      <Navbar/>
      <Home/>
      <Contact/>
      <TechnologyExperties/>
      <MyProjects/>
      
    </>
  )
}

export default App
