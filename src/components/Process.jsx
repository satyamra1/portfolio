import { motion } from 'framer-motion'

const steps = [
  { icon: '🔍', name: 'Identify', sub: 'Problem Discovery' },
  { icon: '👥', name: 'Research', sub: 'User & Market Needs' },
  { icon: '🎨', name: 'Design', sub: 'Solution Architecture' },
  { icon: '💻', name: 'Develop', sub: 'Build & Engineer' },
  { icon: '🚀', name: 'Launch', sub: 'Deploy & Ship' },
  { icon: '📈', name: 'Scale', sub: 'Optimize & Grow' },
]

export default function Process() {
  return (
    <section id="process" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Approach</span>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>How I Build Products</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7, fontSize: '1rem' }}>
            Every project starts with a problem, not a technology. I follow a structured, product-first approach to deliver software that creates real impact.
          </p>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
          {steps.map((step, i) => (
            <div key={step.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: 100 }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem', marginBottom: '0.6rem', position: 'relative',
                    transition: 'border-color 0.2s,background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.background = 'rgba(0,217,255,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                >
                  {step.icon}
                  <div style={{ position: 'absolute', top: -6, right: -6, width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,var(--cyan),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700, color: '#050505' }}>{i + 1}</div>
                </motion.div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--white)', marginBottom: 2 }}>{step.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{step.sub}</div>
              </motion.div>
              {i < steps.length - 1 && <div style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '1.2rem', flexShrink: 0 }} className="process-arrow">→</div>}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20, padding: '2.5rem', backdropFilter: 'blur(20px)',
            maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,217,255,0.02),rgba(139,92,246,0.02))', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Product-First, Technology-Enabled</h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem', maxWidth: 580, margin: '0 auto' }}>
              I approach every project from a business and user perspective first. Technology is a means to solve real problems — not the other way around. This ensures every product I build delivers measurable value, not just functional code.
            </p>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.process-arrow{display:none!important}}`}</style>
    </section>
  )
}
