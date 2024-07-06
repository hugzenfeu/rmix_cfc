import { redirect } from "@remix-run/node";
import { getSession } from "../../session/session.server";

export async function requireUserSession(request) {
  const cookie = request.headers.get("cookie");
  const session = await getSession(cookie);

  if (!session.has("userId")) {
    throw redirect("/login");
  }

  return session;
}
