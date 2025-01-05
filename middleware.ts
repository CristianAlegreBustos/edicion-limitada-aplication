import { NextResponse } from 'next/server';

export function middleware(req: { cookies: { get: (arg0: string) => any; }; url: string | URL | undefined; }) {
  const token = req.cookies.get('session_token'); // Obtener el token de sesión de las cookies
  console.log(token)
  if (!token) {
    return NextResponse.redirect(new URL('/crm/login', req.url)); // Redirigir al login si no hay sesión
  }

  return NextResponse.next(); // Continuar si hay un token
}

export const config = {
  matcher: ['/crm/:path*'], // Protege todas las rutas bajo /crm
};
