import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
import { CompatibilityEvent } from "h3";

type CreateWordDto = {
  content: string
}

const prisma = new PrismaClient({
  log: ["query"],
});

export default async (event: CompatibilityEvent) => {
  const body = await useBody<CreateWordDto>(event);
  console.log(body);
  return await prisma.word.create({ data: { content: body.content } });
};
