type TypeVoilier = {
  name: string;
  images: string[];
  prix: number;
  capacite: string;
  boatType: string;
  Nreviews: string;
  Ncabine: string;
  length: string;
  star: number;
};

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

type VoilierProps = {
  voilier?: TypeVoilier;
};

///fallback-image.jpeg
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "/fallback-image.jpeg";
  e.currentTarget.onerror = null;
};

export default function Voilier({ voilier }: VoilierProps) {
  const defaultVoilier: TypeVoilier = {
    name: "bateau",
    images: ["/vignette bateau.JPG", "/first36-nav2.jpg", "/glenan.jpeg"],
    prix: 1600,
    capacite: "6",
    boatType: "quillard",
    Nreviews: "23",
    Ncabine: "2",
    length: "8.95",
    star: 2,
  };
  const voilierData = voilier || defaultVoilier;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < voilierData.star) {
      stars.push(<StarIcon key={i} className="w-5 h-5 fill-primary" />);
    } else {
      stars.push(
        <StarIcon
          key={i}
          className="w-5 h-5 fill-muted stroke-muted-foreground"
        />
      );
    }
  }
  return (
    <Card className=" max-w-md ml-4 mt-4 bg-accent ">
      <div className="relative ">
        <Carousel className="rounded-t-lg container">
          <CarouselContent className="flex ">
            {voilierData.images.map((image: string, index: number) => (
              <CarouselItem key={index}>
                <img
                  alt="Product Image"
                  className="aspect-[3/2] w-full object-cover"
                  height={400}
                  src={image}
                  width={600}
                  onError={handleImageError}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
        </Carousel>
        <div className="absolute top-2 right-2 bg-gray-900/80 text-white px-3 py-1 rounded-md font-medium text-sm">
          {voilierData.prix}€
        </div>
        <div className="absolute bottom-0 left-0 bg-yellow-500/60 text-white px-8 py-4 rounded-tr-3xl font-medium text-sm">
          {voilierData.capacite} personnes
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl">{voilierData.name}</h3>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <div className="flex items-center gap-1">{stars}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            ({voilierData.Nreviews} reviews)
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <ShirtIcon className="w-5 h-5 fill-muted" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {voilierData.Ncabine} cabines
            </span>
          </div>
          <div className="flex items-center gap-2">
            <RulerIcon className="w-5 h-5 fill-muted" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {voilierData.boatType}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <WashingMachineIcon className="w-5 h-5 fill-muted" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {voilierData.length}m
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
