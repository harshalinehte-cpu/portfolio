import { motion } from 'framer-motion'
import { Code2, Palette, Database, GraduationCap, Terminal } from 'lucide-react'
import { ArrowUpRightIcon, SparkleIcon } from './SocialIcons'

export default function About() {
  const focusAreas = [
    {
      num: '01',
      icon: Terminal,
      title: 'Java & Logic',
      description: 'Strengthening core programming concepts, object-oriented paradigms, and algorithm logic in Java.',
    },
    {
      num: '02',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting user-centered interfaces, wireframes, and prototypes with clean layout aesthetics.',
    },
    {
      num: '03',
      icon: Code2,
      title: 'Web Fundamentals',
      description: 'Building responsive web interfaces using modern HTML, CSS, JavaScript, and Tailwind CSS.',
    },
    {
      num: '04',
      icon: Database,
      title: 'Database Systems',
      description: 'Understanding relational database management concepts, data modeling, and SQL queries.',
    },
  ]

  return (
    <section id="about" className="py-28 relative border-t border-slate-800/80">
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
              <span>ABOUT ME</span>
              <SparkleIcon className="w-3 h-3" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100 uppercase tracking-tight"
            >
              Engineering Logic Meets <br />
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Creative Design.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed"
          >
            A dedicated Information Technology student exploring the intersection of robust backend programming and intuitive user interfaces.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#16191D] border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between corner-border-box shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-purple-400 font-bold tracking-widest uppercase">
                  BACKGROUND & PASSION
                </span>
                <GraduationCap className="w-5 h-5 text-slate-400" />
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  I am <strong className="text-slate-100 font-bold">Harshali Nehte</strong>, currently pursuing my B.Tech in Information Technology. My journey into tech is driven by curiosity—combining the analytical structure of programming with the visual creativity of UI/UX design.
                </p>
                <p>
                  On the development side, I focus on core <span className="text-purple-300 font-mono font-semibold">Java</span> concepts, object-oriented fundamentals, and web technologies. On the design side, I enjoy sketching intuitive user journeys, wireframing, and refining digital layouts.
                </p>
                <p>
                  I am constantly learning, building personal projects, participating in tech events, and working towards creating clean, accessible, and user-centric software solutions.
                </p>
              </div>
            </div>

            {/* Student Focus Chips */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-mono">
                🎓 B.Tech IT Undergraduate
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-mono">
                🎨 Aspiring UI/UX Designer
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-mono">
                💻 Java & Web Dev
              </span>
            </div>
          </motion.div>

          {/* Focus Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#16191D] border border-slate-800 hover:border-purple-500/50 p-6 rounded-2xl flex flex-col justify-between hover:bg-purple-950/20 transition-all group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-purple-400 font-bold">{area.num}</span>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-slate-100 mb-2">{area.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 flex justify-end">
                    <ArrowUpRightIcon className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}