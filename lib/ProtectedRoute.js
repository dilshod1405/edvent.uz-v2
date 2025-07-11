'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

export default function ProtectedRoute({ children }) {
  const router = useRouter()
  const accessToken = useAuthStore((state) => state.accessToken)

  useEffect(() => {
    if (!accessToken) {
      router.replace('/login')
    }
  }, [accessToken, router])

  if (!accessToken) {
    return <div>Yuklanmoqda...</div>
  }

  return <>{children}</>
}
