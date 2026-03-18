'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/data/portfolioData'
import './Skills.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
}

const categoryVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
}

const skillVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
}

const Skills: React.FC = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement
            const level = progressBar.dataset.level
            if (level) {
              setTimeout(() => {
                progressBar.style.width = `${level}%`
              }, 200)
            }
            observer.unobserve(progressBar)
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    )

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  skillRefs.current = []

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3>{category.category}</h3>
              {category.items.map((skill, skillIndex) => (
                <motion.div key={skill.name} className="skill-level" variants={skillVariants}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="level-bar">
                    <div
                      ref={(el) => {
                        skillRefs.current[categoryIndex * category.items.length + skillIndex] = el
                      }}
                      className="level-progress"
                      data-level={skill.level}
                      data-skill-name={skill.name}
                      style={{ width: '0%' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
