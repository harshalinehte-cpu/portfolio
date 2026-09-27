import { motion } from 'framer-motion'
import { FileText, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon, SparkleIcon } from './SocialIcons'
import AvatarIllustration from './AvatarIllustration'

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-300/30 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>B.TECH IT STUDENT • UI/UX ENTHUSIAST</span>
              <SparkleIcon className="w-3.5 h-3.5 text-purple-600 ml-1" />
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[0.95] uppercase"
            >
              HARSHALI <br />
              <span className="bg-gradient-to-r from-purple-800 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
                NEHTE.
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal"
            >
              Building thoughtful digital experiences through technology, design, and creativity.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-mono text-xs tracking-wider uppercase font-bold shadow-lg active:scale-95 transition-all group"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRightIcon className="w-4 h-4 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-mono text-xs tracking-wider uppercase font-semibold border border-slate-300 active:scale-95 transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-purple-600" />
                <span>RESUME</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </motion.div>

            {/* Student Stats & Quick Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-slate-300 grid grid-cols-3 gap-6 w-full max-w-xl"
            >
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-slate-900">B.Tech IT</p>
                <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">2024–2028</p>
              </div>

              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-purple-800">7+ Skills</p>
                <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Java, SQL, UI/UX</p>
              </div>

              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-indigo-800">Google SA</p>
                <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Ambassador 2026</p>
              </div>
            </motion.div>

            {/* Social Profile Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">PROFILES:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-purple-700 hover:border-purple-500 transition-colors shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-blue-700 hover:border-blue-500 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Avatar Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <AvatarIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
