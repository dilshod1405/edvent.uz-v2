'use client'

import { useState } from 'react'
import { FiHash } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import apiClient from '@/lib/apiClient'
import {jwtDecode} from 'jwt-decode'
import { useRouter } from 'next/navigation'
import plainApi from '@/lib/plainApi'

export default function VerifyCodeModal({ email, password, onClose }) {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleVerifyCode = async () => {
    if (code.length !== 6) return
    setLoading(true)
    setError(null)

    if (!email || !password) {
      setError("Email yoki parol topilmadi.")
      setLoading(false)
      return
    }

    try {
      await plainApi.post('/api/auth/verify-email/', { email, code })

      const tokenRes = await plainApi.post('/api/token/', { email, password })
      const { access, refresh } = tokenRes.data
      if (!access || typeof access !== 'string') throw new Error('Token mavjud emas')

      localStorage.setItem('access', access)
      localStorage.setItem('refresh', refresh)

      const decoded = jwtDecode(access)
      const userId = decoded.user_id

      const userRes = await apiClient.get(`/api/auth/users/${userId}/`)
      if (!userRes.data) throw new Error('Foydalanuvchi ma’lumotlari topilmadi')

      localStorage.setItem('user', JSON.stringify(userRes.data))
      router.push(`/dashboard/${userId}/profile`)
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        err.message ||
        'Kod noto‘g‘ri yoki tizimda muammo.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      >
        <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative">
          <h3 className="text-lg font-bold mb-4 text-center text-gray-800">Email tasdiqlash</h3>

          {error && (
            <div className="mb-3 text-sm text-red-600 bg-red-100 border border-red-300 p-2 rounded">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">6 xonali kod</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <FiHash className="text-gray-400 mr-2" />
              <input
                type="text"
                maxLength={6}
                placeholder="123456"
                value={code}
                onChange={(e) => setCode(e.target.value.trim())}
                className="w-full outline-none text-gray-800 placeholder-gray-400 tracking-widest"
                autoFocus
              />
            </div>
          </div>

          <button
            onClick={handleVerifyCode}
            disabled={loading || code.length !== 6}
            className="w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition font-medium disabled:opacity-60"
          >
            {loading ? 'Tasdiqlanmoqda...' : 'Tasdiqlash'}
          </button>

          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
