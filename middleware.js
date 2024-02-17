import { NextResponse } from 'next/server';
import { jwtVerify } from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const cookie = request.cookies.get('tokenUser');
    console.log(request.nextUrl.pathname);

    
    if(cookie === undefined){
        return NextResponse.redirect(new URL('/login', request.url ));
    }

    const currentPath = request.nextUrl.pathname;

    if (currentPath === '/login' && cookie !== undefined) {
        // Si está en la ruta /login y tiene la cookie, redireccionar a /dashboard
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }


    try {
        const secret = new TextEncoder().encode(
            'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        )
        const {payload} = await jwtVerify(cookie.value, secret);
        return NextResponse.next();
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(new URL('/login', request.url ));
    }
    
}

export const config = {
    matcher: ['/dashboard', '/']
}

// export const config = {
//     matcher: ['/dashboard', '/', 'admin/:path*'] protege todas las subrutas
// }