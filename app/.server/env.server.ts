import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string(),
  POSTHOG_API_ENDPOINT: z.string(),
  POSTHOG_API_KEY: z.string(),
});

export const initEnv = () => {
  const env = envSchema.safeParse(process.env);
  if (!env.success) {
    console.error(
      "Invalid environement variable ",
      env.error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  }
  return env.data;
};

export const getServerEnv = () => initEnv();

export const getClientEnv = () => {
  const serverEnv = getServerEnv();
  return {
    NODE_ENV: serverEnv.NODE_ENV,
  };
};

export type CLIENT_ENV = ReturnType<typeof getClientEnv>;
type APP_ENV = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends APP_ENV {}
  }
}
