import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
import { CompatibilityEvent } from "h3";

type UpdateWordDto = {
  content?: string;
};

const prisma = new PrismaClient({
  log: ["query"],
});

export default async (event: CompatibilityEvent) => {
  const id = Number(event.context.params.id);
  const body = await useBody<UpdateWordDto>(event);
  return await prisma.word.update({
    where: { id: id },
    data: body,
  });
};
