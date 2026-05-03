import { useState } from 'react'
import { Check, Zap, Star, Crown } from 'lucide-react'

const plans = [
  {
    name:'Basic', icon:Zap, price:{monthly:299,yearly:249},
    description:'Perfect for personal projects and simple business websites.',
    color:'#C87740', popular:false, delivery:'5–7 days',
    features:[
      {text:'Landing Page / Portfolio Site',included:true},
      {text:'Up to 5 Pages',included:true},
      {text:'Responsive Design',included:true},
      {text:'Contact Form',included:true},
      {text:'Basic SEO Setup',included:true},
      {text:'Deployment (Netlify / Vercel)',included:true},
      {text:'AI Integration',included:false},
      {text:'Database & Backend',included:false},
      {text:'Admin Dashboard',included:false},
      {text:'Priority Support',included:false},
    ],
  },
  {
    name:'Standard', icon:Star, price:{monthly:799,yearly:649},
    description:'Full-featured web app for growing businesses and startups.',
    color:'#E8623A', popular:true, delivery:'10–14 days',
    features:[
      {text:'Full-Stack Web Application',included:true},
      {text:'Custom Pages (unlimited)',included:true},
      {text:'Responsive + Dark Mode',included:true},
      {text:'REST API Development',included:true},
      {text:'Database Design',included:true},
      {text:'Authentication System',included:true},
      {text:'Basic AI Feature (Chatbot)',included:true},
      {text:'Admin Dashboard',included:true},
      {text:'CI/CD Deployment',included:false},
      {text:'Priority Support',included:false},
    ],
  },
  {
    name:'Premium', icon:Crown, price:{monthly:1999,yearly:1699},
    description:'Enterprise-grade solution with AI automation and full DevOps.',
    color:'#F0A850', popular:false, delivery:'21–30 days',
    features:[
      {text:'Full Enterprise Platform',included:true},
      {text:'Custom Everything',included:true},
      {text:'Advanced AI Automation',included:true},
      {text:'Oracle EBS / DB Integration',included:true},
      {text:'Business Intelligence Dashboard',included:true},
      {text:'Docker + Cloud Deployment',included:true},
      {text:'CI/CD Pipeline Setup',included:true},
      {text:'Admin + Analytics Dashboard',included:true},
      {text:'3 Months Post-Launch Support',included:true},
      {text:'Priority Support + SLA',included:true},
    ],
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [hovered, setHovered] = useState(null)
  return (
    <div className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(240,168,80,0.25),transparent)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <div className="section-tag mb-3">// transparent pricing</div>
          <h2 className="font-zeroarea font-black text-4xl md:text-5xl mb-4" style={{ color:'#E8D5C0' }}>
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed mb-8" style={{ color:'rgba(232,213,192,0.6)' }}>
            No hidden fees. No surprises. Honest, value-packed pricing for serious businesses.
          </p>
          <div className="inline-flex items-center gap-3 glass rounded-xl p-1.5" style={{ border:'1px solid rgba(200,119,64,0.15)' }}>
            {['monthly','yearly'].map(b => (
              <button key={b} onClick={() => setBilling(b)}
                className={`px-5 py-2 rounded-lg text-sm font-mono transition-all flex items-center gap-2`}
                style={billing===b ? { background:'linear-gradient(135deg,#C87740,#E8623A)', color:'#021F26', fontWeight:700 } : { color:'rgba(232,213,192,0.5)' }}>
                {b.charAt(0).toUpperCase()+b.slice(1)}
                {b==='yearly' && <span className="text-xs px-1.5 py-0.5 rounded font-bold" style={{ background:'rgba(200,119,64,0.2)', color:'#C87740' }}>-20%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon; const price = plan.price[billing]
            return (
              <div key={plan.name}
                className={`reveal pricing-card glass rounded-2xl overflow-hidden relative flex flex-col ${plan.popular?'md:-mt-4 md:mb-4':''}`}
                style={{ border:`1px solid ${hovered===i||plan.popular?plan.color+'40':'rgba(200,119,64,0.1)'}`, boxShadow:plan.popular?`0 0 60px ${plan.color}15`:hovered===i?`0 20px 60px ${plan.color}10`:'none', transitionDelay:`${i*80}ms` }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-b-xl text-xs font-mono font-bold"
                    style={{ background:'linear-gradient(90deg,#C87740,#E8623A)', color:'#021F26' }}>
                    ⚡ Most Popular
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none opacity-30"
                  style={{ background:`radial-gradient(ellipse at 50% 0%,${plan.color}12 0%,transparent 60%)` }} />
                <div className={`p-7 flex flex-col flex-1 relative ${plan.popular?'pt-10':''}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background:`${plan.color}15` }}>
                      <Icon size={20} style={{ color:plan.color }} />
                    </div>
                    <div>
                      <div className="font-zeroarea font-bold text-lg" style={{ color:'#E8D5C0' }}>{plan.name}</div>
                      <div className="text-xs font-mono" style={{ color:'rgba(200,119,64,0.45)' }}>Delivery: {plan.delivery}</div>
                    </div>
                  </div>
                  <p className="font-body text-sm leading-relaxed mb-6" style={{ color:'rgba(232,213,192,0.55)' }}>{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-mono" style={{ color:'rgba(232,213,192,0.5)' }}>$</span>
                      <span className="font-zeroarea font-black text-5xl" style={{ color:'#E8D5C0' }}>{price}</span>
                    </div>
                    <div className="text-xs font-mono mt-1" style={{ color:'rgba(200,119,64,0.35)' }}>Per project · USD</div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-7">
                    {plan.features.map(({ text, included }) => (
                      <li key={text} className={`flex items-start gap-2.5 text-sm font-body ${included?'':'line-through'}`}
                        style={{ color:included?'rgba(232,213,192,0.75)':'rgba(232,213,192,0.25)' }}>
                        <div className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                          style={included?{background:`${plan.color}20`}:{background:'rgba(255,255,255,0.05)'}}>
                          {included ? <Check size={9} style={{ color:plan.color }} /> : <span className="w-1 h-px block" style={{ background:'rgba(232,213,192,0.2)' }} />}
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
                    className="w-full py-3.5 rounded-xl text-sm font-zeroarea font-bold tracking-wide transition-all duration-300"
                    style={plan.popular
                      ? { background:'linear-gradient(135deg,#C87740,#E8623A)', color:'#021F26' }
                      : { border:`1px solid ${plan.color}40`, color:plan.color, background:'transparent' }}>
                    Choose {plan.name} →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 text-center reveal" style={{ border:'1px solid rgba(200,119,64,0.12)' }}>
          <p className="font-body mb-3" style={{ color:'rgba(232,213,192,0.55)' }}>
            Need a custom enterprise quote for Oracle EBS, large-scale automation, or ongoing support?
          </p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })} className="btn-primary px-8 py-3 rounded-xl text-sm">
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  )
}