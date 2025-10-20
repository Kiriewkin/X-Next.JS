// shared/data/tweets.data.ts
import type { ITweet } from "../types/tweet.interface"

export const TWEETS: ITweet[] = [
    { id: "101", userId: "1", text: "Learning React hooks — useEffect still surprises me sometimes 😅" },
    { id: "102", userId: "2", text: "Just finished my morning coffee ☕ and ready to code!" },
    { id: "103", userId: "3", text: "Dark mode should be the default. Always. 🌙" },
    { id: "104", userId: "4", text: "TypeScript errors are like riddles — annoying but kinda fun 🤓" },
    { id: "105", userId: "5", text: "Deployed my first Next.js app today! Feeling great 😎" },
    { id: "106", userId: "6", text: "CSS Grid >>> Flexbox (don’t @ me)" },
    { id: "107", userId: "7", text: "Just discovered axios interceptors — mind blown 🤯" },
    { id: "108", userId: "8", text: "Friday commits hit different 💪 #devlife" },
    { id: "109", userId: "9", text: "Refactored 300 lines of code into 50. Clean code is happiness ✨" },

    // Допустим у Kyrylo несколько твитов
    { id: "110", userId: "1", text: "Another tweet from Kyrylo — feeling productive!" },
    { id: "111", userId: "1", text: "Learning Next.js 15 routing 😎" },
]
