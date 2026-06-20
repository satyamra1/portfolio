import { motion } from 'framer-motion'

const techs = [
  { icon: '⚛️', name: 'React.js', color: '#61DAFB' },
  { icon: '🟢', name: 'Node.js', color: '#339933' },
  { icon: '🍃', name: 'MongoDB', color: '#47A248' },
  { icon: '🛒', name: 'Shopify', color: '#95BF47' },
  { icon: '⚡', name: 'JavaScript', color: '#F7DF1E' },
  { icon: '🔷', name: 'Express.js', color: '#404D59' },
  { icon: '🐙', name: 'Git', color: '#F05032' },
  { icon: '🤖', name: 'AI Tools', color: '#8B5CF6' },
  { icon: '🗄️', name: 'SQL', color: '#00D9FF' },
]

const ring1 = [techs[0], techs[1], techs[2]]
const ring2 = [techs[3], techs[4], techs[5], techs[6]]
const ring3 = [techs[7], techs[8]]

function OrbitRing({ items, radius, duration, reverse = false }) {
  return (
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      width: radius * 2, height: radius * 2,
      marginLeft: -radius, marginTop: -radius,
      borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.06)',
      animation: `${reverse ? 'spinRev' : 'spin'} ${duration}s linear infinite`,
    }}>
      {items.map((tech, i) => {
        const angle = (360 / items.length) * i
        const rad = (angle * Math.PI) / 180
        const x = Math.cos(rad) * radius
        const y = Math.sin(rad) * radius
        return (
          <div key={tech.name} style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: `translate(${x - 26}px, ${y - 26}px)`,
            animation: `${reverse ? 'spin' : 'spinRev'} ${duration}s linear infinite`,
          }}>
            <motion.div
              whileHover={{ scale: 1.3 }}
              title={tech.name}
              style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'rgba(8,8,15,0.92)', border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', backdropFilter: 'blur(12px)',
                transition: 'border-color 0.2s,box-shadow 0.2s', cursor: 'default',
                position: 'relative',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = tech.color; e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}33` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {tech.icon}
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="techstack" style={{ padding: '6rem 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Stack</span>
            <div style={{ width: 24, height: 1, background: 'var(--cyan)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem' }}>Technology Ecosystem</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>The core technologies I use to build scalable, production-grade products.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, delay: 0.1 }}
          style={{ position: 'relative', width: 480, height: 480, margin: '0 auto 3rem' }}
          className="orbit-wrap"
        >
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 80, height: 80, borderRadius: '50%', zIndex: 10,
            background: 'linear-gradient(135deg,rgba(0,217,255,0.15),rgba(139,92,246,0.15))',
            border: '2px solid rgba(0,217,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.8rem', boxShadow: '0 0 40px rgba(0,217,255,0.2)',
          }}>⚡</div>
          <OrbitRing items={ring1} radius={110} duration={22} />
          <OrbitRing items={ring2} radius={185} duration={35} reverse />
          <OrbitRing items={ring3} radius={235} duration={50} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
        >
          {techs.map(t => (
            <motion.div key={t.name} whileHover={{ scale: 1.06, y: -2 }} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.55rem 1.1rem', borderRadius: 50,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
              fontSize: '0.85rem', color: 'var(--muted)', backdropFilter: 'blur(12px)',
              transition: 'border-color 0.2s,color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = t.color + '44'; e.currentTarget.style.color = 'var(--white)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'var(--muted)' }}
            >
              <span>{t.icon}</span><span>{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes spinRev{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        @media(max-width:600px){.orbit-wrap{width:300px!important;height:300px!important}}
      `}</style>
    </section>
  )
}
