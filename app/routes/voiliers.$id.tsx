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
  if (!boat) {
    return <div>l'aled</div>;
  }

  return (
    <main className="flex-1">
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
            <h1 className="text-3xl font-bold">{boat.name}</h1>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Sailboat Features
              </h2>
              <div className="grid gap-6 py-8">
                <div className="flex items-start gap-4">
                  <Icon name="CompassIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Fully Equipped Navigation
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our sailboat is equipped with state-of-the-art navigation
                      systems, including GPS, chartplotter, and VHF, ensuring a
                      safe and enjoyable sailing experience.
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
                    <h3 className="text-xl font-semibold">Top Speed</h3>
                    <p className="text-gray-500 dark:text-gray-400">15 knots</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="TicketIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Capacité</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {boat.capacite} passagers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="AnchorIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Fuel Capacity</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      50 gallons
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
                Boat Rental Pricing
              </h2>
              <div className="grid gap-6 py-8">
                <div className="flex items-start gap-4">
                  <Icon
                    name="CalendarDaysIcon"
                    className="w-8 h-8 text-primary"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Daily Rate</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $500 per day
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon
                    name="CalendarCheckIcon"
                    className="w-8 h-8 text-primary"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Weekend Rate</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $1,200 for 2 days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CalendarIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Weekly Rate</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $2,500 for 7 days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="AnchorIcon" className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Deposit</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $1,000 refundable security deposit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Book Your Sailing Adventure
              </h2>
              <form className="grid gap-4 py-8">
                <div className="grid gap-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-col items-start w-full h-auto"
                      >
                        <span className="font-semibold uppercase text-[0.65rem]">
                          Check in
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
                  <Label htmlFor="end-date">End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-col items-start w-full h-auto"
                      >
                        <span className="font-semibold uppercase text-[0.65rem]">
                          Check out
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
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select defaultValue="2">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 guest</SelectItem>
                      <SelectItem value="2">2 guests</SelectItem>
                      <SelectItem value="3">3 guests</SelectItem>
                      <SelectItem value="4">4 guests</SelectItem>
                      <SelectItem value="5">5 guests</SelectItem>
                      <SelectItem value="6">6 guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" />
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                <Button size="lg">Submit Inquiry</Button>
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
