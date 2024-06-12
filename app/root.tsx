import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import iconHref from "app/components/icons/icon.svg?url";
//import iconHref from "app/components/icons/icon.svg";
import stylesheet from "~/globals.css?url";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Icon } from "app/components/utils/Icon";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "preload",
    href: iconHref,
    as: "fetch",
    type: "image/svg+xml",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background font-sans antialiased">
        <div className="bg-background min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return (
    // <Layout>
    <Outlet />
    // </Layout>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
  }
}
