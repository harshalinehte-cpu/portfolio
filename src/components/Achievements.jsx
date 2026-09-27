import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { SparkleIcon } from './SocialIcons'

export default function Certifications() {
  const certificationsList = [
    {
      id: 1,
      title: 'Java & DSA',
      issuer: 'Amazon Future Engineer Bootcamp',
      duration: 'Apr 2025 – Jan 2026 (10 Months)',
      category: 'PROGRAMMING & DSA',
      description: 'Comprehensive bootcamp training focusing on core Java programming and Data Structures & Algorithms.',
      link: '#'
    },
    {
      id: 2,
      title: 'Object-Oriented Programming in Java',
      issuer: 'NPTEL',
      duration: 'Jan 2026 – Apr 2026',
      category: 'CORE JAVA & OOP',
      description: 'Academic certification covering advanced object-oriented programming paradigms, inheritance, polymorphism, and exception handling in Java.',
      link: '#'
    },
    {
      id: 3,
      title: 'Figma Basic',
      issuer: 'Udemy',
      duration: 'Completed: 10 Dec 2025',
      category: 'UI/UX DESIGN',
      description: 'Foundational training in Figma covering user interface design, wireframing, components, and layout prototyping.',
      link: '#'
    },
    {
      id: 4,
      title: 'C Programming',
      issuer: 'Simplilearn',
      duration: 'Certified Course',
      category: 'PROGRAMMING FUNDAMENTALS',
      description: 'Fundamental course covering procedural programming, pointers, memory management, and control structures in C.',
      link: '#'
    }
  ]

  return (
    <section id="certifications" className="py-28 relative border-t border-slate-800/80">
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
              <span>06 / CREDENTIALS & CERTS</span>
              <SparkleIcon className="w-3 h-3" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100 uppercase tracking-tight"
            >
              Professional <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">Certifications.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed"
          >
            Verified certifications in Java, Data Structures, OOP, and UI/UX design tools.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#111317] border border-slate-800 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300">
                    {cert.category}
                  </span>
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-950/40 text-purple-300 text-[10px] font-mono tracking-widest uppercase border border-purple-800/50 mb-3">
                  {cert.issuer}
                </span>

                <h3 className="font-display text-lg font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{cert.duration}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all"
                  aria-label="View Certificate"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}