
import { TWEETS } from "@/shared/data/tweets.data";
import Tweet from "./Tweet";
import { TweetForm } from "./TweetForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home',
}

export default function Home() {
    return (
        <div className="min-h-screen px-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-6">Home</h1>
            <TweetForm />
            {TWEETS.map(tweet =>
                <Tweet
                    key={tweet.id}
                    tweet={tweet}
                />
            )}
        </div>
    )
}