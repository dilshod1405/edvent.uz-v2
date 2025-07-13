'use client'

import { useState } from 'react'
import { FiMail, FiHash } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import api from '@/lib/apiClient'
import { useRouter } from 'next/navigation'

export default function ForgotPassword() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendCode = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await api.post('/api/auth/reset-password/request/', { email })
      setShowModal(true)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    if (code.length !== 6) return

    setLoading(true)
    try {
      await api.post('/api/auth/reset-password/verify/', { email, code })
      router.push('/reset-password/confirm?email=' + encodeURIComponent(email))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center"
    >
      <form
        onSubmit={handleSendCode}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Parolni tiklash
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-700 text-white py-3 rounded-lg hover:bg-indigo-800 transition font-medium disabled:opacity-60"
        >
          {loading ? 'Yuborilmoqda...' : 'Yuborish'}
        </button>
      </form>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          >
            <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative">
              <h3 className="text-lg font-bold mb-4 text-center text-gray-800">
                Kodingizni kiriting
              </h3>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">6 xonali kod</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                  <FiHash className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="123456"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full outline-none text-gray-800 placeholder-gray-400 tracking-widest"
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
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
