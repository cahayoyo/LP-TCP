import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Secret dibaca saat runtime (process.env di production), jadi build Docker tidak butuh DATABASE_URL.
  env: {
    schema: {
      DATABASE_URL: envField.string({ context: 'server', access: 'secret' }),
    },
  },
  // Server mode hanya supaya form kontak bisa POST. Halaman tetap di-render sekali
  // per request, tidak ada CMS/database untuk konten.
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  server: {
    host: true,
    port: Number(process.env.PORT) || 4321,
  },
  // TODO: isi setelah domain dibeli, dipakai untuk canonical & sitemap nanti.
  // site: 'https://domain-anda.co.id',
});
