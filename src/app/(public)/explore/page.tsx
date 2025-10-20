import { Suspense } from "react";
import { Explore } from "./Explore";
import { SearchExplore } from "./SearchExplore";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Explore',
}

export default function ExplorePage() {
    return (
        <Suspense>
            <SearchExplore />
            <Explore />
        </Suspense>
    )
}
