import { useEffect, useRef } from 'react'
import './Research.css'

export default function Research() {
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
    <section className="research" id="research" ref={ref}>
      <div className="container">

        <div className="research__header fade-in">
          <span className="section-label">Research</span>
          <h2 className="section-title">Undergraduate Research Assistant</h2>
          <p className="section-subtitle">
            Vanderbilt University · Department of Computer Science · Spring 2023
          </p>
        </div>

        <div className="research__body">

          {/* Left: overview + details */}
          <div className="research__left fade-in">
            <div className="research__meta-row">
              <div className="research__meta-item">
                <span className="research__meta-label">Principal Investigator</span>
                <span className="research__meta-value">Dr. Matthew Berger</span>
              </div>
              <div className="research__meta-item">
                <span className="research__meta-label">Focus Area</span>
                <span className="research__meta-value">Bayesian Neural Networks</span>
              </div>
              <div className="research__meta-item">
                <span className="research__meta-label">Semester</span>
                <span className="research__meta-value">Spring 2023</span>
              </div>
            </div>

            <div className="research__block">
              <h3 className="research__block-title">Purpose of the Research</h3>
              <p className="research__block-body">
                This project aimed to build a tool that generates visual explanations of Bayesian
                deep learning models, making model uncertainty interpretable and human-readable.
                My work contributed to Dr. Berger's ongoing research on encoding Bayesian neural
                networks. While his work focused on last-layer Laplace transformations, my focus was
                specifically on computing a <strong>diagonal Laplace approximation</strong>, which
                captures uncertainty across all model weights rather than just the final layer.
              </p>
            </div>

            <div className="research__block">
              <h3 className="research__block-title">What I Did</h3>
              <ul className="research__list">
                <li>Studied Bayesian Neural Networks, Laplace transformations, and PyTorch tensors from scratch, entering a domain entirely new to me.</li>
                <li>Trained a <strong>ResNet18</strong> model on a subset of the <strong>Places365</strong> scene dataset, adapting from the original pretrained model when compatibility issues arose.</li>
                <li>Computed a <strong>diagonal Laplace approximation</strong> using the BackPACK and Laplace libraries, specifying a diagonal Hessian structure to capture full-network uncertainty.</li>
                <li>Solved a key technical blocker: the Laplace library's <code>parameters_to_vector()</code> output wasn't compatible with the model call signature. I implemented <code>vector_to_parameters()</code> to correctly reconstruct and load parameter dictionaries into the model.</li>
                <li>Generated posterior samples from the Laplace approximation and saved 3D probability tensors to disk for downstream analysis.</li>
                <li>Built a prediction pipeline that loops over images, averages class probabilities across sampled models, and computes <strong>entropy</strong> as an uncertainty metric.</li>
                <li>Ranked images by decreasing entropy and compared top-5 highest-uncertainty predictions to human judgment to evaluate model accuracy.</li>
              </ul>
            </div>

            <div className="research__tags">
              {['Python', 'PyTorch', 'ResNet18', 'Laplace Library', 'BackPACK', 'Places365', 'Bayesian Inference', 'Neural Networks'].map((t) => (
                <span key={t} className="research__tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: PDF viewer */}
          <div className="research__right fade-in">
            <div className="research__pdf-card">
              <div className="research__pdf-header">
                <span className="research__pdf-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="research__pdf-title">Research Documentation</span>
              </div>
              <iframe
                src={`${import.meta.env.BASE_URL}Research_Documentation_Bayesian_Neural_Networks.pdf`}
                className="research__pdf-embed"
                title="Research Documentation: Encoding Bayesian Neural Networks"
              />
              <a
                href={`${import.meta.env.BASE_URL}Research_Documentation_Bayesian_Neural_Networks.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="research__pdf-download"
              >
                Open full document ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
