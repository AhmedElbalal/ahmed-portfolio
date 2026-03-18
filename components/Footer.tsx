'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'
import './Footer.css'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h2>Ahmed Elbalal</h2>
            <p>
              Frontend developer focused on building scalable, performant web applications with
              React, TypeScript, and modern UI systems.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
              <a
                href="https://github.com/AhmedElbalal"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-a-460b36160/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/ELBALLAL"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.npmjs.com/~ahmedelbalal"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NPM"
              >
                <i className="fab fa-npm"></i>
                <span>NPM</span>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {currentYear} Ahmed Elbalal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
