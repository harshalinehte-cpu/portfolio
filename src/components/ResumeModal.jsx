import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText, CheckCircle2 } from 'lucide-react'
import { ArrowUpRightIcon, SparkleIcon } from './SocialIcons'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900 border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between corner-border-box"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                  Harshali Nehte — Resume
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">B.Tech IT Student • UI/UX Enthusiast</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Document Content */}
          <div className="my-6 p-6 sm:p-8 bg-[#0A0D14] border border-white/10 rounded-2xl overflow-y-auto space-y-6 text-left">
            <div className="border-b border-white/10 pb-4">
              <h1 className="font-display text-2xl font-bold text-white uppercase tracking-tight">HARSHALI NEHTE</h1>
              <p className="text-xs font-mono text-purple-400 mt-0.5">B.Tech Information Technology Student</p>
              <p className="text-xs text-slate-400 mt-1">Bhopal, Madhya Pradesh | Harshali Nehte Portfolio</p>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">OBJECTIVE</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Motivated 3rd-year B.Tech IT student seeking software engineering & UI/UX design internship opportunities to apply programming logic in Java, web technologies, and user interface concepts.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">EDUCATION</h2>
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/10">
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <span className="font-bold text-white font-display">B.Tech — Information Technology</span>
                  <span className="text-purple-400 font-mono text-xs">2024 – 2028</span>
                </div>
                <p className="text-xs text-slate-400">Bansal Institute of Science and Technology, Bhopal</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">SKILLS & COMPETENCIES</h2>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-300 font-mono">Java (Core & OOP)</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-blue-300 font-mono">C Programming</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono">HTML5 & CSS3</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-300 font-mono">SQL & DBMS</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-pink-300 font-mono">UI/UX Wireframing</span>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">HONORS</h2>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Google Student Ambassador 2026</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Participant in technical hackathons and campus developer events</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-slate-400 uppercase">
              📄 OFFICIAL RESUME PREVIEW
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono uppercase transition-colors cursor-pointer"
              >
                CLOSE
              </button>

              <button
                onClick={() => alert('Downloading Resume PDF (Placeholder link)...')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold uppercase shadow-md active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
