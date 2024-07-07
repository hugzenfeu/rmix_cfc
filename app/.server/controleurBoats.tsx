import { prisma } from "./db";
import { Demande } from "@prisma/client";

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

//WIP

export async function createDemande({
  data: { startDate, endDate, guests, nom, email, telephone },
}: {
  data: {
    startDate: string | null;
    endDate: string | null;
    guests: number | null;
    nom: string | null;
    email: string | null;
    telephone: string | null;
  };
}) {
  try {
    const newDemande = await prisma.demande.create({
      data: {
        startDate: startDate ? new Date(startDate) : "null",
        endDate: endDate ? new Date(endDate) : "null",
        guests: guests ? parseInt(guests.toString(), 10) : 0,
        nom: nom || "null",
        email: email || "null",
        telephone: telephone || " null",
      },
    });
    return newDemande;
  } catch (error) {
    throw new Error(`Error creating Demande: ${error}`);
  }
}
