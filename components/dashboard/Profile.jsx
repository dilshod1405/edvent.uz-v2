'use client'


import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
} 
from 'lucide-react'
import Image from 'next/image'

export default function Profile({ user }) {
  if (!user) {
    return (
      <div className="text-center text-gray-400 italic py-16">
        Foydalanuvchi ma'lumotlari yuklanmoqda...
      </div>
    )
  }

  function formatDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return new Date(NaN)
  const [day, month, year] = dateStr.split('-')
  if (!day || !month || !year) return new Date(NaN)
  return new Date(`${year}-${month}-${day}`)
}

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Header banner */}
      <div className="relative bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 h-44 flex items-center px-10">
        {/* Profil rasm */}
        <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
            src={
                user.photo
                ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${user.photo}`
                : '/images/default-avatar.png'
            }
            alt={user.full_name}
            fill
            sizes="128px"
            className="object-cover"
            />

        </div>

        {/* Ism va email */}
        <div className="ml-8 text-white select-none">
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg">
            {user.full_name}
          </h1>
          <div className="flex items-center gap-2 mt-1 text-indigo-200 font-medium text-lg">
            <MailIcon size={20} />
            <span>{user.email}</span>
          </div>
          <div
            className="mt-3 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-indigo-200 text-indigo-900 select-text"
          >
            {user.role.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Info grid */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50">
        <InfoCard icon={<PhoneIcon size={24} className="text-indigo-700" />} title="Telefon" value={user.phone || '—'} />
        <InfoCard icon={<MapPinIcon size={24} className="text-indigo-700" />} title="Manzil" value={user.address || '—'} />
        <InfoCard
  icon={<CalendarIcon size={24} className="text-indigo-700" />}
  title="Tug‘ilgan sana"
  value={
    user.birthday
      ? formatDate(user.birthday).toLocaleDateString('uz-UZ')
      : '—'
  }
/>
        <InfoCard
          icon={<CalendarIcon size={24} className="text-indigo-700" />}
          title="Ro‘yxatdan o‘tgan sana"
          value={user.date_joined ? new Date(user.date_joined).toLocaleDateString('uz-UZ') : '—'}
        />
      </div>
    </div>
  )
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 cursor-default">
      <div className="p-3 rounded-lg bg-indigo-100">{icon}</div>
      <div>
        <p className="text-gray-500 font-semibold">{title}</p>
        <p className="text-lg font-medium text-gray-900">{value}</p>
      </div>
    </div>
  )
}
