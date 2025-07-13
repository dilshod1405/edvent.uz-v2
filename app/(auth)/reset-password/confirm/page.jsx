'use client'

import React, { Suspense } from 'react'
import ResetPassword from '@/components/auth/ResetPassword'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ResetPassword />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
