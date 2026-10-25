export const GET = () =>
  new Response('ok', {
    status: 200,
    // no-store: healthcheck harus selalu menembak origin, bukan cache Cloudflare.
    headers: { 'content-type': 'text/plain', 'cache-control': 'no-store' },
  });
