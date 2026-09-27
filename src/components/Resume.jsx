import { motion } from 'framer-motion'
import { FileText, Download, Eye, ArrowDown } from 'lucide-react'
import { ArrowUpRightIcon, SparkleIcon } from './SocialIcons'

export default function Resume({ onOpenResume }) {
  return (
    <section id="resume" className="py-24 relative bg-[#0A0D14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-900/80 border border-white/15 rounded-3xl p-8 sm:p-14 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 corner-border-box"
        >
          {/* Subtle Ambient Violet Halo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-mono tracking-widest uppercase mb-4">
              <SparkleIcon className="w-3 h-3 text-purple-400" />
              <span>07 / RESUME & CREDENTIALS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
              Looking for My <br />
              <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                Detailed Resume?
              </span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              Explore my academic record, technical competencies in Java and UI/UX design, course achievements, and project experience in a clean single-page format.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-mono text-xs tracking-wider uppercase font-bold shadow-xl active:scale-95 transition-all cursor-pointer group"
            >
              <span>VIEW RESUME</span>
              <ArrowUpRightIcon className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => alert('Downloading Harshali Nehte Resume (Placeholder link)...')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-white/10 text-slate-200 font-mono text-xs tracking-wider uppercase font-semibold border border-white/20 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>DOWNLOAD PDF</span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
