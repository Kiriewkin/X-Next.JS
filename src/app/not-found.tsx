import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white/90">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link
        href="/"
        className="px-4 py-2 text-white"
      >
        Back to Home
      </Link>
    </div>
  )
}