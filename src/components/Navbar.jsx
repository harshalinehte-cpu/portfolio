import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { ArrowUpRightIcon } from './SocialIcons'

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'UI/UX', href: '#uiux' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 250

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#EBEBEB]/90 backdrop-blur-xl border-b border-black/10 py-3.5 shadow-md'
          : 'bg-transparent py-5 border-b border-black/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Monogram Brand Badge */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-slate-900 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center font-mono text-xs font-bold text-slate-900 shadow-sm group-hover:border-purple-600 transition-colors">
            HN<span className="text-purple-600 text-[10px] ml-0.5">✦</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider uppercase text-slate-900 group-hover:text-purple-700 transition-colors">
              Harshali Nehte
            </span>
            <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
              B.Tech IT '28
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full border border-slate-300/80 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 relative flex items-center ${
                  isActive
                    ? 'text-purple-900 font-semibold'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-slate-100'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-purple-100/80 border border-purple-400/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            )
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-mono tracking-wider uppercase transition-all cursor-pointer shadow-md group"
          >
            <span>RESUME</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#EBEBEB] border-b border-slate-300 px-4 pt-4 pb-6 mt-3 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-xs font-mono tracking-widest uppercase flex items-center justify-between transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-purple-100 text-purple-900 border border-purple-400/40 font-semibold'
                      : 'text-slate-700 hover:bg-white hover:text-purple-700'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 text-purple-600" />
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenResume()
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F172A] text-white font-mono text-xs tracking-wider uppercase font-semibold shadow-lg"
                >
                  <FileText className="w-4 h-4 text-purple-300" />
                  <span>VIEW RESUME ↗</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
