import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { SVGProps, useEffect, useRef } from "react";
import { JSX } from "react/jsx-runtime";
import { Link } from "@remix-run/react";
import { Boat } from "@prisma/client";

type VoilierProps = {
  voilier: Boat;
};
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  console.log("Image error:", e.currentTarget.src);
  e.currentTarget.onerror = null; // Prevent infinite loops
  e.currentTarget.src =
    "/fallback-image.jpeg?cache-bust=" + new Date().getTime(); // Cache busting
};

export default function Voilier({ voilier }: VoilierProps) {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const renderImage = (image: string, index: number) => (
    <CarouselItem key={index}>
      <div className="w-full h-60 min-w-80 overflow-hidden">
        <img
          alt={`Image ${index}`}
          className="w-full h-full object-cover"
          height={400}
          width={600}
          src={image}
          loading={index > 0 ? "lazy" : "eager"}
          onError={(e) => {
            console.log("Error loading image:", e.currentTarget.src);
            if (isMounted.current) {
              handleImageError(e);
            }
          }}
          crossOrigin="anonymous"
        />
      </div>
    </CarouselItem>
  );

  return (
    <Link to={voilier.name}>
      <Card className="max-w-md mx-2 mt-4 bg-accent w-96">
        <div className="relative">
          <Carousel className="rounded-t-lg container">
            <CarouselContent className="flex">
              {voilier.images.map(renderImage)}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
          </Carousel>
          <div className="absolute top-2 right-2 bg-gray-900/80 text-white px-3 py-1 rounded-md font-medium text-sm">
            {voilier.prix}€
          </div>
          <div className="absolute bottom-0 left-0 bg-yellow-500/60 text-white px-8 py-4 rounded-tr-3xl font-medium text-sm">
            {voilier.capacite} personnes
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl">{voilier.name}</h3>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Render stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < voilier.star
                      ? "fill-primary"
                      : "fill-muted stroke-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              ({voilier.Nreviews} reviews)
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <ShirtIcon className="w-5 h-5 fill-muted" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {voilier.Ncabine} cabines
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5 fill-muted" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {voilier.boatType}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5 fill-muted" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {`${voilier.length}`}m
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
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
