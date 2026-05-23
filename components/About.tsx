'use client'

import { Coffee, Rocket, Code, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <div className="about-text">
            <motion.div
              className="profile-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/profile.png"
                alt="Ahmed Elbalal - Frontend Developer"
                className="profile-image"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80'
                }}
              />
            </motion.div>

            <motion.h3
              className="about-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Frontend Developer Focused on Clean, Scalable UI
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I build responsive, modern web interfaces with React, TypeScript, and component-based
              architecture. My focus is on creating user-friendly experiences that are performant,
              maintainable, and ready to grow with real products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I enjoy translating ideas into polished interfaces, improving usability, and writing
              code that other developers can understand and extend. I am continuously strengthening
              my skills in modern frontend development, testing, and full product thinking.
            </motion.p>

            <motion.div
              className="experience-highlights"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Rocket,
                  title: 'Fast Learner & Adaptable',
                  text: 'Comfortable learning new tools quickly and applying them to real projects with a practical mindset.',
                },
                {
                  icon: Code,
                  title: 'Clean, Maintainable Code',
                  text: 'I value readable structure, reusable components, and code that stays easy to maintain as a project grows.',
                },
                {
                  icon: Users,
                  title: 'Collaborative Mindset',
                  text: 'Comfortable working with designers, developers, and stakeholders to turn requirements into usable interfaces.',
                },
                {
                  icon: Target,
                  title: 'Problem Solving',
                  text: 'I enjoy breaking down complex UI challenges and turning them into simple, effective solutions.',
                },
              ].map(({ icon: Icon, title, text }) => (
                <motion.div key={title} className="highlight" whileHover={{ x: 10 }}>
                  <div className="highlight-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="cta-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <p>
                Currently seeking frontend developer opportunities where I can contribute to
                meaningful products, keep learning, and grow within a strong team environment.
              </p>
              <Button variant="primary" icon={Coffee} href="#contact">
                Let&apos;s Connect
              </Button>
            </motion.div>
          </div>

          <div className="about-image">
            <motion.div
              className="tech-stack-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  label: 'Core Technologies',
                  cls: 'core',
                  icons: [
                    { cls: 'fab fa-react', name: 'React' },
                    { cls: 'fab fa-js', name: 'TypeScript' },
                    { cls: 'fab fa-react', name: 'Next.js' },
                    { cls: 'fab fa-css3-alt', name: 'Tailwind' },
                  ],
                },
                {
                  label: 'Development Tools',
                  cls: 'tools',
                  icons: [
                    { cls: 'fab fa-git-alt', name: 'Git' },
                    { cls: 'fab fa-figma', name: 'Figma' },
                    { cls: 'fas fa-code', name: 'VSCode' },
                    { cls: 'fab fa-npm', name: 'NPM' },
                  ],
                },
                {
                  label: 'Currently Learning',
                  cls: 'learning',
                  icons: [
                    { cls: 'fab fa-node-js', name: 'Node.js' },
                    { cls: 'fas fa-vial', name: 'Testing' },
                    { cls: 'fab fa-aws', name: 'AWS' },
                    { cls: 'fas fa-database', name: 'PostgreSQL' },
                  ],
                },
              ].map(({ label, cls, icons }) => (
                <motion.div key={label} className={`stack-layer ${cls}`} whileHover={{ y: -5 }}>
                  <h4>{label}</h4>
                  <div className="tech-icons">
                    {icons.map(({ cls: iconCls, name }) => (
                      <div key={name} className="tech-icon" title={name}>
                        <i className={iconCls}></i>
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About