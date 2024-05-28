/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BdsozxeOVXq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export default function Test() {
  return (
    <Card className="w-full max-w-md">
      <div className="relative">
        <Carousel className="rounded-t-lg">
          <CarouselContent>
            <CarouselItem>
              <img
                alt="Product Image"
                className="aspect-[3/2] w-full object-cover"
                height={400}
                src="/first36-nav2.jpg"
                width={600}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Product Image"
                className="aspect-[3/2] w-full object-cover"
                height={400}
                src="/menu.svg"
                width={600}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Product Image"
                className="aspect-[3/2] w-full object-cover"
                height={400}
                src="/glenan.jpeg"
                width={600}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-md font-medium text-sm">
          $99
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl">Acme Prism Tee</h3>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            (23 reviews)
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <ShirtIcon className="w-5 h-5 fill-muted" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Cotton Blend
            </span>
          </div>
          <div className="flex items-center gap-2">
            <RulerIcon className="w-5 h-5 fill-muted" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Regular Fit
            </span>
          </div>
          <div className="flex items-center gap-2">
            <WashingMachineIcon className="w-5 h-5 fill-muted" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Machine Washable
            </span>
          </div>
        </div>
      </div>
    </Card>
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

function ShirtIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function WashingMachineIcon(
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
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </svg>
  );
}
