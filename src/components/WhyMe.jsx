import { motion } from 'framer-motion'

const cards = [
  { icon: '🎯', title: 'Product-Focused Engineering', desc: 'I build around business outcomes and user needs, not just technical requirements. Every line of code serves a purpose.' },
  { icon: '🔗', title: 'Full Stack Ownership', desc: 'From frontend to backend, database design to deployment and integrations — I own the entire product lifecycle.' },
  { icon: '🛒', title: 'E-commerce Expertise', desc: 'Deep experience building Shopify applications, subscription systems, and modern commerce workflows.' },
  { icon: '🤖', title: 'AI-Driven Development', desc: 'Combining traditional software engineering with intelligent automation and AI integrations to create smarter products.' },
  { icon: '🧠', title: 'Problem Solving Mindset', desc: 'I focus on understanding root problems before writing any code — delivering solutions that actually work in the real world.' },
  { icon: '📦', title: 'Shipping Mentality', desc: 'I value done over perfect. I ship working products, gather feedback, and iterate quickly to deliver real value fast.' },
]

export default function WhyMe() {
  return (
    <section id="why" style={{ background: 'var(--bg-2)', padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Differentiators</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>What Sets Me Apart</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, fontSize: '1rem' }}>
            More than a developer — a product engineer who understands business context, user needs, and technical execution.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="why-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 18, padding: '2rem', backdropFilter: 'blur(20px)',
                position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,217,255,0.18)'; e.currentTarget.querySelector('.why-bar').style.transform = 'scaleX(1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.querySelector('.why-bar').style.transform = 'scaleX(0)' }}
            >
              <div className="why-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,var(--cyan),var(--purple))', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s ease' }} />
              <div style={{ width: 50, height: 50, borderRadius: 12, marginBottom: '1.25rem', background: 'linear-gradient(135deg,rgba(0,217,255,0.1),rgba(139,92,246,0.1))', border: '1px solid rgba(0,217,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>{card.icon}</div>
              <h3 style={{ fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>{card.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.why-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.why-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
