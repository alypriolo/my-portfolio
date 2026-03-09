import { useEffect, useRef } from 'react'
import './Mangomint.css'

const features = [
  {
    id: 1,
    name: 'Flows',
    category: 'Communication Automation',
    description:
      'End-to-end communication automation engine with 13 trigger events supporting SMS, email, delays, conditions, and account balance credits. Most popular: Appointment Completed flow for rebooking and retention.',
    metrics: [
      { value: '14,000+', label: 'Active flows built' },
      { value: '$540k+', label: 'Revenue generated (18 mo)' },
    ],
    callout: 'One customer generated $11k revenue from flows costing $389 to send.',
  },
  {
    id: 2,
    name: 'Offers',
    category: 'Rule-Based Discounting',
    description:
      'Flexible discount engine with criteria including first-time clients, specific services, service providers, and minimum sales amounts. Extended with membership-client limits, new-client-only restrictions, and prepayment discounts.',
    metrics: [
      { value: '24,000+', label: 'Offers created' },
      { value: '66%', label: 'Customer base adoption' },
    ],
    callout: '23k activated offers across ~3,800 companies.',
  },
  {
    id: 3,
    name: 'Payroll Processing',
    category: 'Financial Operations',
    description:
      'Full payroll suite including onboarding sync, QuickBooks integration for automatic pay-run syncing, self-serve worker termination, and product commission overrides.',
    metrics: [
      { value: '23.1%', label: 'Adoption rate' },
      { value: '12–14 hrs', label: 'Saved per week (onboarding sync)' },
    ],
    callout: '561 product commission overrides created post-launch. Self-serve termination eliminated recurring monthly support tickets.',
  },
  {
    id: 4,
    name: 'Online Membership & Package Sales',
    category: 'E-Commerce',
    description:
      'Clients can purchase memberships and packages online, view credits, cancel anytime, and sign agreements for compliance, all without staff intervention.',
    metrics: [
      { value: '12,000+', label: 'Memberships/packages enabled online' },
      { value: '29%', label: 'Customer base adoption' },
    ],
    callout: null,
  },
  {
    id: 5,
    name: 'Group Bookings',
    category: 'Scheduling',
    description:
      'Supports up to 5 guests × 4 services each with smart scheduling for concurrent start times and smart provider filtering to prevent double-booking.',
    metrics: [
      { value: '41,000+', label: 'Group appointments booked' },
      { value: 'June 2025', label: 'Launch date' },
    ],
    callout: null,
  },
  {
    id: 6,
    name: 'User Delight & Quality of Life',
    category: 'Platform Improvements',
    description:
      'Shipped a range of improvements: Detailed Receipt Preview, Void Sale Wizard & Partial Reversals, Forms export, Gift Card search, Membership Pause, granular staff permissions, achievements, and peer gifting.',
    metrics: [
      { value: '7+', label: 'Features shipped' },
      { value: '0 tickets', label: 'Monthly support tickets eliminated' },
    ],
    callout: null,
  },
]

export default function Mangomint() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mangomint" id="mangomint" ref={ref}>
      <div className="container">

        <div className="mangomint__header fade-in">
          <div className="mangomint__company-row">
            <span className="mangomint__company-badge">Mangomint</span>
            <span className="mangomint__role-pill">Product Manager</span>
          </div>
          <h2 className="mangomint__title">Products I've shipped in production</h2>
          <p className="mangomint__subtitle">
            Building core features across scheduling, payments, automation, and operations
            for a leading salon &amp; spa software platform.
          </p>
        </div>

        <div className="mangomint__grid">
          {features.map((f, i) => (
            <article
              key={f.id}
              className="mangomint__card fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mangomint__card-top">
                <span className="mangomint__card-category">{f.category}</span>
              </div>
              <h3 className="mangomint__card-name">{f.name}</h3>
              <p className="mangomint__card-desc">{f.description}</p>

              <div className="mangomint__card-metrics">
                {f.metrics.map((m) => (
                  <div key={m.label} className="mangomint__metric">
                    <span className="mangomint__metric-value">{m.value}</span>
                    <span className="mangomint__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {f.callout && (
                <blockquote className="mangomint__callout">{f.callout}</blockquote>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
