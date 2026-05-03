import { useState } from 'react'
import { ExternalLink, Github, Shield, ShoppingCart, Home, User, Globe, ArrowRight } from 'lucide-react'

const projects = [
  { id:'ops', icon:Shield,      title:'OpsGuardian',                 category:'DevOps · Monitoring',    color:'#C87740', problem:'Teams lacked real-time visibility into Oracle EBS health, causing delayed incident response.', solution:'Centralised monitoring dashboard with automated alerting, performance analytics, and self-healing scripts.', stack:['React','Node.js','Oracle DB','Python','Docker','AWS'], outcome:'80% faster incident detection, 3× reduction in downtime.', featured:true },
  { id:'ecom',icon:ShoppingCart, title:'E-Commerce Automation System', category:'AI · Automation',        color:'#E8623A', problem:'Owner manually processed 200+ daily orders, causing errors and delays.', solution:'End-to-end automation: order ingestion, inventory sync, invoice generation, WhatsApp notifications.', stack:['Python','OpenAI API','PostgreSQL','FastAPI','WhatsApp API'], outcome:'95% manual effort eliminated; processing from 4 hours to 8 minutes.', featured:true },
  { id:'pg',  icon:Home,         title:'PG Management App',           category:'Full Stack · SaaS',      color:'#F0A850', problem:'Hostel owners managed occupancy and rents through spreadsheets and WhatsApp.', solution:'Full-featured SaaS: tenant profiles, automated rent reminders, room allocation, payment tracking.', stack:['React','Node.js','MongoDB','Twilio','Razorpay'], outcome:'Deployed for 3 PG businesses; 100% on-time rent collection reported.', featured:false },
  { id:'port',icon:User,         title:'Portfolio Website Suite',     category:'Web Design · Frontend',  color:'#E09058', problem:'Professionals needed modern, fast portfolio websites at affordable rates.', solution:'Fully custom portfolio system with dark/light themes, animated sections, contact forms, and blog.', stack:['React','Framer Motion','Tailwind CSS','Vite','Netlify'], outcome:'8+ portfolios delivered; avg. 98+ Lighthouse score achieved.', featured:false },
]

const filters = ['All','DevOps','AI','Full Stack','Web Design']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const filtered = active === 'All' ? projects : projects.filter(p => p.category.toLowerCase().includes(active.toLowerCase()))

  return (
    <div className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(240,168,80,0.3),transparent)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <div className="section-tag mb-3">// our work</div>
          <h2 className="font-zeroarea font-black text-4xl md:text-5xl mb-4" style={{ color: '#E8D5C0' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(232,213,192,0.6)' }}>
            Real solutions built for real clients — each a testament to engineering excellence.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12 reveal">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-xl text-sm font-mono transition-all duration-200 ${active===f ? 'font-bold' : 'glass hover:border-raisin/30'}`}
              style={active===f ? { background:'linear-gradient(135deg,#C87740,#E8623A)', color:'#021F26', border:'none' } : { border:'1px solid rgba(200,119,64,0.15)', color:'rgba(232,213,192,0.55)' }}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => {
            const Icon = p.icon; const sel = selected === p.id
            return (
              <div key={p.id} className="reveal glass rounded-2xl overflow-hidden card-hover cursor-pointer transition-all duration-400"
                style={{ border:`1px solid ${sel ? p.color+'40':'rgba(200,119,64,0.1)'}`, boxShadow:sel?`0 0 40px ${p.color}15`:'none', transitionDelay:`${i*80}ms` }}
                onClick={() => setSelected(sel ? null : p.id)}>
                <div className="p-6 pb-4 relative">
                  <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background:`linear-gradient(135deg,${p.color}08 0%,transparent 60%)` }} />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:`${p.color}15` }}>
                        <Icon size={22} style={{ color:p.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-mono mb-0.5" style={{ color:p.color }}>{p.category}</div>
                        <h3 className="font-zeroarea font-bold text-lg" style={{ color:'#E8D5C0' }}>{p.title}</h3>
                      </div>
                    </div>
                    {p.featured && <span className="px-2 py-1 rounded-lg text-xs font-mono flex-shrink-0" style={{ background:'rgba(200,119,64,0.12)', border:'1px solid rgba(200,119,64,0.25)', color:'#C87740' }}>Featured</span>}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="glass rounded-xl p-3" style={{ border:'1px solid rgba(200,119,64,0.07)' }}>
                      <div className="text-xs font-mono mb-1" style={{ color:'#E8623A' }}>// problem</div>
                      <p className="text-xs font-body leading-relaxed" style={{ color:'rgba(232,213,192,0.5)' }}>{p.problem}</p>
                    </div>
                    <div className="glass rounded-xl p-3" style={{ border:'1px solid rgba(200,119,64,0.07)' }}>
                      <div className="text-xs font-mono mb-1" style={{ color:'#C87740' }}>// solution</div>
                      <p className="text-xs font-body leading-relaxed" style={{ color:'rgba(232,213,192,0.5)' }}>{p.solution}</p>
                    </div>
                  </div>
                  {sel && (
                    <div className="mb-4 px-3 py-2.5 rounded-xl border text-sm font-mono"
                      style={{ borderColor:`${p.color}30`, color:p.color, background:`${p.color}08` }}>
                      ✓ Outcome: {p.outcome}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono glass" style={{ border:'1px solid rgba(200,119,64,0.12)', color:'rgba(232,213,192,0.5)' }}>{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition-all"
                      style={{ background:`${p.color}15`, color:p.color, border:`1px solid ${p.color}30` }}
                      onClick={e => { e.stopPropagation(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) }}>
                      <ExternalLink size={12}/> Demo
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono glass transition-all"
                      style={{ border:'1px solid rgba(200,119,64,0.12)', color:'rgba(232,213,192,0.5)' }}
                      onClick={e => e.stopPropagation()}>
                      <Github size={12}/> Code
                    </button>
                    <button className="ml-auto flex items-center gap-1 text-xs font-mono transition-all"
                      style={{ color:'rgba(200,119,64,0.45)' }}
                      onClick={e => { e.stopPropagation(); setSelected(sel?null:p.id) }}>
                      {sel?'Less':'More'} <ArrowRight size={10} className={`transition-transform ${sel?'rotate-90':''}`} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 reveal">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
            className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm mx-auto">
            <Globe size={16}/> Start Your Project
          </button>
        </div>
      </div>
    </div>
  )
}