import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
const posts = [
  { title:'How AI Automation Is Transforming Oracle EBS Workflows in 2024', excerpt:'Discover how Python-based automation agents and LLM integrations are eliminating manual Oracle data entry, approvals, and reporting — slashing costs by 60%.', tag:'AI Automation', tagColor:'#E8623A', date:'Nov 15, 2024', readTime:'7 min read' },
  { title:'Building Real-Time Business Dashboards with React and Oracle Reports', excerpt:'A technical deep-dive into interactive KPI dashboards that pull live Oracle database metrics and visualise them with Recharts and WebSockets.', tag:'Web Development', tagColor:'#C87740', date:'Oct 28, 2024', readTime:'9 min read' },
  { title:'The Ultimate Guide to Oracle PL/SQL Performance Tuning', excerpt:'Proven techniques for identifying slow queries, optimising execution plans, managing indexes, and writing PL/SQL code that scales to millions of records.', tag:'Database', tagColor:'#F0A850', date:'Oct 5, 2024', readTime:'11 min read' },
  { title:'From Zero to Deploy: Full-Stack App with React + Node.js + Docker in 48 Hours', excerpt:'A step-by-step walkthrough of how we built and shipped a complete SaaS application in under 48 hours using our battle-tested development stack.', tag:'DevOps', tagColor:'#E09058', date:'Sep 20, 2024', readTime:'8 min read' },
]
export default function Blog() {
  return (
    <div className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(232,98,58,0.2),transparent)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <div className="section-tag mb-3">// knowledge base</div>
            <h2 className="font-zeroarea font-black text-4xl md:text-5xl" style={{ color:'#E8D5C0' }}>
              Tech <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <button className="btn-outline px-6 py-2.5 rounded-xl text-sm self-start md:self-auto flex items-center gap-2">
            All Articles <ArrowRight size={14}/>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <div key={post.title} className="reveal glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
              style={{ border:'1px solid rgba(200,119,64,0.1)', transitionDelay:`${i*80}ms` }}>
              <div className="h-1.5" style={{ background:`linear-gradient(90deg,${post.tagColor},${post.tagColor}30)` }} />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border"
                    style={{ borderColor:`${post.tagColor}30`, color:post.tagColor, background:`${post.tagColor}0a` }}>
                    <Tag size={9}/> {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono" style={{ color:'rgba(200,119,64,0.4)' }}>
                    <Calendar size={10}/> {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono" style={{ color:'rgba(200,119,64,0.4)' }}>
                    <Clock size={10}/> {post.readTime}
                  </span>
                </div>
                <h3 className="font-zeroarea font-bold text-lg mb-3 leading-snug group-hover:transition-colors duration-200" style={{ color:'#E8D5C0' }}>
                  {post.title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color:'rgba(232,213,192,0.55)' }}>{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color:post.tagColor }}>
                  Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform"/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 md:p-10 text-center reveal relative overflow-hidden"
          style={{ border:'1px solid rgba(200,119,64,0.12)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background:'linear-gradient(135deg,rgba(200,119,64,0.04),rgba(232,98,58,0.04))' }} />
          <div className="relative">
            <div className="section-tag mb-3 justify-center flex">// stay updated</div>
            <h3 className="font-zeroarea font-bold text-2xl md:text-3xl mb-3" style={{ color:'#E8D5C0' }}>
              Subscribe to Our <span className="gradient-text">Tech Newsletter</span>
            </h3>
            <p className="font-body mb-6 max-w-md mx-auto" style={{ color:'rgba(232,213,192,0.55)' }}>
              Weekly insights on AI automation, Oracle development, and full-stack best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl glass text-sm font-mono focus:outline-none transition-colors"
                style={{ border:'1px solid rgba(200,119,64,0.15)', color:'#E8D5C0', background:'rgba(200,119,64,0.03)' }}
              />
              <button className="btn-primary px-6 py-3 rounded-xl text-sm flex-shrink-0">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}