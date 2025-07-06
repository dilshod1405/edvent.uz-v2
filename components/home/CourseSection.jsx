'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

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
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  {
    id: 3,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  {
    id: 4,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  {
    id: 5,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  {
    id: 6,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  {
    id: 7,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  {
    id: 8,
    image: 'https://techhubsolutions.in/wp-content/uploads/2022/09/1.png',
    title: 'Python Dasturlash Asoslari',
    teacher: 'Dilshod Normurodov',
    price: '150 000',
  },
  
]

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs mx-auto cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={course.image}
          alt={course.title}
          width={256}
          height={144}
          className="object-cover w-full h-36 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="font-semibold text-lg mb-1 text-gray-900">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-2">O‘qituvchi: {course.teacher}</p>
      <p className="font-bold text-purple-700 text-xl">{course.price} so‘m</p>
    </div>
  )
}

export default function CourseSection() {
  return (
    <section className="mb-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Yangi kurslar</h2>

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
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.6 },
          768: { slidesPerView: 2.3 },
          1024: { slidesPerView: 3.5 },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
