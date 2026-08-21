// Carga overrides publicados (content.json) y locales (localStorage), y los aplica.
// Prioridad: cambios locales del admin > content.json publicado > HTML original.
window.PRAXYS = window.PRAXYS || {};
window.PRAXYS.published = { texts:{}, images:{}, articles:null };
window.PRAXYS.local = JSON.parse(localStorage.getItem('praxys_content') || '{"texts":{},"images":{}}');

(async function(){
  try{
    const r = await fetch('content.json?' + Date.now());
    if(r.ok){
      window.PRAXYS.published = Object.assign({texts:{},images:{},articles:null}, await r.json());
    }
  }catch(e){ /* sin content.json aún: usa HTML original */ }
  applyContent();
})();

function praxysLang(){
  return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es';
}

function applyContent(){
  const pub = window.PRAXYS.published, loc = window.PRAXYS.local;
  const lang = praxysLang();

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

  // ARTÍCULOS publicados: si no hay locales, sembramos los publicados.
  if(pub.articles && Array.isArray(pub.articles) && !localStorage.getItem('praxys_articles')){
    localStorage.setItem('praxys_articles', JSON.stringify(pub.articles));
  }
  if(window.reloadArticles) window.reloadArticles();
  praxysRefreshEnhancements();
}
window.PRAXYS.apply = applyContent;

// Reemplazos de copy y formulaciones anteriores.
function praxysReplaceDefensiveCopy(){
  const replacements = [
    ['El problema impacta en varias áreas y la decisión no es evidente','Efectos del riesgo que se propagan entre áreas, recursos y objetivos del negocio'],
    ['Riesgos cruzados, decisiones trabadas y prioridades difíciles de ordenar','Efectos del riesgo que se propagan entre áreas, recursos y objetivos del negocio'],
    ['Cuando los efectos del riesgo se propagan entre áreas, recursos y objetivos del negocio','Efectos del riesgo que se propagan entre áreas, recursos y objetivos del negocio'],
    ['The problem impacts several areas and the decision is not evident','Risk effects propagating across areas, resources, and business objectives'],
    ['Cross-functional risks, blocked decisions, and priorities that are hard to structure','Risk effects propagating across areas, resources, and business objectives'],
    ['When risk effects propagate across areas, resources, and business objectives','Risk effects propagating across areas, resources, and business objectives'],
    ['Qué puede contratar una organización','Qué servicios ofrecemos'],
    ['What an organization can hire','What services we offer'],
    ['Cuando el problema no entra en una sola área','El problema impacta en varias áreas'],
    ['When the problem does not fit inside one area','The problem impacts several areas'],
    ['No ofrecemos consultoría abstracta. Diseñamos soluciones aplicadas para convertir problemas complejos en decisiones, mecanismos de gestión y herramientas de seguimiento.','Diseñamos soluciones aplicadas para problemas reales de gestión: decisiones complejas, riesgos cruzados, recursos críticos y mecanismos de seguimiento.'],
    ['We do not offer abstract consulting. We design applied solutions to turn complex problems into decisions, management mechanisms, and follow-up tools.','We design applied solutions for real management problems: complex decisions, cross-functional risks, critical resources, and follow-up mechanisms.'],
    ['Por qué Praxys no opera como una consultora genérica','Qué hace diferente al enfoque Praxys'],
    ['Why Praxys does not operate like a generic consulting firm','What makes the Praxys approach different'],
    ['Problemas reales, no plantillas','Soluciones ajustadas al contexto'],
    ['Real problems, not templates','Context-specific solutions'],
    ['NO VENDEMOS, NI IMPLEMENTAMOS ENLATADOS GENÉRICOS:','DISEÑAMOS SOLUCIONES A MEDIDA:'],
    ['WE DO NOT SELL OR IMPLEMENT GENERIC OFF-THE-SHELF SOLUTIONS:','WE DESIGN CONTEXT-SPECIFIC SOLUTIONS:'],
    ['Sin enlatados genéricos:','Soluciones a medida:'],
    ['No vendemos diagnósticos genéricos:','Diseñamos diagnósticos aplicados:'],
    ['La consultoría debe dejar capacidad instalada, no dependencia permanente del consultor.','La consultoría deja métodos, criterios y herramientas para que el cliente sostenga mejores decisiones.'],
    ['Consulting should leave installed capability, not permanent dependence on the consultant.','Consulting leaves methods, criteria, and tools so the client can sustain better decisions.'],
    ['no opera como una consultora genérica','aporta un enfoque aplicado y ajustado al contexto'],
    ['does not operate like a generic consulting firm','brings an applied, context-specific approach']
  ];

  const applyString = value => {
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

// Botón + modal para casos de aplicación en "Qué servicios ofrecemos".
function praxysEnhanceServiceCases(){
  praxysEnsureCaseModal();
  const lang = praxysLang();
  const labels = { es:'Ver caso de aplicación', en:'View application case' };

  // Limpia el botón anterior si quedó asociado a "Qué entregamos".
  document.querySelectorAll('#entregables .praxys-case-btn').forEach(btn=>btn.remove());

  document.querySelectorAll('#servicios .praxys-card').forEach(card=>{
    const title = (card.querySelector('h3')?.textContent || '').trim().toLowerCase();
    const isCombinedRiskDiagnosis = title === 'diagnóstico ejecutivo de riesgos combinados' || title === 'executive diagnosis of combined risks';
    if(!isCombinedRiskDiagnosis) return;

    let btn = card.querySelector('.praxys-case-btn');
    if(!btn){
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'praxys-case-btn';
      btn.setAttribute('data-praxys-case', 'combined-risk-diagnosis');
      card.appendChild(btn);
    }
    btn.textContent = labels[lang];
    btn.setAttribute('aria-label', labels[lang] + ': ' + (lang === 'en' ? 'executive diagnosis of combined risks' : 'diagnóstico ejecutivo de riesgos combinados'));
  });
}

function praxysEnsureCaseModal(){
  if(document.getElementById('praxys-case-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'praxys-case-modal';
  modal.className = 'praxys-case-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="praxys-case-backdrop" data-praxys-case-close="1"></div>
    <div class="praxys-case-dialog" role="dialog" aria-modal="true" aria-labelledby="praxys-case-title">
      <button type="button" class="praxys-case-close" data-praxys-case-close="1" aria-label="Cerrar">×</button>
      <div class="praxys-case-content"></div>
    </div>
  `;
  document.body.appendChild(modal);
}

function praxysOpenCaseModal(caseId){
  const modal = document.getElementById('praxys-case-modal');
  if(!modal) return;
  const lang = praxysLang();
  const content = modal.querySelector('.praxys-case-content');

  if(caseId === 'combined-risk-diagnosis'){
    content.innerHTML = lang === 'en' ? `
      <span class="praxys-case-eyebrow">Application case</span>
      <h3 id="praxys-case-title">Executive diagnosis of combined risks</h3>
      <p>Praxys reviews events, processes, decisions, and observable results, and builds a causal map that integrates technical, operational, organizational, and management factors. The deliverable includes an executive report with detailed development, aimed at visualizing how risk effects propagate, which conditions sustain recurrence, and where to intervene first.</p>
      <div class="praxys-case-box"><strong>Useful for:</strong> turning recurring events or fragmented problems into a shared causal reading, with intervention priorities and executive follow-up criteria.</div>
    ` : `
      <span class="praxys-case-eyebrow">Caso de aplicación</span>
      <h3 id="praxys-case-title">Diagnóstico ejecutivo de riesgos combinados</h3>
      <p>Praxys releva eventos, procesos, decisiones y resultados observables, y construye un mapa causal que integra factores técnicos, operativos, organizacionales y de gestión. El entregable incluye un informe ejecutivo con desarrollo pormenorizado, orientado a visualizar cómo se propagan los efectos del riesgo, qué condiciones sostienen la recurrencia y dónde intervenir primero.</p>
      <div class="praxys-case-box"><strong>Sirve para:</strong> transformar eventos recurrentes o problemas fragmentados en una lectura causal común, con prioridades de intervención y criterios de seguimiento ejecutivo.</div>
    `;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('praxys-modal-open');
  modal.querySelector('.praxys-case-close')?.focus();
}

function praxysCloseCaseModal(){
  const modal = document.getElementById('praxys-case-modal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('praxys-modal-open');
}

if(!window.PRAXYS.caseModalBound){
  window.PRAXYS.caseModalBound = true;
  document.addEventListener('click', e=>{
    const caseBtn = e.target.closest('[data-praxys-case]');
    if(caseBtn){
      e.preventDefault();
      praxysOpenCaseModal(caseBtn.getAttribute('data-praxys-case'));
      return;
    }
    if(e.target.closest('[data-praxys-case-close]')){
      e.preventDefault();
      praxysCloseCaseModal();
    }
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape') praxysCloseCaseModal();
  });
}

// Hotfix de visibilidad y estilos de ajustes comerciales.
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
      #problemas .serv-head h2, #problemas h2{font-size:clamp(1.9rem,3.6vw,2.8rem)!important;line-height:1.08!important;letter-spacing:-.01em!important;}
      #problemas .serv-head .eyebrow, #problemas .eyebrow{font-size:2.1rem!important;line-height:1.08!important;letter-spacing:.18em!important;color:#FFE600!important;text-shadow:0 8px 26px rgba(0,0,0,.22)!important;}
      @media(max-width:720px){#problemas .serv-head h2, #problemas h2{font-size:clamp(1.9rem,9vw,2.8rem)!important;line-height:1.08!important;}#problemas .serv-head .eyebrow, #problemas .eyebrow{font-size:1.725rem!important;letter-spacing:.12em!important;color:#FFE600!important;}}
      .praxys-case-btn{margin-top:18px;width:100%;min-height:42px;border:0;border-radius:12px;background:#102033;color:#fff;font-size:.78rem;font-weight:900;text-transform:uppercase;letter-spacing:.05em;cursor:pointer;transition:transform .18s ease,background .18s ease,box-shadow .18s ease;}
      .praxys-case-btn:hover{background:#E8632A;transform:translateY(-1px);box-shadow:0 12px 26px rgba(232,99,42,.18);}
      .praxys-case-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;padding:24px;}
      .praxys-case-modal.open{display:flex;}
      .praxys-case-backdrop{position:absolute;inset:0;background:rgba(7,18,31,.72);backdrop-filter:blur(6px);}
      .praxys-case-dialog{position:relative;width:min(760px,calc(100vw - 36px));max-height:calc(100vh - 48px);overflow:auto;border-radius:26px;background:#fff;color:#102033;box-shadow:0 30px 90px rgba(0,0,0,.35);padding:34px 34px 30px;border:1px solid rgba(255,255,255,.28);}
      .praxys-case-close{position:absolute;top:14px;right:16px;width:38px;height:38px;border:0;border-radius:50%;background:rgba(16,32,51,.08);color:#102033;font-size:1.65rem;line-height:1;cursor:pointer;}
      .praxys-case-close:hover{background:#E8632A;color:#fff;}
      .praxys-case-eyebrow{display:inline-block;margin:0 0 12px;color:#E8632A;font-size:.8rem;font-weight:950;text-transform:uppercase;letter-spacing:.14em;}
      .praxys-case-dialog h3{margin:0 0 16px;font-size:clamp(1.9rem,3.4vw,2.7rem);line-height:1.05;letter-spacing:-.035em;color:#102033;}
      .praxys-case-dialog p{font-size:1.03rem;line-height:1.72;color:#3f4c5e;margin:0 0 18px;}
      .praxys-case-box{margin-top:22px;padding:18px 20px;border-radius:18px;background:rgba(232,99,42,.08);border:1px solid rgba(232,99,42,.20);font-size:1rem;line-height:1.62;color:#102033;}
      .praxys-case-box strong{color:#A9461D;}
      body.praxys-modal-open{overflow:hidden!important;}
      @media(max-width:720px){.praxys-case-dialog{padding:28px 22px 24px;border-radius:22px}.praxys-case-dialog h3{font-size:2rem}.praxys-case-dialog p{font-size:.98rem}.praxys-case-btn{font-size:.74rem;}}
      #admin-panel, #login-modal{visibility:initial;}
    `;
    document.head.appendChild(s);
  }
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
}

function praxysRefreshEnhancements(){
  praxysReplaceDefensiveCopy();
  praxysEnsureVisible();
  praxysEnhanceServiceCases();
}

document.addEventListener('DOMContentLoaded', praxysRefreshEnhancements);
window.addEventListener('load', praxysRefreshEnhancements);
setTimeout(praxysRefreshEnhancements, 300);
setTimeout(praxysRefreshEnhancements, 1000);
setTimeout(praxysRefreshEnhancements, 2500);

try{
  let praxysMutationTimer = null;
  const observer = new MutationObserver(()=>{
    clearTimeout(praxysMutationTimer);
    praxysMutationTimer = setTimeout(praxysRefreshEnhancements, 80);
  });
  observer.observe(document.documentElement, {childList:true, subtree:true, characterData:true});
}catch(e){}