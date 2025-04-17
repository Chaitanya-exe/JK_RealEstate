import { NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req) {
    const url = req.nextUrl;
    const host = req.headers.get('host').split('.')[0];

    if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/static") || url.pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    try {
        if (host == 'admin') {
            const token = req.cookies.get('Authorization')?.value.split(" ")[1];
            if (!token) {
                url.pathname = '/manager/login'
                return NextResponse.rewrite(url);
            } else {
                const encoder = new TextEncoder();
                const secret = encoder.encode(process.env.JWT_SECRET);
                const { payload } = await jose.jwtVerify(token, secret);
                console.log(payload)
                if (payload) {
                    return NextResponse.next();
                }
            }
        } else {
            if (url.pathname.startsWith("/manager")) {
                url.pathname = '/not_found'
                return NextResponse.rewrite(url)
            }
        }
    } catch (err) {
        console.log(err)
    }

    return NextResponse.next();
}