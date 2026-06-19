'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#why-5d', label: 'WHY 5D' },
    { href: '#equipment', label: 'EQUIPMENT' },
    { href: '#services', label: 'SERVICES' },
    { href: '#contact', label: 'CONTACT' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d] border-b border-[#222]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <span className="text-white font-bold text-lg tracking-widest uppercase">
            5D ENTERPRISES{' '}
          </span>
          <span className="text-[#f5c518] font-bold text-lg tracking-widest uppercase">
            LLC
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-semibold tracking-widest hover:text-[#f5c518] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7198501498"
            className="flex items-center gap-2 bg-[#f5c518] text-black font-bold text-sm tracking-wider px-4 py-2 hover:bg-yellow-400 transition-colors"
          >
            <PhoneIcon />
            719-850-1498
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Hazard stripe */}
      <div className="hazard-stripe h-3" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-base font-bold tracking-widest hover:text-[#f5c518] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7198501498"
            className="inline-flex items-center gap-2 bg-[#f5c518] text-black font-bold text-sm tracking-wider px-4 py-3 w-full justify-center"
          >
            <PhoneIcon />
            719-850-1498
          </a>
        </div>
      )}
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  )
}
