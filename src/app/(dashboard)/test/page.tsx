'use client'
import { useAuth } from '@clerk/nextjs'

export default function TestPage() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null
  }

  return (
    <div className="mx-auto flex h-screen w-full items-center justify-center">
      <div className="flex space-x-2">
        <h3 className="">
          Hello, {userId}{' '}
          <span className=" pr-2 text-blue-700">
            {' '}
            your current active session is
          </span>
          {sessionId}{' '}
        </h3>
      </div>
    </div>
  )
}
