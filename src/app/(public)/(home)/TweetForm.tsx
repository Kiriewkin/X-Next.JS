'use client'

import { postTweet } from "@/server-actions/postTweet"

export function TweetForm() {
    return (
        <form
            action={postTweet}
            className="w-full bg-transparent border border-gray-300 rounded-xl p-4 shadow-sm"
        >
            <textarea
                name="content"
                placeholder="What's happening?"
                rows={2}
                className="w-full resize-none border-none outline-none text-lg placeholder-gray-500 text-white-900 bg-transparent"
            />
            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">280 characters max</span>
                <button
                    type="submit"
                    className="px-4 py-2 bg-black-500 text-white rounded-full font-semibold cursor-pointer border"
                >
                    Tweet
                </button>
            </div>
        </form>
    )
}