import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

const links = [
  {
    title: 'Kurslar',
    items: ['Fundamental kurslar', 'Mutaxassislik kurslar', 'Tarif kurslar', 'Maxsus treninglar'],
  },
  {
    title: 'Platforma',
    items: ['Mentorlar', 'Xizmatlar', 'Yordam', 'Imtihonlar', 'Blog', 'Hamkorlik'],
  },
  {
    title: 'Biz haqimizda',
    items: ['Huquqiy hujjatlar', 'Loyihalar'],
  },
]

export default function Footer() {
  return (
    <footer className="mt-16 px-6 py-12 text-sm text-white" style={{ backgroundColor: '#2C283F' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brend va ijtimoiy tarmoqlar */}
        <div>
          <h1 className="text-xl font-bold mb-4">Edvent</h1>
          <p className="mb-4 text-gray-300">Bilim – eng katta boylik. Biz bilan o‘rganing!</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaTelegramPlane />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Linklar */}
        {links.slice(0, 2).map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Huquqiy hujjatlar + QR */}
        <div>
          <h3 className="font-semibold mb-3">Biz haqimizda</h3>
          <ul className="space-y-2 mb-4">
            {links[2].items.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-primary transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="mb-2 text-gray-300">Mobil ilovani yuklab olish:</p>
          <div className="w-24 h-24">
            <Image
              src="/images/qr-placeholder.png"
              alt="QR code"
              width={96}
              height={96}
              className="rounded border border-gray-600"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Edvent. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}
