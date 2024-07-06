// routes/protected.jsx

import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { requireUserSession } from "../components/utils/auth";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await requireUserSession(request);
  const userId = session.get("userId");
  return json({ userId });
}

export default function ProtectedPage() {
  const { userId } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, user {userId}!</p>
    </div>
  );
}
