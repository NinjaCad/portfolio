import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
