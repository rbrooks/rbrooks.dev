import { Translation } from "../utils/types.ts";

const Cert = (props: { title: string; date: string; text?: string }) => (
  <div>
    <div class="flex justify-between md:flex-col">
      <h4 class="md:order-2">{props.title}</h4>
      <p class="md:order-1 md:mb-0.2">{props.date}</p>
    </div>
    {props.text && <p class="whitespace-pre-wrap">{props.text}</p>}
  </div>
);

const Certs = (data: { translation: Translation["education"] }) => (
  <>
    <h3>{data.translation.title}</h3>
    <div class="space-y-3 lg:space-y-2">
      {data.translation.milestones.map((milestone) => <Cert {...milestone} />)}
    </div>
  </>
);

export default Certs;
