import { PostHog } from "posthog-node";
import { getClientIPAddress } from "remix-utils/get-client-ip-address";
import crypto from "node:crypto";

let posthogInstance: PostHog;
const uuid = crypto.randomUUID();
export const getPosthogInstance = () => {
  if (!posthogInstance) {
    posthogInstance = new PostHog(process.env.POSTHOG_API_KEY, {
      host: process.env.POSTHOG_API_ENDPOINT,
    });
    return posthogInstance;
  }
};

const posthogServer = getPosthogInstance();

export const getPosthogDistinctID = (request: Request) => {
  const ip = getClientIPAddress(request);
  if (!ip) return uuid;
  return ip;
};

type PosthogEvent = Parameters<PostHog["capture"]>[0];
export const captureServerEvent = (event: PosthogEvent, request: Request) => {
  const ip = getPosthogDistinctID(request);
  if (!ip) {
    return crypto.randomUUID();
  }
  return ip;
};

export { posthogServer };
