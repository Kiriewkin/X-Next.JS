import { USERS } from "@/shared/data/users.data"
import { PAGES } from "@/config/pages.config"
import type { ITweet } from "@/shared/types/tweet.interface"
import Image from "next/image"
import Link from "next/link"

interface Props {
    tweet: ITweet
}

export default function Tweet({ tweet }: Props) {
    const user = USERS.find(u => u.id === tweet.userId)
    if (!user) return null

    return (
        <div className="border rounded-lg border-white/10 py-4 px-6 flex flex-col gap-4 bg-black/30 hover:bg-black/50 transition-colors">
            <div className="flex gap-2 items-center">
                <Image
                    src={user.avatarUrl}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                />
                <Link href={PAGES.PROFILE(user.username)} className="font-semibold text-white hover:underline">
                    {user.nickname}
                </Link>
            </div>
            <p className="text-white/90">{tweet.text}</p>
        </div>
    )
}
