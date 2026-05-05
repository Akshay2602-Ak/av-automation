import { useEffect, useState } from 'react'
import { ArrowRight, Play, Code2, Database, Brain, Cpu, Globe, BarChart3 } from 'lucide-react'

const WORDS = ['Full-Stack Development','AI Automation','Oracle Apps DBA','DevOps & Cloud','Business Intelligence']

const floatingCards = [
  { icon: Code2,    label: 'React.js',    color: '#C87740', delay: 0,   pos: 'top-24 right-12 md:right-24' },
  { icon: Brain,    label: 'AI/ML',       color: '#E8623A', delay: 1,   pos: 'top-40 right-6  md:right-8'  },
  { icon: Database, label: 'Oracle DBA',  color: '#F0A850', delay: 2,   pos: 'bottom-32 right-16 md:right-32' },
  { icon: Cpu,      label: 'Automation',  color: '#C87740', delay: 0.5, pos: 'bottom-48 right-4 md:right-8' },
  { icon: Globe,    label: 'Web Dev',     color: '#E09058', delay: 1.5, pos: 'top-1/2 left-4 md:left-8' },
  { icon: BarChart3,label: 'Dashboards',  color: '#F0A850', delay: 2.5, pos: 'bottom-40 left-8 md:left-20' },
]

export default function Hero() {
  const [wordIdx, setWordIdx]     = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)
  const [mounted, setMounted]     = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const word = WORDS[wordIdx]
    let t
    if (!deleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    else if (!deleting && displayed.length === word.length)
      t = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45)
    else if (deleting && displayed.length === 0) {
      setDeleting(false); setWordIdx(i => (i + 1) % WORDS.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, wordIdx])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden animated-gradient">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: 'rgba(200,119,64,0.07)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px]"
          style={{ background: 'rgba(232,98,58,0.06)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className={`transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono tracking-widest uppercase mb-6"
              style={{ border: '1px solid rgba(200,119,64,0.25)', color: '#C87740' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C87740' }} />
              Available for Projects · Coimbatore, India
            </div>

            <h1 className="hero-title font-zeroarea font-black leading-none tracking-tight mb-4">
              <span className="block glitch-text" data-text="WE BUILD" style={{ color: '#E8D5C0', fontSize:'clamp(3rem,7vw,5rem)' }}>
                WE BUILD
              </span>
              <span className="block gradient-text" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
                THE FUTURE
              </span>
              <span className="block text-2xl md:text-3xl font-body font-medium mt-2 tracking-wide" style={{ color: 'rgba(232,213,192,0.65)' }}>
                of Digital Business
              </span>
            </h1>

            <div className="flex items-center gap-3 my-6">
              <div className="h-px w-8" style={{ background: 'linear-gradient(90deg,#C87740,transparent)' }} />
              <span className="text-lg md:text-xl font-body typewriter-cursor" style={{ color: 'rgba(232,213,192,0.8)' }}>
                <span className="font-semibold" style={{ color: '#C87740' }}>{displayed}</span>
              </span>
            </div>

            <p className="font-body text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(232,213,192,0.6)' }}>
              Premium tech solutions by{' '}
              <span style={{ color: '#E8D5C0', fontWeight: 600 }}>Akshay Kumar</span> &{' '}
              <span style={{ color: '#E8D5C0', fontWeight: 600 }}>Vigneswaran</span> — transforming
              ideas into high-performance digital products with AI automation and enterprise-grade engineering.
            </p>

            <div className="flex items-center gap-6 mb-10">
              {[
                { val: '10+', label: 'Projects Delivered' },
                { val: '8+', label: 'Happy Clients' },
                { val: '3+',  label: 'Years Experience' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="font-zeroarea font-bold text-2xl gradient-text-warm">{val}</div>
                  <div className="text-xs font-mono tracking-wide" style={{ color: 'rgba(200,119,64,0.55)' }}>{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('contact')} className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm">
                Hire Us <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo('projects')} className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm">
                <Play size={14} className="fill-current" />
                View Our Work
              </button>
            </div>
          </div>

          {/* Right */}
          <div className={`hidden lg:block relative h-[500px] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
              <div className="absolute inset-0 rounded-full border animate-[spin_20s_linear_infinite]" style={{ borderColor: 'rgba(200,119,64,0.2)' }} />
              <div className="absolute inset-4 rounded-full border animate-[spin_15s_linear_infinite_reverse]" style={{ borderColor: 'rgba(232,98,58,0.2)' }} />
              <div className="absolute inset-8 rounded-full border animate-[spin_10s_linear_infinite]" style={{ borderColor: 'rgba(240,168,80,0.2)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl glass glow-raisin flex items-center justify-center"
                  style={{ border: '1px solid rgba(200,119,64,0.35)' }}>
                  <span className="font-zeroarea font-black text-xl gradient-text">AV</span>
                </div>
              </div>
            </div>

            {floatingCards.map(({ icon: Icon, label, color, delay, pos }, i) => (
              <div key={label} className={`absolute ${pos} float-${(i%4)+1}`} style={{ animationDelay: `${delay}s` }}>
                <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 card-hover transition-all group"
                  style={{ border: '1px solid rgba(200,119,64,0.12)' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}18` }}>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-xs font-mono whitespace-nowrap" style={{ color: 'rgba(232,213,192,0.75)' }}>{label}</span>
                </div>
              </div>
            ))}

            <div className="absolute bottom-8 left-4 glass rounded-xl p-4 font-mono text-xs max-w-[200px]"
              style={{ border: '1px solid rgba(200,119,64,0.1)' }}>
              <div style={{ color: 'rgba(200,119,64,0.4)' }} className="mb-1">// AV Solutions</div>
              <div><span style={{ color: '#E8623A' }}>const</span> <span style={{ color: '#C87740' }}>result</span> <span style={{ color: 'rgba(232,213,192,0.5)' }}>= await</span></div>
              <div className="pl-2"><span style={{ color: '#F0A850' }}>automate</span><span style={{ color: 'rgba(232,213,192,0.5)' }}>(</span></div>
              <div className="pl-4"><span style={{ color: '#E09058' }}>'your-business'</span></div>
              <div className="pl-2"><span style={{ color: 'rgba(232,213,192,0.5)' }}>)</span></div>
              <div className="mt-1" style={{ color: '#C87740' }}>✓ Done in 0.3ms</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'rgba(200,119,64,0.4)' }}>Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom,rgba(200,119,64,0.5),transparent)' }} />
      </div>
    </div>
  )
}