import { motion } from 'framer-motion'

const categories = [
  { icon: '⚛️', name: 'Frontend Engineering', tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Tailwind CSS'] },
  { icon: '⚙️', name: 'Backend Engineering', tags: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'JWT', 'API Development'] },
  { icon: '🗄️', name: 'Databases', tags: ['MongoDB', 'Mongoose', 'SQL', 'Database Design', 'Data Modeling'] },
  { icon: '🛒', name: 'E-commerce & Shopify', tags: ['Shopify App Dev', 'Shopify APIs', 'Subscription Systems', 'Payment Integrations'] },
  { icon: '🤖', name: 'AI & Automation', tags: ['AI Integrations', 'Automation Systems', 'Chatbots', 'AI Evaluation', 'OpenAI APIs'] },
  { icon: '🚀', name: 'DevOps & Deployment', tags: ['Git', 'GitHub', 'VPS Deployment', 'PM2', 'Nginx', 'Linux'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Technical Expertise</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>Skills & Technologies</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, fontSize: '1rem' }}>
            A full-spectrum toolkit spanning frontend, backend, databases, e-commerce, AI, and deployment — built through shipping real products.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18, padding: '1.75rem', backdropFilter: 'blur(20px)',
                position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s,box-shadow 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,217,255,0.2)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,217,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,var(--cyan),var(--purple))', borderRadius: '18px 18px 0 0' }} />
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{cat.icon}</div>
              <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}>{cat.name}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cat.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '0.28rem 0.65rem', borderRadius: 6, fontSize: '0.73rem', fontWeight: 500,
                    background: 'rgba(255,255,255,0.04)', color: 'var(--muted)',
                    border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,217,255,0.08)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'rgba(0,217,255,0.2)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
                  >{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.skills-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.skills-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
