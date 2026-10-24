# Landing Page — PT. Tri Cipta Patriot

Astro 7 (SSR) + Node 24 + Postgres. Satu halaman landing + form kontak yang disimpan ke database.

## Struktur

```
src/
  data/site.ts        <- SEMUA konten hardcode di sini (teks, layanan, proyek, kontak)
  lib/contact.ts      <- validasi + simpan pesan ke Postgres
  pages/index.astro   <- halaman utama + handler POST form
  pages/api/health.ts <- healthcheck untuk Dokploy
  layouts/ components/ styles/
public/img/           <- foto/ilustrasi proyek
db/schema.sql         <- skema tabel (dibuat otomatis juga saat runtime)
```

## Development

```bash
cp .env.example .env      # isi DATABASE_URL
npm install
npm run dev               # http://localhost:4321
```

Butuh Postgres lokal. Kalau pakai Docker:

```bash
docker run -d --name tcp-pg -e POSTGRES_PASSWORD=dev -e POSTGRES_DB=tcp -p 5432:5432 postgres:17-alpine
# DATABASE_URL=postgres://postgres:dev@localhost:5432/tcp
```

Tabel `contact_messages` dibuat otomatis saat pesan pertama masuk. Untuk membuat manual: `psql "$DATABASE_URL" -f db/schema.sql`.

## Deploy di Dokploy

1. **Postgres**: Add Service → Database → PostgreSQL. Catat user, password, database.
2. **Application**: source repo, Build Type = **Dockerfile**, port **4321**.
3. Environment variable:
   ```
   DATABASE_URL=postgres://user:password@<nama-service-postgres>:5432/<database>
   ```
   Nama service Postgres dipakai sebagai host di network internal Dokploy. Jangan expose port DB ke publik.
4. Domain: tambahkan di tab Domains, Dokploy yang mengurus TLS.
5. Healthcheck path: `/api/health`.

Build lokal: `docker build -t lp-tcp .` lalu `docker run -p 4321:4321 -e DATABASE_URL=... lp-tcp`.

## Sebelum go-live

- [ ] Ganti email, telepon, alamat di `src/data/site.ts` (sekarang masih placeholder)
- [ ] Ganti ilustrasi `public/img/proyek-1.svg` dst. dengan foto asli + update `image`/`alt`/`meta` di `site.ts`
- [ ] Isi `site` di `astro.config.mjs` setelah domain dibeli (untuk canonical/OG)
- [ ] Ganti copy proyek di `site.ts` dengan data asli
- [ ] `git init` + commit pertama

## Batasan yang diketahui

- Tanpa rate limit / captcha. Spam dicegah hanya dengan honeypot field (`website`). Tambah rate limit kalau mulai kena spam.
- Tanpa CSRF token. Form hanya menerima POST form-urlencoded ke origin yang sama; risiko rendah untuk form publik tanpa aksi sensitif.
- Image Docker ~436MB karena runtime masih butuh paket `astro`. Bisa dikecilkan nanti dengan bundling terpisah kalau perlu.
- Konten di-hardcode. Kalau mau edit tanpa deploy ulang, perlu CMS.
