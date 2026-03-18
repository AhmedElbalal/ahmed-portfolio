'use client'

import { Menu, X } from 'lucide-react'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import './Header.css'

export const Header: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()
  const { isScrolled } = useScrollAnimation()

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Tech Stack' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            Ahmed<span>Elbalal</span>
          </a>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMobileMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
