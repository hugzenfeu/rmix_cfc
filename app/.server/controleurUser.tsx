import { prisma } from "./db";

export async function findUserByLogin(login: string) {
  const user = prisma.user.findUnique({
    where: {
      login: login,
    },
  });
  return user;
}
