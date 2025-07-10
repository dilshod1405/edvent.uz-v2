'use client'

import React, { useState } from "react"
import { FiMail, FiLock } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import api from "@/lib/apiClient"
import { useAuthStore } from "@/store/authStore"
import {jwtDecode} from "jwt-decode"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const setToken = useAuthStore((state) => state.setToken)
  const setUser = useAuthStore((state) => state.setUser)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 1. Tokenlarni olish
      const tokenRes = await api.post("/api/token/", {
        email,
        password,
      })

      const { access, refresh } = tokenRes.data
      setToken(access)
      localStorage.setItem("access", access)
      localStorage.setItem("refresh", refresh)

      // 2. JWT tokenni decode qilib user_id olish
      const decoded = jwtDecode(access)
      const userId = decoded.user_id

      // 3. User ma’lumotlarini olish
      const userRes = await api.get(`/api/auth/users/${userId}/`)
      setUser(userRes.data)

      router.push("/")
    } catch (error) {
      alert("Email yoki parol noto‘g‘ri.")
      console.error(error.response?.data || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 min-h-screen"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Tizimga kirish
        </h2>

        {/* Email */}
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

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Parol</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Forgot/Register */}
        <div className="flex justify-between text-sm text-indigo-700 mb-4">
          <a href="/forgot-password" className="hover:underline">
            Parolni unutdingizmi?
          </a>
          <a href="/register" className="hover:underline">
            Ro‘yxatdan o‘tish
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-700 text-white py-3 rounded-lg hover:bg-indigo-800 transition font-medium mb-4 disabled:opacity-60"
        >
          {loading ? "Yuklanmoqda..." : "Kirish"}
        </button>

        {/* Separator */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">yoki</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} className="mr-2" />
          <span className="text-gray-700 font-medium">Google orqali kirish</span>
        </button>
      </form>
    </motion.section>
  )
}
