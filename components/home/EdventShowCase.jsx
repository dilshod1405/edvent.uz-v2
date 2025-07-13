'use client'

import { motion } from 'framer-motion'
import { FaUserGraduate, FaChalkboardTeacher, FaGlobe, FaStar } from 'react-icons/fa'

const benefits = [
  {
    icon: FaChalkboardTeacher,
    title: "Tajribali ustozlar",
    desc: "Soha ekspertlari dars beradi.",
    color: "#6366F1",
  },
  {
    icon: FaUserGraduate,
    title: "Oson va tez o‘rganish",
    desc: "Har dars 10-15 daqiqa, tushunarli.",
    color: "#8B5CF6",
  },
  {
    icon: FaGlobe,
    title: "Har qanday joyda",
    desc: "Mobil, planshet, kompyuter — moslashuvchan.",
    color: "#10B981",
  },
  {
    icon: FaStar,
    title: "Sertifikat va portfolio",
    desc: "Kurs yakunida PDF sertifikat olinadi.",
    color: "#F59E0B",
  },
]

export default function WhyEdventShowcase() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Nega aynan <span className="text-indigo-600">Edvent?</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map(({ icon: Icon, title, desc, color }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer
              hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: color + "33" }}
            >
              <Icon className="w-10 h-10 text-[color]" style={{ color }} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
