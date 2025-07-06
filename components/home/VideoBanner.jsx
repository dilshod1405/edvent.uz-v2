'use client'

import React from "react"
import { motion } from "framer-motion"

export default function VideoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

        {/* YouTube iframe with proper aspect ratio */}
        <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/bc7xLBbUd-U"
            title="Edvent video taqdimoti"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  )
}
