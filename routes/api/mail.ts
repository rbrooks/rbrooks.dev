import { Handlers, Status } from "$fresh/server.ts";
import { SMTPClient } from "smtp";
import { generate } from "../../utils/generate.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    const { SMTP_HOST, SMTP_PORT, SMTP_UN, SMTP_PW, SMTP_FROM, SMTP_TO } = Deno
      .env.toObject();
    console.log("*** SMTP_HOST: " + SMTP_HOST);
    console.log("*** SMTP_PORT: " + SMTP_PORT);
    console.log("*** SMTP_UN: " + SMTP_UN);
    console.log("*** SMTP_PW: " + SMTP_PW);
    console.log("*** SMTP_FROM: " + SMTP_FROM);
    console.log("*** SMTP_TO: " + SMTP_TO);

    console.log("*** SMTP_HOST: " + Deno.env.get("SMTP_HOST"));
    console.log("*** SMTP_PORT: " + Deno.env.get("SMTP_PORT"));
    console.log("*** SMTP_UN: " + Deno.env.get("SMTP_UN"));
    console.log("*** SMTP_PW: " + Deno.env.get("SMTP_PW"));
    console.log("*** SMTP_FROM: " + Deno.env.get("SMTP_FROM"));
    console.log("*** SMTP_TO: " + Deno.env.get("SMTP_TO"));

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 587,
        tls: true,
        auth: {
          username: "cbr1000@gmail.com",
          password: "nhugedtzkvmrfcqr",
        },
      },
    });

    const payload: { mail: string; message: string } | undefined = await request
      .json();
    if (payload) {
      try {
        await client.send({
          from: "cbr1000@gmail.com",
          to: "me@russbrooks.com",
          subject: `${payload.mail} sent a message from russbrooks.com`,
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
