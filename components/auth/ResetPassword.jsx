'use client'

import { useState, useEffect } from 'react'
import { FiLock } from 'react-icons/fi'
import { motion } from 'framer-motion'
import api from '@/lib/apiClient'
import { useRouter, useSearchParams } from 'next/navigation'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default function ResetPassword() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const emailFromQuery = searchParams.get('email') || ''

  const [email, setEmail] = useState(emailFromQuery)
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!emailFromQuery) {
      router.push('/forgot-password')
    } else {
      setEmail(emailFromQuery)
    }
  }, [emailFromQuery, router])

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      if (newPassword.length < 8) {
        setError('Parol kamida 8 ta belgidan iborat bo‘lishi kerak.')
        setLoading(false)
        return
      }

      await api.post('/api/auth/reset-password/confirm/', {
        email,
        new_password: newPassword,
      })

      await Swal.fire({
        icon: 'success',
        title: 'Parol muvaffaqiyatli yangilandi!',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
  
        didClose: () => {
            router.push('/login')
        },
        })

    } catch (err) {
      const msg =
        err.response?.data?.detail ||
        'Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
    >
      <form
        onSubmit={handlePasswordReset}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Yangi parolni kiriting
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Yangi parol</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Kamida 8 ta belgi"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-700 text-white py-3 rounded-lg hover:bg-indigo-800 transition font-medium disabled:opacity-60"
        >
          {loading ? 'Yuklanmoqda...' : 'Parolni Yangilash'}
        </button>
      </form>
    </motion.section>
  )
}
