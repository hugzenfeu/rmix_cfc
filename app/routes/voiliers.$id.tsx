/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i420g6ohnaK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Link, json } from "@remix-run/react";
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
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from ".server/db";
// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const boat = await prisma.boat.findMany();
//   return json(boat);
// };
export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src="/fallback-image.jpeg"
              width={800}
              height={600}
              alt="Sailboat"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Luxury Sailboat Rental
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience the thrill of sailing on our well-equipped and
                  beautifully maintained sailboat. Perfect for a day on the
                  water or a weekend getaway.
                </p>
              </div>
              <Button size="lg" className="w-full max-w-[200px]">
                Book Now
              </Button>
            </div>
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
                  <CompassIcon className="w-8 h-8 text-primary" />
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
                  <WavesIcon className="w-8 h-8 text-primary" />
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
                  <SailboatIcon className="w-8 h-8 text-primary" />
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
                Sailboat Specifications
              </h2>
              <div className="grid gap-6 py-8">
                <div className="flex items-start gap-4">
                  <RulerIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Length</h3>
                    <p className="text-gray-500 dark:text-gray-400">35 feet</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <GaugeIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Top Speed</h3>
                    <p className="text-gray-500 dark:text-gray-400">15 knots</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TicketIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Capacity</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      6 passengers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AnchorIcon className="w-8 h-8 text-primary" />
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
                  <CalendarDaysIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Daily Rate</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $500 per day
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CalendarCheckIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Weekend Rate</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $1,200 for 2 days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CalendarIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Weekly Rate</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      $2,500 for 7 days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AnchorIcon className="w-8 h-8 text-primary" />
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
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Other Sailboat Listings
              </h2>
              <div className="grid gap-6 py-8">
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
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
                      Experience the ultimate in luxury sailing with our
                      spacious yacht featuring a private jacuzzi.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <CalendarDaysIcon className="w-4 h-4 text-primary" />
                      <span>$800 per day</span>
                    </div>
                    <Button variant="link" className="mt-2">
                      View Listing
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
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
                      Ideal for families, our spacious catamaran offers ample
                      room and stability for a comfortable sailing experience.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <CalendarDaysIcon className="w-4 h-4 text-primary" />
                      <span>$600 per day</span>
                    </div>
                    <Button variant="link" className="mt-2">
                      View Listing
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Sailboat 4"
                    className="rounded-lg object-cover w-24 h-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AnchorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  );
}

function CalendarCheckIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function CalendarDaysIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CompassIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function GaugeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function RulerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  );
}

function SailboatIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
      <path d="M21 14 10 2 3 14h18Z" />
      <path d="M10 2v16" />
    </svg>
  );
}

function TicketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function WavesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
