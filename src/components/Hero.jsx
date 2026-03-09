import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container container">

        <div className="hero__text">
          <p className="hero__eyebrow">Product Manager</p>
          <h1 className="hero__name">
            Alessandra<br />Priolo
          </h1>
          <p className="hero__tagline">
            Product Manager at Mangomint, a business management software for salons and spas. I own the Core Platform (booking, scheduling, CRM, inventory, analytics) and Payments (POS, financing, payroll), specializing in building 0→1 capabilities across a two-sided B2B2C platform. I have a Bachelors of Science in Computer Science with a minor in Business from Vanderbilt University.
          </p>
          <div className="hero__actions">
            <a href="#case-studies" className="btn btn-hero-primary">View My Work</a>
            <a
              href="/Priolo_Alessandra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hero-outline"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/alessandrapriolo/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hero-linkedin"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient id="li-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#914C07" />
                    <stop offset="100%" stopColor="#6FB7DB" />
                  </linearGradient>
                </defs>
                <path fill="url(#li-grad)" d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 01-1.976-1.987 1.976 1.976 0 113.953 0 1.98 1.98 0 01-1.977 1.987zm1.706 13.019H3.63V9h3.413v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <img
            src={`${import.meta.env.BASE_URL}alessandra-2024-transparent.PNG`}
            alt="Alessandra Priolo"
            className="hero__photo"
          />
        </div>

      </div>
    </section>
  )
}
