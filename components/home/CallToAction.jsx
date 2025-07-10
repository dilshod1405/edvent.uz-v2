'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollFadeIn from "../common/ScrollAnimation";

export default function CallToAction() {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access");
      setHasAccess(!!token);
    }
  }, []);

  return (
    <section className="bg-indigo-700 text-white py-16 text-center px-4">
      <ScrollFadeIn delay={0.2}>
        <h2 className="text-3xl font-bold mb-4">Bilim sari birinchi qadamingizni tashlang</h2>
        <p className="mb-6 text-lg">Edvent bilan o‘rganishni bugun boshlang!</p>

        {hasAccess ? (
          <Link
            href="/education/courses"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition inline-block"
          >
            Barcha kurslar
          </Link>
        ) : (
          <a
            href="/register"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Ro‘yxatdan o‘tish
          </a>
        )}
      </ScrollFadeIn>
    </section>
  );
}
