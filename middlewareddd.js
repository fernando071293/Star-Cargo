import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('request.nextUrl.pathname', request.nextUrl.pathname);
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/es/home', request.url))
  }
}