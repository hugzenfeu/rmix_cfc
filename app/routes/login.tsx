// routes/login.jsx

import { redirect, json, ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { getSession, commitSession } from "../session/session.server";
import { findUserByLogin } from "../.server/controleurUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bcrypt from "bcryptjs-react";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username) {
    return json({ error: "Invalid credentials 1" }, { status: 401 });
  }

  const user = await findUserByLogin(username);

  if (!user) {
    return json({ error: "Invalid credentials 2" }, { status: 401 });
  }

  if (username === user.login && (await bcrypt.compare(password, user.pass))) {
    const session = await getSession();
    session.set("userId", user.id);

    return redirect("/protected", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return json({ error: "Invalid credentials 3" }, { status: 401 });
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter your email and password below to access your account.
          </p>
        </div>
        <Form className="space-y-6" method="post">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              type="text"
              name="username"
              required
              className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-primary placeholder-muted focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-primary placeholder-muted  focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              placeholder="Password"
            />
          </div>
          {actionData?.error && (
            <p style={{ color: "red" }}>{actionData.error}</p>
          )}
          <div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
