import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.201.0/http/http_status.ts";

Deno.serve((c) => {
  const { pathname } = new URL(c.url);

  const [_, base] = pathname.split("/");

  if (base === "vue3-admin-api") {
    return fetch(
      "http://ceshi13.dishait.cn" + pathname.replace(`/${base}`, ""),
      c,
    );
  }

  // forbidden other base
  console.error("Forbidden referrer", base ?? "/");

  return new Response(null, {
    status: Status.Forbidden,
    statusText: STATUS_TEXT[Status.Forbidden],
  });
});
