// routes/login.jsx

import { redirect, json, ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { getSession, commitSession } from "../session/session.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  // Replace this with your actual authentication logic
  if (username === "user" && password === "pass") {
    const session = await getSession();
    session.set("userId", "user123");

    return redirect("/protected", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return json({ error: "Invalid credentials" }, { status: 401 });
}

export default function LoginPage() {
  const actionData = useActionData();

  return (
    <div>
      <h1>Login</h1>
      <Form method="post">
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        {actionData?.error && (
          <p style={{ color: "red" }}>{actionData.error}</p>
        )}
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
