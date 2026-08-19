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
  praxysReplaceDefensiveCopy();
  praxysEnsureVisible();
}
window.PRAXYS.apply = applyContent;

// Reemplazo de formulaciones defensivas por mensajes positivos de valor.
function praxysReplaceDefensiveCopy(){
  const replacements = [
    [
      'Cuando el problema no entra en una sola área',
      'El problema impacta en varias áreas'
    ],
    [
      'When the problem does not fit inside one area',
      'The problem impacts several areas'
    ],
    [
      'No ofrecemos consultoría abstracta. Diseñamos soluciones aplicadas para convertir problemas complejos en decisiones, mecanismos de gestión y herramientas de seguimiento.',
      'Diseñamos soluciones aplicadas para problemas reales de gestión: decisiones complejas, riesgos cruzados, recursos críticos y mecanismos de seguimiento.'
    ],
    [
      'We do not offer abstract consulting. We design applied solutions to turn complex problems into decisions, management mechanisms, and follow-up tools.',
      'We design applied solutions for real management problems: complex decisions, cross-functional risks, critical resources, and follow-up mechanisms.'
    ],
    [
      'Por qué Praxys no opera como una consultora genérica',
      'Qué hace diferente al enfoque Praxys'
    ],
    [
      'Why Praxys does not operate like a generic consulting firm',
      'What makes the Praxys approach different'
    ],
    [
      'Problemas reales, no plantillas',
      'Soluciones ajustadas al contexto'
    ],
    [
      'Real problems, not templates',
      'Context-specific solutions'
    ],
    [
      'NO VENDEMOS, NI IMPLEMENTAMOS ENLATADOS GENÉRICOS:',
      'DISEÑAMOS SOLUCIONES A MEDIDA:'
    ],
    [
      'WE DO NOT SELL OR IMPLEMENT GENERIC OFF-THE-SHELF SOLUTIONS:',
      'WE DESIGN CONTEXT-SPECIFIC SOLUTIONS:'
    ],
    [
      'Sin enlatados genéricos:',
      'Soluciones a medida:'
    ],
    [
      'No vendemos diagnósticos genéricos:',
      'Diseñamos diagnósticos aplicados:'
    ],
    [
      'La consultoría debe dejar capacidad instalada, no dependencia permanente del consultor.',
      'La consultoría deja métodos, criterios y herramientas para que el cliente sostenga mejores decisiones.'
    ],
    [
      'Consulting should leave installed capability, not permanent dependence on the consultant.',
      'Consulting leaves methods, criteria, and tools so the client can sustain better decisions.'
    ],
    [
      'no opera como una consultora genérica',
      'aporta un enfoque aplicado y ajustado al contexto'
    ],
    [
      'does not operate like a generic consulting firm',
      'brings an applied, context-specific approach'
    ]
  ];

  const applyString = (value) => {
    if(typeof value !== 'string') return value;
    let out = value;
    replacements.forEach(([from,to])=>{ out = out.split(from).join(to); });
    return out;
  };

  document.querySelectorAll('[data-es], [data-en], [title], [aria-label], [placeholder]').forEach(el=>{
    ['data-es','data-en','title','aria-label','placeholder'].forEach(attr=>{
      if(el.hasAttribute(attr)){
        const next = applyString(el.getAttribute(attr));
        if(next !== el.getAttribute(attr)) el.setAttribute(attr, next);
      }
    });
  });

  const walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const next = applyString(node.nodeValue);
    if(next !== node.nodeValue) node.nodeValue = next;
  });
}

// Hotfix de visibilidad: las secciones y tarjetas agregadas por JavaScript se insertan
// después del observer de animaciones. Sin esto pueden quedar en opacity:0 por .reveal.
function praxysEnsureVisible(){
  if(!document.getElementById('praxys-visibility-hotfix')){
    const s = document.createElement('style');
    s.id = 'praxys-visibility-hotfix';
    s.textContent = `
      .reveal{opacity:1!important;visibility:visible!important;transform:none!important;}
      .reveal.in{opacity:1!important;visibility:visible!important;transform:none!important;}
      #problemas, #servicios, #cuando, #metodo, #entregables, #quienes, #mision-vision, #valores, #articulos, #contacto{display:block!important;visibility:visible!important;opacity:1!important;}
      #problemas *, #servicios *, #cuando *, #metodo *, #entregables *, #quienes *, #mision-vision *, #valores *, #articulos *, #contacto *{visibility:visible!important;}
      #articles-container, .articles-grid, .papers-grid{display:grid!important;visibility:visible!important;opacity:1!important;}
      #admin-panel, #login-modal{visibility:initial;}
    `;
    document.head.appendChild(s);
  }
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
}

document.addEventListener('DOMContentLoaded', ()=>{ praxysReplaceDefensiveCopy(); praxysEnsureVisible(); });
window.addEventListener('load', ()=>{ praxysReplaceDefensiveCopy(); praxysEnsureVisible(); });
setTimeout(()=>{ praxysReplaceDefensiveCopy(); praxysEnsureVisible(); }, 300);
setTimeout(()=>{ praxysReplaceDefensiveCopy(); praxysEnsureVisible(); }, 1000);
setTimeout(()=>{ praxysReplaceDefensiveCopy(); praxysEnsureVisible(); }, 2500);

try{
  const observer = new MutationObserver(()=>{ praxysReplaceDefensiveCopy(); praxysEnsureVisible(); });
  observer.observe(document.documentElement, {childList:true, subtree:true, characterData:true});
}catch(e){}