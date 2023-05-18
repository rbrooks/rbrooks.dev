import { Handlers, Status } from "$fresh/server.ts";
import { SmtpClient } from "smtp";

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SmtpClient();

    const connectConfig: any = {
      hostname: Deno.env.get("SMTP_HOST")!,
      port: +Deno.env.get("SMTP_PORT")!,
      username: Deno.env.get("SMTP_UN")!,
      password: Deno.env.get("SMTP_PW")!,
    };
    await client.connectTLS(connectConfig);

    const payload: { mail: string; message: string } | undefined = await request
      .json();

    if (payload) {
      try {
        await client.send({
          from: payload.mail,
          to: "me@russbrooks.com",
          subject: `RussBrooks.com inquery from ${payload.mail}`,
          content: payload.message,
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
