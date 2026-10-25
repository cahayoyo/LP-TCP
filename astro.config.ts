import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Secret sudah tidak dipakai; output server dipertahankan untuk adapter node standalone.
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  server: {
    host: true,
    port: Number(process.env.PORT) || 4321,
  },
  // TODO: isi setelah domain dibeli, dipakai untuk canonical & sitemap nanti.
  // site: 'https://domain-anda.co.id',
});
