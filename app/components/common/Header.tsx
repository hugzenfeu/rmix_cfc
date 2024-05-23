import { Link, NavLink } from "@remix-run/react";

// export default function Header() {
//   const routes: { name: string; to: string }[] = [
//     { name: "Qui sommes nous", to: "/about" },
//     { name: "CFC Location", to: "/location" },
//     { name: "Preparer votre croisière", to: "/preparation" },
//     { name: "Vente et gestion", to: "/vente-et-gestion" },
//     { name: "CFC électronique", to: "/electronique" },
//     { name: "La voile pour les entreprises", to: "/entreprises" },
//     { name: "Contact", to: "/contact" },
//   ];
//   return (
//     <header>
//       <div className="border  sticky flex-col h-16  bg-background top-0 min-h-32 ">
//         <div className="flex justify-end gap-8 px-8 bg-secondary">
//           <Link key="Francais" to="/">
//             Fr
//           </Link>
//           <Link key="English" to="/">
//             En
//           </Link>
//         </div>
//         <nav className="flex items-center gap-8  justify-center py-4">
//           <NavLink key="home" to="/">
//             <img src="/image.png" alt="home" className="h-16" />
//           </NavLink>
//           {routes.map((val) => (
//             <NavLink
//               key={val.name}
//               to={val.to}
//               className={({ isActive }) =>
//                 "flex items-center justify-center transition-colors hover:text-foreground/80 " +
//                 (isActive ? "text-foreground" : "text-foreground/60")
//               }
//             >
//               {val.name}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

export default function Header() {
  const routes = [
    {
      name: "Qui sommes nous",
      to: "/about",
      children: [],
    },
    {
      name: "CFC Location",
      to: "/location",
      children: [],
    },
    {
      name: "Preparer votre croisière",
      to: "/preparation",
      children: [],
    },
    {
      name: "Vente et gestion",
      to: "/vente-et-gestion",
      children: [
        {
          name: "Gestion de location",
          to: "/vente-et-gestion/gestion-location",
        },
        { name: "Vente de bateaux", to: "/vente-et-gestion/vente-bateaux" },
      ],
    },
    {
      name: "CFC électronique",
      to: "/electronique",
      children: [],
    },
    {
      name: "La voile pour les entreprises",
      to: "/entreprises",
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
      <div className="border sticky flex-col h-16 bg-background top-0 min-h-32">
        <div className="flex justify-end gap-8 px-8 bg-secondary">
          <Link key="Francais" to="/">
            Fr
          </Link>
          <Link key="English" to="/">
            En
          </Link>
        </div>
        <nav className="flex items-center gap-8 justify-center py-4">
          <NavLink key="home" to="/">
            <img src="/image.png" alt="home" className="h-16" />
          </NavLink>
          {routes.map((route) => (
            <div key={route.name} className="relative group">
              <NavLink
                to={route.to}
                className={({ isActive }) =>
                  "flex items-center justify-center transition-colors hover:text-foreground/80 py-8" +
                  (isActive ? "text-foreground" : "text-foreground/60")
                }
              >
                {route.name}
              </NavLink>
              {route.children.length > 0 && (
                <div className="absolute left-0  hidden w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                  {route.children.map((subRoute) => (
                    <NavLink
                      key={subRoute.name}
                      to={subRoute.to}
                      className={({ isActive }) =>
                        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " +
                        (isActive ? "bg-gray-100" : "")
                      }
                    >
                      {subRoute.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
