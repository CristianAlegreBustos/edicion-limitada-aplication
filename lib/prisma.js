import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Opcional: muestra las queries en la consola durante el desarrollo
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
