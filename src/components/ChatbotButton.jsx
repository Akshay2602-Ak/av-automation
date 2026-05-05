import { useState } from 'react'
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react'

const QUICK = [
  'What services do you offer?',
  'How much does a project cost?',
  'How long does development take?',
  'Can you integrate AI into my app?',
]

const RESPONSES = {
  'What services do you offer?': 'We offer Web Development, AI Automation, Oracle DBA/EBS, Custom Software, DevOps, and Business Dashboard solutions. What are you looking for?',
  'How much does a project cost?': 'Our pricing starts at $299 for a basic site, $799 for a full-stack app, and $1999+ for enterprise solutions. We also do custom quotes — just describe your project!',
  'How long does development take?': 'Basic sites: 5–7 days. Full-stack apps: 10–14 days. Enterprise/complex projects: 3–4 weeks. We always commit to realistic timelines.',
  'Can you integrate AI into my app?': 'Absolutely! We specialize in LLM integration (GPT, Claude), automation pipelines, chatbots, and document processing. Book a free call to discuss your idea.',
}

export default function ChatbotButton() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! 👋 I\'m the AV Solutions assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [minimized, setMinimized] = useState(false)

  const send = async (text) => {
    if (!text.trim()) return
    setMessages(m => [...m, { from: 'user', text }])
    setInput('')
    setTyping(true)
    await new Promise(r => setTimeout(r, 900))
    const reply = RESPONSES[text] || 'Great question! Please use the contact form to get a detailed response, or message us on WhatsApp for a quick answer. 🚀'
    setMessages(m => [...m, { from: 'bot', text: reply }])
    setTyping(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && !minimized && (
        <div className="w-80 glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-[slideUp_0.3s_ease]"
          style={{ boxShadow: '0 30px 80px rgba(248, 185, 66, 0.81), 0 0 40px rgba(168,85,247,0.05)' }}>

          {/* Header */}
          <div className="px-4 py-3.5 flex items-center justify-between bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <Bot size={14} className="text-[#020818]" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white">AV Assistant</div>
                <div className="flex items-center gap-1 text-xs text-green-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setMinimized(true)} className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all">
                <Minimize2 size={12} />
              </button>
              <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all">
                <X size={13} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-56 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-xs font-body leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/20 text-white'
                      : 'glass border border-white/8 text-gray-300'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="glass border border-white/8 px-4 py-3 rounded-xl flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="px-3 pb-2 flex flex-wrap gap-1.5">
            {QUICK.map(q => (
              <button key={q} onClick={() => send(q)}
                className="px-2.5 py-1 rounded-lg text-xs font-mono text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/15 transition-all">
                {q.length > 22 ? q.slice(0, 22) + '…' : q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 pt-1 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="Ask anything…"
              className="flex-1 px-3 py-2 rounded-xl glass border border-white/10 text-white placeholder-gray-600 text-xs font-body focus:outline-none focus:border-cyan-400/30 transition-colors"
            />
            <button
              onClick={() => send(input)}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-[#020818] hover:scale-105 transition-transform"
            >
              <Send size={13} />
            </button>
          </div>

          {/* Footer */}
          <div className="text-center pb-2">
            <a href="https://wa.me/919363867353" target="_blank" rel="noreferrer"
              className="text-xs font-mono text-gray-600 hover:text-green-400 transition-colors">
              Or chat on WhatsApp →
            </a>
          </div>
        </div>
      )}

      {/* Minimized bar */}
      {open && minimized && (
        <div
          onClick={() => setMinimized(false)}
          className="glass border border-cyan-400/20 rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-pointer hover:border-cyan-400/40 transition-all"
        >
          <Bot size={14} className="text-cyan-400" />
          <span className="text-xs font-mono text-gray-300">AV Assistant</span>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => { setOpen(!open); setMinimized(false) }}
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all chat-pulse`}
        style={{ boxShadow: '0 0 30px rgba(245, 153, 15, 0.83)' }}
        aria-label="Open chat"
      >
        {open ? <X size={22} className="text-[#020818]" /> : <MessageCircle size={22} className="text-[#020818]" />}
      </button>
    </div>
  )
}
