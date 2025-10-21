import type { Metadata } from 'next'
import { Post } from './Post'
import { USERS } from '@/shared/data/users.data'
import { TWEETS } from '@/shared/data/tweets.data'

interface Params {
    nickname: string
    postId: string
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    return {
        title: '@' + (await params).nickname
    }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
    const { nickname, postId } = await params

    const user = USERS.find(u => u.nickname === nickname)
    if (!user) {
        return <div className="text-white/70 italic">User not found</div>
    }

    const tweet = TWEETS.find(t => t.userId === user.id && t.id.toString() === postId)
    if (!tweet) {
        return <div className="text-white/70 italic">Tweet not found</div>
    }

    return (
        <div className="px-6 py-6">
            <Post tweet={tweet} />
        </div>
    )
}
