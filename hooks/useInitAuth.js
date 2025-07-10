'use client'

import { useEffect, useState } from 'react'
import api from '@/lib/apiClient'
import { useAuthStore } from '@/store/authStore'
import {jwtDecode} from 'jwt-decode'

export default function useInitAuth() {
  const setUser = useAuthStore((state) => state.setUser)
  const setToken = useAuthStore((state) => state.setToken)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const access = localStorage.getItem('access')
    if (!access) {
      setChecked(true)
      return
    }

    try {
      const decoded = jwtDecode(access)
      const exp = decoded.exp * 1000
      if (Date.now() > exp) {
        localStorage.removeItem('access')
        setToken(null)
        setUser(null)
        setChecked(true)
        return
      }

      const userId = decoded.user_id
      setToken(access)

      api.get(`/api/auth/users/${userId}/`)
        .then((res) => {
          setUser(res.data)
        })
        .catch(() => {
          localStorage.removeItem('access')
          setToken(null)
          setUser(null)
        })
        .finally(() => setChecked(true))
    } catch (err) {
      localStorage.removeItem('access')
      setToken(null)
      setUser(null)
      setChecked(true)
    }
  }, [])

  return checked
}
