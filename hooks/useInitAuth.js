'use client'

import { useEffect, useState } from 'react'
import api from '@/lib/apiClient'
import { useAuthStore } from '@/store/authStore'
import { jwtDecode } from 'jwt-decode'

export default function useInitAuth() {
  const setUser = useAuthStore((state) => state.setUser)
  const setToken = useAuthStore((state) => state.setToken)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      if (typeof window === 'undefined') return

      const access = localStorage.getItem('access')
      if (!access) {
        clearAuth()
        return
      }

      try {
        const decoded = jwtDecode(access)
        const exp = decoded.exp * 1000

        if (Date.now() > exp) {
          // Token expired
          clearAuth()
          return
        }

        const userId = decoded.user_id
        setToken(access)

        const res = await api.get(`/api/auth/users/${userId}/`)
        setUser(res.data)
      } catch (err) {
        clearAuth()
      } finally {
        setChecked(true)
      }
    }

    const clearAuth = () => {
      localStorage.removeItem('access')
      setToken(null)
      setUser(null)
      setChecked(true)
    }

    checkAuth()
  }, [])

  return checked
}
