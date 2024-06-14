//routes de test only

// routes/voiliers.test.$id.tsx
import { useLoaderData, Await } from "@remix-run/react";
import { json, defer, LoaderFunctionArgs } from "@remix-run/node";
import { Suspense } from "react";
import { findBoatBySlug, findNBoats } from "~/.server/controleurBoats";
import { Loader } from "lucide-react";

// type Boat = {
//   id: number;
//   slug: string;
//   name: string;
//   year: number;
//   boatType: string;
//   brand: string;
//   model: string;
//   length: number;
//   thumbnail: string;
//   images: string[];
//   prix: number;
//   capacite: number;
//   Nreviews: number;
//   Ncabine: number;
//   star: number;
// };

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.id; // Assuming `id` is the dynamic parameter in your route
  if (!slug) {
    throw new Response("Boat not found", { status: 404 });
  }
  const autresAnnoncesPromise = findNBoats(3).then((boats) =>
    boats.map((boat) => ({
      ...boat,
      length: boat.length.toString(), // Convert Decimal to string
      prix: boat.prix.toString(), // Convert Decimal to string
    }))
  );

  const boat = await findBoatBySlug(slug);
  if (!boat) {
    throw new Response("Boat not found", { status: 404 });
  }
  return defer({
    boat,
    autresAnnonces: autresAnnoncesPromise,
  });
};

export default function BoatDetails() {
  const { boat, autresAnnonces } = useLoaderData<typeof loader>();
  return (
    <div>
      <div>
        <h1>{boat.name}</h1>
        {/* Render other boat details */}
      </div>
      <Suspense fallback={<div>Loading other boats...</div>}>
        <Await resolve={autresAnnonces}>
          {(resolvedBoats) => (
            <div>
              {resolvedBoats.map((boat) => (
                <div key={boat.id}>{boat.name}</div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
