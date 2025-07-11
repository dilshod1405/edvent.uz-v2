import { redirect } from 'next/navigation'

export default function Page({ params }) {
  redirect(`/dashboard/${params.id}/profile`)
}
