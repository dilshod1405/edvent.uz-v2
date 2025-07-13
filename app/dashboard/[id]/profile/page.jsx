'use client'

import { useParams } from 'next/navigation'
import ProfileWrapper from '@/components/dashboard/ProfileWrapper'

export default function ProfilePage() {
  const params = useParams()
  const userId = params.id

  return <ProfileWrapper userId={userId} />
}
