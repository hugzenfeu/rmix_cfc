import { Link, NavLink } from "@remix-run/react";

export default function Header() {
  const routes = [
    {
      name: "Qui sommes nous",
      to: "/about",
      children: [],
    },
    {
      name: "CFC Location",
      to: "/voiliers",
      children: [
        { name: "Nos voiliers", to: "/voiliers" },
        { name: "Conditions de location ", to: "/conditions-location" },
      ],
    },
    {
      name: "Preparer votre croisière",
      to: "/preparation",
      children: [
        { name: "Nos conseils ", to: "/actualites" },
        { name: "Informations pratiques", to: "/infos-pratiques-arrivee" },
      ],
    },
    {
      name: "Vente et gestion",
      to: "/gestion-locative",
      children: [
        { name: "Gestion locative", to: "/gestion-locative" },
        { name: "Entretien et conciergerie", to: "/entretien-conciergerie" },
      ],
    },
    {
      name: "CFC électronique",
      to: "/electricite",
      children: [
        { name: "Energie", to: "/energie" },
        { name: "Electronique", to: "/electronique" },
        { name: "Confort", to: "/confort" },
        { name: "Réalisations", to: "/realisations" },
      ],
    },
    {
      name: "La voile pour les entreprises",
      to: "/la-location-pour-les-entreprises",
      children: [],
    },
    {
      name: "Contact",
      to: "/contact",
      children: [],
    },
  ];

  return (
    <header>
      <div className=" border sticky flex-col h-16 bg-background top-0 min-h-32 ">
        <div className="flex justify-end gap-8 px-8 bg-secondary ">
          <Link key="Francais" to="/">
            Fr
          </Link>
          <Link key="English" to="/">
            En
          </Link>
        </div>
        <div className="flex items-center gap-8 justify-start py-4  bg-background">
          <nav className=" min-w-32 flex-auto">
            <NavLink key="home" to="/">
              <img src="/image.png" alt="home" className="px-8 h-16" />
            </NavLink>
            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8 justify-center ml-auto mr-auto px-4">
              {routes.map((route) => (
                <div key={route.name} className=" relative group">
                  <NavLink
                    to={route.to}
                    className={({ isActive }) =>
                      " transition-colors hover:text-accent-foreground " +
                      (isActive ? "text-foreground" : "text-foreground/60")
                    }
                  >
                    {route.name}
                    {route.children.length > 0 && (
                      <span className="ml-2">&#9662;</span> // Down arrow indicator
                    )}
                  </NavLink>
                  {route.children.length > 0 && (
                    <div className="absolute left-0 hidden w-48 bg-background group-hover:block">
                      {route.children.map((subRoute) => (
                        <NavLink
                          key={subRoute.name}
                          to={subRoute.to}
                          className={({ isActive }) =>
                            "block px-4 py-2 text-sm text-primary hover:bg-secondary " +
                            (isActive ? "bg-accent" : "")
                          }
                        >
                          {subRoute.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
          <nav className="">
            {/* mobile */}
            <div className="lg:hidden items-center gap-8 justify-center ml-auto px-4 py-4">
              <input type="checkbox" id="menu-toggle" className="hidden peer" />
              <label
                htmlFor="menu-toggle"
                className="lg:hidden peer-checked:hidden text-primary cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </label>
              <label
                htmlFor="menu-toggle"
                className="hidden peer-checked:block text-primary cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>

              {routes.map((route) => (
                <div
                  key={route.name}
                  className=" relative group hidden peer-checked:block w-screen"
                >
                  <NavLink
                    to={route.to}
                    className={({ isActive }) =>
                      "flex items-center justify-center transition-colors hover:text-accent-foreground py-8 " +
                      (isActive ? "text-foreground" : "text-foreground/60")
                    }
                  >
                    {route.name}
                    {route.children.length > 0 && (
                      <span className="ml-2">&#9662;</span> // Down arrow indicator
                    )}
                  </NavLink>
                  {route.children.length > 0 && (
                    <div className="absolute left-0 hidden  bg-background border border-secondary rounded shadow-lg group-hover:block ">
                      {route.children.map((subRoute) => (
                        <NavLink
                          key={subRoute.name}
                          to={subRoute.to}
                          className={({ isActive }) =>
                            "block px-4 py-2 text-sm text-primary hover:bg-secondary " +
                            (isActive ? "bg-accent" : "")
                          }
                        >
                          {subRoute.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
