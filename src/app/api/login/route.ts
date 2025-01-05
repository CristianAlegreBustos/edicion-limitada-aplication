import { prisma } from '@/lib/prisma';
import argon2 from 'argon2';
import { serialize } from 'cookie';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    // Buscar al usuario en la tabla 'users'
    console.log('Conectando a la base de datos con:', process.env.DATABASE_URL);
    const user = await prisma.users.findUnique({ where: { email } });
    console.log(user)
    if (!user || !(await argon2.verify(user.password_hash, password))) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Crear token de sesión
    const sessionToken = crypto.randomBytes(64).toString('hex');
    await prisma.user_sessions.create({
      data: {
        user_id: user.user_id,
        session_token: sessionToken,
        expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 día
      },
    });

    // Configurar la cookie de sesión
    const response = NextResponse.json({ message: 'Logged in' });
    response.headers.append(
      'Set-Cookie',
      serialize('session_token', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 día
        path: '/',
      })
    );

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
