'use client'

import { useEffect, useState } from 'react'
import api from '@/lib/apiClient'
import Profile from '@/components/dashboard/Profile'
import ProfileSkeleton from '@/components/dashboard/ProfileSkeleton'


export default function ProfileWrapper({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) return
    api
      .get(`/api/auth/users/${userId}/`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error('User fetch error:', err))
      .finally(() => setLoading(false))
  }, [userId])

  if (loading) return <ProfileSkeleton />
  if (!user) return <div className="text-center py-16 text-gray-500">Foydalanuvchi topilmadi.</div>

  return <Profile user={user} />
}
