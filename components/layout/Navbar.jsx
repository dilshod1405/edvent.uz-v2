'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { useAuthStore } from '@/store/authStore'

const navLinks = [
  { name: 'Kurslar', href: '/education/courses' },
  { name: 'Imtihonlar', href: '/examination/exams' },
  { name: 'Hamkorlik', href: '/collaboration' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const user = useAuthStore((state) => state.user)

  return (
    <header className="border-b border-gray-200 px-6 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-700 cursor-pointer">
          <Link href="/">Edvent</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm items-center text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:underline"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <Link
              href={`/dashboard/${user.id}`}
              className="text-indigo-700 font-semibold hover:underline"
            >
              {user.full_name}
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-indigo-700 font-semibold hover:underline"
            >
              Kirish
            </Link>
          )}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white border-t border-gray-200 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-gray-700 hover:text-purple-700"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <Link
              href={`/dashboard/${user.id}`}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-indigo-700 font-semibold hover:underline"
            >
              {user.full_name}
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-indigo-700 font-semibold hover:underline"
            >
              Kirish
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
