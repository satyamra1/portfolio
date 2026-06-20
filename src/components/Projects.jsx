import { motion } from 'framer-motion'

const projects = [
  { id: '01', featured: true, icon: '🛒', title: 'Shopify Subscription Platform', category: 'E-commerce · Shopify', desc: 'Built a subscription commerce platform enabling merchants to create recurring purchase systems with automated billing workflows, customer management portals, and scalable payment integrations — end-to-end from dashboard to checkout.', tech: ['React.js', 'Node.js', 'MongoDB', 'Shopify APIs', 'Webhooks', 'Stripe'] },
  { id: '02', featured: false, icon: '🤖', title: 'AI-Based Examination Evaluation', category: 'AI · EdTech', desc: 'Developed an AI-powered coding assessment platform capable of evaluating programming submissions automatically and generating intelligent performance reports with scoring and feedback.', tech: ['React.js', 'Node.js', 'MongoDB', 'AI APIs', 'REST APIs'] },
  { id: '03', featured: false, icon: '🏛️', title: 'Rural Governance Platform', category: 'GovTech · Civic', desc: 'Designed a digital governance ecosystem connecting local administration and citizens through project transparency dashboards, announcements, complaint management systems, and public engagement workflows.', tech: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth', 'REST APIs'] },
  { id: '04', featured: false, icon: '🚂', title: 'Train Availability Alert System', category: 'SaaS · Automation', desc: 'Created a real-time ticket availability monitoring platform with automated notification systems and configurable user alerts, reducing manual checking overhead.', tech: ['React.js', 'Node.js', 'MongoDB', 'Cron Jobs', 'Notifications'] },
  { id: '05', featured: false, icon: '📚', title: 'Quizzer — Mock Exam Platform', category: 'EdTech · SaaS', desc: 'Built a comprehensive mock examination platform providing practice tests, user analytics dashboards, authentication systems, and scalable assessment management for engineering exam preparation.', tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Analytics'] },
  { id: '06', featured: false, icon: '🎓', title: 'Ray Educare — Education Website', category: 'EdTech · Web', desc: 'Developed a full-featured website for a coaching center with course listings, admissions workflow, faculty profiles, and student engagement features. Deployed live for active student use.', tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Responsive Design'] },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-2)', padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Work</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>Products & Solutions Built</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, fontSize: '1rem' }}>
            Real-world software products across SaaS, AI, Governance, E-commerce, and Web platforms — built end-to-end with product thinking.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7, transition: { duration: 0.2 } }}
              style={{
                background: p.featured ? 'linear-gradient(135deg,rgba(0,217,255,0.05),rgba(139,92,246,0.05))' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${p.featured ? 'rgba(0,217,255,0.15)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 20, padding: '2rem', backdropFilter: 'blur(20px)',
                position: 'relative', overflow: 'hidden',
                gridColumn: p.featured ? 'span 2' : 'span 1',
                transition: 'border-color 0.3s,box-shadow 0.3s', cursor: 'default',
              }}
              className={p.featured ? 'project-featured' : ''}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,217,255,0.25)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(0,217,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = p.featured ? 'rgba(0,217,255,0.15)' : 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: 'linear-gradient(var(--white) 1px,transparent 1px),linear-gradient(90deg,var(--white) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                {p.featured && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.25rem 0.75rem', borderRadius: 50, fontSize: '0.68rem', fontWeight: 700, background: 'linear-gradient(135deg,var(--cyan),var(--purple))', color: '#050505', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    ⭐ Featured Project
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--cyan)', letterSpacing: '0.08em', opacity: 0.7 }}>{p.id}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', background: 'rgba(255,255,255,0.04)', padding: '0.2rem 0.6rem', borderRadius: 50, border: '1px solid var(--border)' }}>{p.category}</div>
                </div>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--white)', fontSize: p.featured ? '1.3rem' : '1.05rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ padding: '0.25rem 0.65rem', borderRadius: 50, fontSize: '0.72rem', fontWeight: 500, background: 'rgba(139,92,246,0.1)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.2)' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--cyan)' }}>
                  <span>View Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.projects-grid{grid-template-columns:1fr!important}.project-featured{grid-column:span 1!important}}
      `}</style>
    </section>
  )
}
