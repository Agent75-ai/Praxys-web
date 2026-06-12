# Praxys — Web profesional bilingüe

Sitio estático listo para GitHub Pages, con estética montaña/glaciar, contenido bilingüe ES/EN y panel Admin en frontend.

## Archivos

- `index.html`: estructura del sitio.
- `styles.css`: diseño visual.
- `main.js`: render bilingüe, edición local, exportación JSON y conexión opcional Supabase.
- `config.js`: usuario, contraseña y configuración de datos.
- `data.json`: contenido editable del sitio.
- `schema.sql`: tabla opcional para Supabase.
- `.nojekyll`: compatibilidad GitHub Pages.
- `assets/`: imágenes de referencia.

## Admin

Usuario: `praxys`

Contraseña: `Praxys2026!`

En modo local, los cambios se guardan en LocalStorage del navegador. Para publicar cambios permanentes en GitHub Pages, exportar `data.json` desde el panel Admin y reemplazar el archivo en el repositorio.

## Supabase opcional

1. Crear proyecto en Supabase.
2. Ejecutar `schema.sql`.
3. Copiar `Project URL` y `anon key` en `config.js`.
4. Cambiar `dataSource` a `supabase`.
5. Cargar el contenido real de `data.json` en el registro `id = main`.

Para producción, conviene usar Supabase Auth y políticas RLS específicas.
