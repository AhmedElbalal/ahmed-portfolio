'use client'

import { PlayCircle, Code, ExternalLink, Github, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '@/data/portfolioData'
import { Button } from './ui/Button'
import './Projects.css'

const Projects: React.FC = () => {
  const featuredProjects = Array.isArray(projects) ? projects.slice(0, 3) : []

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Real-World Projects
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From e-commerce platforms to analytics dashboards — built with modern technologies and
          best practices
        </motion.p>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <div className="project-meta">
                  <div className="project-category">{project.category ?? 'Project'}</div>
                  <h3>{project.title ?? 'Untitled Project'}</h3>
                  <div className="project-metrics">
                    <div className="metric">
                      <Zap size={16} />
                      <span>{project.performance ?? 'N/A'} Score</span>
                    </div>
                    <div className="metric">
                      <Users size={16} />
                      <span>{project.users ?? 'Demo'}</span>
                    </div>
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl ?? '#'}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title ?? 'project'}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl ?? '#'}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code for ${project.title ?? 'project'}`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="project-image-container">
                <img
                  src={project.image ?? ''}
                  alt={`${project.title ?? 'Project'} screenshot`}
                  className="project-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="project-overlay">
                  <Button
                    variant="primary"
                    icon={PlayCircle}
                    href={project.liveUrl ?? '#'}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className="project-body">
                <p className="project-description">{project.description ?? ''}</p>

                <div className="project-case-study">
                  <div className="case-study-section">
                    <h4>🚀 Technical Challenge</h4>
                    <p>{project.challenge ?? ''}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>💡 My Solution</h4>
                    <p>{project.solution ?? ''}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>📈 Key Results</h4>
                    <ul className="results-list">
                      {(project.results ?? []).map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-tech-stack">
                  <h4>🛠️ Technology Stack</h4>
                  <div className="tech-tags">
                    {(project.technologies ?? []).map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <Button
                    variant="primary"
                    icon={ExternalLink}
                    href={project.liveUrl ?? '#'}
                    target="_blank"
                  >
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    icon={Code}
                    href={project.githubUrl ?? '#'}
                    target="_blank"
                  >
                    Source Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="github-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects, contributions, and code samples.</p>
          <Button
            variant="primary"
            icon={Github}
            href="https://github.com/AhmedElbalal"
            target="_blank"
          >
            Visit My GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
