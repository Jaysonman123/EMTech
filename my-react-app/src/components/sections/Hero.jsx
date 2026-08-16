import heroImg from '../../assets/hero.png'
import logoImg from '../../assets/image.png'
import './sections.css'

export default function Hero() {
  return (
    <section id="home" className="section hero-section">
      {/* Animated grid background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--1" />
        <div className="hero-glow hero-glow--2" />
      </div>

      <div className="container hero-container">
        {/* Left — text content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge__dot" />
            Next-Generation Technology Solutions
          </div>

          <h1 className="hero-title">
            Powering the Future with{' '}
            <span className="hero-title__gradient">Smart Technology</span>
          </h1>

          <p className="hero-desc">
            EMTech Smart Solutions delivers cutting-edge software, AI-driven systems, and digital
            transformation services that help enterprises scale, innovate, and lead in a rapidly
            evolving world.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn--primary">
              Get Started
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#services" className="btn btn--ghost">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '12+', label: 'Years Experience' },
              { value: '40+', label: 'Industries Served' },
            ].map(({ value, label }) => (
              <div className="hero-stat" key={label}>
                <span className="hero-stat__value">{value}</span>
                <span className="hero-stat__label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <div className="hero-visual" aria-hidden="true">
          {/* Company logo displayed large */}
          <div className="hero-visual__logo-wrap">
            <img src={logoImg} alt="EMTech Smart Solutions" className="hero-visual__logo" />
          </div>
          {/* 3D shape decoration */}
          <img src={heroImg} alt="" className="hero-visual__shape" />
          {/* Glow rings */}
          <div className="hero-visual__ring hero-visual__ring--1" />
          <div className="hero-visual__ring hero-visual__ring--2" />
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
