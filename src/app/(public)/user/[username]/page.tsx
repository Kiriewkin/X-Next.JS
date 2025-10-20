import type { Metadata } from "next"
import { Profile } from "./Profile"
import { TWEETS } from "@/shared/data/tweets.data"
import type { ITweet } from "@/shared/types/tweet.interface"
import { USERS } from "@/shared/data/users.data"

type Params = { username: string }

export async function generateMetadata({
    params
}: {
    params: Promise<Params>
}): Promise<Metadata> {
    const { username } = await params
    return {
        title: '@' + username
    }
}

export default async function ProfilePage({
    params
}: {
    params: Promise<Params>
}) {
    const { username } = await params

    // Находим пользователя
    const user = USERS.find(u => u.username === username)

    // Фильтруем твиты только если пользователь найден
    const userTweets: ITweet[] = user
        ? TWEETS.filter(t => t.userId === user.id)
        : []

    return (
        <div className="px-6">
            <Profile username={username} />
        </div>
    )
}
