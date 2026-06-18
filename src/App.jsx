import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mangomint from './components/Mangomint'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import WhatIOffer from './components/WhatIOffer'
import Personal from './components/Personal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="page-stripes" aria-hidden="true">
        <div className="page-stripe-left" />
        <div className="page-stripe-right" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Mangomint />
        <CaseStudies />
        <WhatIOffer />
        <Skills />
        <Personal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
