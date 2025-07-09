'use client'

import React, { useState } from 'react'

const specialities = [
  'Dasturlash', 'Arxitektura', 'Dizayn', 'Marketing', 'Iqtisodiyot',
]

export default function SpecialityFilter() {
  const [active, setActive] = useState(specialities[0])

  return (
    <section className="mb-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 min-w-max pb-2 border-b border-gray-200 pr-10">
            {specialities.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition
                  ${
                    active === item
                      ? 'bg-indigo-600 text-white shadow'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* gradient right shadow */}
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
