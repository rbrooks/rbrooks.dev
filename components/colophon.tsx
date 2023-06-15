import { Translation } from "../utils/types.ts";

const ColophonContent = (data: { translation: Translation["me"] | "en" }) => (
  <div class="flex flex-row">
    <div class="basis-3/5 pr-1.5">
      <h1>Colophon</h1>
      <h2>
        Hosted Free At
      </h2>
      <ul>
        <li>
          <a href="https://deno.com/deploy">Deno Deploy</a>{" "}
          - You even get global distribution to 35 nodes in the free one. No
          latency for my High School buddy in Oz! 🤯
        </li>
      </ul>

      <h2>
        Deno on Fresh
      </h2>

      <p>
        After suffering through all of the classic Scaling problems with
        single-threaded Scripting languages (JavaScript, PHP, Ruby, Python), I
        made a pact with myself to no longer launch anything that doesn't scale.
        Deno wins by a large margin.
      </p>

      <h4>Deno</h4>

      <p>
        <a href="https://deno.com/" title="Deno">Deno</a>{" "}
        is TypeScript runtime written by the Node-creator,{" "}
        <a href="https://en.wikipedia.org/wiki/Ryan_Dahl">Ryan Dahl</a>. He said
        it's what Node should have been out of the gate. Secure, Fast, Scales,
        Standard Lib bundled, etc.
      </p>

      <p>
        At my last 2 jobs, we were sufferig from serious Transpile-time problems
        with our TypeScript bundled via WebPack / Babel. For slower Macs,
        upwards of 2 mins for first-time compile, and 8 seconds for
        Incrementals. Picture that for a sec. Everytime you hit "Save" in your
        IDE, sit and wait 8 seconds, instead of the normal 0.25s. Every dev does
        that hundreds of times per day. It was a total of about 50 mins per Dev
        per Day, sitting waiting. Almost 4 hours/wk staring at your screen
        instead of delivering value. You obviously can't do anything in the
        meantime. Multiply that times the 30 Devs in that Department. Let's say
        devs make an average of $60/hr:
      </p>

      <p>
        $60 * 4 hrs/wk * 52 wks * 30 in the dept = <strong>$312,000/yr</strong>
        {" "}
        dumpster fired.
      </p>

      <p>
        Incredibly costly, and makes for an extremely poor DX (Developer
        Experience). 😡 We rolled out Vite, and this helped significantly, but
        still, you've got this giant, ever-increasing bundle that must go out to
        the browser. Then we rewrote the app to be a SWJS (Single Window), but
        that doesn't reduce your bundle size.
      </p>

      <p>
        One day I thought, "I wonder if this has been sovled with a Runtime, and
        get this tranpiling <strong>madness</strong> behind us forever!"
      </p>

      <p>
        I Google "TypeScript runtime", and up comes "Deno". I immediately
        created a Jira ticket fot us to evaluate it. I never found time to do
        that at my last job, so this site ☝️ is me doing that on a Personal
        level.
      </p>

      <h5>
        Transpiling was a Stopgap to get us to Modern-Language features naitve
        in the browser. That day arrvied 6 years ago.
      </h5>

      <p>
        We were also burning unneccessary cost writing a lot of boilerplate,
        given MicroSoft failed to bundle a Std Lib with TypeScript.
      </p>

      <ul>
        <li>
          <strong>
            Ripping{" "}
            <a href="https://camo.githubusercontent.com/18d52fd52f722431a92bacc0dd93ebb09dab4b76b01fca32a18a437d385dffee/68747470733a2f2f717569636b63686172742e696f2f63686172742f72656e6465722f73662d63333434353037312d653765342d346661392d626561642d363531633466313533636564">
              Fast
            </a>
          </strong>{" "}
          🤯 - Written in Rust. 🦀🚀
        </li>
        <li>
          <strong>Transpiling is Dead.</strong> 🤯 - Let that sink in.
        </li>
        <li>
          <strong>No JavaScript bundle sent to the client.</strong> 🤯
        </li>
        <li>
          <strong>Secure by default.</strong> 🤯
        </li>
        <li>
          <strong>
            <a href="https://deno.land/std">TypeScript Standard Library</a>
          </strong>{" "}
          🤯 - They borrowed Go's very respected one.
        </li>
      </ul>

      <h4>Fresh</h4>

      <p>
        <a href="https://fresh.deno.dev/">Fresh</a> is an{" "}
        <a href="https://deno.com/blog/the-future-of-web-is-on-the-edge">
          Edge-first
        </a>{" "}
        framework that delivers zero JavaScript to the client by default with no
        build step. It’s optimized for speed. Your site will achieve a perfect
        {" "}
        <a href="https://deno.com/blog/ecommerce-with-perfect-lighthouse-score">
          Lighthouse Score
        </a>.
      </p>

      <ul>
        <li>
          <strong>Fullstack Framework for Deno</strong> 🤯 Bundled with:
        </li>
        <li>
          <strong>
            <a href="https://tailwindcss.com/" title="Tailwind">Tailwind CSS</a>
          </strong>{" "}
          🤯
        </li>
        <li>
          <strong>
            <a href="https://preactjs.com/" title="Preact">Preact</a>
          </strong>{" "}
          🤯 - Simplest thing that can work. 3kb
        </li>
        <li>
          <strong>
            <a href="https://deno.land/std">
              TypeScript Standard Library
            </a>
          </strong>{" "}
          🤯
        </li>
      </ul>
    </div>
    <div class="basis-2/5 flex-none pl-1.5">
      <img
        class="rounded shadow-md pb-1.5"
        src="vectors/deno-fresh.svg"
        width="300"
        alt="Deno Fresh"
        title="Fresh"
      />
      <img
        class="rounded shadow-md pb-1.5"
        src="pixels/deno.jpg"
        width="300"
        alt="Deno"
        title="Deno"
      />
      <img
        class="rounded shadow-md pb-1.5"
        src="pixels/rust.png"
        width="300"
        alt="Rust"
        title="Rust"
      />
    </div>
  </div>
);

export default ColophonContent;
