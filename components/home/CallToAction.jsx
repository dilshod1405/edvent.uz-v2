import ScrollFadeIn from "../common/ScrollAnimation";

export default function CallToAction() {
  return (
    <section className="bg-purple-700 text-white py-16 text-center px-4">
        <ScrollFadeIn delay={0.2}>  
        <h2 className="text-3xl font-bold mb-4">Bilim sari birinchi qadamingizni tashlang</h2>
        <p className="mb-6 text-lg">Edvent bilan o‘rganishni bugun boshlang!</p>
        <a
            href="/register"
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
            Ro‘yxatdan o‘tish
        </a>
        </ScrollFadeIn>
    </section>
  )
}