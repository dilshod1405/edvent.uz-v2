'use client'

import React from 'react'
import { motion } from 'framer-motion'

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/bc7xLBbUd-U?autoplay=1&mute=1&loop=1&playlist=bc7xLBbUd-U",
    title: "Video 1",
    style: { top: 0, left: '5%', width: 280, height: 160, borderColor: '#7c3aed', boxShadowColor: 'rgba(124, 58, 237, 0.5)' }
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&loop=1&playlist=ScMzIvxBSi4",
    title: "Video 2",
    style: { top: 60, left: 'calc(50% - 140px)', width: 320, height: 180, borderColor: '#2563eb', boxShadowColor: 'rgba(37, 99, 235, 0.5)' }
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&playlist=tgbNymZ7vqY",
    title: "Video 3",
    style: { top: 120, right: '5%', width: 280, height: 160, borderColor: '#ec4899', boxShadowColor: 'rgba(236, 72, 153, 0.5)' }
  }
]

export default function VideoShowcase() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-24">
      {/* Videolar uchun alohida container */}
      <div className="relative mx-auto" style={{ height: 320, maxWidth: 900 }}>
        {videos.map(({ id, src, title, style }) => (
          <motion.div
            key={id}
            className="absolute rounded-2xl overflow-hidden border-8 shadow-xl cursor-pointer"
            style={{
              ...style,
              borderStyle: 'solid',
              boxShadow: `0 20px 40px ${style.boxShadowColor}`,
              zIndex: id === 2 ? 10 : 5, // o'rta video yuqoriroqda ko'rinsin
              transition: 'transform 0.3s ease',
            }}
            whileHover={{ scale: 1.1, zIndex: 20, boxShadow: `0 30px 60px ${style.boxShadowColor.replace('0.5', '0.8')}` }}
          >
            <iframe
              src={src}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              muted
              autoPlay
              loop
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
