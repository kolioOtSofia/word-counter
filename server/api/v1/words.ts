import pkg from "@prisma/client";
const { PrismaClient } = pkg;
import { createRouter, useBase } from "h3";

const router = createRouter();
const prisma = new PrismaClient({
  log: ["query"],
});

router.get("/", () => prisma.word.findMany());

// TODO: create based on query
router.post("/", () =>
  prisma.word.create({ data: { content: "alter digga" } })
);

export default useBase('/api/v1/words', router.handler);
