'use client'

import { useState } from "react"
import { TWEETS } from "@/shared/data/tweets.data"
import { USERS } from "@/shared/data/users.data"
import Link from "next/link"
import { PAGES } from "@/config/pages.config"

interface Props { }

export function SearchExplore({ }: Props) {
    const [query, setQuery] = useState("")

    const filteredTweets =
        query.trim() === ""
            ? []
            : TWEETS.filter((tweet) => {
                const user = USERS.find(u => u.id === tweet.userId)
                if (!user) return false
                return (
                    user.username.toLowerCase().includes(query.toLowerCase()) ||
                    user.nickname.toLowerCase().includes(query.toLowerCase()) ||
                    tweet.text.toLowerCase().includes(query.toLowerCase())
                )
            })

    return (
        <div className="px-8">
            <input
                type="text"
                placeholder="Search"
                name="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border-b border-white/20 focus:border-white/60 transition-colors
                   outline-none text-lg text-white placeholder-white/70 bg-transparent
                   py-2 mb-6"
            />

            {query.trim() !== "" && (
                <div className="flex flex-col gap-4">
                    {filteredTweets.length > 0 ? (
                        filteredTweets.map((tweet) => {
                            const user = USERS.find(u => u.id === tweet.userId)
                            if (!user) return null
                            return (
                                <div
                                    key={tweet.id}
                                    className="border-b border-white/10 pb-4 text-white/90 hover:text-white transition-colors flex gap-2 items-center"
                                >
                                    <img
                                        src={user.avatarUrl}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div>
                                        <Link href={PAGES.PROFILE(user.username)} className="font-semibold hover:underline">
                                            {user.nickname}
                                        </Link>
                                        <div className="text-sm text-white/70">{tweet.text}</div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="text-white/50 text-sm italic">
                            Ничего не найдено
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
