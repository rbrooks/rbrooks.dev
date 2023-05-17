import { Handlers, Status } from "$fresh/server.ts";
import { SMTPClient } from "smtp";
import { generate } from "../../utils/generate.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    console.log("*** SMTP_HOST: " + Deno.env.get("SMTP_HOST"));
    console.log("*** SMTP_PORT: " + Deno.env.get("SMTP_PORT"));
    console.log("*** SMTP_UN: " + Deno.env.get("SMTP_UN"));
    console.log("*** SMTP_PW: " + Deno.env.get("SMTP_PW"));
    console.log("*** SMTP_FROM: " + Deno.env.get("SMTP_FROM"));
    console.log("*** SMTP_TO: " + Deno.env.get("SMTP_TO"));

    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("SMTP_HOST")!,
        port: +Deno.env.get("SMTP_PORT")!,
        tls: true,
        auth: {
          username: Deno.env.get("SMTP_UN")!,
          password: await generate(Deno.env.get("SMTP_PW")!),
        },
      },
    });

    const payload: { mail: string; message: string } | undefined = await request
      .json();
    if (payload) {
      try {
        await client.send({
          from: Deno.env.get("SMTP_FROM")!,
          to: Deno.env.get("SMTP_TO")!,
          subject: `*** ${payload.mail} sent message from russbrooks.com`,
          content: payload.message,
        });
        await client.close();

        return new Response("", { status: Status.OK });
      } catch (e) {
        return new Response("", { status: Status.BadRequest });
      }
    }
    return new Response("", { status: Status.NoContent });
  },
};
