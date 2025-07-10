// authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: null,
  user: null,

  setToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user }),

  clearAuth: () => set({ accessToken: null, user: null }),
}));
