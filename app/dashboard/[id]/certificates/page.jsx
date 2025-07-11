'use client'

import Certificates from '@/components/dashboard/Certificates'

export default function CertificatesPage({ params }) {
  return <Certificates userId={params.id} />
}
