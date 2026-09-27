import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, SparkleIcon } from './SocialIcons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#07090F] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-center font-mono text-xs font-bold text-purple-300">
                HN<span className="text-purple-400 text-[10px] ml-0.5">✦</span>
              </div>
              <span className="font-display text-lg font-bold text-white uppercase tracking-wider">
                HARSHALI NEHTE
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              B.Tech IT Student • UI/UX Enthusiast • Java Developer. Crafting thoughtful digital experiences through code & creative design.
            </p>
          </div>

          {/* Social Badges & Back to Top */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between md:justify-end gap-6">
            
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshali.nehte@example.com"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-white/10 border border-white/10 text-xs font-mono tracking-wider uppercase text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} HARSHALI NEHTE. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1.5">
            <span>DESIGNED WITH PRECISION & PASSION</span>
            <SparkleIcon className="w-3 h-3 text-purple-400" />
          </p>
        </div>

      </div>
    </footer>
  )
}
