import type { MetaFunction } from "@remix-run/node";
import { Button } from "@/components/ui/button";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "CFC" },
    { name: "description", content: "Welcome to CFC!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center bg-neutral min-h-screen md:p-4 md:mx-16">
      <div className="flex flex-col min-h-96 lg:flex-row items-center border-accent  rounded-2xl bg-secondary shadow-lg p-6  md:mx-auto my-2">
        <div className="w-full lg:w-1/2 p-4">
          <img
            src="https://filjhbmunjsumdqyuiwj.supabase.co/storage/v1/object/sign/Bateaux/vignette_bateau.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCYXRlYXV4L3ZpZ25ldHRlX2JhdGVhdS5KUEciLCJpYXQiOjE3MTcwOTc0MTAsImV4cCI6MTc0ODYzMzQxMH0.HZcYDt6QJ0WO7yH65Ej48JDUAs0lDEgwYTXGrPCLkes&t=2024-05-30T19%3A30%3A10.521Z"
            alt="bateau"
            className="rounded-2xl "
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center text-center ">
          <p className="mb-8 text-lg font-semibold text-primary">
            Location de voiliers dans le Morbihan et en Bretagne Sud
          </p>
          <p className="mb-8 text-lg  text-primary">
            Visitez le Golfe du Morbihan ou prenez le large et partez à la
            découverte de Belle-Île-en-Mer, Houat ou Hœdic. CFC dispose de 40
            voiliers habitables.
          </p>
          <Button className="rounded-md px-6 py-2 bg-primary text-secondary hover:bg-primary-dark">
            Embarquez pour l'aventure
          </Button>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center border-accent  rounded-2xl bg-secondary shadow-lg p-6  mx-auto my-2">
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center text-center">
          <p className="mb-8 text-lg font-semibold text-primary">
            Vous recherchez une agence de location de bateaux en Bretagne Sud ?
            Vous êtes au bon endroit !
          </p>
          <p className="mb-8 text-lg  text-primary">
            Basé sur le port de La Trinité-sur-Mer, CFC propose des monocoques
            et des catamarans à la location. Louer un bateau au départ de la
            Trinité sur Mer permet de (re)découvrir les nombreuses îles du
            Morbihan durant un week-end ou une semaine. Nos voiliers sont
            habitables et tous bien équipés (réfrigérateur, eau chaude,
            chauffage, pilote automatique, traceur GPS…). Le confort à bord de
            nos bateaux est au centre de toutes nos préoccupations. Quels que
            soient vos envies de programme, votre expérience ou votre budget
            notre équipe saura vous conseiller sur le choix du voilier le mieux
            adapté.
          </p>
          <p className="mb-8 text-lg font-semibold text-primary">
            Pour découvrir notre flotte c’est ici:
          </p>
          <NavLink
            to={"/voiliers"}
            className="rounded-md px-6 py-2 bg-primary text-secondary hover:bg-primary-dark"
          >
            Nos voiliers
          </NavLink>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <img
            src="https://filjhbmunjsumdqyuiwj.supabase.co/storage/v1/object/sign/Bateaux/first36-nav2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCYXRlYXV4L2ZpcnN0MzYtbmF2Mi5qcGciLCJpYXQiOjE3MTcwOTc0MjYsImV4cCI6MTc0ODYzMzQyNn0.K3Gxxwosuj7KI4PJb0DKkZ8e1A17GG78MfRf59u_j4I&t=2024-05-30T19%3A30%3A26.074Z"
            alt="bateau"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
}
