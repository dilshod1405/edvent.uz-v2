import ForgotPassword from '@/components/auth/ForgotPassword'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <ForgotPassword />
      </main>
      <Footer />
    </div>
  )
}
