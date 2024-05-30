import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     firstName: faker.person.firstName(),
  //     lastName: faker.person.lastName(),
  //     username: faker.internet.userName(),
  //     email: faker.internet.email(),
  //   },
  // });
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
