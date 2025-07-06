'use client'

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSearch } from "react-icons/fi"
import ScrollFadeIn from "../common/ScrollAnimation"

const slides = [
  {
    title: "Arxitektura yo‘nalishini o‘rganing",
    description: "Ijod va funksionallikni birlashtiring.",
  },
  {
    title: "Qurilish muhandisligi asoslari",
    description: "Mustahkam inshootlar siz bilan boshlanadi.",
  },
  {
    title: "Dasturlashni 0 dan boshlang",
    description: "Kelajak texnologiyalarini siz yarating.",
  },
  {
    title: "Iqtisod va biznes asoslari",
    description: "Pul oqimini boshqarishni o‘rganing.",
  },
  {
    title: "UX/UI dizayn kurslari",
    description: "Foydalanuvchi tajribasini yarating.",
  },
  {
    title: "Sun’iy intellektga kirish",
    description: "AI yordamida aqlli tizimlar tuzing.",
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentSlide = slides[index]

  return (
    <ScrollFadeIn>
      <section className="mb-16 text-center px-4 py-12 sm:py-16">
        <div className="min-h-[140px] sm:min-h-[160px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
                {currentSlide.title}
              </h2>
              <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-xl mx-auto px-2 sm:px-0">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative max-w-xl mx-auto"
        >
          <FiSearch
            className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={18}
          />
          <motion.input
            type="search"
            placeholder="Kurs izlash..."
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.03, boxShadow: "0 0 15px rgba(116, 0, 253, 0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full rounded-full border border-gray-300 pl-11 pr-5 py-3 text-base sm:text-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-purple-600 transition"
          />
        </motion.div>
      </section>
    </ScrollFadeIn>
  )
}
