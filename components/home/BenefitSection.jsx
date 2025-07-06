import ScrollFadeIn from "../common/ScrollAnimation"
import { FaRegClock, FaChalkboardTeacher, FaLaptopCode, FaCertificate } from "react-icons/fa"

const benefits = [
  { title: "Moslashuvchan o‘qish", desc: "O‘zingizga qulay vaqtda dars oling.", icon: FaRegClock },
  { title: "Malakali o‘qituvchilar", desc: "Har bir kurs tajribali mutaxassis tomonidan olib boriladi.", icon: FaChalkboardTeacher },
  { title: "Amaliy mashg‘ulotlar", desc: "Nazariyani amaliy topshiriqlar bilan mustahkamlang.", icon: FaLaptopCode },
  { title: "Imtihon va sertifikat", desc: "Har kursdan so‘ng bilimni baholab, rasmiy sertifikat oling.", icon: FaCertificate },
]

export default function BenefitsSection() {
  return (
    <ScrollFadeIn delay={0.2}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Nega Edvent?</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center"
                >
                  <Icon className="text-purple-700 mb-4 text-4xl" />
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
