'use client'

import { USERS } from "@/shared/data/users.data"
import { PAGES } from "@/config/pages.config"
import type { ITweet } from "@/shared/types/tweet.interface"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Props {
    tweet: ITweet
}

export default function Tweet({ tweet }: Props) {
    const user = USERS.find(u => u.id === tweet.userId)
    if (!user) return null

    const router = useRouter()
    const handleClick = () => {
        router.push(`/user/${user.nickname}/${tweet.id}`)
    }

    return (
        <div
            onClick={handleClick}
            className="border rounded-lg border-white/10 py-4 px-6 flex flex-col gap-4
            bg-black/30 hover:bg-black/50 transition-colors cursor-pointer">
            <div className="flex gap-2 items-center">
                <Image
                    src={user.avatarUrl}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                />
                <Link
                    href={PAGES.PROFILE(user.nickname)}
                    className="font-semibold text-white hover:underline"
                    onClick={(e) => e.stopPropagation()}>
                    @{user.nickname}
                </Link>
            </div>
            <p className="text-white/90">{tweet.text}</p>
            {tweet.tag &&
                <Link
                    href={`${PAGES.EXPLORE}/?tag=${tweet.tag}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-blue-400 hover:text-blue-500 transition-colors">
                    #{tweet.tag}
                </Link>}
        </div>
    )
}
