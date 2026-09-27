import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon, SparkleIcon } from './SocialIcons'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 700)
  }

  return (
    <section id="contact" className="py-28 relative border-t border-slate-800/80">
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
              <span>08 / GET IN TOUCH</span>
              <SparkleIcon className="w-3 h-3" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100 uppercase tracking-tight"
            >
              Let's Connect & <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-slate-100 bg-clip-text text-transparent">Collaborate.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed"
          >
            Have a project query, internship opportunity, or just want to connect? Send a message below!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#16191D] border border-slate-800 rounded-3xl p-8 backdrop-blur-md space-y-6 corner-border-box shadow-sm"
          >
            <div>
              <span className="text-xs font-mono text-purple-400 tracking-widest uppercase block mb-2 font-bold">
                DIRECT CONTACT
              </span>
              <h3 className="font-display text-xl font-bold text-slate-100 uppercase">REACH OUT TODAY</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2">
                Open to discussions about B.Tech IT projects, UI/UX collaborations, and student developer initiatives.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111317] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email Address</p>
                  <a href="mailto:harshali.nehte@example.com" className="text-sm font-semibold text-slate-100 hover:text-purple-300 transition-colors">
                    harshalinehte@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111317] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn Profile</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-100 hover:text-blue-300 transition-colors">
                    https://www.linkedin.com/in/harshali-nehte-a5938632b/
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#111317] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">GitHub Profile</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-100 hover:text-slate-300 transition-colors">
                    https://github.com/harshalinehte-cpu
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>BHOPAL, MADHYA PRADESH, INDIA</span>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#16191D] border border-slate-800 rounded-3xl p-8 backdrop-blur-md corner-border-box shadow-sm"
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-950/50 border border-purple-800 text-purple-300 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-100 uppercase">MESSAGE SENT SUCCESSFULLY!</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  Thank you for reaching out, Harshali will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer border border-slate-700"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2 uppercase tracking-wider">
                    YOUR NAME <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#111317] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2 uppercase tracking-wider">
                    YOUR EMAIL <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#111317] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2 uppercase tracking-wider">
                    MESSAGE <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#111317] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-slate-100 hover:bg-white text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-xl active:scale-98 transition-all cursor-pointer group"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowUpRightIcon className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}