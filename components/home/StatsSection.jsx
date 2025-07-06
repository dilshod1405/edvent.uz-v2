import ScrollFadeIn from "../common/ScrollAnimation"

const stats = [
  { label: "Foydalanuvchilar", value: "10,000+" },
  { label: "Kurslar", value: "120+" },
  { label: "O‘qituvchilar", value: "35+" },
  { label: "Sertifikatlar", value: "8,500+" },
]

export default function StatsSection() {
  return (
    <ScrollFadeIn delay={0.2}>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-purple-700">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollFadeIn>
  )
}
