import React from "react"
import ScrollFadeIn from "../common/ScrollAnimation"

const posts = [
  {
    id: 1,
    title: "Dasturlashda 10 ta eng muhim konsept",
    excerpt: "Dasturlash asoslarini chuqurroq o‘rganish uchun bilishingiz kerak bo‘lgan asosiy tushunchalar.",
    url: "#",
  },
  {
    id: 2,
    title: "UX/UI dizayn: boshlang‘ich qo‘llanma",
    excerpt: "Foydalanuvchi interfeysi dizayni asoslari va zamonaviy trendlari haqida qisqacha ma’lumot.",
    url: "#",
  },
  {
    id: 3,
    title: "Marketing kurslari bilan qanday daromad topish mumkin?",
    excerpt: "Marketingni o‘rganib, qanday qilib onlayn daromad olish mumkinligi haqida maslahatlar.",
    url: "#",
  },
]

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 my-16 rounded-lg shadow-md bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
        So‘nggi ta’lim maqolalari
      </h2>
      <ScrollFadeIn delay={0.2}>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto mb-10">
          {posts.map(({ id, title, excerpt, url }) => (
            <a
              key={id}
              href={url}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">{title}</h3>
              <p className="text-gray-700">{excerpt}</p>
              <button className="mt-4 text-indigo-700 font-semibold hover:underline">
                Maqolani o‘qish →
              </button>
            </a>
          ))}
        </div>
      </ScrollFadeIn>
      <div className="flex justify-center">
        <a
          href="/blog"
          className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-800 transition"
        >
          Barchasini ko‘rish
        </a>
      </div>
    </section>
  )
}
