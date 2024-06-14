import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { iconsSpritesheet } from "vite-plugin-icons-spritesheet";

installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    iconsSpritesheet({
      inputDir: "./svg-icons/input",
      outputDir: "./app/components/icons",
      withTypes: true,
      fileName: "icon.svg",
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
  define: {
    POSTHOG_API_KEY: JSON.stringify(process.env.POSTHOG_API_KEY),
    POSTHOG_API_ENDPOINT: JSON.stringify(process.env.POSTHOG_API_ENDPOINT),
  },
});
