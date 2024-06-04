import { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import { prisma } from "./db";

export async function findAllBoats() {
  return prisma.boat.findMany();
}

export async function findBoatBySlug(slug: string) {
  const voilier = prisma.boat.findUnique({
    where: {
      slug: slug,
    },
  });
  return voilier;
}
