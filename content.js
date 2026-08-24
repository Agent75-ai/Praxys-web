// Praxys Web — capa comercial final
// Objetivo: ruta de contratación simple y casos concretos visibles, sin depender de modales.
window.PRAXYS = window.PRAXYS || {};
window.PRAXYS.published = { texts:{}, images:{}, articles:null };
window.PRAXYS.local = JSON.parse(localStorage.getItem('praxys_content') || '{"texts":{},"images":{}}');

const PRAXYS_WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20ejecutiva%20sobre%20un%20problema%20que%20impacta%20varias%20%C3%A1reas%2C%20recursos%20u%20objetivos%20del%20negocio.';

function praxysLang(){
  return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es';
}
function praxysNorm(s){
  return String(s || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}
function praxysEsc(s){
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

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
  praxysRefreshEnhancements();
}
window.PRAXYS.apply = praxysApplyContent;

const PRAXYS_SERVICE_SUMMARIES = {
  'combined-risk-diagnosis': {
    titles:['diagnostico ejecutivo de riesgos combinados','executive diagnosis of combined risks'],
    es:{title:'Diagnóstico ejecutivo de riesgos combinados', purpose:'Para situaciones donde cada área explica una parte del riesgo y la dirección necesita una lectura común.', receives:'Mapa causal, dependencias críticas, prioridades de intervención y criterios de seguimiento.'},
    en:{title:'Executive diagnosis of combined risks', purpose:'For situations where each area explains only one part of the risk and leadership needs a shared reading.', receives:'Causal map, critical dependencies, intervention priorities, and follow-up criteria.'}
  },
  'action-resource-prioritization': {
    titles:['priorizacion de acciones y recursos','prioritization of actions and resources'],
    es:{title:'Priorización de acciones y recursos', purpose:'Para ordenar carteras de acciones, inversiones o mejoras cuando no está claro dónde actuar primero.', receives:'Matriz de priorización, secuencia de intervención, responsables y condiciones de implementación.'},
    en:{title:'Prioritization of actions and resources', purpose:'For structuring action, investment, or improvement portfolios when it is unclear where to act first.', receives:'Prioritization matrix, intervention sequence, owners, and implementation conditions.'}
  },
  'decision-scenario-assessment': {
    titles:['evaluacion de escenarios de decision','decision scenario assessment'],
    es:{title:'Evaluación de escenarios de decisión', purpose:'Para comparar alternativas antes de comprometer inversión, recursos críticos o cambios operativos.', receives:'Escenarios comparados, trade-offs, sensibilidad a restricciones, riesgos residuales y recomendación ejecutiva.'},
    en:{title:'Decision scenario assessment', purpose:'For comparing alternatives before committing investments, critical resources, or operational changes.', receives:'Compared scenarios, trade-offs, sensitivity to constraints, residual risks, and executive recommendation.'}
  },
  'recurring-events-investigation': {
    titles:['investigacion sistemica de eventos recurrentes','systemic investigation of recurring events'],
    es:{title:'Investigación sistémica de eventos recurrentes', purpose:'Para fallas, desvíos o incidentes que vuelven a aparecer aunque ya existan acciones correctivas.', receives:'Línea de tiempo, mapa causal, barreras degradadas, condiciones organizacionales y acciones de mayor impacto.'},
    en:{title:'Systemic investigation of recurring events', purpose:'For failures, deviations, or incidents that reappear despite corrective actions.', receives:'Timeline, causal map, degraded barriers, organizational conditions, and higher-impact actions.'}
  },
  'governance-followup-design': {
    titles:['diseno de gobernanza y seguimiento','governance and follow-up design'],
    es:{title:'Diseño de gobernanza y seguimiento', purpose:'Para decisiones que se toman pero no quedan controladas con responsables, indicadores y reglas claras.', receives:'Mecanismo de gobernanza, tablero ejecutivo, rutinas de revisión, roles y reglas de escalamiento.'},
    en:{title:'Governance and follow-up design', purpose:'For decisions that are made but not controlled through clear owners, indicators, and rules.', receives:'Governance mechanism, executive dashboard, review routines, roles, and escalation rules.'}
  },
  'executive-training-transfer': {
    titles:['capacitacion ejecutiva y transferencia metodologica','executive training and method transfer'],
    es:{title:'Capacitación ejecutiva y transferencia metodológica', purpose:'Para instalar criterios comunes de análisis y decisión en equipos técnicos, operativos y gerenciales.', receives:'Workshops aplicados, guías, plantillas, ejercicios y herramientas transferibles al equipo.'},
    en:{title:'Executive training and method transfer', purpose:'For installing shared analysis and decision criteria across technical, operational, and managerial teams.', receives:'Applied workshops, guides, templates, exercises, and tools transferred to the team.'}
  }
};

const PRAXYS_CASES = {
  'combined-risk-diagnosis': {
    es:{
      label:'Caso 01',
      title:'El problema se repite y cada área explica una causa distinta',
      context:'La organización enfrenta un problema relevante que vuelve a aparecer y cada área lo interpreta desde su propia evidencia, responsabilidades y restricciones.',
      decision:'Definir una lectura común del problema, acordar dónde intervenir primero y decidir qué recursos comprometer sin multiplicar acciones inconexas.',
      work:'Praxys reconstruye eventos, datos disponibles, decisiones previas, restricciones operativas, responsabilidades y criterios usados por cada área. Con esa evidencia construye un mapa causal que muestra cómo se combinan factores técnicos, operativos, organizacionales y de gestión.',
      receives:['Mapa causal del problema','Ciclos de recurrencia','Dependencias críticas entre áreas','Puntos de intervención','Prioridades y criterios de seguimiento'],
      use:'Permite pasar de explicaciones parciales a una lectura causal común para decidir qué hacer primero y cómo controlar el efecto real de la intervención.'
    },
    en:{
      label:'Case 01',
      title:'The problem keeps recurring and each area explains a different cause',
      context:'The organization faces a relevant problem that keeps reappearing, while each area interprets it from its own evidence, responsibilities, and constraints.',
      decision:'Build a shared reading of the problem, agree where to intervene first, and decide which resources to commit without multiplying disconnected actions.',
      work:'Praxys reconstructs events, available data, previous decisions, operational constraints, responsibilities, and the criteria used by each area. Based on that evidence, it builds a causal map showing how technical, operational, organizational, and management factors combine.',
      receives:['Causal map','Recurrence loops','Critical cross-area dependencies','Intervention points','Priorities and follow-up criteria'],
      use:'It turns partial explanations into a shared causal reading, supporting decisions on where to act first and how to control the real effect of the intervention.'
    }
  },
  'action-resource-prioritization': {
    es:{
      label:'Caso 02',
      title:'Hay demasiadas acciones abiertas y poca capacidad para ejecutarlas',
      context:'Después de auditorías, incidentes, revisiones internas o planes de mejora, se acumulan acciones que compiten por las mismas personas, presupuesto, tiempo y capacidad de gestión.',
      decision:'Ordenar qué acciones ejecutar primero, cuáles agrupar, cuáles postergar, qué recursos proteger y qué riesgos quedan aceptados temporalmente.',
      work:'Praxys releva acciones existentes, restricciones, costos aproximados, impacto esperado, dependencias, responsables y urgencias. Luego construye una matriz de priorización que diferencia impacto, factibilidad, exposición residual, dependencia entre acciones y efecto sobre objetivos del negocio.',
      receives:['Matriz de priorización','Criterios explícitos de decisión','Secuencia de intervención','Responsables','Condiciones de implementación'],
      use:'Ayuda a evitar planes enormes imposibles de ejecutar y concentra recursos en las acciones con mayor efecto sistémico.'
    },
    en:{
      label:'Case 02',
      title:'Too many actions are open and execution capacity is limited',
      context:'After audits, incidents, internal reviews, or improvement plans, actions accumulate and compete for the same people, budget, time, and management capacity.',
      decision:'Decide which actions go first, which can be grouped, which must wait, which resources must be protected, and which risks are temporarily accepted.',
      work:'Praxys reviews existing actions, constraints, approximate costs, expected impact, dependencies, owners, and urgency. It then builds a prioritization matrix that distinguishes impact, feasibility, residual exposure, dependencies among actions, and effect on business objectives.',
      receives:['Prioritization matrix','Explicit decision criteria','Intervention sequence','Owners','Implementation conditions'],
      use:'It avoids oversized plans that cannot be executed and focuses resources on actions with the greatest systemic effect.'
    }
  },
  'decision-scenario-assessment': {
    es:{
      label:'Caso 03',
      title:'Hay que invertir, pero no están claras las consecuencias',
      context:'La dirección debe comprometer recursos, aprobar una inversión o definir un cambio relevante sin una comparación suficiente de impactos, restricciones y riesgos residuales.',
      decision:'Comparar alternativas con los mismos criterios y elegir una opción defendible ante dirección, gerencias y áreas responsables.',
      work:'Praxys define escenarios comparables, explicita supuestos, identifica restricciones técnicas, operativas, organizacionales y económicas, y analiza consecuencias esperadas sobre continuidad, disponibilidad, costos, riesgo residual y capacidad de seguimiento.',
      receives:['Escenarios comparados','Supuestos y restricciones visibles','Análisis de trade-offs','Sensibilidad frente a cambios de contexto','Recomendación ejecutiva'],
      use:'Permite decidir con una comparación transparente de alternativas, no por presión de urgencia o por lectura parcial de un área.'
    },
    en:{
      label:'Case 03',
      title:'Investment is needed, but the consequences are not clear',
      context:'Leadership must commit resources, approve an investment, or define a relevant change without a sufficient comparison of impacts, constraints, and residual risks.',
      decision:'Compare alternatives using the same criteria and choose an option that can be defended to leadership, managers, and responsible areas.',
      work:'Praxys defines comparable scenarios, makes assumptions explicit, identifies technical, operational, organizational, and economic constraints, and analyzes expected consequences on continuity, availability, costs, residual risk, and follow-up capability.',
      receives:['Compared scenarios','Visible assumptions and constraints','Trade-off analysis','Sensitivity to context changes','Executive recommendation'],
      use:'It supports decisions through a transparent comparison of alternatives, not urgency pressure or a partial area-specific view.'
    }
  },
  'recurring-events-investigation': {
    es:{
      label:'Caso 04',
      title:'Las acciones se cierran, pero los incidentes vuelven',
      context:'Los reportes muestran eventos cerrados y acciones cumplidas, pero en la operación real el mismo patrón vuelve a aparecer en distintas unidades, turnos, procesos o áreas.',
      decision:'Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto sistémico.',
      work:'Praxys reconstruye la secuencia de eventos, decisiones, barreras, señales disponibles, presiones operativas, demoras, responsabilidades y condiciones de contexto. El análisis distingue causas inmediatas de condiciones sistémicas que mantienen la recurrencia.',
      receives:['Línea de tiempo integrada','Mapa causal sistémico','Barreras degradadas','Factores organizacionales','Acciones de mayor impacto'],
      use:'Permite dejar de corregir síntomas aislados y actuar sobre las condiciones que hacen que el evento vuelva a aparecer.'
    },
    en:{
      label:'Case 04',
      title:'Actions are closed, but incidents keep coming back',
      context:'Reports show closed events and completed actions, but in real operation the same pattern reappears across units, shifts, processes, or areas.',
      decision:'Determine which conditions sustain recurrence and which intervention has the highest systemic effect.',
      work:'Praxys reconstructs event sequences, decisions, barriers, available signals, operational pressures, delays, responsibilities, and context conditions. The analysis distinguishes immediate causes from systemic conditions sustaining recurrence.',
      receives:['Integrated timeline','Systemic causal map','Degraded barriers','Organizational factors','Higher-impact actions'],
      use:'It moves the organization beyond isolated symptom correction and toward action on the conditions that make the event reappear.'
    }
  },
  'governance-followup-design': {
    es:{
      label:'Caso 05',
      title:'La decisión está aprobada, pero el seguimiento se diluye entre áreas',
      context:'La dirección ya aprobó una estrategia, proyecto o plan de mejora, pero la ejecución queda repartida entre áreas sin suficiente claridad sobre responsabilidades, indicadores, revisión y escalamiento.',
      decision:'Establecer cómo se gobierna la decisión, quién responde por cada parte, qué indicadores importan y cuándo escalar desvíos.',
      work:'Praxys releva circuitos de decisión, reuniones, reportes, roles, indicadores y puntos de control. Luego diseña un mecanismo de seguimiento con tablero ejecutivo, frecuencia de revisión, responsables, reglas de escalamiento y criterios para evaluar efecto real.',
      receives:['Modelo de gobernanza','Roles y responsabilidades','Tablero ejecutivo','Rutina de revisión','Reglas de escalamiento'],
      use:'Convierte una decisión en un proceso gestionable, verificable y sostenido por responsabilidades claras.'
    },
    en:{
      label:'Case 05',
      title:'The decision is approved, but follow-up dilutes across areas',
      context:'Leadership has approved a strategy, project, or improvement plan, but execution is distributed across areas without enough clarity on responsibilities, indicators, review, and escalation.',
      decision:'Establish how the decision is governed, who owns each part, which indicators matter, and when deviations must be escalated.',
      work:'Praxys reviews decision circuits, meetings, reports, roles, indicators, and control points. It then designs a follow-up mechanism with an executive dashboard, review frequency, owners, escalation rules, and criteria to evaluate real effect.',
      receives:['Governance model','Roles and responsibilities','Executive dashboard','Review routine','Escalation rules'],
      use:'It turns a decision into a manageable and verifiable process supported by clear responsibilities.'
    }
  },
  'executive-training-transfer': {
    es:{
      label:'Caso 06',
      title:'Los equipos analizan el mismo problema con criterios distintos',
      context:'Gerencias, áreas técnicas, operación y funciones soporte discuten el mismo problema con lenguajes, métricas y criterios diferentes.',
      decision:'Instalar una forma compartida de analizar problemas, decidir prioridades y dar seguimiento sin depender permanentemente de consultores externos.',
      work:'Praxys diseña workshops sobre casos reales de la organización. Se trabajan mapas causales, criterios de priorización, análisis de escenarios, roles de decisión y rutinas de seguimiento usando ejemplos propios del cliente.',
      receives:['Workshops aplicados','Guías de análisis','Plantillas de priorización','Ejercicios sobre casos propios','Herramientas transferibles'],
      use:'Alinea criterios entre equipos técnicos, operativos y gerenciales, dejando capacidad instalada para decisiones futuras.'
    },
    en:{
      label:'Case 06',
      title:'Teams analyze the same problem using different criteria',
      context:'Management, technical areas, operations, and support functions discuss the same problem with different language, metrics, and criteria.',
      decision:'Install a shared way to analyze problems, decide priorities, and follow up without permanent dependence on external consultants.',
      work:'Praxys designs workshops based on the organization’s real cases. Teams work on causal maps, prioritization criteria, scenario analysis, decision roles, and follow-up routines using the client’s own examples.',
      receives:['Applied workshops','Analysis guides','Prioritization templates','Exercises on internal cases','Transferable tools'],
      use:'It aligns criteria across technical, operational, and managerial teams, leaving installed capability for future decisions.'
    }
  }
};

function praxysFindCaseIdFromTitle(title){
  const normalized = praxysNorm(title);
  return Object.keys(PRAXYS_SERVICE_SUMMARIES).find(id => PRAXYS_SERVICE_SUMMARIES[id].titles.includes(normalized));
}

function praxysReplaceCopy(){
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
    ['When the problem does not fit inside one area','The problem impacts several areas']
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

function praxysSimplifyServiceCards(){
  const lang = praxysLang();
  document.querySelectorAll('#servicios .praxys-card').forEach(card=>{
    const h3 = card.querySelector('h3');
    const id = card.dataset.praxysCase || praxysFindCaseIdFromTitle(h3 && h3.textContent);
    if(!id) return;
    const s = PRAXYS_SERVICE_SUMMARIES[id][lang];
    card.dataset.praxysCase = id;
    card.innerHTML = `
      <h3>${praxysEsc(s.title)}</h3>
      <p class="praxys-service-line"><strong>${lang === 'en' ? 'Useful for:' : 'Para qué sirve:'}</strong> ${praxysEsc(s.purpose)}</p>
      <p class="praxys-service-line"><strong>${lang === 'en' ? 'Leadership receives:' : 'Qué recibe la dirección:'}</strong> ${praxysEsc(s.receives)}</p>
      <a class="praxys-case-btn" href="#case-${id}" data-praxys-case-anchor="${id}">${lang === 'en' ? 'View concrete case' : 'Ver caso concreto'}</a>
    `;
  });
}

function praxysRenderConcreteCases(){
  const lang = praxysLang();
  const servicios = document.getElementById('servicios');
  if(!servicios) return;
  let section = document.getElementById('casos-concretos');
  if(!section){
    section = document.createElement('section');
    section.id = 'casos-concretos';
    section.className = 'praxys-section praxys-cases-section reveal in';
    const mid = document.getElementById('praxys-mid-cta');
    (mid || servicios).insertAdjacentElement('afterend', section);
  }
  const cases = Object.keys(PRAXYS_CASES).map(id=>{
    const c = PRAXYS_CASES[id][lang];
    return `
      <article id="case-${id}" class="praxys-concrete-case" tabindex="-1">
        <div class="praxys-case-number">${praxysEsc(c.label)}</div>
        <div class="praxys-case-main">
          <h3>${praxysEsc(c.title)}</h3>
          <div class="praxys-case-cols">
            <div><h4>${lang === 'en' ? 'Typical situation' : 'Situación típica'}</h4><p>${praxysEsc(c.context)}</p></div>
            <div><h4>${lang === 'en' ? 'Pending decision' : 'Decisión pendiente'}</h4><p>${praxysEsc(c.decision)}</p></div>
          </div>
          <h4>${lang === 'en' ? 'What Praxys does' : 'Qué hace Praxys'}</h4>
          <p>${praxysEsc(c.work)}</p>
          <div class="praxys-case-receives"><h4>${lang === 'en' ? 'Leadership receives' : 'La dirección recibe'}</h4><ul>${c.receives.map(x=>`<li>${praxysEsc(x)}</li>`).join('')}</ul></div>
          <div class="praxys-case-use"><strong>${lang === 'en' ? 'Useful for:' : 'Sirve para:'}</strong> ${praxysEsc(c.use)}</div>
        </div>
      </article>`;
  }).join('');
  section.innerHTML = `
    <div class="wrap">
      <div class="serv-head reveal in">
        <span class="eyebrow">${lang === 'en' ? 'Concrete cases' : 'Casos concretos'}</span>
        <h2>${lang === 'en' ? 'Problems where Praxys helps teams decide and move forward' : 'Problemas donde Praxys ayuda a decidir y avanzar'}</h2>
        <p class="praxys-lead">${lang === 'en' ? 'Typical cases where evidence must be structured, areas coordinated, resources prioritized, and decisions sustained.' : 'Casos típicos donde hace falta ordenar evidencia, coordinar áreas, priorizar recursos y sostener decisiones.'}</p>
      </div>
      <div class="praxys-cases-list">${cases}</div>
    </div>`;
}

function praxysEnhanceCommercialLayout(){
  const lang = praxysLang();
  document.body.classList.add('praxys-commercial-simplified');

  const problemasGrid = document.querySelector('#problemas .praxys-grid');
  if(problemasGrid){
    problemasGrid.classList.add('praxys-problem-focus');
    let note = document.getElementById('praxys-problem-note');
    if(!note){
      note = document.createElement('div');
      note.id = 'praxys-problem-note';
      note.className = 'praxys-problem-note';
      problemasGrid.insertAdjacentElement('afterend', note);
    }
    if(note.dataset.lang !== lang){
      note.dataset.lang = lang;
      note.innerHTML = lang === 'en'
        ? '<strong>Also addressed when needed:</strong> continuity, decision governance, and internal capability building.'
        : '<strong>También se aborda cuando corresponde:</strong> continuidad, gobernanza de decisiones y capacidades internas.';
    }
  }

  const serviciosGrid = document.querySelector('#servicios .praxys-grid');
  if(serviciosGrid) serviciosGrid.classList.add('praxys-services-layout');

  const servicios = document.getElementById('servicios');
  if(servicios && !document.getElementById('praxys-mid-cta')){
    const cta = document.createElement('section');
    cta.id = 'praxys-mid-cta';
    cta.className = 'praxys-mid-cta reveal in';
    servicios.insertAdjacentElement('afterend', cta);
  }
  const mid = document.getElementById('praxys-mid-cta');
  if(mid && mid.dataset.lang !== lang){
    mid.dataset.lang = lang;
    mid.innerHTML = lang === 'en' ? `
      <div class="wrap praxys-mid-cta-inner">
        <div><span>Executive conversation</span><h2>Do you have a problem crossing areas or blocking a decision?</h2><p>In 30 minutes we can identify the decision, the involved areas, and the deliverable that would help.</p></div>
        <a class="praxys-mid-cta-btn" href="${PRAXYS_WHATSAPP}" target="_blank" rel="noopener">Schedule conversation</a>
      </div>` : `
      <div class="wrap praxys-mid-cta-inner">
        <div><span>Conversación ejecutiva</span><h2>¿Tenés un problema que cruza áreas o traba una decisión?</h2><p>En 30 minutos identificamos la decisión pendiente, las áreas involucradas y el tipo de entregable que podría ayudar.</p></div>
        <a class="praxys-mid-cta-btn" href="${PRAXYS_WHATSAPP}" target="_blank" rel="noopener">Agendar conversación</a>
      </div>`;
  }

  const metodoGrid = document.querySelector('#metodo .praxys-grid');
  if(metodoGrid) metodoGrid.classList.add('praxys-timeline');

  const articulos = document.getElementById('articulos');
  const papers = articulos ? Array.from(articulos.querySelectorAll('.paper-card')) : [];
  if(papers.length > 3){
    let toggle = document.getElementById('praxys-papers-toggle');
    if(!toggle){
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.id = 'praxys-papers-toggle';
      toggle.className = 'praxys-papers-toggle';
      const grid = articulos.querySelector('.papers-grid') || papers[papers.length-1].parentElement;
      grid?.insertAdjacentElement('afterend', toggle);
      toggle.addEventListener('click', ()=>{
        articulos.classList.toggle('praxys-papers-expanded');
        praxysEnhanceCommercialLayout();
      });
    }
    const expanded = articulos.classList.contains('praxys-papers-expanded');
    papers.forEach((card,i)=>card.classList.toggle('praxys-paper-hidden', !expanded && i > 2));
    toggle.textContent = expanded
      ? (lang === 'en' ? 'Show fewer papers' : 'Ver menos artículos y papers')
      : (lang === 'en' ? 'View more articles and papers' : 'Ver más artículos y papers');
  }
}

function praxysBindAnchors(){
  if(window.PRAXYS.caseAnchorsBound) return;
  window.PRAXYS.caseAnchorsBound = true;
  document.addEventListener('click', e=>{
    const a = e.target.closest('[data-praxys-case-anchor]');
    if(!a) return;
    const id = a.getAttribute('data-praxys-case-anchor');
    const target = document.getElementById('case-' + id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      target.classList.add('praxys-case-highlight');
      target.focus({preventScroll:true});
      setTimeout(()=>target.classList.remove('praxys-case-highlight'), 1800);
    }
  }, true);
}

function praxysEnsureStyles(){
  let s = document.getElementById('praxys-visibility-hotfix');
  if(!s){
    s = document.createElement('style');
    s.id = 'praxys-visibility-hotfix';
    document.head.appendChild(s);
  }
  s.textContent = `
    .reveal,.reveal.in{opacity:1!important;visibility:visible!important;transform:none!important;}
    #problemas,#servicios,#casos-concretos,#metodo,#articulos,#contacto,#praxys-mid-cta{display:block!important;visibility:visible!important;opacity:1!important;}
    #entregables,#cuando,#quienes,#mision-vision,#valores{display:none!important;}
    #articles-container,.articles-grid,.papers-grid{display:grid!important;visibility:visible!important;opacity:1!important;}

    .nav-menu>li>a{font-size:.82rem!important;}
    .praxys-section{padding-top:30px!important;padding-bottom:30px!important;}
    .praxys-section .serv-head,.serv-head{margin-top:0!important;margin-bottom:14px!important;}
    .praxys-section .serv-head h2,.serv-head h2{margin-top:.28rem!important;margin-bottom:.4rem!important;}
    .praxys-lead{margin-top:0!important;margin-bottom:0!important;font-size:1.02rem!important;line-height:1.5!important;}
    .praxys-grid{gap:14px!important;margin-top:16px!important;}
    .praxys-card{padding:16px!important;min-height:0!important;}
    .praxys-card h3{font-size:1.1rem!important;margin-bottom:8px!important;line-height:1.22!important;}
    .praxys-card p{font-size:.95rem!important;line-height:1.5!important;}

    #problemas.praxys-section{padding-top:30px!important;padding-bottom:12px!important;}
    #problemas h2,#problemas .serv-head h2{font-size:clamp(1.9rem,3.6vw,2.8rem)!important;line-height:1.08!important;color:#F4F8FF!important;}
    #problemas .serv-head .eyebrow,#problemas .eyebrow{font-size:1.28rem!important;line-height:1.08!important;letter-spacing:.13em!important;color:#F2C94C!important;text-shadow:none!important;}
    #problemas .praxys-lead,#problemas .praxys-card p{color:#C8D6E5!important;}
    #problemas .praxys-card h3{color:#F4F8FF!important;}
    #problemas .praxys-card{border-color:rgba(242,201,76,.18)!important;}
    #problemas .praxys-problem-focus .praxys-card:nth-child(n+4){display:none!important;}
    .praxys-problem-note{max-width:820px;margin:14px auto 0;padding:12px 16px;border:1px solid rgba(242,201,76,.22);border-radius:14px;color:#C8D6E5;background:rgba(255,255,255,.03);font-size:.95rem;line-height:1.45;text-align:center;}
    .praxys-problem-note strong{color:#F2C94C;}

    #servicios.praxys-section{padding-top:18px!important;padding-bottom:20px!important;margin-top:0!important;}
    #servicios .serv-head{margin-bottom:14px!important;}
    #servicios .praxys-services-layout{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px!important;align-items:stretch!important;}
    #servicios .praxys-services-layout .praxys-card{display:flex!important;flex-direction:column!important;min-height:245px!important;padding:18px!important;background:#fff!important;}
    #servicios .praxys-service-line{margin:0 0 9px!important;color:#3f4c5e!important;}
    #servicios .praxys-service-line strong{color:#E8632A!important;font-weight:900!important;}
    #servicios .praxys-services-layout .praxys-case-btn{margin-top:auto!important;}

    .praxys-case-btn{display:inline-flex!important;align-items:center!important;justify-content:center!important;margin-top:12px!important;width:100%;min-height:38px;border:0;border-radius:12px;background:#102033;color:#fff!important;text-decoration:none!important;font-size:.76rem;font-weight:900;text-transform:uppercase;letter-spacing:.05em;cursor:pointer;transition:transform .18s ease,background .18s ease,box-shadow .18s ease;}
    .praxys-case-btn:hover{background:#E8632A;transform:translateY(-1px);box-shadow:0 12px 26px rgba(232,99,42,.18);}

    #praxys-mid-cta{background:#102033!important;color:#fff!important;padding:26px 0!important;}
    .praxys-mid-cta-inner{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:30px!important;}
    .praxys-mid-cta-inner span{display:block!important;color:#F2C94C!important;font-size:.76rem!important;font-weight:900!important;letter-spacing:.14em!important;text-transform:uppercase!important;margin-bottom:6px!important;}
    .praxys-mid-cta-inner h2{font-family:var(--display, Georgia, serif)!important;font-size:clamp(1.5rem,2.6vw,2.1rem)!important;line-height:1.08!important;color:#F4F8FF!important;margin:0 0 8px!important;}
    .praxys-mid-cta-inner p{color:#C8D6E5!important;margin:0!important;font-size:.98rem!important;line-height:1.48!important;max-width:720px!important;}
    .praxys-mid-cta-btn{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-width:210px!important;min-height:42px!important;padding:0 18px!important;border-radius:12px!important;background:#E8632A!important;color:#fff!important;text-decoration:none!important;font-size:.76rem!important;font-weight:900!important;letter-spacing:.06em!important;text-transform:uppercase!important;}
    .praxys-mid-cta-btn:hover{background:#F2C94C!important;color:#102033!important;}

    #casos-concretos{background:#f6f9fc!important;padding-top:34px!important;padding-bottom:36px!important;scroll-margin-top:88px;}
    #casos-concretos .eyebrow{color:#F2C94C!important;font-size:1.28rem!important;letter-spacing:.13em!important;font-weight:900!important;text-transform:uppercase!important;}
    .praxys-cases-list{display:grid!important;gap:18px!important;margin-top:22px!important;}
    .praxys-concrete-case{scroll-margin-top:92px;display:grid!important;grid-template-columns:92px 1fr!important;gap:22px!important;padding:24px!important;background:#fff!important;border:1px solid rgba(16,32,51,.10)!important;border-radius:24px!important;box-shadow:0 18px 44px rgba(16,32,51,.07)!important;outline:none!important;transition:box-shadow .25s ease,border-color .25s ease,transform .25s ease;}
    .praxys-concrete-case.praxys-case-highlight{border-color:#E8632A!important;box-shadow:0 26px 70px rgba(232,99,42,.22)!important;transform:translateY(-2px)!important;}
    .praxys-case-number{font-family:var(--display, Georgia, serif)!important;color:#E8632A!important;font-size:1.45rem!important;line-height:1!important;font-weight:700!important;}
    .praxys-case-main h3{margin:0 0 14px!important;color:#102033!important;font-size:clamp(1.45rem,2.4vw,2rem)!important;line-height:1.08!important;letter-spacing:-.025em!important;}
    .praxys-case-main h4{margin:13px 0 5px!important;color:#E8632A!important;font-size:.74rem!important;font-weight:950!important;text-transform:uppercase!important;letter-spacing:.12em!important;}
    .praxys-case-main p{margin:0!important;color:#3f4c5e!important;font-size:.98rem!important;line-height:1.56!important;}
    .praxys-case-cols{display:grid!important;grid-template-columns:1fr 1fr!important;gap:18px!important;}
    .praxys-case-receives{margin-top:12px!important;}
    .praxys-case-receives ul{display:flex!important;flex-wrap:wrap!important;gap:8px!important;margin:8px 0 0!important;padding:0!important;list-style:none!important;}
    .praxys-case-receives li{padding:6px 10px!important;border-radius:999px!important;background:rgba(232,99,42,.08)!important;color:#A9461D!important;font-size:.82rem!important;font-weight:800!important;}
    .praxys-case-use{margin-top:15px!important;padding:14px 16px!important;border-radius:16px!important;background:rgba(16,32,51,.05)!important;border:1px solid rgba(16,32,51,.10)!important;color:#102033!important;font-size:.96rem!important;line-height:1.52!important;}
    .praxys-case-use strong{color:#E8632A!important;}

    #metodo.praxys-section,#articulos.praxys-section,#contacto.praxys-section{padding-top:28px!important;padding-bottom:28px!important;}
    #metodo .praxys-timeline{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:14px!important;position:relative!important;margin-top:18px!important;}
    #metodo .praxys-timeline:before{content:""!important;position:absolute!important;left:6%!important;right:6%!important;top:17px!important;height:2px!important;background:linear-gradient(90deg,#E8632A,#F2C94C)!important;opacity:.45!important;}
    #metodo .praxys-timeline .praxys-card{position:relative!important;padding-top:40px!important;background:#fff!important;}
    #metodo .praxys-timeline .praxys-card:before{content:""!important;position:absolute!important;top:9px!important;left:18px!important;width:17px!important;height:17px!important;border-radius:50%!important;background:#E8632A!important;box-shadow:0 0 0 6px rgba(232,99,42,.12)!important;z-index:2!important;}

    #articulos .papers-grid{gap:16px!important;margin-top:16px!important;}
    #articulos .paper-card{padding:18px!important;min-height:0!important;}
    #articulos .paper-card.praxys-paper-hidden{display:none!important;}
    #articulos .paper-card h3{font-size:1.18rem!important;margin-bottom:8px!important;}
    #articulos .paper-meta{margin-bottom:8px!important;}
    #articulos .paper-tags{margin-top:10px!important;}
    #articulos .paper-download{margin-top:14px!important;}
    .praxys-papers-toggle{display:block!important;margin:16px auto 0!important;min-height:40px!important;padding:0 18px!important;border:1.5px solid #102033!important;border-radius:12px!important;background:#fff!important;color:#102033!important;font-size:.76rem!important;font-weight:900!important;letter-spacing:.06em!important;text-transform:uppercase!important;cursor:pointer!important;}
    .praxys-papers-toggle:hover{background:#102033!important;color:#fff!important;}

    @media(max-width:900px){
      .praxys-mid-cta-inner{flex-direction:column!important;align-items:flex-start!important;}
      .praxys-mid-cta-btn{width:100%!important;}
      #metodo .praxys-timeline{grid-template-columns:1fr 1fr!important;}
      #metodo .praxys-timeline:before{display:none!important;}
      .praxys-case-cols{grid-template-columns:1fr!important;}
    }
    @media(max-width:720px){
      .praxys-section{padding-top:24px!important;padding-bottom:24px!important;}
      .praxys-grid{gap:12px!important;margin-top:14px!important;}
      .praxys-card{padding:15px!important;}
      .praxys-card h3,#servicios .praxys-card h3{font-size:1.07rem!important;}
      .praxys-card p{font-size:.94rem!important;line-height:1.48!important;}
      .praxys-lead{font-size:1rem!important;line-height:1.5!important;}
      #problemas.praxys-section{padding-top:22px!important;padding-bottom:8px!important;}
      #problemas .serv-head h2,#problemas h2{font-size:clamp(1.85rem,9vw,2.7rem)!important;line-height:1.08!important;color:#F4F8FF!important;}
      #problemas .serv-head .eyebrow,#problemas .eyebrow{font-size:1.1rem!important;letter-spacing:.10em!important;color:#F2C94C!important;text-shadow:none!important;}
      #servicios .praxys-services-layout,#metodo .praxys-timeline{grid-template-columns:1fr!important;}
      #servicios .praxys-services-layout .praxys-card{min-height:0!important;}
      #praxys-mid-cta{padding:22px 0!important;}
      .praxys-mid-cta-inner h2{font-size:1.5rem!important;}
      .praxys-concrete-case{grid-template-columns:1fr!important;padding:18px!important;gap:8px!important;}
      .praxys-case-number{font-size:1.1rem!important;}
      .praxys-case-main h3{font-size:1.45rem!important;}
      .praxys-case-main p{font-size:.95rem!important;}
      .praxys-case-receives li{font-size:.78rem!important;}
      .praxys-case-btn{font-size:.74rem;min-height:38px;}
    }
  `;
}

function praxysRefreshEnhancements(){
  praxysReplaceCopy();
  praxysEnsureStyles();
  praxysEnhanceCommercialLayout();
  praxysSimplifyServiceCards();
  praxysRenderConcreteCases();
  praxysBindAnchors();
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
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
    praxysMutationTimer = setTimeout(praxysRefreshEnhancements, 120);
  });
  observer.observe(document.documentElement, {childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:['lang','data-es','data-en']});
}catch(e){}