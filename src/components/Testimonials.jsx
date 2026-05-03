import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  { name:'Ravi Shankar',           role:'CEO, Shankar Textiles Pvt. Ltd.',  initials:'RS', color:'#C87740', rating:5, text:'Akshay and Vigneswaran transformed our entire business operations. The ERP automation they built saves us 20+ hours a week. Delivered on time, on budget, and beyond expectations.', project:'Oracle EBS Automation' },
  { name:'Priya Meenakshisundaram', role:'Founder, StyleCart India',         initials:'PM', color:'#E8623A', rating:5, text:'The e-commerce automation system they built is honestly magic. Our orders process automatically, customers get instant WhatsApp updates, and we\'ve cut errors to zero. Seriously talented.', project:'E-Commerce Automation' },
  { name:'Karthik Nair',            role:'CTO, TechNest Solutions',          initials:'KN', color:'#F0A850', rating:5, text:'We needed a complex React dashboard with real-time Oracle data. AV Solutions delivered something that impressed our investors. UI, performance, code quality — top-tier across the board.', project:'Business Dashboard' },
  { name:'Deepa Krishnamurthy',     role:'Property Manager, HomePlus PGs',   initials:'DK', color:'#E09058', rating:5, text:'The PG management app replaced my entire spreadsheet nightmare. Rent reminders go out automatically, I can track everything from my phone, and my tenants love the professionalism.', project:'PG Management App' },
  { name:'Arjun Venkatesh',         role:'Product Lead, FinovaTech',         initials:'AV', color:'#C87740', rating:5, text:'Fast, reliable, and genuinely smart developers. They understood our complex fintech requirements from day one and suggested architectural improvements we hadn\'t even considered.', project:'Custom SaaS Platform' },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length:5 }).map((_,i) => (
        <svg key={i} className="w-4 h-4" fill={i<count?'#F0A850':'rgba(200,119,64,0.2)'} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)
  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setCurrent(c => (c+1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [auto])
  const go = dir => { setAuto(false); setCurrent(c => (c+dir+testimonials.length) % testimonials.length) }

  return (
    <div className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(200,119,64,0.2),transparent)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="section-tag mb-3">// client stories</div>
          <h2 className="font-zeroarea font-black text-4xl md:text-5xl mb-4" style={{ color:'#E8D5C0' }}>
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color:'rgba(232,213,192,0.6)' }}>
            Don't just take our word for it — here's what our clients say after working with us.
          </p>
        </div>

        <div className="reveal relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform:`translateX(-${current*100}%)` }}>
              {testimonials.map(t => (
                <div key={t.name} className="w-full flex-shrink-0 px-4 md:px-16">
                  <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative"
                    style={{ border:'1px solid rgba(200,119,64,0.12)' }}>
                    <div className="absolute top-6 right-6 opacity-8">
                      <Quote size={64} style={{ color:t.color }} />
                    </div>
                    <Stars count={t.rating} />
                    <p className="font-body text-lg md:text-xl leading-relaxed my-6 italic" style={{ color:'rgba(232,213,192,0.85)' }}>
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center font-zeroarea font-black text-lg"
                        style={{ background:`linear-gradient(135deg,${t.color},${t.color}80)`, color:'#021F26' }}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-zeroarea font-bold" style={{ color:'#E8D5C0' }}>{t.name}</div>
                        <div className="text-sm font-body" style={{ color:'rgba(232,213,192,0.5)' }}>{t.role}</div>
                        <div className="text-xs font-mono mt-0.5" style={{ color:t.color }}>Project: {t.project}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => go(-1)} className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-all"
              style={{ border:'1px solid rgba(200,119,64,0.15)', color:'rgba(200,119,64,0.5)' }}>
              <ChevronLeft size={18}/>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_,i) => (
                <button key={i} onClick={() => { setAuto(false); setCurrent(i) }}
                  className="rounded-full transition-all duration-300"
                  style={{ width:i===current?'24px':'8px', height:'8px', background:i===current?'linear-gradient(90deg,#C87740,#E8623A)':'rgba(200,119,64,0.2)' }} />
              ))}
            </div>
            <button onClick={() => go(1)} className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-all"
              style={{ border:'1px solid rgba(200,119,64,0.15)', color:'rgba(200,119,64,0.5)' }}>
              <ChevronRight size={18}/>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-12 reveal">
          {testimonials.map((t,i) => (
            <button key={t.name} onClick={() => { setAuto(false); setCurrent(i) }}
              className="glass rounded-xl p-3 text-left transition-all"
              style={{ border:i===current?`1px solid ${t.color}50`:'1px solid rgba(200,119,64,0.1)' }}>
              <div className="text-xs font-zeroarea font-semibold truncate" style={{ color:'#E8D5C0' }}>{t.name.split(' ')[0]}</div>
              <div className="text-xs font-mono truncate" style={{ color:'rgba(200,119,64,0.4)' }}>{t.project}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}