import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("test", 10); // 10 rounds

  await prisma.user.create({
    data: {
      login: "test1",
      pass: hashedPassword,
      createDate: new Date(), // Set the current date and time
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
