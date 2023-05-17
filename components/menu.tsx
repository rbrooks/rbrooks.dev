import Language from "../islands/language.tsx";
import { State } from "../utils/types.ts";
const Menu = (data: { lang: State["lang"] }) => (
  <div class="
      flex flex-col gap-2  items-end mt-0.8 lg:justify-start lg:flex-row lg:mt-0 lg:mb-2 md:justify-end md:-mb-4 md:gap-1 md:mt-0
      ">
    <a
      href="/about"
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src="/vectors/user.svg"
        class="w-full h-full transition-colors duration-150"
        alt="About"
        title="About Me"
      />
    </a>
    <a
      href="/colophon"
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src="/vectors/site.svg"
        class="w-full h-full transition-colors duration-150"
        alt="Colophon"
        title="About This Site"
      />
    </a>
    <a
      href={`/cv-${data.lang}.pdf`}
      target="_blank"
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src="/vectors/cv.svg"
        class="
          w-full h-full transition-colors duration-150"
        alt="PDF"
        title="PDF version"
      />
    </a>
  </div>
);
export default Menu;
