'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiUser } from 'react-icons/fi'

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    {
      name: 'Profil',
      href: pathname, // yoki `/dashboard/${id}` dinamik tarzda
      icon: <FiUser />,
    },
    // keyinroq boshqa linklar qo‘shiladi
  ]

  return (
    <aside className="w-64 bg-white shadow-md border-r min-h-screen p-4">
      <h2 className="text-xl font-bold text-indigo-700 mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.name}
              href={link.href}
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
      </nav>
    </aside>
  )
}
