'use client'

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSearch } from "react-icons/fi"
import Image from "next/image"

const slides = [
  {
    title: "Arxitektura yo‘nalishini o‘rganing",
    description: "Ijod va funksionallikni birlashtiring.",
  },
  {
    title: "Dasturlashni 0 dan boshlang",
    description: "Kelajak texnologiyalarini siz yarating.",
  },
  {
    title: "Biznes va moliyaviy savodxonlik",
    description: "Bozorni tushuning, qarorlarni aniq qabul qiling.",
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

  const currentSlide = slides[index] ?? slides[0]

  return (
    <section className="bg-white py-5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">
          {/* Static height wrapper to prevent layout shift */}
          <div className="min-h-[160px] mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                  {currentSlide.title}
                </h1>
                <p className="text-gray-600 text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto md:mx-0">
            <FiSearch className="absolute top-1/2 left-5 -translate-y-1/2 text-indigo-700" size={20} />
            <input
              type="search"
              placeholder="Kurs izlash..."
              className="w-full rounded-full border border-gray-300 pl-14 pr-6 py-4 text-base text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-lg mx-auto md:mx-0"
        >
          <div className="rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="Hero illustration"
              width={600}
              height={400}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
