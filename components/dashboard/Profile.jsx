'use client'

import { useState, useEffect } from 'react'
import {
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  PencilIcon,
  SaveIcon,
  CameraIcon,
} from 'lucide-react'
import Image from 'next/image'
import api from '@/lib/apiClient'
import Swal from 'sweetalert2'
import Loader from '../common/Loader'


export default function Profile({ user }) {
  const [formData, setFormData] = useState({
    phone: user.phone || '',
    address: user.address || '',
    birthday: user.birthday || '',
  })

  const [photoPreview, setPhotoPreview] = useState('')
  const [editingField, setEditingField] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.photo) {
      const isUrl = user.photo.startsWith('http')
      setPhotoPreview(isUrl ? user.photo : `${process.env.NEXT_PUBLIC_API_BASE_URL}${user.photo}`)
    } else {
      setPhotoPreview('/images/default-avatar.png')
    }
  }, [user.photo])

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSave = async (field) => {
    setLoading(true)
    try {
      await api.patch(`/api/auth/api/students/${user.id}/profile/`, {
        [field]: formData[field],
      })

      Swal.fire({
        icon: 'success',
        title: 'Muvaffaqiyatli yangilandi',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'bg-indigo-500 text-white shadow-lg rounded-xl',
          title: 'text-white text-lg',
        },
      })

      setEditingField(null)
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: 'error',
        title: 'Xatolik yuz berdi',
        text: 'Qayta urinib ko‘ring',
        confirmButtonColor: '#6366f1',
      })
    } finally {
      setLoading(false)
    }
  }

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append('photo', file)

    try {
      setLoading(true)
      const res = await api.patch(
        `/api/auth/api/students/${user.id}/profile/`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      const updated = res.data.photo?.startsWith('http')
        ? res.data.photo
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}${res.data.photo}`
      setPhotoPreview(updated)

      Swal.fire({
        icon: 'success',
        title: 'Rasm yangilandi',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'bg-indigo-500 text-white shadow-lg rounded-xl',
          title: 'text-white text-lg',
        },
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Xatolik',
        text: 'Rasmni yuklashda xatolik yuz berdi',
        confirmButtonColor: '#6366f1',
      })
    } finally {
      setLoading(false)
    }
  }

  function formatDate(dateStr) {
    if (!dateStr) return '—'
    const [day, month, year] = dateStr.split('-')
    if (!day || !month || !year) return '—'
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden my-8">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-end sm:justify-start gap-6">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg overflow-hidden">
          {loading && <Loader />}

          <Image
            src={photoPreview || '/images/default-avatar.png'}
            alt={user.full_name || 'Foydalanuvchi rasmi'}
            fill
            sizes="144px"
            className="object-cover"
          />

          {/* Floating Camera Icon - Instagram uslubida */}
          <label className="absolute bottom-4 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer z-20 hover:bg-gray-100 transition">
            <CameraIcon className="w-5 h-5 text-indigo-600" />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </label>
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
            <div className="bg-indigo-200 text-center w-fit text-indigo-800 px-2 py-1 rounded-full text-sm font-semibold inline-block sm:ml-4">
              {user.role?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50">
        <EditableCard
          icon={<PhoneIcon size={24} className="text-indigo-700" />}
          label="Telefon"
          field="phone"
          value={formData.phone}
          isEditing={editingField === 'phone'}
          onEdit={() => setEditingField('phone')}
          onCancel={() => setEditingField(null)}
          onChange={handleChange}
          onSave={handleSave}
          loading={loading}
        />
        <EditableCard
          icon={<MapPinIcon size={24} className="text-indigo-700" />}
          label="Manzil"
          field="address"
          value={formData.address}
          isEditing={editingField === 'address'}
          onEdit={() => setEditingField('address')}
          onCancel={() => setEditingField(null)}
          onChange={handleChange}
          onSave={handleSave}
          loading={loading}
        />
        <InfoCard
          icon={<CalendarIcon size={24} className="text-indigo-700" />}
          title="Tug‘ilgan sana"
          value={formatDate(user.birthday)}
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

function EditableCard({
  icon,
  label,
  field,
  value,
  isEditing,
  onEdit,
  onCancel,
  onChange,
  onSave,
  loading,
  type = 'text',
}) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300">
      <div className="p-3 rounded-lg bg-indigo-100">{icon}</div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 font-semibold">{label}</p>
        {isEditing ? (
          <div className="flex gap-2 mt-2 items-center">
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(field, e.target.value)}
              className="border px-3 py-1 rounded-lg w-full text-gray-900"
            />
            <button
              disabled={loading}
              onClick={() => onSave(field)}
              className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
            >
              <SaveIcon size={18} />
            </button>
            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              Bekor
            </button>
          </div>
        ) : (
          <div className="flex justify-between mt-1 items-center">
            <p className="text-lg font-medium text-gray-900 break-words">
              {value || '—'}
            </p>
            <button
              onClick={onEdit}
              className="text-indigo-500 hover:text-indigo-700 transition"
            >
              <PencilIcon size={18} />
            </button>
          </div>
        )}
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
