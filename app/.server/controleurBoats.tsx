import { prisma } from "./db";

export async function findAllBoats() {
  return prisma.boat.findMany();
}

export async function findNBoats(n: number, slug: string) {
  const Promise = prisma.boat.findMany({
    take: n,
    where: {
      slug: {
        not: slug,
      },
    },
  });
  return Promise;
}

export async function findBoatBySlug(slug: string) {
  const voilier = prisma.boat.findUnique({
    where: {
      slug: slug,
    },
  });
  return voilier;
}
