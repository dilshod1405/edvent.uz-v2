import Counter from "../common/Counter"
import ScrollFadeIn from "../common/ScrollAnimation"

const stats = [
  { label: "Foydalanuvchilar", value: 10000, suffix: "+" },
  { label: "Kurslar", value: 120, suffix: "+" },
  { label: "O‘qituvchilar", value: 35, suffix: "+" },
  { label: "Sertifikatlar", value: 8500, suffix: "+" },
]

const colors = ["#6366F1", "#8B5CF6", "#10B981", "#F59E0B"]

export default function StatsSection() {
  return (
    <ScrollFadeIn delay={0.2}>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ label, value, suffix }, index) => (
            <div key={label}>
              <p
                className="text-3xl font-bold"
                style={{ color: colors[index % colors.length] }}
              >
                <Counter targetNumber={value} suffix={suffix} />
              </p>
              <p className="text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollFadeIn>
  )
}
