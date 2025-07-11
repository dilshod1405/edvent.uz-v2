import Sidebar from '@/components/dashboard/Sidebar'
import ProtectedRoute from '@/lib/ProtectedRoute'

export default function DashboardLayout({ children, params }) {
  return (
    <ProtectedRoute>
        <div className="flex h-screen">
        <Sidebar userId={params.id} />
        <main className="flex-1 p-4 mt-16 md:mt-0">{children}</main>
        </div>
    </ProtectedRoute>
  )
}
