import { Translation } from "../utils/types.ts";

const Footer = (data: { translation: Translation["footer"] }) => (
  <div class="col-span-2 lg:col-span-1 flex gap-1 items-start mt-10 justify-between">
    <a href="/about">
      {data.translation.about}
    </a>
    <div class="flex flex-col items-center gap-2">
      <a
        class="relative w-10"
        href="https://dev.to/iq9"
        rel="noopener"
        target="_blank"
      >
        <img
          class="w-full"
          src="vectors/dev-to.svg"
          alt="Dev.to Badge"
          title="I blog at dev.to"
        />
      </a>
      <a
        class="relative w-4"
        href="https://github.com/rbrooks"
        rel="noopener"
        target="_blank"
      >
        <img
          class="w-full"
          src="vectors/github.svg"
          alt="GitHub Badge"
          title="GitHub Profile"
        />
      </a>
      <a href="https://fresh.deno.dev" class="w-15">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge-dark.svg"
          alt="Made with Fresh"
          title="Made with Fresh Deno framework"
        />
      </a>
    </div>
    <a href="/privacy">
      {data.translation.privacy}
    </a>
  </div>
);
export default Footer;
