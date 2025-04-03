
import About from './component/About'
import BlurBackground from './component/BlurBackground'
import Contact from './component/Contact'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Projects from './component/Projects'
import Testimonial from './component/Testimonial'

function App() {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className='antialiased overflow-hidden max-w-7xl mx-auto relative z-10 '>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
      </main>
    </>
  )
}

export default App
