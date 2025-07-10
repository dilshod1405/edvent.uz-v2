'use client'

import { useAuthStore } from '@/store/authStore'
import Sidebar from '@/components/dashboard/Sidebar'
import Profile from '@/components/dashboard/Profile'

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <Profile user={user} />
      </main>
    </div>
  )
}
