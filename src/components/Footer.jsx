import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          &copy; {year} Alessandra Priolo. All rights reserved.
        </p>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#hero">Top</a>
          <a href="#about">About</a>
          <a href="#case-studies">Work</a>
          <a href="#personal">Personal</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
