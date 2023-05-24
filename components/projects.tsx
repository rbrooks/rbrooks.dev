import { Translation } from "../utils/types.ts";

const Project = (props: {
  link: string;
  domain: string;
  technologies: string;
  from: string;
  to: string;
  matteo?: boolean;
}) => (
  <a href={props.link} rel="noopener" target="_blank">
    <div
      class={`rounded-xl p-0.3 h-full bg-gradient-to-r from-[${props.from}] to-[${props.to}] cursor-pointer transition-transform hover:scale-105`}
    >
      <div class="bg-gray rounded-lg p-2 text-center h-full">
        <h4>{props.domain}</h4>
        <p>{props.technologies}</p>
      </div>
    </div>
  </a>
);

const Projects = (data: { translation: Translation["projects"] }) => (
  <>
    <h3>{data.translation.title}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
      <Project
        link="https://www.trainual.com"
        domain="Trainual.com"
        technologies="Ruby, Rails, PostgreSQL, Redis, React.js (TS), Sidekiq, Elastic Search, GCP, GKE, Ubuntu"
        from="#6a28ea"
        to="#01dbb3"
      />
      <Project
        link="https://www.shoprunner.com"
        domain="ShopRunner.com"
        technologies="Kotlin on Spring, Python, AWS, CentOS"
        from="#008c9f"
        to="#00b397"
      />
      <Project
        link="https://www.revzilla.com"
        domain="Revzilla: Amazon of Motorcycle Gear"
        technologies="Ruby, Rails, PostgreSQL, Redis, Sidekiq, Ubuntu"
        from="#fb4c06"
        to="#000"
      />
      <Project
        link="https://www.telvue.com"
        domain="TelVue"
        technologies="Ruby, Rails, PostgreSQL, Redis, Resque"
        from="#0076c0"
        to="#fff"
      />
      <Project
        link="https://www.safarimontage.com"
        domain="Safari Montage"
        technologies="MS ASP.NET (C#), SQL Server, FreeBSD, PHP"
        from="#006fc2"
        to="#000"
      />
      <Project
        link="https://www.philadelphiaeagles.com"
        domain="Philadelphia Eagles"
        technologies="MS ASP 2.8 (VBS), SQL Server, MS Windows Server"
        from="#fff"
        to="#004c54"
      />
      <Project
        link="https://www.meetme.com"
        domain="MeetMe: Formerly MyYearbook.com"
        technologies="PHP, Python on Tornado, Postgres"
        from="#362549"
        to="#765291"
      />
      <Project
        link="https://www.netreach.com"
        domain="NetReach: (defunct ISP & Consulting)"
        technologies="MS ASP 3.0 (VBS), SQL Server, MS Windows Server"
        from="#195a9b"
        to="#262626"
      />
      <Project
        link="https://wildwoodsnj.com/"
        domain="Wildwood Tourism Hub"
        technologies="HTML, CSS, PhotoShop"
        from="#36c6d2"
        to="#f9cd0c"
      />
      <Project
        link="https://www.aquabeach.com"
        domain="Aqua Beach Resort"
        technologies="HTML, CSS, PhotoShop"
        from="#da7a49"
        to="#649591"
      />
      <Project
        link="https://www.flickr.com/photos/davidartshed/2860123919"
        domain="Wildwood Harley Davidson"
        technologies="HTML, CSS, PhotoShop"
        from="#a44b23"
        to="#49777e"
      />
      <Project
        link="https://www.elcoronado.com"
        domain="El Coronado Resort"
        technologies="HTML, CSS, PhotoShop"
        from="#405dab"
        to="#fedb01"
      />
      <Project
        link="https://www.crusaderresort.com/"
        domain="Crusade Rresort"
        technologies="HTML, CSS, PhotoShop"
        from="#699cd3"
        to="#f16c26"
      />
      <Project
        link="https://www.lotusinn.com/"
        domain="Lotus Inn"
        technologies="HTML, CSS, PhotoShop"
        from="#5fa4d8"
        to="#b17a50"
      />
      <Project
        link="https://www.heartofwildwood.com/"
        domain="Heart of Wildwood Motel"
        technologies="HTML, CSS, PhotoShop"
        from="#ef4c4b"
        to="#4181c3"
      />
    </div>
  </>
);

export default Projects;
