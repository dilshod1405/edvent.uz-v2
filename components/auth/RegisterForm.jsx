'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiLock, FiImage, FiMapPin, FiAtSign } from 'react-icons/fi'
import Image from 'next/image'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    email: '',
    address: '',
    password: '',
    photo: null,
  })

  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }))
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.photo) {
      alert("Iltimos, profil rasmni yuklang.")
      return
    }

    const data = new FormData()
    data.append('full_name', formData.full_name)
    data.append('username', formData.username)
    data.append('email', formData.email)
    data.append('address', formData.address)
    data.append('password', formData.password)
    if (formData.photo) {
      data.append('photo', formData.photo)
    }

    console.log('Form submitted:', formData)
    // TODO: Submit the form via fetch or axios
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    >
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ro‘yxatdan o‘tish</h2>

        <FormInput
          label="To‘liq ism"
          name="full_name"
          icon={<FiUser />}
          value={formData.full_name}
          onChange={handleChange}
        />
        <FormInput
          label="Foydalanuvchi nomi"
          name="username"
          icon={<FiAtSign />}
          value={formData.username}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          icon={<FiMail />}
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          label="Manzil"
          name="address"
          icon={<FiMapPin />}
          value={formData.address}
          onChange={handleChange}
        />

        {/* Photo Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Profil rasmi <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-medium">
              <FiImage className="mr-2" />
              Rasm tanlash
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
                required={!formData.photo}
              />
            </label>
            {preview && (
              <Image
                src={preview}
                alt="Preview"
                width={96}
                height={96}
                className="w-24 h-24 object-cover rounded-full"
              />
            )}
          </div>
        </div>

        <FormInput
          label="Parol"
          name="password"
          type="password"
          icon={<FiLock />}
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition font-medium"
        >
          Ro‘yxatdan o‘tish
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Allaqachon akkauntingiz bormi?{' '}
          <a href="/login" className="text-purple-700 font-semibold hover:underline">
            Kirish
          </a>
        </p>
      </form>
    </motion.section>
  )
}

function FormInput({ label, name, type = 'text', icon, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        <div className="text-gray-400 mr-2">{icon}</div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={label}
          required
          className="w-full outline-none text-gray-800 placeholder-gray-400"
        />
      </div>
    </div>
  )
}
