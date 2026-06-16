// Carga overrides publicados (content.json) y locales (localStorage), y los aplica.
// Prioridad: cambios locales del admin > content.json publicado > HTML original.
window.PRAXYS = window.PRAXYS || {};
window.PRAXYS.published = { texts:{}, images:{}, articles:null };
window.PRAXYS.local = JSON.parse(localStorage.getItem('praxys_content') || '{"texts":{},"images":{}}');

(async function(){
  try{
    const r = await fetch('content.json?' + Date.now());
    if(r.ok){ window.PRAXYS.published = Object.assign({texts:{},images:{},articles:null}, await r.json()); }
  }catch(e){ /* sin content.json aún: usa HTML original */ }
  applyContent();
})();

function applyContent(){
  const pub = window.PRAXYS.published, loc = window.PRAXYS.local;
  const lang = localStorage.getItem('selectedLanguage') || 'es';

  // TEXTOS: cada clave guarda {es, en}. Escribimos en data-es/data-en y en el contenido visible.
  document.querySelectorAll('[data-edit]').forEach(el=>{
    const key = el.getAttribute('data-edit');
    const val = (loc.texts && loc.texts[key]) || (pub.texts && pub.texts[key]);
    if(val){
      if(typeof val.es === 'string') el.setAttribute('data-es', val.es);
      if(typeof val.en === 'string') el.setAttribute('data-en', val.en);
      el.innerHTML = el.getAttribute('data-'+lang) || el.innerHTML;
    }
  });

  // IMÁGENES
  document.querySelectorAll('[data-img]').forEach(el=>{
    const key = el.getAttribute('data-img');
    const src = (loc.images && loc.images[key]) || (pub.images && pub.images[key]);
    if(src) el.src = src;
  });

  // ARTÍCULOS publicados: si no hay locales, sembramos los publicados
  if(pub.articles && Array.isArray(pub.articles) && !localStorage.getItem('praxys_articles')){
    localStorage.setItem('praxys_articles', JSON.stringify(pub.articles));
  }
  if(window.reloadArticles) window.reloadArticles();
}
window.PRAXYS.apply = applyContent;
