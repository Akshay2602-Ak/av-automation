import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Award, Users, Code2, Cpu } from 'lucide-react'

const founders = [
  {
    name: 'Akshay Kumar T',
    role: 'Full Stack Developer, Oracle Apps DBA, DevOps ',
    initials: 'AK',
    color: '#C87740',
    gradient: 'linear-gradient(135deg,#C87740,#F0A850)',
    bio: 'Specialist in scalable full-stack apps, Oracle EBS customisations, and intelligent automation pipelines. Passionate about bridging enterprise tech with modern AI.',
    skills: [
      { name: 'Oracle Apps DBA', level: 88 },
      { name: 'Oracle SQL & PL/SQL', level: 94 },
      { name: 'Node.js / Python', level: 85 },
      { name: 'AI Automation', level: 80 },
      { name: 'DevOps / CI/CD', level: 78 },
      { name: 'Linux / Shell', level: 80 },
      { name: 'React / JavaScript', level: 92 },
    ],
    badges: ['React.js','Node.js','Oracle EBS','Python','Docker','AWS','PostgreSQL','Tailwind'],
  },
  {
    name: 'Vigneswaran J',
    role: 'Data Analyst, Oracle Apps DBA, Developer',
    initials: 'VK',
    color: '#E8623A',
    gradient: 'linear-gradient(135deg,#E8623A,#F0A850)',
    bio: 'Expert in Oracle database architecture, PL/SQL development, and enterprise-grade software solutions. Dedicated to high-performance, reliable systems.',
    skills: [
      { name: 'Oracle PL/SQL', level: 94 },
      { name: 'Tableau / Power Bi ', level: 86 },
      { name: ' Data Manipulation', level: 90 },
      { name: 'Python / Ui path automation', level: 82 },
      { name: 'Linux system administrator', level: 80 },
      { name: 'Database Management / System Monitoring', level: 80 },
    ],
    badges: ['Oracle DB','PL/SQL','Java','Spring','Linux','SQL Server','MongoDB','Git'],
  },
]

const stats = [
  { icon: Code2, val: 10, suffix: '+', label: 'Projects Delivered', color: '#C87740' },
  { icon: Users, val: 8, suffix: '+', label: 'Happy Clients', color: '#E8623A' },
  { icon: Award, val: 3, suffix: '+', label: 'Years Experience', color: '#F0A850' },
  { icon: Cpu, val: 100, suffix: '%', label: 'On-Time Delivery', color: '#E09058' },
]

function Counter({ target, suffix, color }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null), started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let s = 0
        const step = target / 60
        const t = setInterval(() => {
          s += step
          if (s >= target) {
            setCount(target)
            clearInterval(t)
          } else {
            setCount(Math.floor(s))
          }
        }, 25)
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref} className="font-zeroarea font-black text-4xl" style={{ color }}>{count}{suffix}</span>
}

export default function About() {
  return (
    <div className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(200,119,64,0.3),transparent)' }} />
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 reveal">
          <div className="section-tag mb-3">// who we are</div>
          <h2 className="font-zeroarea font-black text-4xl md:text-5xl mb-4" style={{ color: '#E8D5C0' }}>
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(232,213,192,0.6)' }}>
            Two passionate technologists who turned enterprise expertise into a premium freelance agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {founders.map((f, i) => (
            <div key={f.name} className={`glass rounded-2xl p-8 card-hover ${i === 0 ? 'reveal-left' : 'reveal-right'}`}
              style={{ border: `1px solid rgba(200,119,64,0.1)` }}>

              <div className="flex items-start gap-5 mb-6">
                <div>
                  <h3 className="font-zeroarea font-bold text-xl" style={{ color: '#E8D5C0' }}>{f.name}</h3>
                  <p className="text-sm font-mono mt-1" style={{ color: f.color }}>{f.role}</p>

                  {/* ✅ ONLY CHANGE IS HERE */}
                  <div className="flex gap-3 mt-2">
                    <a
                      href={f.name === 'Akshay Kumar T'
                        ? 'https://github.com/Akshay2602-Ak'
                        : 'https://github.com/FRIEND_GITHUB'}
                      style={{ color: 'rgba(200,119,64,0.45)' }}
                      className="hover:text-raisin transition-colors"
                    >
                      <Github size={16}/>
                    </a>

                    <a
                      href={f.name === 'Akshay Kumar T'
                        ? 'https://www.linkedin.com/in/akshay-kumar-t-37bb9b285'
                        : 'https://www.linkedin.com/in/FRIEND_LINKEDIN'}
                      style={{ color: 'rgba(200,119,64,0.45)' }}
                      className="hover:text-raisin transition-colors"
                    >
                      <Linkedin size={16}/>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}