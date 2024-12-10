import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // No aplicar headers a archivos estáticos
    if (request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.includes('/api/') ||
        request.nextUrl.pathname.includes('.')) {
        return NextResponse.next()
    }

    const response = NextResponse.next()

    // Headers de seguridad
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

    // Headers de cache
    if (request.nextUrl.pathname === '/') {
        response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
    } else {
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    }

    return response
}

// Configurar qué rutas deben ser procesadas por el middleware
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * 1. /api/ (API routes)
         * 2. /_next/ (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files (e.g. /favicon.ico)
         */
        '/((?!api|_next|_static|_vercel|favicon.ico|[\\w-]+\\.\\w+).*)',
    ],
}