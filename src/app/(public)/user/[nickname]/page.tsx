import type { Metadata } from "next"
import { Profile } from "./Profile"
import { USERS } from "@/shared/data/users.data"

interface Params {
    nickname: string
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    return {
        title: '@' + (await params).nickname
    }
}

export default async function ProfilePage({ params }: { params: Promise<Params> }) {
    const { nickname } = await params

    const user = USERS.find(u => u.nickname === nickname)
    if (!user) return <div className="text-white/70 italic">User not found!</div>
    return (
        <div className="px-6">
            <Profile key={user.id} nickname={nickname} />
        </div>
    )
}
