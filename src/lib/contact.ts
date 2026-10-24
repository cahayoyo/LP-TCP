import postgres from 'postgres';
import { needs } from '../data/site';

let sql: postgres.Sql | undefined;

function db() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL belum di-set');
  return (sql ??= postgres(url, { max: 5 }));
}

let schemaReady: Promise<unknown> | undefined;

// Tabel dibuat otomatis sekali per proses, supaya deploy tidak butuh langkah migrasi manual.
function ensureSchema() {
  return (schemaReady ??= db()`
    create table if not exists contact_messages (
      id         bigint generated always as identity primary key,
      name       text        not null,
      company    text,
      email      text        not null,
      phone      text,
      need       text,
      message    text        not null,
      created_at timestamptz not null default now()
    )`).catch((err) => {
    schemaReady = undefined;
    throw err;
  });
}

const LIMITS = { name: 100, company: 150, email: 254, phone: 40, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: FormDataEntryValue | null, max: number) {
  const text = typeof value === 'string' ? value.trim() : '';
  return text.slice(0, max);
}

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function saveContact(form: FormData): Promise<ContactResult> {
  // Honeypot: field ini tersembunyi untuk manusia, bot biasanya mengisinya.
  if (clean(form.get('website'), 1)) return { ok: true };

  const data = {
    name: clean(form.get('name'), LIMITS.name),
    company: clean(form.get('company'), LIMITS.company),
    email: clean(form.get('email'), LIMITS.email),
    phone: clean(form.get('phone'), LIMITS.phone),
    need: clean(form.get('need'), 100),
    message: clean(form.get('message'), LIMITS.message),
  };

  if (!data.name) return { ok: false, error: 'Nama wajib diisi.' };
  if (!EMAIL_RE.test(data.email)) return { ok: false, error: 'Alamat email tidak valid.' };
  if (data.message.length < 10) return { ok: false, error: 'Pesan terlalu singkat.' };
  if (data.need && !needs.includes(data.need)) delete (data as { need?: string }).need;

  await ensureSchema();
  // shortcut: tanpa rate limit / captcha, cukup honeypot. Tambah rate limit kalau mulai kena spam.
  await db()`
    insert into contact_messages ${db()(data, 'name', 'company', 'email', 'phone', 'need', 'message')}`;

  return { ok: true };
}
