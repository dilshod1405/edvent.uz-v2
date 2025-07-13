'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiLock, FiImage, FiMapPin, FiPhone } from 'react-icons/fi'
import Image from 'next/image'
import plainApi from '@/lib/plainApi'
import VerifyCodeModal from '@/components/common/VerifyCodeModal'
import Loader from '@/components/common/Loader'
import DatePicker from '@/components/common/DatePicker'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    photo: null,
  })
  const [birthday, setBirthday] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrorMessage(null)
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }))
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null)

    if (!formData.photo) {
      setErrorMessage('Iltimos, profil rasmni yuklang.')
      setLoading(false)
      return
    }

    try {
      const data = new FormData()
      data.append('full_name', formData.full_name)
      data.append('email', formData.email)
      data.append('address', formData.address)
      data.append('phone', formData.phone)
      data.append('password', formData.password)
      data.append('photo', formData.photo)
      if (birthday) {
        data.append('birthday', birthday.format('YYYY-MM-DD'))
      }

      await plainApi.post('/api/auth/register/', data)

      setShowModal(true)
    } catch (error) {
      const msg =
        error?.response?.data?.detail ||
        error?.response?.data?.message ||
        error?.message ||
        'Xatolik yuz berdi.'
      setErrorMessage(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading && <Loader />}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
          noValidate
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ro‘yxatdan o‘tish</h2>

          {errorMessage && (
            <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-300 rounded">
              {errorMessage}
            </div>
          )}

          <FormInput
            label="To‘liq ism"
            name="full_name"
            icon={<FiUser />}
            value={formData.full_name}
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

          <FormInput
            label="Telefon"
            name="phone"
            type="tel"
            icon={<FiPhone />}
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Tug‘ilgan sana <span className="text-red-500">*</span>
            </label>
            <DatePicker date={birthday} setDate={setBirthday} />
          </div>

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
            disabled={loading}
            className="w-full py-3 rounded-lg font-medium bg-indigo-700 hover:bg-indigo-800 text-white transition"
          >
            Ro‘yxatdan o‘tish
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Allaqachon akkauntingiz bormi?{' '}
            <a href="/login" className="text-indigo-700 font-semibold hover:underline">
              Kirish
            </a>
          </p>
        </form>
      </motion.section>

      {showModal && (
        <VerifyCodeModal
          email={formData.email}
          password={formData.password}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
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
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
          required
          className="w-full outline-none text-gray-800 placeholder-gray-400"
        />
      </div>
    </div>
  )
}
