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

const PRAXYS_SERVICE_CASES = {
  'combined-risk-diagnosis': {
    titles: ['diagnóstico ejecutivo de riesgos combinados','executive diagnosis of combined risks'],
    es: {
      title: 'Diagnóstico ejecutivo de riesgos combinados',
      body: 'Praxys releva eventos, procesos, decisiones y resultados observables, y construye un mapa causal que integra factores técnicos, operativos, organizacionales y de gestión. El entregable incluye un informe ejecutivo con desarrollo pormenorizado, orientado a visualizar cómo se propagan los efectos del riesgo, qué condiciones sostienen la recurrencia y dónde intervenir primero.',
      use: 'transformar eventos recurrentes o problemas fragmentados en una lectura causal común, con prioridades de intervención y criterios de seguimiento ejecutivo.'
    },
    en: {
      title: 'Executive diagnosis of combined risks',
      body: 'PRAXYS reviews events, processes, decisions, and observable results, and builds a causal map that integrates technical, operational, organizational, and management factors. The deliverable includes an executive report with detailed development, aimed at visualizing how risk effects propagate, which conditions sustain recurrence, and where to intervene first.',
      use: 'turning recurring events or fragmented problems into a shared causal reading, with intervention priorities and executive follow-up criteria.'
    }
  },
  'action-resource-prioritization': {
    titles: ['priorización de acciones y recursos','prioritization of actions and resources'],
    es: {
      title: 'Priorización de acciones y recursos',
      body: 'Praxys releva iniciativas, acciones propuestas, restricciones de recursos, criterios de impacto y dependencias entre áreas. A partir de esa evidencia construye una matriz de priorización que ordena alternativas según su efecto sobre continuidad, disponibilidad, seguridad, costos y objetivos de gestión. El entregable incluye criterios explícitos de decisión, secuencia de intervención, responsables y condiciones de implementación.',
      use: 'asignar recursos donde generan mayor efecto, evitar carteras dispersas de acciones y sostener una agenda de intervención con prioridades verificables.'
    },
    en: {
      title: 'Prioritization of actions and resources',
      body: 'PRAXYS reviews initiatives, proposed actions, resource constraints, impact criteria, and dependencies across areas. Based on that evidence, it builds a prioritization matrix that orders alternatives by their effect on continuity, availability, safety, costs, and management objectives. The deliverable includes explicit decision criteria, intervention sequence, owners, and implementation conditions.',
      use: 'allocating resources where they have the greatest effect, avoiding dispersed action portfolios, and sustaining an intervention agenda with verifiable priorities.'
    }
  },
  'decision-scenario-assessment': {
    titles: ['evaluación de escenarios de decisión','decision scenario assessment'],
    es: {
      title: 'Evaluación de escenarios de decisión',
      body: 'Praxys define alternativas de decisión, supuestos, restricciones y consecuencias esperadas. Luego construye escenarios comparables que integran variables técnicas, operativas, organizacionales y económicas. El entregable incluye análisis de trade-offs, sensibilidad frente a restricciones, riesgos residuales y recomendación ejecutiva.',
      use: 'decidir antes de comprometer inversiones, cambios operativos o recursos críticos, haciendo explícitas las consecuencias de cada alternativa.'
    },
    en: {
      title: 'Decision scenario assessment',
      body: 'PRAXYS defines decision alternatives, assumptions, constraints, and expected consequences. It then builds comparable scenarios that integrate technical, operational, organizational, and economic variables. The deliverable includes trade-off analysis, sensitivity to constraints, residual risks, and an executive recommendation.',
      use: 'deciding before committing investments, operational changes, or critical resources, while making the consequences of each alternative explicit.'
    }
  },
  'recurring-events-investigation': {
    titles: ['investigación sistémica de eventos recurrentes','systemic investigation of recurring events'],
    es: {
      title: 'Investigación sistémica de eventos recurrentes',
      body: 'Praxys reconstruye eventos, decisiones, barreras, condiciones organizacionales y patrones de repetición. El análisis diferencia causas inmediatas de condiciones sistémicas que permiten que el evento reaparezca. El entregable incluye línea de tiempo, mapa causal, barreras degradadas, factores organizacionales y acciones de mayor impacto.',
      use: 'pasar de correcciones aisladas a intervenciones sobre las condiciones que sostienen la recurrencia.'
    },
    en: {
      title: 'Systemic investigation of recurring events',
      body: 'PRAXYS reconstructs events, decisions, barriers, organizational conditions, and repetition patterns. The analysis distinguishes immediate causes from systemic conditions that allow the event to reappear. The deliverable includes a timeline, causal map, degraded barriers, organizational factors, and higher-impact actions.',
      use: 'moving from isolated corrections to interventions on the conditions that sustain recurrence.'
    }
  },
  'governance-followup-design': {
    titles: ['diseño de gobernanza y seguimiento','governance and follow-up design'],
    es: {
      title: 'Diseño de gobernanza y seguimiento',
      body: 'Praxys releva cómo se toman, comunican y controlan las decisiones relevantes. A partir de ese diagnóstico diseña un mecanismo de gobernanza con responsables, criterios, tablero ejecutivo, rutinas de revisión y puntos de control. El entregable incluye roles, flujo de información, indicadores, frecuencia de seguimiento y reglas de escalamiento.',
      use: 'convertir una decisión en un proceso gestionable, verificable y sostenido por responsabilidades claras.'
    },
    en: {
      title: 'Governance and follow-up design',
      body: 'PRAXYS reviews how relevant decisions are made, communicated, and controlled. Based on that diagnosis, it designs a governance mechanism with owners, criteria, an executive dashboard, review routines, and control points. The deliverable includes roles, information flow, indicators, follow-up frequency, and escalation rules.',
      use: 'turning a decision into a manageable, verifiable process supported by clear responsibilities.'
    }
  },
  'executive-training-transfer': {
    titles: ['capacitación ejecutiva y transferencia metodológica','executive training and method transfer'],
    es: {
      title: 'Capacitación ejecutiva y transferencia metodológica',
      body: 'Praxys diseña workshops aplicados sobre problemas reales de la organización, utilizando herramientas de análisis causal, priorización, escenarios y seguimiento. El entregable incluye guías de trabajo, ejercicios, plantillas, criterios de análisis y herramientas transferibles al equipo.',
      use: 'instalar capacidad interna y alinear criterios entre equipos técnicos, operativos y gerenciales para sostener mejores decisiones después de la consultoría.'
    },
    en: {
      title: 'Executive training and method transfer',
      body: 'PRAXYS designs applied workshops based on the organization’s real problems, using tools for causal analysis, prioritization, scenarios, and follow-up. The deliverable includes work guides, exercises, templates, analysis criteria, and tools transferred to the team.',
      use: 'installing internal capability and aligning criteria across technical, operational, and managerial teams to sustain better decisions after the consulting engagement.'
    }
  }
};

function praxysFindServiceCaseId(title){
  const normalized = String(title || '').trim().toLowerCase();
  return Object.keys(PRAXYS_SERVICE_CASES).find(id => PRAXYS_SERVICE_CASES[id].titles.includes(normalized));
}

// Botón + modal para casos de aplicación en "Qué servicios ofrecemos".
function praxysEnhanceServiceCases(){
  praxysEnsureCaseModal();
  const lang = praxysLang();
  const labels = { es:'Ver caso de aplicación', en:'View application case' };

  // Limpia el botón anterior si quedó asociado a "Qué entregamos".
  document.querySelectorAll('#entregables .praxys-case-btn').forEach(btn=>btn.remove());

  document.querySelectorAll('#servicios .praxys-card').forEach(card=>{
    const title = card.querySelector('h3')?.textContent || '';
    const caseId = praxysFindServiceCaseId(title);
    if(!caseId) return;

    let btn = card.querySelector('.praxys-case-btn');
    if(!btn){
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'praxys-case-btn';
      card.appendChild(btn);
    }
    btn.setAttribute('data-praxys-case', caseId);
    btn.textContent = labels[lang];
    btn.setAttribute('aria-label', labels[lang] + ': ' + PRAXYS_SERVICE_CASES[caseId][lang].title);
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
  const caseData = PRAXYS_SERVICE_CASES[caseId];
  if(!caseData) return;
  const data = caseData[lang];
  const content = modal.querySelector('.praxys-case-content');

  content.innerHTML = `
    <span class="praxys-case-eyebrow">${lang === 'en' ? 'Application case' : 'Caso de aplicación'}</span>
    <h3 id="praxys-case-title">${data.title}</h3>
    <p>${data.body}</p>
    <div class="praxys-case-box"><strong>${lang === 'en' ? 'Useful for:' : 'Sirve para:'}</strong> ${data.use}</div>
  `;

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
      #problemas.praxys-section{padding-bottom:10px!important;}
      #servicios.praxys-section{padding-top:16px!important;margin-top:0!important;}
      #problemas .praxys-grid{margin-bottom:0!important;}
      #servicios .serv-head{margin-top:0!important;margin-bottom:22px!important;}
      #problemas .serv-head h2, #problemas h2{font-size:clamp(1.9rem,3.6vw,2.8rem)!important;line-height:1.08!important;letter-spacing:-.01em!important;}
      #problemas .serv-head .eyebrow, #problemas .eyebrow{font-size:2.1rem!important;line-height:1.08!important;letter-spacing:.18em!important;color:#FFE600!important;text-shadow:0 8px 26px rgba(0,0,0,.22)!important;}
      @media(max-width:720px){#problemas.praxys-section{padding-bottom:8px!important;}#servicios.praxys-section{padding-top:12px!important;}#problemas .serv-head h2, #problemas h2{font-size:clamp(1.9rem,9vw,2.8rem)!important;line-height:1.08!important;}#problemas .serv-head .eyebrow, #problemas .eyebrow{font-size:1.725rem!important;letter-spacing:.12em!important;color:#FFE600!important;}}
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