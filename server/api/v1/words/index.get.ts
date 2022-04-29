import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
import { CompatibilityEvent } from "h3";

const prisma = new PrismaClient({
  log: ["query"],
});

export default async (event: CompatibilityEvent) => {
  // const query = useQuery(event); // TODO: query params?
  return await prisma.word.findMany();
};
