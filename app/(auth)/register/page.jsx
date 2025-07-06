import RegisterForm from '@/components/auth/RegisterForm'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white scroll-smooth min-h-screen'>
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  )
}

export default page