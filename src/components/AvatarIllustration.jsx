import { motion } from 'framer-motion'
import { Terminal, Palette } from 'lucide-react'
import { SparkleIcon } from './SocialIcons'
import avatarImg from '../assets/avatar.png' // Yahan apni nayi image ka path set karein

export default function AvatarIllustration() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto flex items-center justify-center p-4">
      {/* Soft Ambient Light Halo */}
      <div className="absolute w-80 h-80 bg-slate-300/40 rounded-full filter blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Outer Frame Container */}
      <div className="relative w-full h-full rounded-3xl border border-slate-300/80 bg-white p-3 backdrop-blur-xl shadow-lg corner-border-box overflow-hidden group">
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-10" />
        <div className="absolute top-4 right-4 text-purple-600 opacity-80 z-20">
          <SparkleIcon className="w-5 h-5" />
        </div>
        <div className="absolute bottom-4 left-4 text-slate-700 font-mono text-[10px] tracking-widest uppercase z-20 bg-white/90 px-2 py-0.5 rounded-md border border-slate-300">
          ✦ HARSHALI AVATAR
        </div>

        {/* Avatar Image Frame matching Light Grey Theme */}
        <div className="relative z-0 w-full h-full rounded-2xl overflow-hidden bg-[#EBEBEB] border border-slate-200 flex items-center justify-center">
          <img
            src={avatarImg}
            alt="Harshali Nehte Avatar"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Floating Pill Chips */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 left-2 z-30 bg-white border border-slate-300 px-3 py-1.5 rounded-full shadow-md backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-slate-800"
      >
        <Terminal className="w-3.5 h-3.5 text-amber-600" />
        <span>JAVA & SQL</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 right-2 z-30 bg-white border border-slate-300 px-3 py-1.5 rounded-full shadow-md backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-slate-800"
      >
        <Palette className="w-3.5 h-3.5 text-purple-600" />
        <span>UI/UX CREATIVE</span>
      </motion.div>
    </div>
  )
}