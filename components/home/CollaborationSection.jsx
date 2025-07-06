'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ScrollFadeIn from '../common/ScrollAnimation'

export default function CollaborationSection() {
  return (
    <ScrollFadeIn delay={0.2}>
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image
              src="/images/collaboration.PNG"
              alt="Collaboration Banner"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kurs yaratuvchi, mentor yoki ustozmisiz?
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Edvent platformasi orqali o‘z bilim va tajribangizni minglab o‘quvchilarga yetkazing. Siz yaratgan kurslar
              platformamizda joylashtiriladi va daromadga aylantiriladi. Texnik va marketing yordami — bizdan!
            </p>

            <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
              <li>O‘z kurslaringizni yuklab, daromad oling</li>
              <li>To‘liq mualliflik nazorati</li>
              <li>Oylik yoki har bir sotuvdan daromad olish imkoniyati</li>
              <li>Yuqori sifatli kontent uchun texnik yordam</li>
            </ul>

            <Link
              href="/collaboration"
              className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition"
            >
              Kurs joylashtirishni boshlang
            </Link>
          </motion.div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
