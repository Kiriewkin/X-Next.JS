'use client'

import { TWEETS } from "@/shared/data/tweets.data"
import { useSearchParams } from "next/navigation"
import Tweet from "../(home)/Tweet"

export function Explore() {
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')

    const tagTweets = tag
        ? TWEETS.filter(t => t.tag?.toLowerCase() === tag.toLowerCase())
        : TWEETS

    return (
        <div className="mt-6 text-white">
            <h1 className="text-3xl font-bold mb-6">
                Explore {tag ? `#${tag}` : ''}
            </h1>

            <div className="flex flex-col gap-4">
                {tagTweets.length > 0 ? (
                    tagTweets.map(tweet => (
                        <Tweet key={tweet.id} tweet={tweet} />
                    ))
                ) : (
                    <div className="text-white/60 italic">No tweets found for #{tag}</div>
                )}
            </div>
        </div>
    )
}
