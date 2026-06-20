import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '0.85rem 0' : '1.4rem 0',
        background: scrolled ? 'rgba(5,5,5,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero') }} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--white)' }}>
          Satyam<span style={{ color: 'var(--cyan)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0 }} className="nav-desktop">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact') }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.55rem 1.25rem', borderRadius: 8,
                background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                color: '#050505', fontWeight: 700, fontSize: '0.875rem',
                display: 'inline-block',
              }}
            >Get in Touch</motion.a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', padding: 4 }}
          className="nav-hamburger"
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <motion.span
              key={i}
              animate={open ? (i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 7 } : { rotate: -45, y: -7 }) : { rotate: 0, y: 0, opacity: 1 }}
              style={{ display: 'block', width: 24, height: 2, background: 'var(--white)', borderRadius: 2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(5,5,5,0.98)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '2rem', zIndex: 999,
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--white)', fontFamily: 'var(--font-display)' }}
              >{l.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
