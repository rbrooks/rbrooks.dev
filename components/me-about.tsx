import { Translation } from "../utils/types.ts";

const MeAbout = (data: { translation: Translation["me"] | "en" }) => (
  <div class="flex flex-row">
    <div class="basis-3/5 pr-1.5">
      <h1>Late-Night Coding</h1>
      <h2>
        "Dad, I got Star Trek working!🖖"
      </h2>
      <h4>
        No dress code at "Insurance Automation Methods (IAM) Inc." and Bedhead
        is encouraged.
      </h4>

      <p>
        Me: "Wait. It's a <strong>DROID</strong>? 🤖 That you give{" "}
        <strong>COMMANDS</strong>!? 📜 And it <strong>DOES STUFF</strong>?! 🫡"
      </p>

      <p>My Dad: "Yup."</p>

      <p>Me: "🤯 I'm all in on this computer thing."</p>

      <p>
        I've loved creating things as long as I can remember. This is me on my
        dad's <a href="https://en.wikipedia.org/wiki/TRS-80">TRS-80</a>{" "}
        in 1977, the first "home computer" anyone had seen in New Jersey, let
        alone{" "}
        <a href="https://www.lakemohawkcc.com/">Sparta (Lake Mohawk)</a>.
        "<a href="https://en.wikipedia.org/wiki/BASIC_Computer_Games">
          BASIC Computer Games
        </a>" was the book. I taught myself to type, and became obssessed with
        pecking in programs. The "final boss" in this book was
        "<a href="https://en.wikipedia.org/wiki/Star_Trek_(1971_video_game)#/media/File:Star_trek_ascii_vt100_game_(29645819581).jpg">
          Super Star Trek
        </a>", the longest program in the book at 9,200 lines of{" "}
        <a href="https://github.com/coding-horror/basic-computer-games/blob/main/84_Super_Star_Trek/superstartrek.bas">
          source code
        </a>. Early lessons in debugging, they never worked the first time. When
        I got one working, neighbors would come over to play, and gape at the
        technilogical wonder.
      </p>

      <p>
        Walking downstairs from this photo, you'd find our lacquor-encrusted
        workshop, with an R/C plane 🛩️ mid-construction by my dad, and a model
        rocket 🚀 from me. I built upwards of 30 models back then, from plastic
        to R/C cars to rockets. Valuable early lessons in craftsmanship,
        extrapolation from incomplete datasets (the manual), fine motor control,
        and not stopping until it's done.
      </p>

      <p>
        That's thanks to the inspiration of my Scientist-Inventor grandfather,
        Percy Brooks, who had a dozen U.S. Patents to his name, and my dad
        checking out of the Ratrace at 40 to start his own computer business.
      </p>

      <p>
        Needless to say, I'm still a Level-90, Card-Carying gamer. As a
        teenager, I worked in 2 different arcades on the boardwalk in{" "}
        <a href="https://wildwoodsnj.com/">Wildwood NJ</a>{" "}
        just to be around microchips. I switched to PlayStation 5 years ago, and
        have been{" "}
        <strong>
          <em>loving</em>
        </strong>{" "}
        the experiexnce. The best video games I've ever played are PlayStation
        exclusives. I'll never own another PC or XBox. You can see from my{" "}
        <a href="https://psnprofiles.com/iqnine?order=percent">
          PlayStation Accomplishments
        </a>, my fascination with robots hasn't waned.
      </p>
    </div>
    <div class="basis-2/5 flex-none pl-1.5">
      <img
        class="rotate-3 rounded-2xl shadow-md"
        src="pixels/rhb-coding-age-7.jpg"
        width="380"
        alt="Russ Brooks: Coding Age 7"
        title="Russ Brooks: Coding Age 7 on a TRS-80"
      />
    </div>
  </div>
);

export default MeAbout;
