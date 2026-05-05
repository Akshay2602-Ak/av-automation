import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Award, Users, Code2, Cpu } from 'lucide-react'

const founders = [
  {
    name: 'Akshay Kumar T',
    role: 'Full Stack Developer, Oracle Apps DBA, DevOps ',
    initials: 'AK',
    color: '#C87740',
    gradient: 'linear-gradient(135deg,#C87740,#F0A850)',
    bio: 'Specialist in scalable full-stack apps, Oracle EBS customisations, and intelligent automation pipelines.',
    github: 'https://github.com/Akshay2602-Ak',
    linkedin: 'https://www.linkedin.com/in/akshay-kumar-t-37bb9b285',
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
    bio: 'Expert in Oracle database architecture, PL/SQL development, and enterprise-grade software solutions.',
    
    // 👉 UPDATE YOUR FRIEND LINKS HERE
    github: 'https://github.com/YOUR_FRIEND_GITHUB',
    linkedin: 'https://www.linkedin.com/in/YOUR_FRIEND_LINKEDIN',

    skills: [
      { name: 'Oracle PL/SQL', level: 94 },
      { name: 'Tableau / Power Bi', level: 86 },
      { name: 'Data Manipulation', level: 90 },
      { name: 'Python / Ui path automation', level: 82 },
      { name: 'Linux system administrator', level: 80 },
      { name: 'Database Management / System Monitoring', level: 80},
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
  const ref = useRef(null)
  const started = useRef(false)

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

  return <span ref={ref} className="text-4xl font-bold" style={{ color }}>{count}{suffix}</span>
}

export default function About() {
  return (
    <div className="py-24 px-6">

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map(({ icon: Icon, val, suffix, label, color }) => (
          <div key={label} className="p-6 text-center border rounded-xl">
            <Icon size={22} style={{ color }} />
            <Counter target={val} suffix={suffix} color={color} />
            <div className="text-xs mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* FOUNDERS */}
      <div className="grid md:grid-cols-2 gap-8">
        {founders.map((f) => (
          <div key={f.name} className="p-6 border rounded-xl">

            <h3 className="text-xl font-bold">{f.name}</h3>
            <p className="text-sm">{f.role}</p>

            {/* ✅ FIXED LINKS */}
            <div className="flex gap-3 mt-2">
              <a href={f.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
              </a>

              <a href={f.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}