import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Counter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const [inViewRef, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  const setRefs = el => {
    ref.current = el
    inViewRef(el)
  }

  useEffect(() => {
    if (!inView || !ref.current) return
    const el = ref.current
    const duration = 1800
    const start = performance.now()

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      el.textContent = prefix + Math.round(ease * target) + suffix
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView])

  return <span ref={setRefs}>{prefix}0{suffix}</span>
}

const items = [
  { target: 10, suffix: '+', label: 'Major Projects Built', icon: '🏗️' },
  { target: 5, suffix: '+', label: 'Domains Solved', icon: '🌐' },
  { target: 3, suffix: '+', label: 'Years of Engineering', icon: '⚡' },
  { target: 100, suffix: '%', label: 'End-to-End Ownership', icon: '🎯' },
]

const highlights = [
  { icon: '🛒', label: 'Shopify App Development' },
  { icon: '🤖', label: 'AI Product Development' },
  { icon: '⚙️', label: 'Full Stack Engineering' },
  { icon: '🚀', label: 'SaaS Platform Building' },
  { icon: '🏛️', label: 'Governance Systems' },
  { icon: '📊', label: 'Product Analytics' },
]

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="stats" style={{ background: 'var(--bg-2)', padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Impact</span>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Highlights & Achievements
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Numbers that reflect real work, real products, and real impact delivered across multiple domains.
          </p>
        </motion.div>

        {/* Counter grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem',
        }} className="stats-grid">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16, padding: '2rem 1.5rem', textAlign: 'center',
                backdropFilter: 'blur(20px)', transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,217,255,0.2)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0,217,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <div style={{
                fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1,
                background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                marginBottom: '0.5rem',
              }}>
                <Counter target={item.target} suffix={item.suffix} />
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 500 }}>{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Highlights chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
        >
          {highlights.map(h => (
            <motion.div
              key={h.label}
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.6rem 1.2rem', borderRadius: 50,
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                fontSize: '0.85rem', color: 'var(--muted)', backdropFilter: 'blur(12px)',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,217,255,0.2)'
                e.currentTarget.style.color = 'var(--white)'
                e.currentTarget.style.background = 'rgba(0,217,255,0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <span>{h.icon}</span>
              <span>{h.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
