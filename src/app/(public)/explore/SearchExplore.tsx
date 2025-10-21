'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TWEETS } from "@/shared/data/tweets.data"
import { USERS } from "@/shared/data/users.data"
import Link from "next/link"
import { PAGES } from "@/config/pages.config"

import styles from './index.module.scss'

interface Props { }

export function SearchExplore({ }: Props) {
    const router = useRouter()
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
        <div className="w-full">
            <input
                type="text"
                placeholder="Search"
                name="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
            />

            {query.trim() !== "" && (
                <div className="mt-3 flex flex-col gap-4">
                    {filteredTweets.length > 0 ? (
                        filteredTweets.map((tweet) => {
                            const user = USERS.find(u => u.id === tweet.userId)
                            if (!user) return null

                            const handleClick = () => {
                                router.push(`/user/${user.nickname}/${tweet.id}`)
                            }

                            return (
                                <div
                                    onClick={handleClick}
                                    key={tweet.id}
                                    className="p-2 border-b border-white/10 pb-4 text-white/90 hover:text-white
                                    flex gap-2 items-center cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
                                >
                                    <img
                                        src={user.avatarUrl}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div>
                                        <Link
                                            href={PAGES.PROFILE(user.nickname)} className="font-semibold hover:underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            @{user.nickname}
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
