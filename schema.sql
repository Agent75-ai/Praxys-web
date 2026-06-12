-- Supabase opcional para persistencia remota.
-- El template funciona en GitHub Pages con data.json/localStorage.
create table if not exists site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz default now()
);
insert into site_content (id, content) values ('praxys-main', '{}'::jsonb)
on conflict (id) do nothing;
