import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Oops! The page you're looking for doesn't exist.</p>
      <Button asChild className="mt-8">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  )
}

