'use client'

import MyExams from '@/components/dashboard/MyExams'

export default function ExamsPage({ params }) {
  return <MyExams userId={params.id} />
}
