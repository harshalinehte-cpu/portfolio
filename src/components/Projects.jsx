import { motion } from 'framer-motion'
import { FolderGit2, ArrowUpRight } from 'lucide-react'
import { SparkleIcon } from './SocialIcons'

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'SamadhanAI Platform',
      category: 'AI WEB APPLICATION',
      badge: 'FULL STACK / AI',
      description: 'An AI-based platform for automated citizen complaint classification, priority detection, and smart department routing using NLP and Image Recognition.',
      tags: ['React', 'NLP', 'Image Recognition', 'UI/UX'],
      link: 'https://github.com/harshalinehte'
    },
    {
      id: 2,
      title: 'Snake Game in Java',
      category: 'DESKTOP GAME APP',
      badge: 'JAVA & OOP',
      description: 'An interactive classic retro Snake game featuring keyboard controls, score tracking, collision detection, food generation, and OOP concepts.',
      tags: ['Java', 'OOP', 'Event Handling', '2D Graphics'],
      link: 'https://github.com/harshalinehte-cpu/SNAKE-GAME-USING-JAVAA'
    },
    {
      id: 3,
      title: 'Certificate Design Project',
      category: 'VISUAL DESIGN',
      badge: 'GRAPHIC DESIGN',
      description: 'Designed professional event certificates using Adobe Photoshop with strong focus on typography, alignment, spacing, and visual hierarchy.',
      tags: ['Adobe Photoshop', 'Typography', 'Visual Hierarchy', 'Branding'],
      link: 'https://github.com/harshalinehte'
    }
  ]

  return (
    <section id="projects" className="py-28 relative border-t border-slate-800/80">
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
              <span>03 / FEATURED WORK</span>
              <SparkleIcon className="w-3 h-3" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100 uppercase tracking-tight"
            >
              SELECTED <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">PROJECTS.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed"
          >
            AI web builds, Java games, and graphic design projects from resume.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#111317] border border-slate-800 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300">
                    {project.category}
                  </span>
                </div>

                <span className="inline-block px-2 py-0.5 rounded-md bg-purple-950/40 text-purple-300 text-[10px] font-mono tracking-widest uppercase border border-purple-800/50 mb-3">
                  {project.badge}
                </span>

                <h3 className="font-display text-lg font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#0D0F12] text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">SOURCE CODE</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all"
                  aria-label="View Repository"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}