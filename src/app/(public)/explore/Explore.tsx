'use client'

import { useSearchParams } from "next/navigation"

export function Explore() {
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')
    return (
        <div className="text-3xl font-bold flex justify-center pt-6">
            <h1>Explore {!!tag && `by #${tag}`}</h1>
        </div>
    )
}
