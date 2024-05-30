import { json, type LoaderFunctionArgs } from "@remix-run/node";
import Voilier from "~/components/containers/Voilier";

import { prisma } from ".server/db";
import { useLoaderData } from "@remix-run/react";
import { Prisma, type Boat } from "@prisma/client";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const boat = await prisma.boat.findMany();
  return json(boat);
};

export default function voiliers() {
  const boat = useLoaderData<Boat[]>();

  return (
    <div>
      <div className="flex flex-wrap justify-center mx-auto">
        {boat.map((boat: any) => (
          <Voilier voilier={boat} />
        ))}
      </div>
    </div>
  );
}
