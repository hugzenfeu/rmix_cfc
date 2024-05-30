import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.boat.create({
    data: {
      name: "Gone with the wind",
      slug: "Gone-with-the-wind",
      year: 2007,
      brand: "Beneteau",
      model: "First 36.7",
      length: 10.87,
      thumbnail: "/vignette bateau.JPG",
      images: ["/vignette bateau.JPG", "/first36-nav2.jpg", "/glenan.jpeg"],
      prix: 2000,
      capacite: 8,
      Nreviews: 23,
      Ncabine: 3,
      star: 5,
      boatType: "quillard",
    },
  });
}

main()
  .then(() => {
    console.log("Seed successful");
  })
  .catch((e) => {
    console.error(e);
    console.log("Error : Seed failed");
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
