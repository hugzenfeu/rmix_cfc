import type { LoaderFunctionArgs } from "@remix-run/node";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i420g6ohnaK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Await, Link, defer, useLoaderData } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SVGProps, Suspense, useEffect, useRef } from "react";
import { JSX } from "react/jsx-runtime";
import { Icon } from "app/components/utils/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Img } from "react-image";
import { json } from "@remix-run/react";
import { Boat } from "@prisma/client";
import { findBoatBySlug, findNBoats } from "~/.server/controleurBoats";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.id; // Assuming `id` is the dynamic parameter in your route
  if (!slug) {
    throw new Response("Boat not found", { status: 404 });
  }
  const autresAnnoncesPromise = findNBoats(3);
  //.then((boats) =>
  //   boats.map((boat) => ({
  //     ...boat,
  //     length: boat.length.toString(), // Convert Decimal to string
  //     prix: boat.prix.toString(),
  //     prixWeekend: boat.prixWeekend.toString(),
  //     prixJour: boat.prixJour.toString(),
  //     caution: boat.caution.toString(),
  //     fuel: boat.fuel.toString(),
  //   }))
  // );

  const boat = await findBoatBySlug(slug);
  if (!boat) {
    throw new Response("Boat not found", { status: 404 });
  }
  return defer({
    boat,
    autresAnnonces: autresAnnoncesPromise,
  });
};

export default function Component() {
  const { boat, autresAnnonces } = useLoaderData<typeof loader>();

  const renderImage = (image: string, index: number) => (
    <CarouselItem key={index} className="mx-auto md:basis-1/2 lg:basis-1/3">
      <div className="w-full h-96 min-w-80 overflow-hidden">
        <Img
          alt={`Image ${index}`}
          className="w-full h-full object-cover"
          height={400}
          width={600}
          src={[image, "/fallback-image.jpeg"]}
          loading={index > 0 ? "lazy" : "eager"}
          crossOrigin="anonymous"
        />
      </div>
    </CarouselItem>
  );

  return (
    <main className="flex-1 bg-background">
      <title>{boat.name}</title>
      <section>
        <div className="flex-col ">
          <Carousel
            className="rounded-t-lg container mt-4"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="flex  ">
              {boat.images.map(renderImage)}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
          </Carousel>
          <div className="flex justify-center items-center min h-20">
            <h1 className="text-3xl font-bold">
              {boat.brand} {boat.model} - {boat.name}
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Description du bateau
              </h2>
              <div className="grid gap-6 py-8">
                <div className="flex items-start gap-4">
                  <Icon name="CompassIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      {boat.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="WavesIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Comfortable Accommodations
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      The sailboat features a spacious cabin with a comfortable
                      double bed, as well as a galley and seating area for
                      relaxing and dining.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="SailboatIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      High-Performance Sails
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our sailboat is equipped with a set of high-quality sails
                      that provide excellent performance and responsiveness,
                      allowing you to truly experience the thrill of sailing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Caractéristiques du voilier
              </h2>
              <div className="grid gap-6 py-8">
                <div className="flex items-start gap-4">
                  <Icon name="Ruler" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Longueur</h3>
                    <p className="text-gray-500 dark:text-gray-400">{`${boat.length}m`}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="GaugeIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Vitesse de coque</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {`${boat.speed}`} kts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="TicketIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Capacité</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {`${boat.capacite}`} passagers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="AnchorIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Capacité du réservoir
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {`${boat.fuel}`} litres
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Prix de location
              </h2>
              <div className="grid gap-6 py-8">
                <div className="flex items-center gap-4">
                  <Icon
                    name="CalendarDaysIcon"
                    className="w-8 h-8 text-primary"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Prix à la journée</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {`${boat.prixJour}`}€ par jours
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon
                    name="CalendarCheckIcon"
                    className="w-8 h-8 text-primary"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Prix pour le weekend
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {`${boat.prixWeekend}`}€ pour le Weekend
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="CalendarIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Prix à la semaine</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {`${boat.prix}`}€ pour la semaine
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="AnchorIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Caution</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {`${boat.caution}`}€ de caution
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Réservez votre aventure en voilier
              </h2>
              <form className="grid gap-4 py-8">
                <div className="grid gap-2">
                  <Label htmlFor="start-date">Début du séjour</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-col items-start w-full h-auto"
                      >
                        <span className="font-semibold uppercase text-[0.65rem]">
                          Arrivée
                        </span>
                        <span className="font-normal">4/2/2024</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="end-date">Fin du séjour</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-col items-start w-full h-auto"
                      >
                        <span className="font-semibold uppercase text-[0.65rem]">
                          Départ
                        </span>
                        <span className="font-normal">10/2/2024</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="guests">Nombre de passagers</Label>
                  <Select defaultValue="2">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(boat.capacite)].map((_, i) => (
                        <SelectItem key={i} value={(i + 1).toString()}>
                          {i + 1} passager{i + 1 !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" type="text" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="telephone">Telephone</Label>
                  <Input id="phone" type="tel" placeholder="05 05 05 05 05" />
                </div>
                <Button size="lg">Demander un devis</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex-col justify-around gap-16">
            <h2 className="text-3xl font-bold tracking-tighter">
              Other Sailboat Listings
            </h2>
            <div className="flex">
              <div className="flex items-start gap-4">
                <img
                  src="/fallback-image.jpeg"
                  width={300}
                  height={200}
                  alt="Sailboat 2"
                  className="rounded-lg object-cover w-24 h-24"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    Luxury Yacht with Jacuzzi
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experience the ultimate in luxury sailing with our spacious
                    yacht featuring a private jacuzzi.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Icon
                      name="CalendarDaysIcon"
                      className="w-4 h-4 text-primary"
                    />
                    <span>$800 per day</span>
                  </div>
                  <Button variant="link" className="mt-2">
                    View Listing
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/fallback-image.jpeg"
                  width={300}
                  height={200}
                  alt="Sailboat 3"
                  className="rounded-lg object-cover w-24 h-24"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    Family-Friendly Catamaran
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ideal for families, our spacious catamaran offers ample room
                    and stability for a comfortable sailing experience.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Icon
                      name="CalendarDaysIcon"
                      className="w-4 h-4 text-primary"
                    />
                    <span>$600 per day</span>
                  </div>
                  <Button variant="link" className="mt-2">
                    View Listing
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/fallback-image.jpeg"
                  width={300}
                  height={200}
                  alt="Sailboat 4"
                  className="rounded-lg object-cover w-24 h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
