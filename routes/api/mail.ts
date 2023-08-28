import { Handlers, Status } from "$fresh/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SmtpClient();
    const { SMTP_HOST, SMTP_PORT, SMTP_UN, SMTP_PW, SMTP_TO } = Deno.env.toObject();

    const connectConfig: any = {
      hostname: SMTP_HOST,
      port: +SMTP_PORT,
      username: SMTP_UN,
      password: SMTP_PW,
    };

    await client.connectTLS(connectConfig);

    const payload: { mail: string; message: string } | undefined = await request
      .json();

    if (payload) {
      try {
        await client.send({
          from: payload.mail,
          to: SMTP_TO,
          subject: `RussBrooks.com inquery from ${payload.mail}`,
          content: `${payload.message}\n\n---\nEmail them back at ${payload.mail}`
        });
        await client.close();

        return new Response("", { status: Status.OK });
      } catch (e) {
        return new Response(`Error: ${e}`, { status: Status.BadRequest });
      }
    } else {
      return new Response("Missing Payload", { status: Status.NoContent });
    }
  },
};


// const client = new SmtpClient();

// const connectConfig: any = {
//   hostname: "smtp.gmail.com",
//   port: 465,
//   username: "me@russbrooks.com",
//   password: "5up3rCr055Trg3o",
// };

// await client.connectTLS(connectConfig);

// await client.send({
//   from: "me@russbrooks.com",
//   to: "cbr1000@gmail.com",
//   subject: "Welcome!",
//   content: "Hi from Vuelancer!",
// });

