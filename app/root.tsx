import type { LoaderFunctionArgs } from "@remix-run/node";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  json,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import iconHref from "app/components/icons/icon.svg?url";
//import iconHref from "app/components/icons/icon.svg";
import stylesheet from "~/globals.css?url";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Icon } from "app/components/utils/Icon";
import { usePosthosPageView } from "./hooks/posthog/usePosthosPageview";
import { usePosthogDistinctIdSync } from "./hooks/posthog/usePosthogDistinctidSync";
import { getPosthogDistinctID } from "./.server/posthog/init.server";
import { getClientEnv } from "./.server/env.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const distinctId = getPosthogDistinctID(request);
  const clientEnv = getClientEnv();
  return json({ distinctId, clientEnv });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "preload",
    href: iconHref,
    as: "fetch",
    type: "image/svg+xml",
  },
];

export const useClientEnv = () => {
  return useLoaderData<typeof loader>().clientEnv;
};

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
  const { distinctId, clientEnv } = useLoaderData<typeof loader>();
  usePosthogDistinctIdSync(); //pour l'instatn inutile car pas de tracker coté serveur
  usePosthosPageView();
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
