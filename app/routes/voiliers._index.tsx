import { json, type LoaderFunctionArgs } from "@remix-run/node";
import Voilier from "~/components/containers/Voilier";
import { prisma } from "~/.server/db";
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
  const { boats } = useLoaderData<{ boats: Promise<Boat[]> }>();

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mx-0 md:mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={boats}>
            {(boatsData) => {
              // Explicitly type boatsData as Boat[]
              const typedBoatsData = boatsData as Boat[];
              return typedBoatsData.map((boat: Boat) => (
                <Voilier key={boat.id} voilier={boat} />
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
/* {(liste: Boat[]) =>
              liste.map((boat: Boat) => (
                <Voilier key={boat.id} voilier={boat} />
              )) }           
              
              
              
              
              
              
              
              {{(boats:Boat[])=>boats.map((boat: Boat) => (
                <Voilier key={boat.id} voilier={boat} />
              )}
         
            }*/
