import LoginForm from '@/components/auth/LoginForm'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white scroll-smooth min-h-screen'>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default page