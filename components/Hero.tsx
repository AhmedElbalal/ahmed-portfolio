'use client'

import { Rocket, Download, Send, Github } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { heroStats } from '@/data/portfolioData'
import { Button } from './ui/Button'
import './Hero.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            <span>Frontend </span>
            <TypeAnimation
              sequence={['Engineer', 2000, 'Developer', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="type-animation"
            />
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Building scalable, performant web applications with React, TypeScript & Node.js
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            {heroStats.map((stat, index) => (
              <div key={index} className="stat">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="hero-btns" variants={itemVariants}>
            <Button variant="primary" icon={Rocket} href="#projects">
              View My Work
            </Button>
            <Button
              variant="secondary"
              icon={Download}
              href="https://drive.google.com/file/d/1hH-8mcSikhdcuZftN347T6YlyJg75Lti/view?usp=drive_link"
            >
              Download Resume
            </Button>
            <Button variant="outline" icon={Github} href="https://github.com/AhmedElbalal">
              GitHub
            </Button>
            <Button variant="outline" icon={Send} href="#contact">
              Let&apos;s Connect
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-image">
        <div className="floating-elements">
          <motion.div className="floating-element react" variants={floatingVariants} animate="animate">
            <i className="fab fa-react"></i>
          </motion.div>
          <motion.div
            className="floating-element typescript"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <i className="fab fa-js"></i>
          </motion.div>
          <motion.div
            className="floating-element node"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          >
            <i className="fab fa-node-js"></i>
          </motion.div>
          <motion.div
            className="floating-element aws"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 6 }}
          >
            <i className="fab fa-aws"></i>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
