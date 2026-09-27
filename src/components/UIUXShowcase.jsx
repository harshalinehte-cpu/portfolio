import { motion } from 'framer-motion'
import { Palette, Smartphone, Monitor, Image as ImageIcon } from 'lucide-react'
import { ArrowUpRightIcon, SparkleIcon, FigmaIcon } from './SocialIcons'

export default function UIUXShowcase() {
  const showcaseItems = [
    {
      id: 1,
      num: '01',
      title: 'Mobile App Wireframe Concept',
      category: 'MOBILE INTERFACE',
      type: 'FIGMA UI CONCEPT',
      description: 'Clean dark-mode mobile dashboard interface focusing on clear typography hierarchy, intuitive card components, and accessible touch targets.',
      tags: ['Mobile UI', 'Dark Mode', 'Figma Wireframes'],
      icon: Smartphone
    },
    {
      id: 2,
      num: '02',
      title: 'Web Design System & Tokens',
      category: 'WEB INTERFACE',
      type: 'DESIGN SYSTEM',
      description: 'Cohesive web UI design tokens, color swatches, button states, and typography scale created for modern web apps.',
      tags: ['Web UI', 'Design System', 'Layout Grid'],
      icon: Monitor
    },
    {
      id: 3,
      num: '03',
      title: 'Event Poster & Graphics',
      category: 'VISUAL DESIGN',
      type: 'GRAPHICS WORK',
      description: 'Minimalist tech event promotional graphic featuring balanced composition, sleek gradients, and bold typographic emphasis.',
      tags: ['Poster Design', 'Visual Aesthetics', 'Graphics'],
      icon: ImageIcon
    }
  ]

  return (
    <section id="uiux" className="py-28 relative bg-[#0A0D14] border-t border-white/5 bg-grid-pattern">
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
              <span>04 / UI/UX SHOWCASE</span>
              <SparkleIcon className="w-3 h-3" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight"
            >
              Creative <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">Wireframes.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed"
          >
            A visual gallery of wireframes, design concepts, and graphic layouts crafted with attention to user experience.
          </motion.p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => {
            const IconComp = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group corner-border-box"
              >
                <div>
                  {/* Mock Figma Frame */}
                  <div className="h-52 bg-slate-950 border-b border-white/10 p-5 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      </div>
                      <span className="text-[10px] font-mono text-purple-400 tracking-wider">
                        {item.type}
                      </span>
                    </div>

                    <div className="my-auto flex flex-col items-center justify-center text-slate-400 gap-2 py-4">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-purple-300 shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">FIGMA FRAME MOCK</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{item.category}</span>
                      <FigmaIcon className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-950/80 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                    DESIGN CONCEPT
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <ArrowUpRightIcon className="w-4 h-4" />
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
