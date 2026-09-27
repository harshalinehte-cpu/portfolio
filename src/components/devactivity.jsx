import { motion } from 'framer-motion'
import { Terminal, Code2, Disc, Activity } from 'lucide-react'
import { SparkleIcon } from './SocialIcons'

export default function DevActivity() {
  return (
    <section className="py-16 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs tracking-widest uppercase mb-3 font-semibold">
              <span>LIVE STATUS & ENVIRONMENT</span>
              <SparkleIcon className="w-3 h-3" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-100 uppercase tracking-tight">
              Developer <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">Environment.</span>
            </h3>
          </div>
          <p className="mt-2 md:mt-0 text-slate-400 text-xs sm:text-sm">
            Harshali Nehte • B.Tech IT '28 • Bhopal, India
          </p>
        </div>

        {/* Activity Cards Grid with Real Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* IDE & Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111317] border border-slate-800 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-100 text-sm">Primary IDE & Stack</h4>
                  <p className="text-[11px] font-mono text-slate-400">VS Code • Java • SQL • React</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ACTIVE
              </span>
            </div>

            <div className="bg-[#0D0F12] rounded-2xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800/60 pb-2">
                <span>STUDENT PROFILE</span>
                <span>BANSAL INSTITUTE, BHOPAL</span>
              </div>
              <p className="text-purple-300 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" /> Working on: <span className="text-slate-100">Portfolio & Student Management System</span>
              </p>
              <p className="text-slate-400 text-[11px]">Focusing on Java OOP, DBMS, and UI/UX design.</p>
            </div>
          </motion.div>

          {/* Community & Role Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#111317] border border-slate-800 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                  <Disc className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-100 text-sm">Community & Roles</h4>
                  <p className="text-[11px] font-mono text-slate-400">Google Student Ambassador 2026</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/50 text-indigo-300 text-[10px] font-mono">
                AMBASSADOR
              </span>
            </div>

            <div className="bg-[#0D0F12] rounded-2xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800/60 pb-2">
                <span>INITIATIVE</span>
                <span>GOOGLE FOR DEVELOPERS</span>
              </div>
              <p className="text-indigo-300 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" /> Role: <span className="text-slate-100">Campus Tech Workshops & Community</span>
              </p>
              <p className="text-slate-400 text-[11px]">Building tech awareness and collaborative student networks.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}