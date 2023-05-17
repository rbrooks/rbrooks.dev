import { Handlers, Status } from "$fresh/server.ts";
import { SmtpClient } from "smtp";
import { generate } from "../../utils/generate.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    // console.log(request);

    const client = new SmtpClient();

    const connectConfig: any = {
      hostname: Deno.env.get("SMTP_HOST")!,
      // port: +Deno.env.get("SMTP_PORT")!,
      // tls: true,
      username: Deno.env.get("SMTP_UN")!,
      password: Deno.env.get("SMTP_PW")!,
    };
    await client.connectTLS(connectConfig);

    // await client.send({
    //   from: Deno.env.get("SMTP_FROM"),
    //   to: Deno.env.get("SMTP_TO"),
    //   subject: "Welcome!",
    //   content: "Hi from Vuelancer!",
    // });

    // await client.close();

    // const res = await;
    // await res.json();

    const payload: { mail: string; message: string } | undefined = await request
      .json();
    if (payload) {
      // try {
      await client.send({
        from: payload.mail,
        to: "me@russbrooks.com",
        subject: "Message from RussBrooks.com",
        content: payload.message,
      });
    }

    await client.close();
    // } catch (e) {
    // return new Response("", { status: Status.BadRequest });
    // }
    // }
    return new Response("", { status: Status.OK });
    // return new Response("", { status: Status.NoContent });

    // const client = new SMTPClient({
    //   connection: {
    //     hostname: "smtp.gmail.com",
    //     port: 587,
    //     tls: true,
    //     auth: {
    //       username: "cbr1000@gmail.com",
    //       password: "nhugedtzkvmrfcqr",
    //     },
    //   },
    // });

    //     const payload: { mail: string; message: string } | undefined = await request
    //       .json();
    //     if (payload) {
    //       try {
    //         await client.send({
    //           from: "cbr1000@gmail.com",
    //           to: "me@russbrooks.com",
    //           subject: `${payload.mail} sent a message from russbrooks.com`,
    //           content: payload.message,
    //         });
    //         await client.close();
    //
    //         return new Response("", { status: Status.OK });
    //       } catch (e) {
    //         return new Response("", { status: Status.BadRequest });
    //       }
    //     }
    //     return new Response("", { status: Status.NoContent });
    // return new Response("", { status: Status.OK });
  },
};
