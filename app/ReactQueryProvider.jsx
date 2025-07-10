'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import useInitAuth from '@/hooks/useInitAuth'

export default function ReactQueryProvider({ children }) {
  const [client] = useState(new QueryClient())

  useInitAuth()

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
