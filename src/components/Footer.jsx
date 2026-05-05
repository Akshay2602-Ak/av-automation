import { Zap, Github, Linkedin, Twitter, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

const links = {
  Company: ['About Us', 'Services', 'Projects', 'Blog', 'Contact'],
  Services: ['Web Development', 'AI Automation', 'Oracle DBA', 'DevOps', 'Dashboards'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-2 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center glow-cyan group-hover:scale-110 transition-transform">
                <Zap size={18} className="text-[#020818] fill-current" />
              </div>
              <div>
                <div className="font-display font-bold text-white tracking-wide">AV Automation</div>
                <div className="text-xs text-gray-600 font-mono">& AI Solutions</div>
              </div>
            </button>

            <p className="text-gray-500 font-body text-sm leading-relaxed mb-5 max-w-xs">
              Premium full-stack development, AI automation, and Oracle DBA services from Coimbatore, India.
              Building tomorrow's digital infrastructure, today.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-white text-sm mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const id = item.toLowerCase().replace(/\s+/g, '-')
                        const map = { 'about-us': 'about', 'web-development': 'services', 'ai-automation': 'services', 'oracle-dba': 'services', 'devops': 'services', 'dashboards': 'services' }
                        scrollTo(map[id] || id)
                      }}
                      className="text-sm text-gray-500 hover:text-gray-300 font-body transition-colors flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="glass border border-white/8 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <div className="text-sm font-display font-semibold text-white mb-0.5">Ready to start your project?</div>
            <div className="text-xs text-gray-500 font-mono">Free consultation · 24hr response · No commitment</div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="mailto:hello@avautomation.in"
              className="btn-outline flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs"
            >
              <Mail size={13} /> Email Us
            </a>
            <a
              href="https://wa.me/919363867353"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-display font-bold bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30 transition-all"
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-600 font-mono">
            © {year} AV Automation & AI Solutions. All rights reserved. Built in Coimbatore, India 🇮🇳
          </p>
          <p className="text-xs text-gray-700 font-mono">
            Crafted with <span className="text-red-500">♥</span> by{' '}
            <span className="text-cyan-400/70">Akshay Kumar</span> &{' '}
            <span className="text-purple-400/70">Vigneswaran</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
