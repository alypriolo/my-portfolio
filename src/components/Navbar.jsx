import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Skills', href: '#skills' },
  { label: 'Personal', href: '#personal' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">AP</a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Priolo_Alessandra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
          >
            Resume
          </a>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
