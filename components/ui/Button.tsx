'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'secondary'
  icon?: LucideIcon
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  target?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  target,
}) => {
  const baseClasses =
    'btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25 hover:from-blue-600 hover:to-cyan-600',
    outline:
      'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-blue-500/25',
    secondary:
      'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white hover:border-blue-500',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {Icon && <Icon size={20} />}
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </button>
  )
}
