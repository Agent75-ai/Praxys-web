// Praxys Web — capa final de diseño comercial
// Objetivo: menos texto visible, más fotos identificatorias y detalle bajo demanda.
window.PRAXYS = window.PRAXYS || {};
window.PRAXYS.published = { texts:{}, images:{}, articles:null };
try { window.PRAXYS.local = JSON.parse(localStorage.getItem('praxys_content') || '{"texts":{},"images":{}}'); } catch(e) { window.PRAXYS.local = {texts:{},images:{}}; }

const PRAXYS_WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20ejecutiva%20sobre%20un%20problema%20que%20impacta%20varias%20%C3%A1reas%2C%20recursos%20u%20objetivos%20del%20negocio.';

function praxysLang(){ return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es'; }
function praxysEsc(s){ return String(s || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function praxysNorm(s){ return String(s || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }

(async function(){
  try{
    const r = await fetch('content.json?' + Date.now());
    if(r.ok) window.PRAXYS.published = Object.assign({texts:{},images:{},articles:null}, await r.json());
  }catch(e){}
  praxysApplyContent();
})();

function praxysApplyContent(){
  const pub = window.PRAXYS.published;
  const loc = window.PRAXYS.local;
  const lang = praxysLang();

  document.querySelectorAll('[data-edit]').forEach(el=>{
    const key = el.getAttribute('data-edit');
    const val = (loc.texts && loc.texts[key]) || (pub.texts && pub.texts[key]);
    if(val){
      if(typeof val.es === 'string') el.setAttribute('data-es', val.es);
      if(typeof val.en === 'string') el.setAttribute('data-en', val.en);
      el.innerHTML = el.getAttribute('data-'+lang) || el.innerHTML;
    }
  });

  document.querySelectorAll('[data-img]').forEach(el=>{
    const key = el.getAttribute('data-img');
    const src = (loc.images && loc.images[key]) || (pub.images && pub.images[key]);
    if(src) el.src = src;
  });

  if(pub.articles && Array.isArray(pub.articles) && !localStorage.getItem('praxys_articles')){
    localStorage.setItem('praxys_articles', JSON.stringify(pub.articles));
  }
  if(window.reloadArticles) window.reloadArticles();
  praxysRefreshSmartDesign();
}
window.PRAXYS.apply = praxysApplyContent;
window.PRAXYS.refresh = praxysRefreshSmartDesign;

const SERVICES = {
  'combined-risk-diagnosis': {
    photo: 0,
    es:{title:'Diagnóstico ejecutivo de riesgos combinados', line:'Ordena causas, dependencias y efectos cuando el problema cruza áreas.', receive:'Mapa causal, prioridades de intervención y criterios de seguimiento.'},
    en:{title:'Executive diagnosis of combined risks', line:'Structures causes, dependencies, and effects when the problem crosses areas.', receive:'Causal map, intervention priorities, and follow-up criteria.'}
  },
  'action-resource-prioritization': {
    photo: 1,
    es:{title:'Priorización de acciones y recursos', line:'Convierte carteras extensas en una secuencia ejecutable con recursos limitados.', receive:'Matriz de priorización, responsables y condiciones de implementación.'},
    en:{title:'Prioritization of actions and resources', line:'Turns extensive action portfolios into an executable sequence under limited resources.', receive:'Prioritization matrix, owners, and implementation conditions.'}
  },
  'decision-scenario-assessment': {
    photo: 2,
    es:{title:'Evaluación de escenarios de decisión', line:'Compara alternativas antes de comprometer inversión, recursos o cambios operativos.', receive:'Escenarios comparados, trade-offs, riesgos residuales y recomendación.'},
    en:{title:'Decision scenario assessment', line:'Compares alternatives before committing investment, resources, or operational changes.', receive:'Compared scenarios, trade-offs, residual risks, and recommendation.'}
  },
  'recurring-events-investigation': {
    photo: 3,
    es:{title:'Investigación sistémica de eventos recurrentes', line:'Identifica por qué fallas o incidentes vuelven aunque existan acciones correctivas.', receive:'Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.'},
    en:{title:'Systemic investigation of recurring events', line:'Identifies why failures or incidents reappear despite corrective actions.', receive:'Timeline, degraded barriers, causal map, and higher-impact actions.'}
  },
  'governance-followup-design': {
    photo: 4,
    es:{title:'Diseño de gobernanza y seguimiento', line:'Hace que decisiones aprobadas tengan responsables, indicadores y reglas de escalamiento.', receive:'Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.'},
    en:{title:'Governance and follow-up design', line:'Gives approved decisions owners, indicators, and escalation rules.', receive:'Executive dashboard, review routine, roles, and escalation rules.'}
  },
  'executive-training-transfer': {
    photo: 5,
    es:{title:'Capacitación ejecutiva y transferencia metodológica', line:'Instala criterios comunes para analizar problemas reales y decidir entre áreas.', receive:'Workshops aplicados, plantillas y herramientas transferibles.'},
    en:{title:'Executive training and method transfer', line:'Installs shared criteria to analyze real problems and decide across areas.', receive:'Applied workshops, templates, and transferable tools.'}
  }
};

const CASES = {
  'combined-risk-diagnosis': {
    service:'combined-risk-diagnosis', photo:0,
    es:{label:'Caso 01', title:'El problema se repite y cada área explica una causa distinta', situation:'Cada área interpreta el problema desde su propia evidencia, responsabilidades y restricciones.', decision:'Construir una lectura común, acordar dónde intervenir primero y evitar acciones inconexas.', work:'Praxys reconstruye eventos, datos, decisiones previas, restricciones y criterios de cada área. Luego integra esa evidencia en un mapa causal para distinguir causas inmediatas, condiciones sistémicas y puntos de intervención.', deliver:['Mapa causal','Dependencias críticas','Puntos de intervención','Prioridades'], use:'Pasar de explicaciones parciales a una decisión compartida y controlable.'},
    en:{label:'Case 01', title:'The problem keeps recurring and each area explains a different cause', situation:'Each area interprets the problem from its own evidence, responsibilities, and constraints.', decision:'Build a shared reading, agree where to intervene first, and avoid disconnected actions.', work:'Praxys reconstructs events, data, previous decisions, constraints, and the criteria used by each area. It then integrates that evidence into a causal map to distinguish immediate causes, systemic conditions, and intervention points.', deliver:['Causal map','Critical dependencies','Intervention points','Priorities'], use:'Move from partial explanations to a shared and controllable decision.'}
  },
  'action-resource-prioritization': {
    service:'action-resource-prioritization', photo:1,
    es:{label:'Caso 02', title:'Hay demasiadas acciones abiertas y poca capacidad para ejecutarlas', situation:'Las acciones compiten por las mismas personas, presupuesto, tiempo y capacidad de gestión.', decision:'Ordenar qué ejecutar primero, qué agrupar, qué postergar y qué riesgo aceptar temporalmente.', work:'Praxys releva acciones, restricciones, impacto esperado, dependencias y responsables. Después construye una matriz de priorización con criterios explícitos y una secuencia realista de implementación.', deliver:['Matriz de priorización','Secuencia ejecutable','Responsables','Criterios'], use:'Concentrar recursos donde generan mayor reducción de riesgo o recuperación de desempeño.'},
    en:{label:'Case 02', title:'Too many actions are open and execution capacity is limited', situation:'Actions compete for the same people, budget, time, and management capacity.', decision:'Decide what goes first, what can be grouped, what waits, and which risks are temporarily accepted.', work:'Praxys reviews actions, constraints, expected impact, dependencies, and owners. It then builds a prioritization matrix with explicit criteria and a realistic implementation sequence.', deliver:['Prioritization matrix','Executable sequence','Owners','Criteria'], use:'Focus resources where they most reduce risk or recover performance.'}
  },
  'decision-scenario-assessment': {
    service:'decision-scenario-assessment', photo:2,
    es:{label:'Caso 03', title:'Hay que invertir, pero no están claras las consecuencias', situation:'La dirección debe comprometer recursos sin una comparación suficiente de impactos y riesgos residuales.', decision:'Comparar alternativas con los mismos criterios y elegir una opción defendible.', work:'Praxys define escenarios comparables, explicita supuestos y analiza consecuencias sobre continuidad, disponibilidad, costos, riesgo residual y capacidad de seguimiento.', deliver:['Escenarios comparados','Trade-offs','Supuestos críticos','Recomendación'], use:'Decidir con trazabilidad, no por urgencia ni por una lectura parcial.'},
    en:{label:'Case 03', title:'Investment is needed, but the consequences are not clear', situation:'Leadership must commit resources without a sufficient comparison of impacts and residual risks.', decision:'Compare alternatives with the same criteria and choose a defensible option.', work:'Praxys defines comparable scenarios, makes assumptions explicit, and analyzes consequences on continuity, availability, costs, residual risk, and follow-up capability.', deliver:['Compared scenarios','Trade-offs','Critical assumptions','Recommendation'], use:'Decide with traceability, not urgency pressure or a partial reading.'}
  },
  'recurring-events-investigation': {
    service:'recurring-events-investigation', photo:3,
    es:{label:'Caso 04', title:'Las acciones se cierran, pero los incidentes vuelven', situation:'Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.', decision:'Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto.', work:'Praxys reconstruye la secuencia de eventos, decisiones, barreras, señales, presiones, demoras y responsabilidades. El análisis separa causas inmediatas de condiciones sistémicas.', deliver:['Línea de tiempo','Barreras degradadas','Mapa causal','Acciones de impacto'], use:'Dejar de corregir síntomas aislados y actuar sobre las condiciones que reproducen el evento.'},
    en:{label:'Case 04', title:'Actions are closed, but incidents keep coming back', situation:'Reports show closed events, but the pattern reappears in real operation.', decision:'Determine which conditions sustain recurrence and which intervention has the highest effect.', work:'Praxys reconstructs event sequences, decisions, barriers, signals, pressures, delays, and responsibilities. The analysis separates immediate causes from systemic conditions.', deliver:['Timeline','Degraded barriers','Causal map','Impact actions'], use:'Stop correcting isolated symptoms and act on the conditions that reproduce the event.'}
  },
  'governance-followup-design': {
    service:'governance-followup-design', photo:4,
    es:{label:'Caso 05', title:'La decisión está aprobada, pero el seguimiento se diluye entre áreas', situation:'La ejecución queda repartida sin suficiente claridad sobre responsabilidades, indicadores y escalamiento.', decision:'Definir cómo se gobierna la decisión y cuándo deben escalarse los desvíos.', work:'Praxys releva circuitos de decisión, reuniones, reportes, roles e indicadores. Luego diseña un mecanismo de seguimiento con tablero, frecuencia de revisión y reglas de escalamiento.', deliver:['Modelo de gobernanza','Tablero ejecutivo','Roles','Reglas de escalamiento'], use:'Convertir una decisión aprobada en un proceso gestionable y verificable.'},
    en:{label:'Case 05', title:'The decision is approved, but follow-up dilutes across areas', situation:'Execution is distributed without enough clarity on responsibilities, indicators, and escalation.', decision:'Define how the decision is governed and when deviations must be escalated.', work:'Praxys reviews decision circuits, meetings, reports, roles, and indicators. It then designs a follow-up mechanism with dashboard, review frequency, and escalation rules.', deliver:['Governance model','Executive dashboard','Roles','Escalation rules'], use:'Turn an approved decision into a manageable and verifiable process.'}
  },
  'executive-training-transfer': {
    service:'executive-training-transfer', photo:5,
    es:{label:'Caso 06', title:'Los equipos analizan el mismo problema con criterios distintos', situation:'Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.', decision:'Instalar una forma común de analizar, priorizar y sostener decisiones.', work:'Praxys diseña workshops sobre casos reales de la organización. Se trabajan mapas causales, priorización, escenarios, roles de decisión y rutinas de seguimiento.', deliver:['Workshops aplicados','Guías','Plantillas','Herramientas transferibles'], use:'Alinear criterios y dejar capacidad instalada para problemas futuros.'},
    en:{label:'Case 06', title:'Teams analyze the same problem with different criteria', situation:'Technical areas, operations, and management discuss with different language and criteria.', decision:'Install a shared way to analyze, prioritize, and sustain decisions.', work:'Praxys designs workshops based on the organization’s real cases. Teams work on causal maps, prioritization, scenarios, decision roles, and follow-up routines.', deliver:['Applied workshops','Guides','Templates','Transferable tools'], use:'Align criteria and leave installed capability for future problems.'}
  }
};

const PROBLEMS = {
  es:[
    {photo:0, title:'El riesgo se propaga entre áreas', text:'Un cambio o falla local termina afectando recursos, continuidad, costos o decisiones de dirección.'},
    {photo:1, title:'Hay prioridades que compiten por los mismos recursos', text:'Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.'},
    {photo:3, title:'Los problemas vuelven aunque se hayan cerrado acciones', text:'Las soluciones puntuales no modifican las condiciones que reproducen el patrón.'}
  ],
  en:[
    {photo:0, title:'Risk propagates across areas', text:'A local change or failure ends up affecting resources, continuity, costs, or leadership decisions.'},
    {photo:1, title:'Priorities compete for the same resources', text:'Everything seems important, but not everything can be executed at the same time or with the same capacity.'},
    {photo:3, title:'Problems return after actions are closed', text:'Local fixes do not change the conditions that reproduce the pattern.'}
  ]
};

function serviceIds(){ return Object.keys(SERVICES); }
function caseIds(){ return Object.keys(CASES); }

function neutralizeLegacyLayers(){
  ['praxysSimplifyCommercialRoute','praxysCompactServiceCards','praxysPrepareDetailedCases','praxysEnsureCaseModal','praxysOpenDetailedCase','praxysCloseDetailedCase'].forEach(name=>{
    try { window[name] = function(){}; } catch(e) {}
  });
}

function collectPhotoSources(){
  const existing = window.PRAXYS.photoSources || [];
  const imgs = Array.from(document.querySelectorAll('#problemas img,#casos-concretos img,.hero-media img,.about-fig img,img[data-praxys-photo]'))
    .map(img => img.currentSrc || img.src)
    .filter(src => src && !/logo|svg\+xml/.test(src) && src.length > 80);
  const merged = existing.concat(imgs).filter((src,i,a)=>a.indexOf(src)===i);
  if(merged.length) window.PRAXYS.photoSources = merged.slice(0,12);
  return window.PRAXYS.photoSources || [];
}

function photoMarkup(index, alt){
  const sources = collectPhotoSources();
  const src = sources.length ? sources[index % sources.length] : '';
  if(src){
    return `<figure class="px-photo"><img data-praxys-photo="1" src="${src}" alt="${praxysEsc(alt || 'Praxys')}" loading="lazy"></figure>`;
  }
  return `<figure class="px-photo px-photo-fallback" aria-label="${praxysEsc(alt || 'Praxys')}"><span></span></figure>`;
}

function praxysRefreshSmartDesign(){
  neutralizeLegacyLayers();
  collectPhotoSources();
  praxysEnsureSmartStyles();
  praxysHeroCopy();
  renderProblems();
  renderServices();
  renderCTA();
  renderCases();
  renderMethod();
  compactPapers();
  bindSmartUX();
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
}

document.addEventListener('DOMContentLoaded', praxysRefreshSmartDesign);
window.addEventListener('load', praxysRefreshSmartDesign);
document.addEventListener('praxys:lang', () => setTimeout(praxysRefreshSmartDesign, 50));
[300, 900, 1800, 3200, 5200].forEach(t => setTimeout(praxysRefreshSmartDesign, t));

function praxysHeroCopy(){
  const lang = praxysLang();
  const h1 = document.querySelector('.hero h1,[data-edit="hero-title"]');
  const sub = document.querySelector('.hero-sub,[data-edit="hero-subtitle"]');
  if(h1){
    h1.setAttribute('data-es','Decisiones ejecutivas para problemas que cruzan áreas');
    h1.setAttribute('data-en','Executive decisions for problems that cross areas');
    h1.textContent = h1.getAttribute('data-'+lang) || h1.textContent;
  }
  if(sub){
    sub.setAttribute('data-es','Praxys ordena evidencia, modela relaciones, prioriza alternativas y ayuda a sostener decisiones en sistemas complejos.');
    sub.setAttribute('data-en','Praxys structures evidence, models relationships, prioritizes alternatives, and helps sustain decisions in complex systems.');
    sub.textContent = sub.getAttribute('data-'+lang) || sub.textContent;
  }
}

function renderProblems(){
  const sec = document.getElementById('problemas');
  const grid = sec && sec.querySelector('.praxys-grid');
  if(!grid) return;
  const lang = praxysLang();
  sec.classList.add('px-section','px-problems');
  const h2 = sec.querySelector('.serv-head h2,h2');
  const lead = sec.querySelector('.praxys-lead,.serv-head p');
  if(h2) h2.textContent = lang === 'en' ? 'Problems that block management decisions' : 'Problemas que traban decisiones de gestión';
  if(lead) lead.textContent = lang === 'en' ? 'A first layer of recurring situations where evidence, areas, resources, and follow-up are misaligned.' : 'Una primera capa de situaciones recurrentes donde evidencia, áreas, recursos y seguimiento quedan desalineados.';
  grid.innerHTML = PROBLEMS[lang].map((p,i)=>`
    <article class="praxys-card px-problem-card">
      ${photoMarkup(p.photo, p.title)}
      <div class="px-card-body"><span class="px-kicker">${String(i+1).padStart(2,'0')}</span><h3>${praxysEsc(p.title)}</h3><p>${praxysEsc(p.text)}</p></div>
    </article>`).join('');
}

function renderServices(){
  const sec = document.getElementById('servicios');
  const grid = sec && sec.querySelector('.praxys-grid');
  if(!grid) return;
  const lang = praxysLang();
  sec.classList.add('px-section','px-services');
  const h2 = sec.querySelector('.serv-head h2,h2');
  const lead = sec.querySelector('.praxys-lead,.serv-head p');
  if(h2) h2.textContent = lang === 'en' ? 'Services designed around decisions' : 'Servicios diseñados alrededor de decisiones';
  if(lead) lead.textContent = lang === 'en' ? 'Each service is a compact intervention with a concrete executive output.' : 'Cada servicio es una intervención acotada con un resultado ejecutivo concreto.';
  grid.classList.add('px-service-grid');
  grid.innerHTML = serviceIds().map(id=>{
    const s = SERVICES[id][lang];
    return `<article class="praxys-card px-service-card" data-service="${id}">
      ${photoMarkup(SERVICES[id].photo, s.title)}
      <div class="px-card-body"><h3>${praxysEsc(s.title)}</h3><p>${praxysEsc(s.line)}</p>
      <div class="px-receive"><strong>${lang === 'en' ? 'Leadership receives' : 'La dirección recibe'}</strong><span>${praxysEsc(s.receive)}</span></div>
      <button type="button" class="px-detail-btn" data-open-service="${id}">${lang === 'en' ? 'View service detail' : 'Ver detalle del servicio'}</button></div>
    </article>`;
  }).join('');
}

function renderCTA(){
  const lang = praxysLang();
  const services = document.getElementById('servicios');
  if(!services) return;
  let sec = document.getElementById('praxys-mid-cta');
  if(!sec){ sec = document.createElement('section'); sec.id = 'praxys-mid-cta'; services.insertAdjacentElement('afterend', sec); }
  sec.className = 'px-mid-cta reveal in';
  sec.innerHTML = lang === 'en'
    ? `<div class="wrap px-mid-inner"><div><span>Executive conversation</span><h2>Do you have a decision blocked between areas?</h2><p>In 30 minutes we can identify the decision, involved areas, and the most useful deliverable.</p></div><a href="${PRAXYS_WHATSAPP}" target="_blank" rel="noopener">Schedule conversation</a></div>`
    : `<div class="wrap px-mid-inner"><div><span>Conversación ejecutiva</span><h2>¿Tenés una decisión trabada entre áreas?</h2><p>En 30 minutos identificamos la decisión pendiente, las áreas involucradas y el entregable más útil.</p></div><a href="${PRAXYS_WHATSAPP}" target="_blank" rel="noopener">Agendar conversación</a></div>`;
}

function renderCases(){
  const lang = praxysLang();
  const services = document.getElementById('servicios');
  if(!services) return;
  let sec = document.getElementById('casos-concretos');
  if(!sec){
    sec = document.createElement('section');
    sec.id = 'casos-concretos';
    (document.getElementById('praxys-mid-cta') || services).insertAdjacentElement('afterend', sec);
  }
  sec.className = 'praxys-section px-section px-cases reveal in';
  sec.innerHTML = `<div class="wrap"><div class="serv-head reveal in"><span class="eyebrow">${lang === 'en' ? 'Concrete cases' : 'Casos concretos'}</span><h2>${lang === 'en' ? 'Problems where Praxys helps teams decide and move forward' : 'Problemas donde Praxys ayuda a decidir y avanzar'}</h2><p class="praxys-lead">${lang === 'en' ? 'Short examples first. The full rationale, deliverables, and work sequence open only when needed.' : 'Primero, ejemplos breves. El fundamento, los entregables y la secuencia de trabajo se abren solo cuando hace falta.'}</p></div><div class="px-cases-grid">${caseIds().map(id=>{
    const c = CASES[id][lang];
    return `<article id="case-${id}" class="px-case-card" tabindex="-1">
      ${photoMarkup(CASES[id].photo, c.title)}
      <div class="px-case-content"><span class="px-case-label">${praxysEsc(c.label)}</span><h3>${praxysEsc(c.title)}</h3>
      <div class="px-case-mini"><p><strong>${lang === 'en' ? 'Situation' : 'Situación'}</strong>${praxysEsc(c.situation)}</p><p><strong>${lang === 'en' ? 'Decision' : 'Decisión'}</strong>${praxysEsc(c.decision)}</p></div>
      <div class="px-chip-row">${c.deliver.slice(0,3).map(x=>`<span>${praxysEsc(x)}</span>`).join('')}</div>
      <button type="button" class="px-detail-btn" data-open-case="${id}">${lang === 'en' ? 'View case detail' : 'Ver detalle del caso'}</button></div>
    </article>`;
  }).join('')}</div></div>`;
}

function renderMethod(){
  const sec = document.getElementById('metodo');
  const grid = sec && sec.querySelector('.praxys-grid');
  if(!grid) return;
  const lang = praxysLang();
  sec.classList.add('px-section','px-method');
  const h2 = sec.querySelector('.serv-head h2,h2');
  const lead = sec.querySelector('.praxys-lead,.serv-head p');
  if(h2) h2.textContent = lang === 'en' ? 'How Praxys works' : 'Cómo trabaja Praxys';
  if(lead) lead.textContent = lang === 'en' ? 'A compact path from dispersed information to governed decisions.' : 'Un recorrido compacto desde información dispersa hacia decisiones gobernadas.';
  const steps = lang === 'en'
    ? [['01','Structure evidence','Separate facts, assumptions, constraints, and decisions.'],['02','Model relationships','Show how technical, operational, organizational, and economic factors combine.'],['03','Prioritize decisions','Compare alternatives and sequence actions with explicit criteria.'],['04','Install follow-up','Define owners, indicators, review rhythm, and escalation rules.']]
    : [['01','Ordenar evidencia','Separar hechos, supuestos, restricciones y decisiones.'],['02','Modelar relaciones','Mostrar cómo se combinan factores técnicos, operativos, organizacionales y económicos.'],['03','Priorizar decisiones','Comparar alternativas y secuenciar acciones con criterios explícitos.'],['04','Instalar seguimiento','Definir responsables, indicadores, ritmo de revisión y reglas de escalamiento.']];
  grid.innerHTML = steps.map(x=>`<article class="praxys-card px-step"><span>${x[0]}</span><h3>${praxysEsc(x[1])}</h3><p>${praxysEsc(x[2])}</p></article>`).join('');
}

function compactPapers(){
  const sec = document.getElementById('articulos');
  if(!sec) return;
  const lang = praxysLang();
  sec.classList.add('px-section','px-papers');
  const cards = Array.from(sec.querySelectorAll('.paper-card,.article-card'));
  cards.forEach((c,i)=>c.classList.toggle('px-paper-hidden', !sec.classList.contains('px-expanded') && i > 2));
  if(cards.length > 3 && !sec.querySelector('.px-papers-toggle')){
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'px-papers-toggle';
    b.addEventListener('click',()=>{ sec.classList.toggle('px-expanded'); compactPapers(); });
    (sec.querySelector('.papers-grid,#articles-container,.articles-grid') || sec).insertAdjacentElement('afterend', b);
  }
  const btn = sec.querySelector('.px-papers-toggle');
  if(btn) btn.textContent = sec.classList.contains('px-expanded') ? (lang === 'en' ? 'Show fewer publications' : 'Ver menos publicaciones') : (lang === 'en' ? 'View more publications' : 'Ver más publicaciones');
}

function bindSmartUX(){
  if(window.PRAXYS.smartUXBound) return;
  window.PRAXYS.smartUXBound = true;
  document.addEventListener('click', e=>{
    const svc = e.target.closest('[data-open-service]');
    const cas = e.target.closest('[data-open-case]');
    const close = e.target.closest('[data-px-close]');
    if(close){ closeModal(); return; }
    if(svc){ openService(svc.dataset.openService); return; }
    if(cas){ openCase(cas.dataset.openCase); return; }
    if(e.target && e.target.id === 'px-modal') closeModal();
  });
  document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeModal(); });
}
function modal(){
  let m = document.getElementById('px-modal');
  if(!m){ m = document.createElement('div'); m.id = 'px-modal'; m.className = 'px-modal'; document.body.appendChild(m); }
  return m;
}
function openService(id){
  const lang = praxysLang();
  const base = SERVICES[id];
  const s = base && base[lang];
  if(!s) return;
  const related = caseIds().map(k=>CASES[k]).find(c=>c.service === id);
  const c = related && related[lang];
  const m = modal();
  m.innerHTML = `<div class="px-modal-box"><button type="button" class="px-close" data-px-close="1">×</button>${photoMarkup(base.photo, s.title)}<div class="px-modal-content"><span class="px-kicker">${lang === 'en' ? 'Service detail' : 'Detalle del servicio'}</span><h2>${praxysEsc(s.title)}</h2><p class="px-modal-lead">${praxysEsc(s.line)}</p><h4>${lang === 'en' ? 'Leadership receives' : 'La dirección recibe'}</h4><p>${praxysEsc(s.receive)}</p>${c ? `<h4>${lang === 'en' ? 'Related case' : 'Caso relacionado'}</h4><p><strong>${praxysEsc(c.title)}</strong><br>${praxysEsc(c.situation)}</p>` : ''}<a class="px-modal-cta" href="${PRAXYS_WHATSAPP}" target="_blank" rel="noopener">${lang === 'en' ? 'Schedule conversation' : 'Agendar conversación'}</a></div></div>`;
  m.classList.add('open');
  document.body.classList.add('px-lock');
}
function openCase(id){
  const lang = praxysLang();
  const base = CASES[id];
  const c = base && base[lang];
  if(!c) return;
  const m = modal();
  m.innerHTML = `<div class="px-modal-box px-case-modal-box"><button type="button" class="px-close" data-px-close="1">×</button>${photoMarkup(base.photo, c.title)}<div class="px-modal-content"><span class="px-kicker">${praxysEsc(c.label)}</span><h2>${praxysEsc(c.title)}</h2><p class="px-modal-lead">${praxysEsc(c.situation)}</p><div class="px-modal-grid"><div><h4>${lang === 'en' ? 'Decision' : 'Decisión'}</h4><p>${praxysEsc(c.decision)}</p></div><div><h4>${lang === 'en' ? 'How Praxys works' : 'Cómo trabaja Praxys'}</h4><p>${praxysEsc(c.work)}</p></div></div><h4>${lang === 'en' ? 'Concrete deliverables' : 'Entregables concretos'}</h4><div class="px-chip-row big">${c.deliver.map(x=>`<span>${praxysEsc(x)}</span>`).join('')}</div><div class="px-use"><strong>${lang === 'en' ? 'Useful for' : 'Sirve para'}:</strong> ${praxysEsc(c.use)}</div><a class="px-modal-cta" href="${PRAXYS_WHATSAPP}" target="_blank" rel="noopener">${lang === 'en' ? 'Discuss this case' : 'Conversar este caso'}</a></div></div>`;
  m.classList.add('open');
  document.body.classList.add('px-lock');
}
function closeModal(){
  const m = document.getElementById('px-modal');
  if(m){ m.classList.remove('open'); m.innerHTML = ''; }
  document.body.classList.remove('px-lock');
}

function praxysEnsureSmartStyles(){
  let s = document.getElementById('praxys-final-smart-design');
  if(!s){ s = document.createElement('style'); s.id = 'praxys-final-smart-design'; document.head.appendChild(s); }
  s.textContent = `
    :root{--px-navy:#102033;--px-blue:#16315e;--px-ink:#26384d;--px-muted:#627185;--px-line:rgba(16,32,51,.12);--px-bg:#f6f9fc;--px-soft:#eef5fa;--px-orange:#E8632A;--px-amber:#F2C94C;--px-radius:22px;}
    body{color:var(--px-ink)!important;background:#fff!important;}
    .reveal,.reveal.in{opacity:1!important;visibility:visible!important;transform:none!important;}
    #entregables,#cuando,#quienes,#mision-vision,#valores{display:none!important;}
    .eyebrow{font-family:var(--f,'Manrope',sans-serif)!important;color:var(--px-orange)!important;font-size:.76rem!important;letter-spacing:.16em!important;font-weight:900!important;text-transform:uppercase!important;text-shadow:none!important;}
    .serv-head{max-width:760px!important;margin:0 auto 24px!important;text-align:center!important;}
    .serv-head h2,h2{color:var(--px-navy)!important;letter-spacing:-.025em!important;}
    .praxys-lead,.serv-head p{color:var(--px-muted)!important;font-size:1.02rem!important;line-height:1.55!important;}
    .px-section{padding:48px 0!important;}
    .px-section .praxys-grid{display:grid!important;gap:20px!important;margin-top:22px!important;}
    .px-photo{margin:0!important;aspect-ratio:16/9!important;width:100%!important;overflow:hidden!important;background:#e8eef5!important;border-radius:18px!important;}
    .px-photo img{width:100%!important;height:100%!important;object-fit:cover!important;display:block!important;filter:saturate(.9) contrast(1.02)!important;}
    .px-photo-fallback{background:linear-gradient(135deg,#dfe8f2,#f8fbfe)!important;}
    .px-photo-fallback span{display:block;width:100%;height:100%;background:radial-gradient(circle at 28% 35%,rgba(232,99,42,.18),transparent 28%),radial-gradient(circle at 68% 58%,rgba(22,49,94,.16),transparent 32%);}
    .praxys-card,.px-case-card{border:1px solid var(--px-line)!important;border-radius:var(--px-radius)!important;background:#fff!important;box-shadow:0 20px 50px rgba(16,32,51,.07)!important;overflow:hidden!important;}
    .px-card-body{padding:18px!important;display:flex!important;flex-direction:column!important;gap:10px!important;}
    .px-kicker,.px-case-label{color:var(--px-orange)!important;font-size:.72rem!important;font-weight:900!important;letter-spacing:.12em!important;text-transform:uppercase!important;}
    .praxys-card h3,.px-case-card h3{color:var(--px-navy)!important;font-size:1.18rem!important;line-height:1.18!important;margin:0!important;letter-spacing:-.01em!important;}
    .praxys-card p,.px-case-card p{color:var(--px-muted)!important;font-size:.94rem!important;line-height:1.48!important;margin:0!important;}
    .px-problems{background:var(--px-navy)!important;}
    .px-problems .serv-head h2,.px-problems h2{color:#fff!important;}
    .px-problems .praxys-lead,.px-problems .serv-head p{color:#cad8e8!important;}
    .px-problems .eyebrow{color:var(--px-amber)!important;}
    .px-problems .praxys-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important;}
    .px-problem-card{background:rgba(255,255,255,.055)!important;border-color:rgba(242,201,76,.18)!important;box-shadow:none!important;}
    .px-problem-card .px-photo{height:128px!important;aspect-ratio:auto!important;border-radius:18px 18px 10px 10px!important;opacity:.9!important;}
    .px-problem-card h3{color:#fff!important;}
    .px-problem-card p{color:#cad8e8!important;}
    .px-services{background:#fff!important;}
    .px-service-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important;}
    .px-service-card{display:flex!important;flex-direction:column!important;padding:0!important;min-height:0!important;}
    .px-service-card .px-photo{height:132px!important;aspect-ratio:auto!important;border-radius:18px 18px 0 0!important;}
    .px-receive{margin-top:2px!important;padding:12px!important;border-radius:14px!important;background:var(--px-bg)!important;border:1px solid var(--px-line)!important;}
    .px-receive strong{display:block!important;color:var(--px-orange)!important;font-size:.7rem!important;text-transform:uppercase!important;letter-spacing:.1em!important;margin-bottom:4px!important;}
    .px-receive span{display:block!important;color:var(--px-ink)!important;font-size:.88rem!important;line-height:1.4!important;font-weight:700!important;}
    .px-detail-btn,.px-papers-toggle{margin-top:auto!important;min-height:42px!important;border:0!important;border-radius:14px!important;background:var(--px-navy)!important;color:#fff!important;padding:0 16px!important;font-size:.74rem!important;font-weight:900!important;letter-spacing:.06em!important;text-transform:uppercase!important;cursor:pointer!important;transition:.2s ease!important;}
    .px-detail-btn:hover,.px-papers-toggle:hover{background:var(--px-orange)!important;transform:translateY(-1px)!important;}
    .px-mid-cta{background:linear-gradient(135deg,#102033,#162b45)!important;color:#fff!important;padding:30px 0!important;}
    .px-mid-inner{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:28px!important;}
    .px-mid-inner span{color:var(--px-amber)!important;font-size:.72rem!important;font-weight:900!important;letter-spacing:.15em!important;text-transform:uppercase!important;}
    .px-mid-inner h2{color:#fff!important;font-size:clamp(1.55rem,2.7vw,2.15rem)!important;margin:6px 0!important;}
    .px-mid-inner p{color:#cad8e8!important;margin:0!important;max-width:720px!important;}
    .px-mid-inner a,.px-modal-cta{display:inline-flex!important;align-items:center!important;justify-content:center!important;text-decoration:none!important;color:#fff!important;background:var(--px-orange)!important;border-radius:14px!important;min-height:44px!important;padding:0 18px!important;font-size:.76rem!important;font-weight:900!important;letter-spacing:.06em!important;text-transform:uppercase!important;white-space:nowrap!important;}
    .px-cases{background:var(--px-bg)!important;}
    .px-cases-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:20px!important;margin-top:24px!important;}
    .px-case-card{display:grid!important;grid-template-columns:230px 1fr!important;padding:0!important;scroll-margin-top:96px!important;}
    .px-case-card .px-photo{height:100%!important;min-height:260px!important;aspect-ratio:auto!important;border-radius:0!important;}
    .px-case-content{padding:20px!important;display:flex!important;flex-direction:column!important;gap:12px!important;}
    .px-case-card h3{font-size:1.28rem!important;}
    .px-case-mini{display:grid!important;grid-template-columns:1fr 1fr!important;gap:12px!important;}
    .px-case-mini p{padding:12px!important;background:#fff!important;border:1px solid var(--px-line)!important;border-radius:14px!important;}
    .px-case-mini strong{display:block!important;color:var(--px-orange)!important;font-size:.68rem!important;letter-spacing:.1em!important;text-transform:uppercase!important;margin-bottom:4px!important;}
    .px-chip-row{display:flex!important;flex-wrap:wrap!important;gap:7px!important;}
    .px-chip-row span{border-radius:999px!important;background:rgba(232,99,42,.09)!important;color:#A9461D!important;padding:6px 10px!important;font-size:.76rem!important;font-weight:850!important;}
    .px-method{background:#fff!important;}
    .px-method .praxys-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;}
    .px-step{padding:22px!important;box-shadow:none!important;}
    .px-step span{display:inline-flex!important;color:var(--px-orange)!important;font-weight:950!important;font-size:.8rem!important;margin-bottom:12px!important;}
    .px-papers{background:var(--px-bg)!important;}
    .px-paper-hidden{display:none!important;}
    .px-papers-toggle{display:flex!important;margin:20px auto 0!important;background:#fff!important;color:var(--px-navy)!important;border:1.5px solid var(--px-navy)!important;}
    .px-modal{position:fixed!important;inset:0!important;z-index:99999!important;display:none!important;align-items:center!important;justify-content:center!important;padding:24px!important;background:rgba(4,10,18,.68)!important;backdrop-filter:blur(7px)!important;}
    .px-modal.open{display:flex!important;}
    .px-modal-box{position:relative!important;width:min(980px,100%)!important;max-height:min(86vh,860px)!important;overflow:auto!important;background:#fff!important;border-radius:28px!important;box-shadow:0 34px 100px rgba(0,0,0,.34)!important;display:grid!important;grid-template-columns:360px 1fr!important;}
    .px-modal-box .px-photo{height:100%!important;min-height:420px!important;aspect-ratio:auto!important;border-radius:28px 0 0 28px!important;}
    .px-modal-content{padding:34px!important;}
    .px-close{position:absolute!important;right:16px!important;top:16px!important;z-index:3!important;width:40px!important;height:40px!important;border:0!important;border-radius:999px!important;background:var(--px-navy)!important;color:#fff!important;font-size:1.4rem!important;cursor:pointer!important;}
    .px-modal-content h2{font-size:clamp(1.65rem,3vw,2.45rem)!important;margin:8px 46px 12px 0!important;color:var(--px-navy)!important;}
    .px-modal-lead{font-size:1.05rem!important;color:var(--px-muted)!important;line-height:1.55!important;margin-bottom:18px!important;}
    .px-modal-content h4{margin:16px 0 6px!important;color:var(--px-orange)!important;font-size:.72rem!important;font-weight:950!important;letter-spacing:.12em!important;text-transform:uppercase!important;}
    .px-modal-grid{display:grid!important;grid-template-columns:1fr 1fr!important;gap:18px!important;}
    .px-use{margin-top:16px!important;border-radius:16px!important;background:var(--px-bg)!important;border:1px solid var(--px-line)!important;padding:14px!important;color:var(--px-ink)!important;}
    .px-use strong{color:var(--px-orange)!important;}
    .px-lock{overflow:hidden!important;}
    @media(max-width:1050px){.px-service-grid,.px-problems .praxys-grid{grid-template-columns:1fr 1fr!important;}.px-cases-grid{grid-template-columns:1fr!important;}.px-method .praxys-grid{grid-template-columns:1fr 1fr!important;}}
    @media(max-width:760px){.px-section{padding:34px 0!important;}.serv-head{text-align:left!important;margin-bottom:18px!important;}.px-service-grid,.px-problems .praxys-grid,.px-method .praxys-grid{grid-template-columns:1fr!important;}.px-problem-card .px-photo,.px-service-card .px-photo{height:118px!important;}.px-mid-inner{flex-direction:column!important;align-items:flex-start!important;}.px-mid-inner a{width:100%!important;}.px-case-card{grid-template-columns:1fr!important;}.px-case-card .px-photo{height:142px!important;min-height:0!important;}.px-case-mini{grid-template-columns:1fr!important;}.px-modal{padding:12px!important;}.px-modal-box{display:block!important;border-radius:22px!important;}.px-modal-box .px-photo{height:190px!important;min-height:0!important;border-radius:22px 22px 0 0!important;}.px-modal-content{padding:24px 18px!important;}.px-modal-grid{grid-template-columns:1fr!important;}}
  `;
}

try{
  let praxysTimer = null;
  const observer = new MutationObserver(()=>{
    clearTimeout(praxysTimer);
    praxysTimer = setTimeout(praxysRefreshSmartDesign, 180);
  });
  observer.observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
}catch(e){}