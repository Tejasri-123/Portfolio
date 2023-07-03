import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Portfolio from './components/portfolio/Portfolio'
import Education from './components/eduaction/Education'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
  return (
      <>
          <Header />
          <Nav />
          <About />
          <Skills />
          
          <Projects />
          <Education />
          <Portfolio />
          <Contact />
          <Footer />
          
      {/* <Footer /> */}
      
      </>
  )
}

export default App
