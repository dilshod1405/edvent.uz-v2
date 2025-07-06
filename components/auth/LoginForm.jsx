'use client'
import React from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { motion } from 'framer-motion'

export default function LoginForm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tizimga kirish</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Parol</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="********"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Forgot Password + Register */}
        <div className="flex justify-between text-sm text-purple-700 mb-4">
          <a href="/forgot-password" className="hover:underline">Parolni unutdingizmi?</a>
          <a href="/register" className="hover:underline">Ro‘yxatdan o‘tish</a>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition font-medium mb-4 hover:cursor-pointer">
          Kirish
        </button>

        {/* Or Separator */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">yoki</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition hover:cursor-pointer">
          <FcGoogle size={20} className="mr-2" />
          <span className="text-gray-700 font-medium">Google orqali kirish</span>
        </button>
      </div>
    </motion.section>
  )
}