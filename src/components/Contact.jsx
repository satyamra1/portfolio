import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
  }

  const inputStyle = {
    width: '100%', padding: '0.875rem 1rem',
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 10, color: 'var(--white)', fontFamily: 'var(--font-main)', fontSize: '0.9rem',
    outline: 'none', transition: 'all 0.2s',
  }

  const labelStyle = {
    display: 'block', fontSize: '0.75rem', fontWeight: 700,
    color: 'var(--muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em',
  }

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
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
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Contact</span>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Let's Build Something<br />
            <span style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Meaningful
            </span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontSize: '1rem' }}>
            Whether you are looking to build a SaaS platform, Shopify application, AI-powered product, or a custom digital solution, I would love to discuss your ideas.
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start',
        }} className="contact-grid">

          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.75rem' }}>
                Open to Opportunities
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                I am currently available for freelance projects, internships, full-time roles, and collaboration opportunities. Let's create something great together.
              </p>
            </div>

            {[
              { icon: '✉️', label: 'Personal Email', val: 'satyamrai200311@gmail.com', href: 'mailto:satyamrai200311@gmail.com' },
              { icon: '💼', label: 'Business Email', val: 'business.project.data@gmail.com', href: 'mailto:business.project.data@gmail.com' },
              { icon: '📍', label: 'Location', val: 'Varanasi, Uttar Pradesh, India', href: null },
              { icon: '🔗', label: 'LinkedIn', val: 'linkedin.com/in/satyam-rai-720167249', href: 'https://www.linkedin.com/in/satyam-rai-720167249' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.14)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.875rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                      onMouseLeave={e => e.target.style.color = 'var(--white)'}>{item.val}</a>
                  ) : (
                    <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.875rem' }}>{item.val}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Status indicator */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.75rem 1.25rem', borderRadius: 12,
              background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
              marginTop: '1rem',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'glow 2s ease-in-out infinite', flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', color: '#4ade80', fontWeight: 600 }}>Available for new projects</span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 20, padding: '2.5rem', backdropFilter: 'blur(20px)',
            }}
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Thank you for reaching out. I will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="form-row">
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Your full name" required style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,217,255,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,217,255,0.08)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>Subject</label>
                  <input
                    name="subject" value={form.subject} onChange={handleChange}
                    placeholder="What's this about?" required style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,217,255,0.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    required rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                    onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,217,255,0.08)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%', padding: '0.9rem',
                    background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                    color: '#050505', fontWeight: 700, fontSize: '0.95rem', borderRadius: 10,
                    border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    opacity: status === 'sending' ? 0.8 : 1,
                    fontFamily: 'var(--font-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  }}
                >
                  {status === 'sending' ? (
                    <><span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>↻</span> Sending...</>
                  ) : (
                    <>Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes glow { 0%,100%{opacity:1;box-shadow:0 0 8px #22c55e} 50%{opacity:0.6;box-shadow:0 0 16px #22c55e} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        @media (max-width: 500px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
