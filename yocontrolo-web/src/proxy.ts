import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // Spanish keeps its published URLs; English has an explicit /en segment.
  if (path === '/es' || path.startsWith('/es/') || path === '/en' || path.startsWith('/en/')) return NextResponse.next();
  const destination = request.nextUrl.clone();
  destination.pathname = `/es${path === '/' ? '' : path}`;
  return NextResponse.rewrite(destination);
}

export const config = {
  matcher: ['/((?!_next/|api/|favicon.ico|.*\\..*).*)'],
};
