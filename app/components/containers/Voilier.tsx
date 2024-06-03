import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { JSX } from "react/jsx-runtime";
import { Link } from "@remix-run/react";
import { Boat } from "@prisma/client";
import { RulerIcon, ShirtIcon, StarIcon } from "../svg";

type VoilierProps = {
  voilier: Boat;
};
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  console.log("Image error:", e.currentTarget.src);
  e.currentTarget.onerror = null; // Prevent infinite loops
  e.currentTarget.src = "/fallback-image.jpeg";
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
