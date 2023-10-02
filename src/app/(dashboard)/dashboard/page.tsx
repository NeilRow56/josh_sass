import { currentUser } from '@clerk/nextjs'
import type { User } from '@clerk/nextjs/api'
import { redirect } from 'next/navigation'

const Dashboard = async () => {
  const user: User | null = await currentUser()

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  return (
    <div className=" flex flex-col">
      <h1>Dashboard Page </h1>
      <div>
        <h3 className="text-2xl font-bold"> Username </h3>
      </div>
      <span>
        <h3 className="capitalize"> {user?.username}</h3>
      </span>
    </div>
  )
}

export default Dashboard
