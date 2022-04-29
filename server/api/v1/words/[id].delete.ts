import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
import { CompatibilityEvent } from "h3";

const prisma = new PrismaClient({
  log: ["query"],
});

export default async (event: CompatibilityEvent) => {
  const id = Number(event.context.params.id);
  return await prisma.word.delete({where: {id: id}});
};
