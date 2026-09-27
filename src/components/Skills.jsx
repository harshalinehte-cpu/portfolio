import { motion } from 'framer-motion'
import { Code, Terminal, FileCode, Palette, Database, Layers, Cpu } from 'lucide-react'
import { SparkleIcon } from './SocialIcons'

export default function Skills() {
  const skillCategories = [
    {
      category: 'PROGRAMMING LANGUAGES',
      icon: Terminal,
      skills: [
        { name: 'Java', level: 'Core Concepts & OOP', desc: 'Object Oriented Programming, Classes, Inheritance & Collections', icon: Code },
        { name: 'C', level: 'Fundamental Programming', desc: 'Control structures, functions, pointers & memory basics', icon: Terminal },
      ]
    },
    {
      category: 'WEB FUNDAMENTALS',
      icon: FileCode,
      skills: [
        { name: 'HTML', level: 'Semantic Markup', desc: 'Semantic HTML5 structure, web accessibility & SEO practices', icon: FileCode },
        { name: 'CSS', level: 'Styling & Layouts', desc: 'Responsive design, Flexbox, CSS Grid & Tailwind CSS', icon: Palette },
      ]
    },
    {
      category: 'DATABASE MANAGEMENT',
      icon: Database,
      skills: [
        { name: 'SQL', level: 'Query Language', desc: 'DDL, DML queries, joins, filtering & data retrieval', icon: Database },
        { name: 'DBMS', level: 'Database Concepts', desc: 'Relational database fundamentals, ER diagrams & normalization', icon: Layers },
      ]
    },
    {
      category: 'UI/UX & DESIGN',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 'User Experience', desc: 'Wireframing, prototyping, layout hierarchy & Figma concepts', icon: Palette },
      ]
    }
  ]

  return (
    <section id="skills" className="py-28 relative bg-[#0A0D14] border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs tracking-widest uppercase mb-3"
            >
              <span>02 / TECHNICAL SKILLS</span>
              <SparkleIcon className="w-3 h-3" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight"
            >
              Core <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">Competencies.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed font-normal"
          >
            Technical foundation and software principles learned through academic coursework and hands-on practice.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-slate-900/50 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between corner-border-box"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <span className="text-xs font-mono tracking-widest text-purple-300 font-bold">
                      {category.category}
                    </span>
                    <CatIcon className="w-4 h-4 text-slate-400" />
                  </div>

                  {/* Skill Cards */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon
                      return (
                        <div
                          key={skill.name}
                          className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-purple-500/40 transition-all group"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2.5">
                              <SkillIcon className="w-4 h-4 text-purple-400" />
                              <span className="font-display font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
