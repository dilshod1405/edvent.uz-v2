'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiUser, FiBookOpen, FiFileText, FiAward, FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

export default function Sidebar({ userId }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const clearAuth = useAuthStore((state) => state.clearAuth)

  const handleLogout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    clearAuth()
    router.push('/login')
    closeSidebar()
  }

  const links = [
    { name: 'Profil', href: `/dashboard/${userId}/profile`, icon: <FiUser /> },
    { name: 'Mening kurslarim', href: `/dashboard/${userId}/courses`, icon: <FiBookOpen /> },
    { name: 'Imtihonlarim', href: `/dashboard/${userId}/exams`, icon: <FiFileText /> },
    { name: 'Sertifikatlar', href: `/dashboard/${userId}/certificates`, icon: <FiAward /> },
  ]

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* Mobile topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-40 flex justify-between items-center px-4 py-3">
        <button onClick={toggleSidebar}>
          <FiMenu size={24} className="text-indigo-700" />
        </button>
        <Link href="/" className="text-xl font-bold text-indigo-700">Edvent</Link>
        <div className="w-6" />
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 bg-white shadow-md border-r w-64 h-full p-4 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block min-h-screen
      `}>
        {/* Mobile header */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <Link href="/" className="text-2xl font-bold text-indigo-700">Edvent</Link>
          <button onClick={closeSidebar}><IoClose size={24} /></button>
        </div>

        {/* Desktop logo */}
        <Link href="/" className="hidden md:block text-2xl font-bold text-indigo-700 mb-6 text-center">Edvent</Link>

        <nav className="space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            )
          })}

          <button
            onClick={() => {
              handleLogout()
            }}
            className="flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-100 w-full mt-4"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
              />
            </svg>
            Chiqish
          </button>
        </nav>

      </aside>

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={closeSidebar}></div>
      )}
    </>
  )
}
