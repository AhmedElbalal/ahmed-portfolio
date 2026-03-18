// ✅ This is a SERVER component — Next.js renders the full HTML on the server
// No "use client" here intentionally

import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { Particles } from '@/components/Particles'
import { WhatsAppButton } from '@/components/WhatsAppButton'

// Three.js / WebGL MUST be dynamically imported with ssr: false
// It uses browser-only APIs (WebGL, canvas) that don't exist on the server
const InteractiveTechSphere = dynamic(
  () => import('@/components/InteractiveTechSphere'),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--gray)' }}>Loading Tech Sphere…</span>
      </div>
    ),
  }
)

// Lazy-load below-the-fold sections for performance
const About = dynamic(() => import('@/components/About'))
const Experience = dynamic(() => import('@/components/Experience'))
const Projects = dynamic(() => import('@/components/Projects'))
const Skills = dynamic(() => import('@/components/Skills'))
const Contact = dynamic(() => import('@/components/Contact'))

export default function Home() {
  return (
    <div className="App">
      <Particles />
      <Header />
      <Hero />
      <InteractiveTechSphere />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
