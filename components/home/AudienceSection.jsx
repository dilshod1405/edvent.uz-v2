'use client'

import React from "react"
import { FaGraduationCap, FaBriefcase, FaSeedling } from "react-icons/fa"
import ScrollFadeIn from "../common/ScrollAnimation"

const audience = [
  {
    title: "Talabalar uchun",
    desc: "Talabalarga mo‘ljallangan qulay va interaktiv kurslar.",
    icon: FaGraduationCap,
  },
  {
    title: "Ishlayotgan mutaxassislar uchun",
    desc: "Vaqtingiz cheklangan bo‘lsa ham, malakangizni oshiring.",
    icon: FaBriefcase,
  },
  {
    title: "Yangi boshlovchilar uchun",
    desc: "Hech qanday oldingi bilim talab qilinmaydi, bosqichma-bosqich o‘rganing.",
    icon: FaSeedling,
  },
]

export default function AudienceSection() {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4 my-16 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">Siz uchun maxsus</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {audience.map((item, index) => {
          const Icon = item.icon
          return (
            <ScrollFadeIn key={index} delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <Icon className="text-indigo-700 mb-4 w-12 h-12" />
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </ScrollFadeIn>
          )
        })}
      </div>
    </section>
  )
}
