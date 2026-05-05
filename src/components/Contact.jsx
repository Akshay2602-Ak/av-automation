import { useState } from 'react'
import { Send, MessageCircle, Mail, MapPin, CheckCircle, AlertCircle, Clock } from 'lucide-react'
const services = ['Web Development','AI Automation','Oracle DBA / EBS','Custom Software','DevOps & Deployment','Business Dashboard','Other']
export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', budget:'', message:'' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Minimum 20 characters'
    return e
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate(); setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false); setSubmitted(true)
  }
  const set = (k, v) => { setForm(p => ({ ...p, [k]:v })); if (errors[k]) setErrors(p => ({ ...p, [k]:undefined })) }

  if (submitted) return (
    <div className="py-24 px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background:'rgba(200,119,64,0.15)', border:'1px solid rgba(200,119,64,0.3)' }}>
          <CheckCircle size={36} style={{ color:'#C87740' }} />
        </div>
        <h3 className="font-zeroarea font-bold text-3xl mb-3" style={{ color:'#E8D5C0' }}>Message Sent!</h3>
        <p className="font-body mb-6" style={{ color:'rgba(232,213,192,0.6)' }}>We've received your inquiry and will respond within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="btn-outline px-6 py-3 rounded-xl text-sm">Send Another Message</button>
      </div>
    </div>
  )

  const inputStyle = (field) => ({
    border: `1px solid ${errors[field] ? 'rgba(232,98,58,0.5)' : 'rgba(200,119,64,0.15)'}`,
    color: '#E8D5C0', background: 'rgba(200,119,64,0.03)',
  })

  return (
    <div className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(200,119,64,0.3),transparent)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="section-tag mb-3">// let's talk</div>
          <h2 className="font-zeroarea font-black text-4xl md:text-5xl mb-4" style={{ color:'#E8D5C0' }}>
            Hire Us / <span className="gradient-text">Get a Quote</span>
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed" style={{ color:'rgba(232,213,192,0.6)' }}>
            Tell us about your project. Free 30-minute consultation to understand your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6 reveal-left">
            <div className="glass rounded-2xl p-6 space-y-4" style={{ border:'1px solid rgba(200,119,64,0.12)' }}>
              <h3 className="font-zeroarea font-semibold" style={{ color:'#E8D5C0' }}>Reach Us Directly</h3>
              {[
                { href:'https://wa.me/919363867353', icon:MessageCircle, label:'WhatsApp', sub:'+91 98765 43210', color:'#C87740' },
                { href:'mailto:hello@avautomation.in', icon:Mail, label:'Email', sub:'hello@avautomation.in', color:'#E8623A' },
              ].map(({ href, icon:Icon, label, sub, color }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background:`${color}15` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-sm font-mono" style={{ color }}>{label}</div>
                    <div className="text-xs font-body" style={{ color:'rgba(232,213,192,0.45)' }}>{sub}</div>
                  </div>
                </a>
              ))}
              {[
                { icon:MapPin, label:'Location', sub:'Coimbatore, Tamil Nadu, India', color:'#F0A850' },
                { icon:Clock, label:'Response Time', sub:'Within 24 hours · Mon–Sat', color:'#E09058' },
              ].map(({ icon:Icon, label, sub, color }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background:`${color}15` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-sm font-mono" style={{ color }}>{label}</div>
                    <div className="text-xs font-body" style={{ color:'rgba(232,213,192,0.45)' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 relative overflow-hidden" style={{ border:'1px solid rgba(200,119,64,0.2)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background:'linear-gradient(135deg,rgba(200,119,64,0.05),rgba(232,98,58,0.03))' }} />
              <div className="relative">
                <div className="font-zeroarea font-bold text-xl mb-2" style={{ color:'#E8D5C0' }}>Free <span className="gradient-text">Consultation</span></div>
                <p className="font-body text-sm mb-4 leading-relaxed" style={{ color:'rgba(232,213,192,0.55)' }}>
                  Book a 30-minute call. No obligation, no sales pitch — just an honest conversation about your needs.
                </p>
                <a href="https://wa.me/919363867353?text=Hi! I'd like a free consultation." target="_blank" rel="noreferrer"
                  className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm w-full justify-center">
                  <MessageCircle size={15}/> Book Free Call
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal-right">
            <div className="glass rounded-2xl p-8" style={{ border:'1px solid rgba(200,119,64,0.12)' }}>
              <h3 className="font-zeroarea font-semibold text-xl mb-6" style={{ color:'#E8D5C0' }}>Project Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{k:'name',label:'Full Name *',type:'text',ph:'Full Name'},{k:'email',label:'Email Address *',type:'email',ph:'you@company.com'}].map(({k,label,type,ph}) => (
                    <div key={k}>
                      <label className="block text-xs font-mono mb-1.5" style={{ color:'rgba(200,119,64,0.5)' }}>{label}</label>
                      <input type={type} value={form[k]} onChange={e=>set(k,e.target.value)} placeholder={ph}
                        className="w-full px-4 py-3 rounded-xl glass text-sm font-body focus:outline-none transition-colors placeholder-opacity-30"
                        style={{ ...inputStyle(k), '::placeholder':{ color:'rgba(232,213,192,0.25)' } }} />
                      {errors[k] && <p className="text-xs mt-1 flex items-center gap-1" style={{ color:'#E8623A' }}><AlertCircle size={10}/>{errors[k]}</p>}
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono mb-1.5" style={{ color:'rgba(200,119,64,0.5)' }}>Phone / WhatsApp</label>
                    <input type="tel" value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="Mobile Number"
                      className="w-full px-4 py-3 rounded-xl glass text-sm font-body focus:outline-none transition-colors"
                      style={{ border:'1px solid rgba(200,119,64,0.15)', color:'#E8D5C0', background:'rgba(200,119,64,0.03)' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono mb-1.5" style={{ color:'rgba(200,119,64,0.5)' }}>Service Needed *</label>
                    <select value={form.service} onChange={e=>set('service',e.target.value)}
                      className="w-full px-4 py-3 rounded-xl glass text-sm focus:outline-none transition-colors"
                      style={{ ...inputStyle('service'), color: form.service ? '#E8D5C0' : 'rgba(232,213,192,0.3)' }}>
                      <option value="" disabled style={{ background:'#021F26' }}>Select service…</option>
                      {services.map(s => <option key={s} value={s} style={{ background:'#062B36' }}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-xs mt-1 flex items-center gap-1" style={{ color:'#E8623A' }}><AlertCircle size={10}/>{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color:'rgba(200,119,64,0.5)' }}>Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {["< $300","$300–$800","$800–$2000","$2000+","Let's Discuss"].map(b => (
                      <button type="button" key={b} onClick={() => set('budget',b)}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
                        style={form.budget===b
                          ? { background:'rgba(200,119,64,0.2)', border:'1px solid rgba(200,119,64,0.5)', color:'#C87740' }
                          : { border:'1px solid rgba(200,119,64,0.12)', color:'rgba(232,213,192,0.4)', background:'transparent' }}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1.5" style={{ color:'rgba(200,119,64,0.5)' }}>Project Description *</label>
                  <textarea value={form.message} onChange={e=>set('message',e.target.value)} rows={4}
                    placeholder="Tell us about your project — problem, what needs building, timeline, requirements..."
                    className="w-full px-4 py-3 rounded-xl glass text-sm font-body focus:outline-none transition-colors resize-none"
                    style={inputStyle('message')} />
                  {errors.message && <p className="text-xs mt-1 flex items-center gap-1" style={{ color:'#E8623A' }}><AlertCircle size={10}/>{errors.message}</p>}
                </div>

                <button type="submit" disabled={loading}
                  className="btn-primary w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                  {loading
                    ? <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"/>Sending…</>
                    : <><Send size={15}/> Send Project Inquiry</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}