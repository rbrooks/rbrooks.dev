import { Translation } from "../utils/types.ts";

const Me = (data: { translation: Translation["me"] | "en" }) => (
  <div class="flex md:flex-col justify-between gap-2 md:gap-y-3 md:items-start">
    <div class="md:order-2">
      <h1>Russ Brooks</h1>
      <h2 class="my-1">
        Full Stack Web Developer
      </h2>
      <p class="whitespace-pre-wrap">
        {data.translation.text}
      </p>
    </div>
    <div class="md:order-2">
      <img
        class="rounded-full md:w-8"
        src="pixels/profile-rhb.jpg"
        height="150"
        width="150"
        alt="Portrait Russ Brooks"
      />
      <ul role="list" class="md:order-3">
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="http://dev.to/iq9"
          >
            <img src="vectors/dev-to.svg" width="24" />
            <span class="ml-2">Dev.to</span>
          </a>
        </li>
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="https://www.facebook.com/ducati1098"
          >
            <img src="vectors/fb.svg" width="24" />
            <span class="ml-2">FaceBook</span>
          </a>
        </li>
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="http://www.github.com/rbrooks"
          >
            <img src="vectors/github.svg" width="24" />
            <span class="ml-2 text-xs">GitHub</span>
          </a>
        </li>
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="https://www.instagram.com/iq9/"
          >
            <img src="vectors/instagram.svg" width="24" />
            <span class="ml-2 text-xs">Instagram</span>
          </a>
        </li>
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="https://www.linkedin.com/in/russell-brooks-b46b4414/"
          >
            <img src="vectors/linkedin.svg" width="24" />
            <span class="ml-2 text-xs">LinkedIn</span>
          </a>
        </li>
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="https://psnprofiles.com/iqnine"
          >
            <img src="vectors/ps.svg" width="24" />
            <span class="ml-2">PlayStation</span>
          </a>
        </li>
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="http://www.twitter.com/iq_9"
          >
            <img src="vectors/twitter.svg" width="24" />
            <span class="ml-2">Twitter</span>
          </a>
        </li>
        <li class="flex mt-0.5">
          <a
            class="group flex text-xs"
            href="https://www.youtube.com/@russbrooks1250/featured"
          >
            <img src="vectors/youtube.svg" width="24" />
            <span class="ml-2">YouTube</span>
          </a>
        </li>
        <li class="mt-1 border-t border-zinc-100 pt-0.5 dark:border-zinc-700/40 flex">
          <a
            class="group flex text-xs"
            href="mailto:me@russbrooks.com"
          >
            <img src="vectors/email.svg" width="24" />
            <span class="ml-2 text-xs">me@russbrooks.com</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Me;
