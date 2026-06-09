import { useEffect, useRef, useState, useCallback } from 'react'
import './Mangomint.css'
import { overviewStats, featuredFeatures, carouselFeatures } from './mangomintData'
import { useScrollLock } from '../hooks/useScrollLock'

const BASE = import.meta.env.BASE_URL

function announcementSrc(file) {
  return `${BASE}${['portfolio pictures', 'announcements', file].map(encodeURIComponent).join('/')}`
}

// ─── useCountUp ────────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0)
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    let rafId
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) rafId = requestAnimationFrame(tick)
          else setCount(target)
        }
        rafId = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [target, duration])

  return { count, elRef }
}

// ─── StatItem ─────────────────────────────────────────────────────────────────
function StatItem({ stat }) {
  const { count, elRef } = useCountUp(stat.isCounter ? stat.value : 0)

  const display = stat.isCounter
    ? `${stat.prefix ?? ''}${count}${stat.suffix}`
    : stat.display

  return (
    <div className="mm-stat" ref={elRef}>
      <span className="mm-stat__value">{display}</span>
      <span className="mm-stat__label">{stat.label}</span>
    </div>
  )
}

// ─── StatsBar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className="mm-stats-bar fade-in">
      <div className="mm-stats-bar__chips">
        {overviewStats.map((stat, i) => (
          <StatItem key={i} stat={stat} />
        ))}
      </div>
      <p className="mm-stats-bar__descriptor">
        50+ launches spanning Flows, Memberships, Payroll, Gift Cards, Offers, Payments, Forms, and Online Booking — November 2023 through March 2026.
      </p>
    </div>
  )
}

// ─── FeatureModal ─────────────────────────────────────────────────────────────
function AnnouncementEmbed({ url, screenshotFile }) {
  return (
    <div className="mm-announcement-embed">
      <p className="mm-modal__sidebar-label">Feature Announcement</p>
      <div className="mm-announcement-embed__img-wrap">
        <img
          src={announcementSrc(screenshotFile)}
          alt="Feature announcement screenshot"
          className="mm-announcement-embed__img"
        />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mm-announcement-embed__link"
      >
        Open full announcement ↗
      </a>
    </div>
  )
}

function FeatureModal({ feature, onClose }) {
  useScrollLock(onClose)

  return (
    <div className="mm-modal-backdrop" onClick={onClose}>
      <div className="mm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="mm-modal__header">
          <div className="mm-modal__header-top">
            <span className="mm-modal__category">{feature.category}</span>
            <button className="mm-modal__close" onClick={onClose} aria-label="Close">✕</button>
          </div>
          <h2 className="mm-modal__name">{feature.name}</h2>
          <p className="mm-modal__tagline">{feature.tagline}</p>
        </div>

        <div className="mm-modal__body">
          <div className="mm-modal__main">
            <div className="mm-modal__section">
              <h3 className="mm-modal__section-title"><span className="mm-modal__section-num">01</span> Problem</h3>
              <p className="mm-modal__section-text">{feature.problem}</p>
            </div>
            <div className="mm-modal__section">
              <h3 className="mm-modal__section-title"><span className="mm-modal__section-num">02</span> Solution</h3>
              <p className="mm-modal__section-text">{feature.solution}</p>
            </div>
            <div className="mm-modal__section">
              <h3 className="mm-modal__section-title"><span className="mm-modal__section-num">03</span> How It Works</h3>
              <p className="mm-modal__section-text">{feature.howItWorks}</p>
            </div>
            <div className="mm-modal__section">
              <h3 className="mm-modal__section-title"><span className="mm-modal__section-num">04</span> Impact</h3>
              <div className="mm-modal__kpis">
                {feature.metrics.map((m) => (
                  <div key={m.label} className="mm-modal__kpi">
                    <span className="mm-modal__kpi-value">{m.value}</span>
                    <span className="mm-modal__kpi-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {feature.quote && (
              <div className="mm-modal__section">
                <h3 className="mm-modal__section-title"><span className="mm-modal__section-num">05</span> In Their Words</h3>
                <blockquote className="mm-modal__quote">
                  <p>"{feature.quote.text}"</p>
                  <cite>— {feature.quote.attribution}</cite>
                </blockquote>
              </div>
            )}
          </div>

          {feature.announcementUrl && (
            <div className="mm-modal__sidebar">
              <AnnouncementEmbed url={feature.announcementUrl} screenshotFile={feature.screenshotFile} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── FeaturedCard ─────────────────────────────────────────────────────────────
function FeaturedCard({ feature, onOpen, index }) {
  return (
    <article
      className="mm-featured-card fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onOpen(feature)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(feature)}
    >
      <span className="mm-featured-card__category">{feature.category}</span>
      <h3 className="mm-featured-card__name">{feature.name}</h3>
      <p className="mm-featured-card__tagline">{feature.tagline}</p>
      <div className="mm-featured-card__metrics">
        {feature.metrics.map((m) => (
          <div key={m.label} className="mangomint__metric">
            <span className="mangomint__metric-value">{m.value}</span>
            <span className="mangomint__metric-label">{m.label}</span>
          </div>
        ))}
      </div>
      <span className="mm-featured-card__cta">Deep dive →</span>
    </article>
  )
}

// ─── Category colour map ──────────────────────────────────────────────────────
const CATEGORY_COLORS = {
  'Memberships':     '#c084fc',
  'Flows':           '#6FB7DB',
  'Gift Cards':      '#fbbf24',
  'Payroll':         '#34d399',
  'Forms':           '#fb923c',
  'Reporting':       '#a78bfa',
  'Online Booking':  '#22d3ee',
  'Platform':        '#94a3b8',
  'Marketing':       '#f472b6',
  'Payments':        '#f87171',
  'Offers':          '#d97706',
  'Scheduling':      '#a3e635',
  'Retention':       '#2dd4bf',
}

// ─── CarouselCard (flip card) ─────────────────────────────────────────────────
function CarouselCard({ feature, isFlipped, onFlip }) {
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = Math.abs(e.changedTouches[0].clientX - touchStartX.current)
    touchStartX.current = null
    if (delta < 8) onFlip() // only flip on tap, not swipe
  }

  const catColor = CATEGORY_COLORS[feature.category] || '#6FB7DB'

  return (
    <div
      className={`flip-card${isFlipped ? ' flip-card--flipped' : ''}`}
      style={{ '--cat-color': catColor }}
      onClick={onFlip}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onFlip()}
      aria-label={`${feature.name} — click to see details`}
    >
      <div className="flip-card__inner">
        {/* FRONT */}
        <div className="flip-card__front">
          <span className="flip-card__category">{feature.emoji} {feature.category}</span>
          <h3 className="flip-card__name">{feature.name}</h3>
          <div className="flip-card__divider" />
          <p className="flip-card__problem">{feature.problem}</p>
          <div className="flip-card__front-footer">
            {feature.announcementUrl && (
              <a
                href={feature.announcementUrl}
                className="flip-card__announce-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
              >
                View announcement ↗
              </a>
            )}
            <span className="flip-card__hint">flip for details →</span>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card__back">
          <span className="flip-card__category flip-card__category--back">{feature.emoji} {feature.category}</span>
          <p className="flip-card__how">{feature.howItWorks}</p>
          {feature.metrics.length > 0 && (
            <div className="flip-card__metrics">
              {feature.metrics.map((m) => (
                <div key={m.label} className="flip-card__metric">
                  <span className="flip-card__metric-value">{m.value}</span>
                  <span className="flip-card__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}
          {feature.quote && (
            <p className="flip-card__quote">"{feature.quote}"</p>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
function Carousel() {
  const [flippedIds, setFlippedIds] = useState(new Set())
  const [scrollLeft, setScrollLeft] = useState(0)
  const trackRef = useRef(null)
  // 256px matches .flip-card width; 16px matches .mm-carousel__track gap
  const CARD_WIDTH = 256 + 16
  const SCROLL_STEP = CARD_WIDTH * 2
  const total = carouselFeatures.length

  const updateState = useCallback(() => {
    const t = trackRef.current
    if (!t) return
    setScrollLeft(t.scrollLeft)
  }, [])

  useEffect(() => {
    const t = trackRef.current
    if (!t) return
    let rafId
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateState)
    }
    t.addEventListener('scroll', onScroll, { passive: true })
    updateState()
    return () => {
      t.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [updateState])

  const track = trackRef.current
  const maxScroll = track ? track.scrollWidth - track.clientWidth : 1
  const canPrev = scrollLeft > 4
  const canNext = track ? scrollLeft + track.clientWidth < track.scrollWidth - 4 : true
  const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0
  const visibleIdx = Math.min(Math.round(scrollLeft / CARD_WIDTH) + 1, total)

  const handleFlip = (id) => setFlippedIds((prev) => {
    const next = new Set(prev)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  })

  const scrollPrev = () => trackRef.current?.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' })
  const scrollNext = () => trackRef.current?.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' })

  return (
    <div className="mm-carousel">
      <div className="mm-carousel__controls">
        <button className="mm-carousel__btn" onClick={scrollPrev} disabled={!canPrev} aria-label="Previous">←</button>
        <button className="mm-carousel__btn" onClick={scrollNext} disabled={!canNext} aria-label="Next">→</button>
        <span className="mm-carousel__counter">{visibleIdx} <span className="mm-carousel__counter-sep">/</span> {total}</span>
      </div>

      <div className="mm-carousel__progress-wrap">
        <div className="mm-carousel__progress-bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div className="mm-carousel__track-wrap">
        <div className="mm-carousel__track" ref={trackRef}>
          {carouselFeatures.map((f) => (
            <CarouselCard
              key={f.id}
              feature={f}
              isFlipped={flippedIds.has(f.id)}
              onFlip={() => handleFlip(f.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Mangomint (root) ─────────────────────────────────────────────────────────
export default function Mangomint() {
  const sectionRef = useRef(null)
  const [activeFeature, setActiveFeature] = useState(null)

  const handleOpen = (feature) => setActiveFeature(feature)
  const handleClose = () => setActiveFeature(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    sectionRef.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mangomint" id="mangomint" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="mangomint__header fade-in">
          <div className="mangomint__company-row">
            <span className="mangomint__company-badge">Mangomint</span>
            <span className="mangomint__role-pill">Product Manager · Nov 2023–Present</span>
          </div>
          <h2 className="mangomint__title">Two years of shipping in production</h2>
          <p className="mangomint__subtitle">
            Sole PM across two product teams at a leading salon &amp; spa software platform —
            owning strategy, discovery, and delivery from 0 to launch.
          </p>
        </div>

        {/* Stats Bar */}
        <StatsBar />

        {/* Featured launches */}
        <div className="mm-featured fade-in">
          <h3 className="mm-section-heading">Featured launches</h3>
          <div className="mm-featured__grid">
            {featuredFeatures.map((f, i) => (
              <FeaturedCard key={f.id} feature={f} onOpen={handleOpen} index={i} />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="mm-carousel-section fade-in">
          <h3 className="mm-section-heading">More features I shipped</h3>
          <p className="mm-carousel-section__sub">
            Click any card to flip and see how it works, KPIs, and the announcement.
          </p>
          <Carousel />
        </div>
      </div>

      {/* Feature Modal */}
      {activeFeature && (
        <FeatureModal feature={activeFeature} onClose={handleClose} />
      )}
    </section>
  )
}
