import { json, type LoaderFunctionArgs, defer } from "@remix-run/node";
import Voilier from "~/components/containers/Voilier";
import { prisma } from "~/.server/db";
import { useLoaderData, Await } from "@remix-run/react";
import { Prisma, type Boat } from "@prisma/client";
import { Suspense } from "react";

// Loader function to fetch boat data
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const boatsPromise = prisma.boat.findMany();
  return defer({ boatsPromise: await boatsPromise });
};

// Voiliers component
export default function Voiliers() {
  const { boatsPromise } = useLoaderData<typeof loader>();
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mx-0 md:mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={boatsPromise}>
            {(boatsData) => {
              // Explicitly type boatsData as Boat[]
              console.log(boatsData);
              return boatsData.map((boat: Boat) => (
                <Voilier key={boat.id} voilier={boat} />
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
