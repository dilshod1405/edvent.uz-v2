'use client'

import {
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
} from 'lucide-react'
import Image from 'next/image'

export default function Profile({ user }) {
  function formatDate(dateStr) {
  if (!dateStr) return null
  const [day, month, year] = dateStr.split('-')
  if (!day || !month || !year) return null
  const isoDateStr = `${year}-${month}-${day}`
  const date = new Date(isoDateStr)

  return isNaN(date) ? null : date
}



  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden my-8">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-end sm:justify-start gap-6">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
          <Image
            src={
              user.photo?.startsWith('http')
                ? user.photo
                : `${process.env.NEXT_PUBLIC_API_BASE_URL}${user.photo}`
            }
            alt={user.full_name}
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-white sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold drop-shadow-md">
            {user.full_name}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-indigo-200 font-medium text-base sm:text-lg">
            <div className="flex items-center gap-1">
              <MailIcon size={18} />
              <span>{user.email}</span>
            </div>
            <div className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full text-sm font-semibold inline-block sm:ml-4">
              {user.role?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50">
        <InfoCard
          icon={<PhoneIcon size={24} className="text-indigo-700" />}
          title="Telefon"
          value={user.phone || '—'}
        />
        <InfoCard
          icon={<MapPinIcon size={24} className="text-indigo-700" />}
          title="Manzil"
          value={user.address || '—'}
        />
        <InfoCard
          icon={<CalendarIcon size={24} className="text-indigo-700" />}
          title="Tug‘ilgan sana"
          value={
            user.birthday
              ? formatDate(user.birthday)?.toLocaleDateString('uz-UZ')
              : '—'
          }
        />
        <InfoCard
          icon={<CalendarIcon size={24} className="text-indigo-700" />}
          title="Ro‘yxatdan o‘tgan sana"
          value={
            user.date_joined
              ? new Date(user.date_joined).toLocaleDateString('uz-UZ')
              : '—'
          }
        />
      </div>
    </div>
  )
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300">
      <div className="p-3 rounded-lg bg-indigo-100">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 font-semibold">{title}</p>
        <p className="text-lg font-medium text-gray-900 mt-1 break-words">
          {value}
        </p>
      </div>
    </div>
  )
}
