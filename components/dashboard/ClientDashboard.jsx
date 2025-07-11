'use client'

import { useState } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Profile from '@/components/dashboard/Profile'
import MyCourses from '@/components/dashboard/MyCourses'
import MyExams from '@/components/dashboard/MyExams'
import Certificates from '@/components/dashboard/Certificates'

export default function ClientDashboard({ userId }) {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-4 mt-16 md:mt-0">
        {activeTab === 'profile' && <Profile userId={userId} />}
        {activeTab === 'courses' && <MyCourses userId={userId} />}
        {activeTab === 'exams' && <MyExams userId={userId} />}
        {activeTab === 'certificates' && <Certificates userId={userId} />}
      </main>
    </div>
  )
}