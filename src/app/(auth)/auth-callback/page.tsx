'use client'

import { trpc } from '@/app/_trpc/client'
import { useRouter, useSearchParams } from 'next/navigation'

const AuthCallBackPage = () => {
  const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')
}

export default AuthCallBackPage
