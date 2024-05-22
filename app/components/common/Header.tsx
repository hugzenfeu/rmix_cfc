import { Link, NavLink } from "@remix-run/react";

export default function Header() {
  const routes: { name: string; to: string }[] = [
    { name: "Qui sommes nous", to: "/about" },
    { name: "CFC Location", to: "/location" },
    { name: "Preparer votre croisière", to: "/preparation" },
    { name: "Vente et gestion", to: "/vente-et-gestion" },
    { name: "CFC électronique", to: "/electronique" },
    { name: "La voile pour les entreprises", to: "/entreprises" },
    { name: "Contact", to: "/contact" },
  ];
  return (
    <header>
      <div className="border  sticky flex-col h-16  bg-background top-0 min-h-32 ">
        <div className="flex justify-end gap-8 px-8 bg-secondary">
          <Link key="Francais" to="/">
            Fr
          </Link>
          <Link key="English" to="/">
            En
          </Link>
        </div>
        <nav className="flex items-center gap-8  justify-center py-4">
          <NavLink key="home" to="/">
            <img src="/image.png" alt="home" className="h-16" />
          </NavLink>
          {routes.map((val) => (
            <NavLink
              key={val.name}
              to={val.to}
              className={({ isActive }) =>
                "flex items-center justify-center transition-colors hover:text-foreground/80 " +
                (isActive ? "text-foreground" : "text-foreground/60")
              }
            >
              {val.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
