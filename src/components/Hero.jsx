import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const words = ['Product Engineer', 'SaaS Builder', 'Shopify Developer', 'AI Integrator', 'Full Stack Engineer']

function TypedText() {
  const [display, setDisplay] = useState('')
  const [wIdx, setWIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [cIdx, setCIdx] = useState(0)

  useEffect(() => {
    const word = words[wIdx]
    const timer = setTimeout(() => {
      if (!deleting) {
        if (cIdx < word.length) {
          setDisplay(word.slice(0, cIdx + 1))
          setCIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (cIdx > 0) {
          setDisplay(word.slice(0, cIdx - 1))
          setCIdx(c => c - 1)
        } else {
          setDeleting(false)
          setWIdx(w => (w + 1) % words.length)
        }
      }
    }, deleting ? 55 : 90)
    return () => clearTimeout(timer)
  }, [cIdx, deleting, wIdx])

  return (
    <span style={{ color: 'var(--cyan)' }}>
      {display}
      <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--cyan)' }}>|</span>
    </span>
  )
}

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    const NUM = 70

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.25
        this.vy = (Math.random() - 0.5) * 0.25
        this.r = Math.random() * 1.2 + 0.4
        this.alpha = Math.random() * 0.35 + 0.08
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,217,255,${this.alpha})`
        ctx.fill()
      }
    }

    const init = () => {
      particles = Array.from({ length: NUM }, () => new Particle())
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,217,255,${0.05 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      drawLines()
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', () => { resize(); init() })
    resize(); init(); animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  )
}

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}
const itemV = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '5rem',
    }}>
      <Particles />

      {/* Background glows */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 65%)',
        top: -150, right: -150, pointerEvents: 'none',
        animation: 'heroPulse 7s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 550, height: 550, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)',
        bottom: -100, left: -80, pointerEvents: 'none',
        animation: 'heroPulse 9s ease-in-out infinite reverse',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div variants={containerV} initial="hidden" animate="show">

          <motion.div variants={itemV}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: 50, marginBottom: '1.75rem',
              background: 'rgba(0,217,255,0.06)', border: '1px solid rgba(0,217,255,0.14)',
              fontSize: '0.8rem', fontWeight: 500, color: 'var(--muted)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', animation: 'blink 2s ease-in-out infinite', flexShrink: 0 }} />
              Computer Science Engineering • 2026 Graduate • GLA University
            </div>
          </motion.div>

          <motion.h1 variants={itemV} style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, lineHeight: 1.05,
            fontSize: 'clamp(2.6rem, 7.5vw, 5.5rem)', marginBottom: '0.5rem',
          }}>
            Satyam Rai
          </motion.h1>

          <motion.h2 variants={itemV} style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.1,
            fontSize: 'clamp(1.6rem, 4vw, 3rem)', marginBottom: '1.5rem',
            minHeight: '1.3em',
          }}>
            <TypedText />
          </motion.h2>

          <motion.p variants={itemV} style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--muted)',
            maxWidth: 580, lineHeight: 1.75, marginBottom: '2.5rem',
          }}>
            Building scalable SaaS platforms, Shopify applications, AI-powered systems, and modern digital products that create measurable real-world impact.
          </motion.p>

          <motion.div variants={itemV} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <motion.a
              href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.8rem 1.8rem', borderRadius: 10,
                background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                color: '#050505', fontWeight: 700, fontSize: '0.9rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                boxShadow: '0 0 30px rgba(0,217,255,0.22)',
              }}
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.a>
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.8rem 1.8rem', borderRadius: 10,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--white)', fontWeight: 600, fontSize: '0.9rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                backdropFilter: 'blur(12px)',
              }}
            >Contact Me</motion.a>
            <motion.a
              href="#experience"
              onClick={e => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.8rem 1.8rem', borderRadius: 10,
                background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
                color: '#a78bfa', fontWeight: 600, fontSize: '0.9rem',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
              View Experience
            </motion.a>
          </motion.div>

          <motion.div variants={itemV} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {[
              { href: 'https://www.linkedin.com/in/satyam-rai-720167249', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>, label: 'LinkedIn' },
              { href: 'https://github.com/satyamrai', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>, label: 'GitHub' },
              { href: 'mailto:satyamrai200311@gmail.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Email' },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                title={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 44, height: 44, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', backdropFilter: 'blur(12px)',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'var(--cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >{s.icon}</motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
        zIndex: 2,
      }}>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--cyan), transparent)', animation: 'scrollPulse 1.6s ease-in-out infinite' }} />
        <span>Scroll</span>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes heroPulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.08);opacity:0.7} }
        @keyframes scrollPulse { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform:scaleY(1);transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }
      `}</style>
    </section>
  )
}
