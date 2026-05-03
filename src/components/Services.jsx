import { useState } from 'react'
import { Globe, Brain, Code2, Server, Database, BarChart3, ArrowRight, Sparkles } from 'lucide-react'

const services = [
  { icon: Globe,    title: 'Web Development',    subtitle: 'Full-Stack Engineering', color: '#C87740', description: 'End-to-end web apps with React, Node.js, and modern frameworks. Responsive, fast, built to scale.', features: ['React / Next.js SPAs','REST & GraphQL APIs','Authentication & Security','Performance Optimisation','PWA Development'], tag: 'Most Popular' },
  { icon: Brain,    title: 'AI Automation',       subtitle: 'Intelligent Systems',    color: '#E8623A', description: 'Transform repetitive workflows into intelligent automated pipelines using Python, LLMs, and custom agents.', features: ['LLM Integration (GPT, Claude)','Workflow Automation','Document Processing','Chatbot Development','Data Extraction & ETL'], tag: 'Trending' },
  { icon: Code2,    title: 'Custom Software',     subtitle: 'Bespoke Solutions',      color: '#F0A850', description: 'Purpose-built applications for your exact processes, with Oracle EBS customisations and enterprise integrations.', features: ['Oracle EBS Customisation','Enterprise Integrations','Legacy Modernisation','API Development','Module Development'], tag: '' },
  { icon: Server,   title: 'DevOps & Deployment', subtitle: 'Infrastructure & CI/CD', color: '#E09058', description: 'Reliable, secure deployment pipelines and infrastructure management. Zero-downtime deployments & monitoring.', features: ['Docker & Kubernetes','CI/CD Pipelines','AWS / Azure / GCP','Nginx & Load Balancing','Monitoring & Alerts'], tag: '' },
  { icon: Database, title: 'Database Solutions',  subtitle: 'Oracle & Modern DB',     color: '#C87740', description: 'Enterprise Oracle DBA services alongside modern database design, optimisation, and migration.', features: ['Oracle DB Administration','PL/SQL Development','Performance Tuning','Database Migration','PostgreSQL / MongoDB'], tag: '' },
  { icon: BarChart3,title: 'Business Dashboards', subtitle: 'Analytics & BI',         color: '#F0A850', description: 'Real-time BI dashboards with interactive charts, KPI tracking, and executive reporting systems.', features: ['React Dashboard UI','Real-Time Analytics','KPI Reporting','Oracle Reports Integration','Data Visualisation'], tag: '' },
]

export default function Services() {
  const [hovered, setHovered] = useState(null)
  return (
    <div className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(232,98,58,0.3),transparent)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="section-tag mb-3">// what we offer</div>
          <h2 className="font-zeroarea font-black text-4xl md:text-5xl mb-4" style={{ color: '#E8D5C0' }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(232,213,192,0.6)' }}>
            From idea to deployment — every layer of your tech stack covered with precision engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon; const isH = hovered === i
            return (
              <div key={s.title} className="reveal glass rounded-2xl p-7 cursor-pointer relative overflow-hidden group transition-all duration-400"
                style={{ border: `1px solid ${isH ? s.color+'40' : 'rgba(200,119,64,0.1)'}`, boxShadow: isH ? `0 20px 60px ${s.color}15,0 0 40px ${s.color}10` : 'none', transitionDelay: `${i*60}ms` }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 20%,${s.color}08 0%,transparent 70%)` }} />
                {s.tag && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-mono border"
                    style={{ borderColor: `${s.color}40`, color: s.color, background: `${s.color}10` }}>
                    <Sparkles size={9} className="inline mr-1" />{s.tag}
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}15`, boxShadow: isH ? `0 0 20px ${s.color}30` : 'none' }}>
                  <Icon size={26} style={{ color: s.color }} />
                </div>
                <div className="text-xs font-mono mb-1" style={{ color: s.color, opacity: .7 }}>{s.subtitle}</div>
                <h3 className="font-zeroarea font-bold text-xl mb-3" style={{ color: '#E8D5C0' }}>{s.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(232,213,192,0.55)' }}>{s.description}</p>
                <ul className="space-y-2 mb-5">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs font-mono" style={{ color: 'rgba(232,213,192,0.5)' }}>
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-1 text-sm font-body font-medium transition-all duration-200" style={{ color: s.color }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get a Quote
                  <ArrowRight size={14} className={`transition-transform duration-200 ${isH ? 'translate-x-1' : ''}`} />
                </button>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="font-body mb-4" style={{ color: 'rgba(200,119,64,0.5)' }}>Need something specific? We handle custom requirements too.</p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline px-8 py-3 rounded-xl text-sm">
            Discuss Your Project →
          </button>
        </div>
      </div>
    </div>
  )
}