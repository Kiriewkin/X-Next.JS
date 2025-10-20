import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const auth = false;

    if (!auth) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};