import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatbotButton from './components/ChatbotButton'

export default function App() {
  const cursorRef = useRef(null)
  const cursorRingRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = cursorRingRef.current
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0
    const move = (e) => {
      mouseX = e.clientX; mouseY = e.clientY
      cursor.style.left = mouseX - 6 + 'px'
      cursor.style.top  = mouseY - 6 + 'px'
    }
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX - 18 + 'px'
      ring.style.top  = ringY - 18 + 'px'
      requestAnimationFrame(animateRing)
    }
    const hIn  = () => { cursor.style.transform = 'scale(2.5)'; ring.style.transform = 'scale(1.5)' }
    const hOut = () => { cursor.style.transform = 'scale(1)';   ring.style.transform = 'scale(1)' }
    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,.card-hover').forEach(el => {
      el.addEventListener('mouseenter', hIn)
      el.addEventListener('mouseleave', hOut)
    })
    animateRing()
    return () => document.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const canvas = particlesRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.45 + 0.1,
      color: Math.random() > 0.55 ? '200, 119, 64' : '232, 98, 58',
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(200, 119, 64, ${0.07 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          e.target.querySelectorAll('.skill-fill').forEach(b => b.classList.add('animated'))
        }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen noise" style={{ background: '#021F26' }}>
      <canvas ref={particlesRef} id="particles-canvas" />
      <div className="scan-line" />
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorRingRef} className="custom-cursor-ring" />
      <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none z-0" style={{ background: 'rgba(200,119,64,0.05)' }} />
      <div className="fixed top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none z-0" style={{ background: 'rgba(232,98,58,0.04)' }} />
      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="projects"><Projects /></section>
          <section id="pricing"><Pricing /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="blog"><Blog /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
        <ChatbotButton />
      </div>
    </div>
  )
}