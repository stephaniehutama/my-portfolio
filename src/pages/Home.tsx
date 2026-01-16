import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Skills from "../components/Skills"

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default Home
