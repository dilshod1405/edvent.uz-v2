'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { FiUser} from 'react-icons/fi'

export default function CourseCard({ course }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" }}
      className="bg-white rounded-lg p-5 w-64 flex-shrink-0 cursor-pointer select-none w-full max-w-xs shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <motion.div 
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mb-4 overflow-hidden rounded-lg"
      >
        <Image
          src={course.image}
          alt={course.title}
          width={256}
          height={140}
          className="object-cover w-full h-36"
          priority={true}
        />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-semibold text-lg mb-2 text-gray-900"
      >
        {course.title}
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center text-sm text-gray-600 mb-3 space-x-2"
      >
        <FiUser className="text-indigo3-600" size={16} />
        <span>O‘qituvchi: {course.teacher}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center text-indigo-700 font-bold text-lg space-x-2"
      >
        <span>{course.price} so‘m</span>
      </motion.div>
    </motion.div>
  )
}
