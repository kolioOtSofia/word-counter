import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;

const prisma = new PrismaClient({
  log: ["query"],
});

export default async () => {
  return await prisma.word.findMany();
};
