import { json, type LoaderFunctionArgs } from "@remix-run/node";
import Voilier from "~/components/containers/Voilier";
import { prisma } from ".server/db";
import { useLoaderData, Await, defer } from "@remix-run/react";
import { Prisma, type Boat } from "@prisma/client";
import { Suspense } from "react";

// Loader function to fetch boat data
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const boats = await prisma.boat.findMany();
  return defer({ boats });
};

// Voiliers component
export default function Voiliers() {
  const data = useLoaderData<{ boats: Boat[] }>();
  //corriger le problème de type
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mx-0 md:mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={data.boats}>
            {(boats: Boat[]) =>
              boats.map((boat: Boat) => (
                <Voilier key={boat.id} voilier={boat} />
              ))
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
