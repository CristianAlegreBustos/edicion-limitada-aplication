import argon2 from 'argon2';
import { prisma } from '../../lib/prisma.js';

async function main() {
    try {
      const hashedPassword = await argon2.hash('password123'); // Contraseña de prueba

      const user = await prisma.users.create({
        data: {
          email: 'test@example.com', // Correo de prueba
          password_hash: hashedPassword,
          created_at: new Date(),
        },
      });

      console.log('Usuario de prueba creado con éxito:', user);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    } finally {
      await prisma.$disconnect();
    }
  }

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
