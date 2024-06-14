import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

import { Card } from "@/components/ui/card";

import { Link } from "@remix-run/react";
import { Boat } from "@prisma/client";

import { Icon } from "app/components/utils/Icon";
import { Img } from "react-image";
import { useEffect, useRef, useState } from "react";

type VoilierProps = {
  voilier: {
    id: number;
    slug: string;
    name: string;
    year: number;
    boatType: string;
    brand: string;
    model: string;
    length: string;
    thumbnail: string;
    images: string[];
    prix: string;
    capacite: number;
    Nreviews: number;
    Ncabine: number;
    star: number;
  };
};
export default function Voilier({ voilier }: VoilierProps) {
  // // pas sur de ce truc je comprends pas vraiement cette partie
  // const [images, setImages] = useState(voilier.images);
  // const isMounted = useRef(false);

  // useEffect(() => {
  //   isMounted.current = true;
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);
  /* <img
          alt={`Image ${index}`}
          className="w-full h-full object-cover"
          height={400}
          width={600}
          // loading={index > 0 ? "lazy" : "eager"}
          src={[image, "/fallback-image.jpeg"]}
          crossOrigin="anonymous"
        /> */
  const ImageWithFallback = ({
    src,
    fallback,
    alt,
  }: {
    src: string;
    fallback: string;
    alt: string;
  }) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
      if (imgSrc !== fallback) {
        setImgSrc(fallback);
      }
    };

    return <img src={imgSrc} alt={alt} onError={handleError} />;
  };

  const renderImage = (image: string, index: number) => (
    <CarouselItem key={index}>
      <div className="w-full h-60 min-w-80 overflow-hidden">
        {/* <img
          alt={`Image ${index}`}
          className="w-full h-full object-cover"
          height={400}
          width={600}
          // loading={index > 0 ? "lazy" : "eager"}
          src={[image, "/fallback-image.jpeg"]}
          crossOrigin="anonymous"
        /> */}
        <ImageWithFallback
          src={image}
          fallback="/fallback-image.jpeg"
          alt={`Image ${index}`}
        />
      </div>
    </CarouselItem>
  );

  return (
    <Card className="max-w-md mx-2 my-2 bg-accent w-96">
      <div className="relative">
        <Carousel
          className="rounded-t-lg container"
          opts={{
            loop: true,
          }}
        >
          <Link to={voilier.slug}>
            <CarouselContent className="flex">
              {voilier.images.map((image, index) => renderImage(image, index))}
            </CarouselContent>
          </Link>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition-colors" />
        </Carousel>
        <Link to={voilier.slug}>
          <div className="absolute top-2 right-2 bg-gray-900/80 text-white px-3 py-1 rounded-md font-medium text-sm">
            {`${voilier.prix}`}€
          </div>
          <div className="absolute bottom-0 left-0 bg-yellow-500/60 text-white px-8 py-4 rounded-tr-3xl font-medium text-sm">
            {voilier.capacite} personnes
          </div>
        </Link>
      </div>
      <Link to={voilier.slug}>
        <div className="p-4">
          <h3 className="font-bold text-xl">{voilier.name}</h3>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Render stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Icon
                  name={i < voilier.star ? "StarIconFill" : "StarIcon"}
                  key={i}
                  className="w-5 h-5 fill-primary"
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              ({voilier.Nreviews} reviews)
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              {/* <Bed /> */}
              <Icon name="BedSvgrepoCom" className="w-5 h-5 fill-muted " />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {voilier.Ncabine} cabines
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Ruler" className="w-5 h-5 fill-muted" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {voilier.boatType}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Ruler" className="w-5 h-5 fill-muted" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {`${voilier.length}`}m
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
