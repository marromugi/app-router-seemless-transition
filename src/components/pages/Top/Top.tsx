import { Link } from '@/components/animate'
import { ROUTES } from '@/const/route'

export const TopPage = () => {
  return (
    <main className="bg-purple-100 w-screen h-screen grid place-items-center">
      <div className="space-y-4 grid place-items-center">
        <h1 className="font-semibold text-2xl">Hello,World!</h1>
        <Link href={ROUTES.dashboard} className="text-gray-700 underline">
          Navigate to Dashboard
        </Link>
      </div>
    </main>
  )
}
