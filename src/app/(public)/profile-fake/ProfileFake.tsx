'use client'

import { PAGES } from "@/config/pages.config"
import { useRouter } from "next/navigation"

export function ProfileFake() {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl text-white font-semibold mb-4">Profile Fake</h1>
            <button
                onClick={() => router.push(PAGES.HOME)}
                className="px-4 py-2 text-white cursor-pointer"
            >
                Go to Home
            </button>
        </div>
    )
}