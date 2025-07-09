import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import CourseCard from "./CourseCard"
import SkeletonCard from "../common/SkeletonCard"

const courses = [
  {
    id: 1,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  {
    id: 2,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Telegram bot yaratish',
    teacher: 'Dilshod Normurodov',
    price: '120 000',
  },
  {
    id: 2,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Telegram bot yaratish',
    teacher: 'Dilshod Normurodov',
    price: '120 000',
  },
  {
    id: 2,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Telegram bot yaratish',
    teacher: 'Dilshod Normurodov',
    price: '120 000',
  },
  {
    id: 2,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Telegram bot yaratish',
    teacher: 'Dilshod Normurodov',
    price: '120 000',
  },
  {
    id: 2,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Telegram bot yaratish',
    teacher: 'Dilshod Normurodov',
    price: '120 000',
  },
  {
    id: 2,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Telegram bot yaratish',
    teacher: 'Dilshod Normurodov',
    price: '120 000',
  },
]


export default function CourseSection() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="mb-18 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Yangi kurslar</h2>

      {loading ? (
        <div className="flex space-x-6 overflow-x-auto no-scrollbar">
          {[...Array(4)].map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      ) : (
          <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.5 },
          }}
          style={{ minHeight: "320px" }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Barcha kurslar bilan tanishish tugmasi */}
      <div className="mt-8">
        <button
          onClick={() => router.push("/courses")}
          className="text-indigo-700 border border-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-indigo-800 hover:text-white transition hover:cursor-pointer"
        >
          Barcha kurslar bilan tanishish
        </button>
      </div>
    </section>
  )
}
