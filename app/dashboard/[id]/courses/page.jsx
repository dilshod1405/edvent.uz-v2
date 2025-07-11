'use client'

import MyCourses from '@/components/dashboard/MyCourses'

export default function CoursesPage({ params }) {
  return <MyCourses userId={params.id} />
}
