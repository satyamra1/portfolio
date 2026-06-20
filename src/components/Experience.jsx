import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const responsibilities = [
  'Developing scalable web applications using React.js, Node.js, Express.js, and MongoDB.',
  'Designing and maintaining RESTful APIs for business-critical operations.',
  'Implementing authentication and authorization systems including JWT-based flows.',
  'Optimizing application performance, database queries, and server response times.',
  'Working with both SQL and NoSQL databases across multiple projects.',
  'Developing reusable frontend components and modern, responsive user interfaces.',
  'Managing VPS deployments and production environments using PM2 and Nginx.',
  'Integrating third-party services, payment gateways, and external APIs.',
  'Troubleshooting production issues and shipping timely fixes.',
  'Collaborating with cross-functional teams to translate business requirements into technical solutions.',
]

const impacts = [
  'Delivered multiple production-ready features used by real-world users.',
  'Improved application performance and scalability across key workflows.',
  'Contributed to secure authentication and user management systems.',
  'Participated in full end-to-end product development lifecycle.',
  'Worked on deployment, maintenance, and monitoring of live applications.',
]

const techUsed = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'JavaScript', 'Git', 'GitHub', 'PM2', 'Nginx']

const achievements = [
  { icon: '⚙️', title: 'Production Application Development', desc: 'Worked on software systems serving real-world business use cases at scale.' },
  { icon: '🔗', title: 'Full Stack Ownership', desc: 'Handled frontend, backend, database, and deployment responsibilities end-to-end.' },
  { icon: '🔌', title: 'API & System Integration', desc: 'Integrated multiple third-party services, payment gateways, and business workflows.' },
  { icon: '⚡', title: 'Performance Optimization', desc: 'Enhanced speed, reliability, and scalability of applications in production.' },
  { icon: '🧠', title: 'Problem Solving', desc: 'Resolved complex technical challenges in live production environments under pressure.' },
]

const careerTimeline = [
  { year: '2022', label: 'Started Computer Science Engineering Journey', color: '#00D9FF' },
  { year: '2023', label: 'Built First Full Stack Applications', color: '#38bdf8' },
  { year: '2024', label: 'Developed Multi-Domain Software Products', color: '#818cf8' },
  { year: '2025', label: 'Worked on Production-Level Applications', color: '#8B5CF6' },
  { year: '2026', label: 'Focused on Scalable SaaS, Shopify & AI-Powered Systems', color: '#a78bfa' },
]

const vFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Experience() {
  const [expanded, setExpanded] = useState(true)

  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>

        {/* Title */}
        <motion.div {...vFadeUp()} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Experience</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem,3.5vw,2.7rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>Professional Experience</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 580, lineHeight: 1.75, fontSize: '1rem' }}>Building production-grade software and solving real-world business challenges.</p>
        </motion.div>

        {/* Main experience card */}
        <motion.div
          {...vFadeUp(0.05)}
          style={{
            display: 'grid', gridTemplateColumns: '260px 1fr', gap: 0,
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, overflow: 'hidden', marginBottom: '4rem',
          }}
          className="exp-card"
        >
          {/* Sidebar */}
          <div style={{ padding: '2.25rem 1.75rem', background: 'linear-gradient(160deg,rgba(0,217,255,0.06),rgba(139,92,246,0.06))', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', borderRadius: 50, marginBottom: '1rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', fontSize: '0.7rem', fontWeight: 700, color: '#4ade80' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                Currently Active
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>Role</div>
              <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem', lineHeight: 1.4, fontFamily: 'var(--font-display)' }}>Software Engineer Intern / Full Stack Developer</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>Duration</div>
              <div style={{ fontWeight: 600, color: 'var(--cyan)', fontSize: '0.875rem' }}>2024 – Present</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>Type</div>
              <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.875rem' }}>Full Stack Engineering</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Tech Used</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {techUsed.map(t => (
                  <span key={t} style={{ padding: '0.22rem 0.6rem', borderRadius: 50, fontSize: '0.68rem', fontWeight: 600, background: 'rgba(0,217,255,0.08)', color: 'var(--cyan)', border: '1px solid rgba(0,217,255,0.15)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '2.25rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 560 }}>
                Contributing to the development and maintenance of large-scale web applications and business platforms — working across frontend, backend, databases, API integrations, deployment workflows, and performance optimization.
              </p>
              <button onClick={() => setExpanded(v => !v)} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '0.4rem 0.9rem', color: 'var(--muted)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--muted)' }}>
                {expanded ? 'Collapse' : 'Expand'}
                <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </motion.span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--cyan)' }}>◆</span> Key Responsibilities
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }} className="resp-grid">
                      {responsibilities.map((r, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--cyan)', marginTop: '0.25rem', flexShrink: 0, fontSize: '0.6rem' }}>▸</span>{r}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--purple)' }}>◆</span> Impact & Contributions
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {impacts.map((imp, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                          <span style={{ width: 18, height: 18, borderRadius: 50, background: 'rgba(0,217,255,0.1)', border: '1px solid rgba(0,217,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--cyan)', flexShrink: 0, marginTop: '0.2rem' }}>✓</span>
                          {imp}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <motion.div {...vFadeUp(0.05)} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Highlights</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,3vw,2.3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>Experience Highlights</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginBottom: '4rem' }} className="ach-grid">
          {achievements.map((a, i) => (
            <motion.div key={a.title} {...vFadeUp(i * 0.08)} whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '1.6rem', backdropFilter: 'blur(16px)', transition: 'border-color 0.3s,box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,217,255,0.2)'; e.currentTarget.style.boxShadow = '0 0 35px rgba(0,217,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, marginBottom: '1rem', background: 'linear-gradient(135deg,rgba(0,217,255,0.1),rgba(139,92,246,0.08))', border: '1px solid rgba(0,217,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{a.icon}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>
                <span style={{ color: 'var(--cyan)', fontSize: '0.75rem' }}>✔</span>{a.title}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Career timeline */}
        <motion.div {...vFadeUp()} style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Journey</span>
              <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,3vw,2.3rem)', fontWeight: 800, lineHeight: 1.1 }}>Professional Growth</h2>
          </div>

          <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', paddingLeft: '2rem' }}>
            <motion.div
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', left: '2.5rem', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom,var(--cyan),var(--purple))', transformOrigin: 'top' }}
            />
            {careerTimeline.map((item, i) => (
              <motion.div key={item.year}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: i < careerTimeline.length - 1 ? '2.25rem' : 0, position: 'relative' }}
              >
                <div style={{ width: 14, height: 14, borderRadius: '50%', flexShrink: 0, marginTop: '0.3rem', background: item.color, boxShadow: `0 0 16px ${item.color}66`, border: '3px solid var(--bg)', zIndex: 2, position: 'relative' }} />
                <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '1rem 1.4rem', flex: 1, backdropFilter: 'blur(12px)', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${item.color}44`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: item.color, marginBottom: '0.3rem' }}>{item.year}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career objective */}
        <motion.div {...vFadeUp(0.05)}
          style={{ background: 'linear-gradient(135deg,rgba(0,217,255,0.04),rgba(139,92,246,0.04))', border: '1px solid rgba(0,217,255,0.1)', borderRadius: 20, padding: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(var(--white) 1px,transparent 1px),linear-gradient(90deg,var(--white) 1px,transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.75rem' }}>Career Objective</div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '1rem', maxWidth: 680, margin: '0 auto' }}>
              I aim to build technology products that create measurable business impact while continuously expanding my expertise in software engineering, product development, e-commerce technologies, and AI-powered systems.
            </p>
          </div>
        </motion.div>

      </div>
      <style>{`
        @media(max-width:900px){.exp-card{grid-template-columns:1fr!important}.exp-card>div:first-child{border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.06)}.resp-grid{grid-template-columns:1fr!important}.ach-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:580px){.ach-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
