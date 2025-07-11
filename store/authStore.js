import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  accessToken: typeof window !== 'undefined' ? localStorage.getItem('access') : null,
  user: null,

  setToken: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access', token)
    }
    set({ accessToken: token })
  },

  setUser: (user) => set({ user }),

  clearAuth: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access')
    }
    set({ accessToken: null, user: null })
  },
}))
