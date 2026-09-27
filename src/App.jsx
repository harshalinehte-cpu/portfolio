import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import UIUXShowcase from './components/UIUXShowcase'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import ResumeModal from './components/ResumeModal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 })

  // Track mouse position with scroll offset so it follows everywhere
  useEffect(() => {
    const handleMouseMove = (e) => {
      // clientX/clientY gives viewport coords, adding scrollY/scrollX makes it track across the whole document
      setMousePosition({ 
        x: e.clientX, 
        y: e.clientY + window.scrollY 
      })
    }

    const handleScroll = () => {
      // Optional: update on scroll if mouse is stationary
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen text-slate-100 selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden font-sans relative">

      {/* Sticky Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <UIUXShowcase />
        <Education />
        <Achievements />
        <Resume onOpenResume={() => setResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Absolute positioned cursor light that follows mouse across entire scrolled document */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none z-50 hidden md:block mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 30%, transparent 70%)',
          filter: 'blur(40px)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s ease-out, top 0.05s ease-out',
        }}
        aria-hidden="true"
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  )
}