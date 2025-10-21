'use client'
import { USERS } from '@/shared/data/users.data'
import { TWEETS } from '@/shared/data/tweets.data'
import Tweet from '../../(home)/Tweet'

export function Profile({ nickname }: { nickname: string }) {
  const user = USERS.find(u => u.nickname === nickname)
  if (!user) return <div className="text-white/70 italic">User not found!</div>

  const userTweets = TWEETS.filter(t => t.userId === user.id)

  return (
    <div className="px-6 py-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-white/70">@{user.nickname}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        {userTweets.length > 0 ? (
          userTweets.map(tweet => (
            <Tweet tweet={tweet}/>
          ))
        ) : (
          <div className="text-white/50 italic">User not have a Tweets</div>
        )}
      </div>
    </div>
  )
}
