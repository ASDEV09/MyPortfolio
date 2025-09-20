import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import TechnologyExperties from './components/TechnologyExperties'
import MyProjects from './components/MyProjects'

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
         .my {
          background-image: url('61ci+uFswGL._AC_SL1500_.jpg');
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 400px;
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
