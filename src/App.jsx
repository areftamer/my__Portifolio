import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import Hero from './Componants/Hero/Hero'
import About from './Componants/About/About'
import Service from './Componants/Service/Service'
import Projects from './Componants/Project/Projects'
// import Contact from './Componants/Contact/Contact'
import Footer from './Componants/Footer/Footer'
import Contact2 from './Componants/Contact2/Contact2'

const App = () => {
  return (
    <>
       
     <Navbar></Navbar>
     <Hero></Hero><hr style={{width: "80%" , marginLeft : "12rem"}} />
     <About></About><hr style={{width: "80%" , marginLeft : "12rem"}} />
     <Service></Service>
     <Projects></Projects><hr style={{width: "80%" , marginLeft : "12rem"}} />
     {/* <Contact></Contact>   */}
     <Contact2></Contact2>
     <Footer></Footer>

    </>
  )
}

export default App