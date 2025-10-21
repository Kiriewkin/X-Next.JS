import Tweet from "@/app/(public)/(home)/Tweet"
import type { ITweet } from "@/shared/types/tweet.interface"

interface Props {
  tweet: ITweet
}

export function Post({ tweet }: Props) {
    return (
        <div>
            <Tweet tweet={tweet}/>
        </div>
    )
}
