import dynamic from 'next/dynamic'

const ProfileWrapper = dynamic(() => import('@/components/dashboard/ProfileWrapper'), {
 
})

export default function ProfilePage({ params }) {
  return <ProfileWrapper userId={params.id} />
}
