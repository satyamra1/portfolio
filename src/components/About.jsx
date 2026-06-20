import { motion } from 'framer-motion'

const vFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

const vFadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

const vFadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-2)', padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'center' }} className="about-grid">

          {/* Left – image */}
          <motion.div {...vFadeLeft()} style={{ position: 'relative' }}>
            <div style={{
              width: '100%', aspectRatio: '4/5', borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(139,92,246,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ fontSize: '6rem', opacity: 0.7 }}>👨‍💻</div>
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.04,
                backgroundImage: 'linear-gradient(var(--white) 1px,transparent 1px),linear-gradient(90deg,var(--white) 1px,transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top,rgba(8,8,15,0.6),transparent)' }} />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: -20, right: -20,
                background: 'rgba(8,8,15,0.92)', border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)', padding: '1rem 1.5rem', borderRadius: 14, textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--cyan)', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 4 }}>Projects Built</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute', top: 20, right: -20,
                background: 'rgba(8,8,15,0.92)', border: '1px solid rgba(139,92,246,0.2)',
                backdropFilter: 'blur(20px)', padding: '0.7rem 1rem',
                borderRadius: 12, display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontSize: '0.78rem', color: 'var(--white)', fontWeight: 600 }}>Available for Work</span>
            </motion.div>
          </motion.div>

          {/* Right – content */}
          <motion.div {...vFadeRight(0.1)}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>About Me</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Building Products That<br />
              <span style={{ background: 'linear-gradient(135deg,var(--cyan),var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Create Impact
              </span>
            </h2>

            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
              I am a Full Stack Product Engineer focused on transforming ideas into impactful software products. Over the years, I have built applications across multiple domains including Education Technology, E-commerce, Governance Systems, AI Automation, and SaaS Platforms.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
              My expertise spans frontend engineering, backend architecture, databases, cloud deployment, payment integrations, authentication systems, and AI-driven workflows.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '2rem' }}>
              {[{ num: '10+', label: 'Projects Built' }, { num: '5+', label: 'Domains Covered' }, { num: '2026', label: 'Graduation Year' }].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '1.1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--white)' }}>{s.num}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {[
                { k: 'Email', v: 'satyamrai200311@gmail.com' },
                { k: 'Location', v: 'Varanasi, Uttar Pradesh' },
                { k: 'Degree', v: 'B.Tech Computer Science' },
                { k: 'University', v: 'GLA University, Mathura' },
                { k: 'Freelance', v: 'Available' },
              ].map(i => (
                <div key={i.k} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--muted)', minWidth: 80 }}>{i.k}</span>
                  <span style={{ color: 'var(--white)', fontWeight: 500 }}>{i.v}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Education Journey</div>
              {[
                { year: '2022–2026', title: 'B.Tech Computer Science & Engineering', sub: 'GLA University, Mathura' },
                { year: '2022–Present', title: 'Full Stack Development & Product Engineering', sub: 'Self-learning, Building real-world products' },
              ].map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', marginTop: 4, flexShrink: 0 }} />
                    {i < 1 && <div style={{ width: 1, flex: 1, background: 'var(--border)', marginTop: 4 }} />}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--cyan)', fontWeight: 600, marginBottom: 2 }}>{e.year}</div>
                    <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.875rem' }}>{e.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{e.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  )
}
