create table if not exists contact_messages (
  id         bigint generated always as identity primary key,
  name       text        not null,
  company    text,
  email      text        not null,
  phone      text,
  need       text,
  message    text        not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on contact_messages (created_at desc);
