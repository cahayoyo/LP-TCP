import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Secret sudah tidak dipakai; output server dipertahankan untuk adapter node standalone.
  output: 'server',
  // Gambar responsif: semua <Image> otomatis dapat srcset+sizes, mobile tidak download file desktop.
  image: {
    layout: 'constrained',
  },
  adapter: node({ mode: 'standalone' }),
  server: {
    host: true,
    port: Number(process.env.PORT) || 4321,
  },
  site: 'https://triciptapatriot.com',
});
