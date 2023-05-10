import { MiddlewareHandlerContext } from "$fresh/server.ts";

import SecurityHeaders from "../utils/securityHeaders.ts";
import { State } from "../utils/types.ts";

export const handler = [
  async function setSecurityHeaders(
    _req: Request,
    ctx: MiddlewareHandlerContext<State>,
  ) {
    const resp = await ctx.next();
    SecurityHeaders.map((header) => {
      resp.headers.set(header.key, header.value);
    });
    return resp;
  },
];
