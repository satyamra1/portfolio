import { motion } from 'framer-motion'

const scrollTo = href => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  const year = 2026

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'var(--bg-2)', padding: '3.5rem 0 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>

        {/* Top row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem',
        }} className="footer-top">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.4rem' }}>
              Satyam<span style={{ color: 'var(--cyan)' }}>.</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--muted)', maxWidth: 220, lineHeight: 1.6 }}>
              Full Stack Product Engineer. Building products that create impact.
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }} className="footer-links">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Navigate</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['#about', '#skills', '#projects', '#process', '#contact'].map(h => (
                  <a key={h} href={h} onClick={e => { e.preventDefault(); scrollTo(h) }}
                    style={{ fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >{h.slice(1).charAt(0).toUpperCase() + h.slice(2)}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Connect</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/satyam-rai-720167249' },
                  { label: 'GitHub', href: 'https://github.com/satyamrai' },
                  { label: 'Twitter', href: 'https://twitter.com/Satyam_raii' },
                  { label: 'Email', href: 'mailto:satyamrai200311@gmail.com' },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '1rem' }}>Have a project in mind?</div>
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact') }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.4rem', borderRadius: 10,
                background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                color: '#050505', fontWeight: 700, fontSize: '0.875rem',
              }}
            >
              Let's Talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>
            © {year} Satyam Rai — Built with React & Framer Motion
          </p>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/satyamrai', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg> },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/satyam-rai-720167249', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
              { label: 'Email', href: 'mailto:satyamrai200311@gmail.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                title={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                style={{
                  width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'var(--cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
              >{s.icon}</motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top { flex-direction: column !important; }
          .footer-links { gap: 2rem !important; }
        }
      `}</style>
    </footer>
  )
}
