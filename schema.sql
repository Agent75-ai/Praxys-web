-- Supabase schema opcional para edición persistente del contenido
create table if not exists public.site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz default now()
);

insert into public.site_content (id, content)
values ('main', '{}'::jsonb)
on conflict (id) do nothing;

-- Política simple de lectura pública. Para producción, agregar autenticación real de Supabase.
alter table public.site_content enable row level security;

drop policy if exists "Public read content" on public.site_content;
create policy "Public read content"
on public.site_content for select
using (true);

-- Para permitir edición desde frontend con anon key, activar bajo responsabilidad.
-- Recomendado: usar Supabase Auth y una policy por usuario autenticado.
-- create policy "Authenticated update content"
-- on public.site_content for update
-- using (auth.role() = 'authenticated')
-- with check (auth.role() = 'authenticated');
