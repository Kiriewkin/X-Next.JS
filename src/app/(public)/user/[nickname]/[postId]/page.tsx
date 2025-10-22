import type { Metadata } from 'next'
import { Post } from './Post'
import { USERS } from '@/shared/data/users.data'
import { TWEETS } from '@/shared/data/tweets.data'

interface Params {
    nickname: string
    postId: string
}

async function getTweetData(params: Params) {
    const { nickname, postId } = await params
    const user = USERS.find(u => u.nickname === nickname)
    const tweet = TWEETS.find(t => t.userId === user?.id && t.id.toString() === postId)
    return { user, tweet }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { user, tweet } = await getTweetData(params)

    if (!user || !tweet) {
        return { title: 'Post not found', description: 'The requested post could not be found.' }
    }

    const shortText = tweet.text.length > 40 ? tweet.text.slice(0, 40) + '…' : tweet.text

    return {
        title: `@${user.nickname}: ${shortText}`,
        description: tweet.text,
    }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
    const { user, tweet } = await getTweetData(await params)

    if (!user) return <div className="text-white/70 italic">User not found</div>
    if (!tweet) return <div className="text-white/70 italic">Tweet not found</div>

    return (
        <div className="px-6 py-6">
            <Post tweet={tweet} />
        </div>
    )
}
