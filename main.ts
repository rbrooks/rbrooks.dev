/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { apply } from "twind";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  plugins: [
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      preflight: {
        "@font-face": [
          {
            fontFamily: "Plex",
            src: 'url(/fonts/Plex-Regular.woff2) format("woff2")',
          },
          {
            fontFamily: "Plex",
            fontWeight: "bold",
            src: 'url(/fonts/Plex-Bold.woff2) format("woff2")',
          },
        ],
        html: apply`text-html bg-gray`,
        body: {
          body: apply`text-sm text-white font-plex leading-none tracking-wide`,
          h1: apply`text-xl leading-none font-bold sm:text-lg mb-1 pb-1`,
          h2: apply`text-lg font-bold text-gray-light sm:text-md pb-1`,
          h3:
            apply`text-right uppercase text-md font-bold text-gray-light lg:mt-6 lg:mb-2 md:mt-4 lg:text-left pb-1`,
          h4:
            apply`text-white font-bold text-md mb-1.5 lg:mb-1 md:mb-0.5 leading-normal`,
          h5: apply`text-gray-light leading-normal font-bold pb-0.5`,
          ul: apply`list-disc list-inside`,
          li: apply`text-gray-light leading-normal`,
          a: apply`text-links underline hover:text-linksHov visited:textVis leading-normal`,
          p: apply`text-gray-light leading-normal pb-1.5`,
          label: apply`text-gray-light leading-snug`,
        },
      },
      ...twindConfig,
    }),
  ],
});
