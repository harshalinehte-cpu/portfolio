import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react'
import { SparkleIcon } from './SocialIcons'

export default function Education() {
  const coursework = [
    'Object Oriented Programming in Java',
    'Data Structures & Algorithms Basics',
    'Database Management Systems (DBMS)',
    'Computer Networks Fundamentals',
    'Web Engineering & Design Principles',
    'Software Logic & Discrete Math'
  ]

  return (
    <section id="education" className="py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs tracking-widest uppercase mb-3 font-semibold"
            >
              <span>05 / ACADEMIC EDUCATION</span>
              <SparkleIcon className="w-3 h-3" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100 uppercase tracking-tight"
            >
              Qualifications & <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">Degree.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed"
          >
            Formal degree program and core academic coursework in Information Technology.
          </motion.p>
        </div>

        {/* Education Process Style Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#16191D] border border-slate-800 rounded-3xl p-8 backdrop-blur-xl relative corner-border-box shadow-sm"
          >
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#111317] border border-slate-800 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full bg-purple-950/40 text-purple-300 text-[10px] font-mono tracking-widest uppercase border border-purple-800/50 mb-2">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-100">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-lg font-semibold text-purple-300 mt-0.5 font-mono">
                    Information Technology
                  </p>
                  <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-2">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>Bansal Institute of Science and Technology, Bhopal</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-purple-300 text-xs font-mono font-semibold self-start md:self-auto shrink-0">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>2024 – 2028</span>
              </div>
            </div>

            {/* Coursework Grid */}
            <div className="pt-8">
              <h4 className="text-xs font-mono text-slate-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>CORE ACADEMIC SUBJECTS</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3.5 rounded-xl bg-[#111317] border border-slate-800 flex items-center gap-2.5 hover:border-purple-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}