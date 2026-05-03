import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => l.href.slice(1))
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b py-3'
          : 'bg-transparent py-5'
      }`} style={scrolled ? { background: 'rgba(2,31,38,0.93)', borderBottomColor: 'rgba(200,119,64,0.1)' } : {}}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform glow-raisin"
              style={{ background: 'linear-gradient(135deg,#C87740,#E8623A)' }}>
              <Zap size={18} style={{ color: '#021F26' }} className="fill-current" />
            </div>
            <div>
              <div className="font-zeroarea font-bold text-sm tracking-wide" style={{ color: '#E8D5C0' }}>
                AV<span className="gradient-text"> A&AI</span>
              </div>
              <div className="text-[9px] font-mono tracking-widest uppercase" style={{ color: 'rgba(200,119,64,0.5)' }}>
                Automation & AI Solutions
              </div>
            </div>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="px-4 py-2 text-sm font-body font-medium tracking-wide transition-all duration-200 rounded-lg relative group"
                  style={{ color: active === href.slice(1) ? '#C87740' : 'rgba(232,213,192,0.6)' }}
                >
                  {label}
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px transition-all duration-300"
                    style={{
                      background: 'linear-gradient(90deg,#C87740,#E8623A)',
                      width: active === href.slice(1) ? '80%' : '0%',
                    }} />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => scrollTo('#contact')} className="btn-primary px-5 py-2.5 rounded-lg text-sm">
              Hire Us
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg glass transition-colors"
            style={{ color: open ? '#C87740' : 'rgba(232,213,192,0.7)' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden menu-overlay transition-all duration-400 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(2,31,38,0.97)' }}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {links.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-2xl font-zeroarea font-semibold tracking-wider transition-all duration-300"
              style={{
                color: active === href.slice(1) ? '#C87740' : 'rgba(232,213,192,0.7)',
                transitionDelay: `${i * 60}ms`,
                transform: open ? 'translateY(0)' : 'translateY(16px)',
                opacity: open ? 1 : 0,
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary px-8 py-3 rounded-xl text-base mt-4"
            style={{ transitionDelay: '420ms' }}
          >
            Hire Us →
          </button>
        </div>
      </div>
    </>
  )
}