import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { APIRoute } from 'astro';

// PDF di-XOR supaya response tidak mengandung magic byte %PDF —
// download manager (IDM advanced integration) menyadut berdasarkan isi byte,
// bukan cuma URL/content-type. Klien melakukan XOR yang sama untuk decode.
// KEY harus sama dengan yang di Header.astro.
const KEY = 0x5a;

let encoded: Uint8Array | null = null;

const loadFile = async () => {
  // Runtime: dist/client (hasil copy public), dev: folder public.
  for (const p of ['dist/client/pdf/brosur-tcp.pdf', 'public/pdf/brosur-tcp.pdf']) {
    try {
      return await readFile(path.join(process.cwd(), p));
    } catch {
      // coba path berikutnya
    }
  }
  throw new Error('brosur-tcp.pdf not found');
};

const encode = (buf: Buffer) => {
  const out = new Uint8Array(buf.length);
  for (let i = 0; i < buf.length; i++) out[i] = buf[i] ^ KEY;
  return out;
};

export const GET: APIRoute = async () => {
  try {
    encoded ??= encode(await loadFile());
    return new Response(encoded, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'inline',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    console.error('brosur failed:', err);
    return new Response('error', { status: 500 });
  }
};
