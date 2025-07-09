'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ScrollFadeIn from '../common/ScrollAnimation'

export default function ExaminationSection() {
  const router = useRouter()

  return (
    <ScrollFadeIn delay={0.2}>
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* TEXT LEFT */}
        <div className="flex-1 max-w-lg">
          <span className="inline-block bg-indigo-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
            Sertifikat bilan tasdiqlanadi
          </span>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 leading-tight">
            Imtihon orqali bilimlaringizni mustahkamlang
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Har bir kurs yakunida maxsus imtihonlar o‘tkaziladi. Ushbu imtihonlar sizga o‘z bilimlaringizni sinash va rasmiy sertifikat olish imkonini beradi. Bu sizning malakangizni tasdiqlovchi muhim qadamdir.
          </p>
          <button
            onClick={() => router.push('/exams')}
            className="bg-indigo-700 text-white px-7 py-3 rounded-md font-medium shadow-md hover:bg-indigo-800 transition duration-300"
          >
            Imtihonni boshlash
          </button>
        </div>

        {/* IMAGE RIGHT */}
        <div className="flex-1 relative max-w-md">
          {/* Asosiy SVG illyustratsiya */}
          <Image
            src="/images/exam-illustration.svg"
            alt="Examination illustration"
            width={450}
            height={350}
            className="object-contain"
            priority
          />

          {/* Sertifikat rasmi - absolute, pastki o'ng burchakda */}
          <div className="absolute bottom-0 right-0 w-36 rounded-lg overflow-hidden shadow-lg border border-gray-200 translate-x-8 translate-y-8 bg-white">
            <Image
              src="/images/certificate.png"
              alt="Sertifikat rasmi"
              width={144}
              height={104}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  )
}
