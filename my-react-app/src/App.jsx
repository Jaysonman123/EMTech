import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Solutions from './components/sections/Solutions'
import Projects from './components/sections/Projects'
import Industries from './components/sections/Industries'
import AboutUs from './components/sections/AboutUs'
import Contact from './components/sections/Contact'
import './App.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <a href="#home" className="site-footer__brand" aria-label="EMTech Smart Solutions home">
          <span className="site-footer__brand-name">EMTech</span>
          <span className="site-footer__brand-sub">Smart Solutions</span>
        </a>

        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} EMTech Smart Solutions. All rights reserved.
        </p>

        <nav className="site-footer__links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Projects />
        <Industries />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
