// Praxys Web — capa comercial final
// Ruta simple: problemas → servicios → casos concretos → método → publicaciones → contacto.
window.PRAXYS = window.PRAXYS || {};
window.PRAXYS.published = { texts:{}, images:{}, articles:null };
window.PRAXYS.local = JSON.parse(localStorage.getItem('praxys_content') || '{"texts":{},"images":{}}');

const PRAXYS_WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20ejecutiva%20sobre%20un%20problema%20que%20impacta%20varias%20%C3%A1reas%2C%20recursos%20u%20objetivos%20del%20negocio.';

function praxysLang(){return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es'}
function praxysNorm(s){return String(s||'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function praxysEsc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}

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
      title:'Cuando un problema operativo tiene varias causas y ninguna explicación alcanza',
      context:'La organización enfrenta paradas, demoras o pérdidas de desempeño que distintas áreas explican de manera diferente.',
      decision:'La gerencia necesita decidir dónde intervenir primero sin quedar atrapada entre diagnósticos parciales.',
      work:'Praxys reconstruye eventos, decisiones, restricciones, datos disponibles y criterios usados por cada área. Con esa evidencia arma una lectura causal integrada que muestra cómo se combinan factores técnicos, operativos, organizacionales y de gestión.',
      receives:['Mapa causal ejecutivo','Factores que sostienen el problema','Dependencias críticas','Prioridades de intervención','Criterios de seguimiento'],
      use:'Ayuda a convertir explicaciones dispersas en una agenda concreta de intervención y control.'
    },
    en:{
      label:'Case 01',
      title:'When an operational problem has several causes and no single explanation is enough',
      context:'The organization faces stoppages, delays, or performance losses that different areas explain in different ways.',
      decision:'Management needs to decide where to intervene first without being trapped between partial diagnoses.',
      work:'Praxys reconstructs events, decisions, constraints, available data, and the criteria used by each area. Based on that evidence, it builds an integrated causal reading showing how technical, operational, organizational, and management factors combine.',
      receives:['Executive causal map','Conditions sustaining the problem','Critical dependencies','Intervention priorities','Follow-up criteria'],
      use:'It turns dispersed explanations into a concrete intervention and control agenda.'
    }
  },
  'action-resource-prioritization': {
    es:{
      label:'Caso 02',
      title:'Cuando hay demasiadas acciones abiertas y no está claro cuáles mover primero',
      context:'La organización acumula acciones de auditorías, incidentes, mantenimiento, seguridad, calidad o gestión, pero los recursos no alcanzan para ejecutar todo a la vez.',
      decision:'La gerencia debe ordenar prioridades, proteger recursos críticos y justificar qué se hace ahora, qué se agrupa y qué se posterga.',
      work:'Praxys releva acciones abiertas, restricciones, costos aproximados, impacto esperado, dependencias y responsables. Luego construye una matriz de priorización con criterios explícitos y una secuencia de intervención realista.',
      receives:['Matriz de priorización','Criterios de decisión','Secuencia de implementación','Responsables','Riesgos temporalmente aceptados'],
      use:'Permite salir del listado interminable de acciones y concentrar recursos donde producen mayor efecto.'
    },
    en:{
      label:'Case 02',
      title:'When there are too many open actions and it is unclear what should move first',
      context:'The organization accumulates actions from audits, incidents, maintenance, safety, quality, or management reviews, but resources are not enough to execute everything at once.',
      decision:'Management must set priorities, protect critical resources, and justify what is done now, what is grouped, and what is deferred.',
      work:'Praxys reviews open actions, constraints, approximate costs, expected impact, dependencies, and owners. It then builds a prioritization matrix with explicit criteria and a realistic intervention sequence.',
      receives:['Prioritization matrix','Decision criteria','Implementation sequence','Owners','Temporarily accepted risks'],
      use:'It turns an endless action list into a focused resource-allocation agenda.'
    }
  },
  'decision-scenario-assessment': {
    es:{
      label:'Caso 03',
      title:'Cuando una inversión o cambio importante necesita una decisión defendible',
      context:'La dirección debe elegir entre alternativas con impactos distintos en continuidad, costo, riesgo, tiempos de implementación y capacidad interna.',
      decision:'La gerencia necesita comparar opciones con los mismos criterios antes de comprometer presupuesto, personas o cambios operativos.',
      work:'Praxys define alternativas, supuestos, restricciones, riesgos residuales y consecuencias esperadas. Después construye escenarios comparables para mostrar trade-offs, sensibilidad y condiciones de implementación.',
      receives:['Escenarios comparados','Supuestos críticos','Trade-offs explícitos','Riesgos residuales','Recomendación ejecutiva'],
      use:'Permite decidir con trazabilidad, no por urgencia, intuición o presión de un área específica.'
    },
    en:{
      label:'Case 03',
      title:'When an investment or major change needs a defensible decision',
      context:'Leadership must choose among alternatives with different effects on continuity, cost, risk, implementation time, and internal capability.',
      decision:'Management needs to compare options using the same criteria before committing budget, people, or operational changes.',
      work:'Praxys defines alternatives, assumptions, constraints, residual risks, and expected consequences. It then builds comparable scenarios showing trade-offs, sensitivity, and implementation conditions.',
      receives:['Compared scenarios','Critical assumptions','Explicit trade-offs','Residual risks','Executive recommendation'],
      use:'It supports traceable decisions, not decisions driven only by urgency, intuition, or pressure from one area.'
    }
  },
  'recurring-events-investigation': {
    es:{
      label:'Caso 04',
      title:'Cuando los mismos incidentes vuelven aunque ya se hayan definido acciones',
      context:'La organización cierra reportes y acciones correctivas, pero el mismo tipo de desvío, falla o incidente vuelve a aparecer en la operación real.',
      decision:'La gerencia necesita saber si el problema está en una barrera débil, una práctica operativa, una condición organizacional, una señal ignorada o una combinación de factores.',
      work:'Praxys reconstruye la línea de tiempo, decisiones, barreras, señales previas, roles, flujos de información y acciones implementadas. El análisis separa causas inmediatas de condiciones sistémicas que reproducen la recurrencia.',
      receives:['Línea de tiempo integrada','Mapa causal sistémico','Barreras degradadas','Condiciones organizacionales','Acciones de mayor impacto'],
      use:'Permite dejar de corregir síntomas y actuar sobre las condiciones que hacen que el problema vuelva.'
    },
    en:{
      label:'Case 04',
      title:'When the same incidents return even after corrective actions are defined',
      context:'The organization closes reports and corrective actions, but the same type of deviation, failure, or incident reappears in real operations.',
      decision:'Management needs to know whether the issue lies in a weak barrier, an operating practice, an organizational condition, an ignored signal, or a combination of factors.',
      work:'Praxys reconstructs the timeline, decisions, barriers, early signals, roles, information flows, and implemented actions. The analysis separates immediate causes from systemic conditions that reproduce recurrence.',
      receives:['Integrated timeline','Systemic causal map','Degraded barriers','Organizational conditions','Higher-impact actions'],
      use:'It helps move from correcting symptoms to acting on the conditions that make the problem return.'
    }
  },
  'governance-followup-design': {
    es:{
      label:'Caso 05',
      title:'Cuando una decisión aprobada pierde fuerza porque nadie la gobierna bien',
      context:'La dirección aprueba una estrategia, programa o plan de mejora, pero el avance queda repartido entre áreas sin reglas claras de seguimiento.',
      decision:'La gerencia necesita definir responsables, indicadores, frecuencia de revisión, reglas de escalamiento y criterios para verificar si la decisión produce efecto real.',
      work:'Praxys releva circuitos de decisión, reuniones, reportes, roles, indicadores y puntos de control. Luego diseña un mecanismo de gobernanza con tablero ejecutivo, responsables y rutinas de revisión.',
      receives:['Modelo de gobernanza','Tablero ejecutivo','Roles y responsabilidades','Rutinas de revisión','Reglas de escalamiento'],
      use:'Evita que una buena decisión se diluya por falta de seguimiento, control o coordinación interáreas.'
    },
    en:{
      label:'Case 05',
      title:'When an approved decision loses traction because no one governs it well',
      context:'Leadership approves a strategy, program, or improvement plan, but progress is distributed across areas without clear follow-up rules.',
      decision:'Management needs to define owners, indicators, review frequency, escalation rules, and criteria to verify whether the decision produces real effects.',
      work:'Praxys reviews decision circuits, meetings, reports, roles, indicators, and control points. It then designs a governance mechanism with an executive dashboard, owners, and review routines.',
      receives:['Governance model','Executive dashboard','Roles and responsibilities','Review routines','Escalation rules'],
      use:'It prevents a good decision from diluting due to weak follow-up, control, or cross-area coordination.'
    }
  },
  'executive-training-transfer': {
    es:{
      label:'Caso 06',
      title:'Cuando los equipos necesitan un criterio común para analizar y decidir',
      context:'Las áreas técnicas, operativas y gerenciales discuten los mismos problemas con lenguajes, criterios y prioridades diferentes.',
      decision:'La gerencia necesita instalar una forma compartida de analizar causalidad, priorizar acciones, comparar escenarios y sostener decisiones.',
      work:'Praxys diseña workshops sobre casos reales de la organización. Se trabajan mapas causales, priorización, escenarios, criterios de decisión y seguimiento ejecutivo usando información propia del cliente.',
      receives:['Workshop aplicado','Guías de trabajo','Plantillas reutilizables','Criterios compartidos','Herramientas transferidas'],
      use:'Instala lenguaje común, capacidad analítica y disciplina de seguimiento para decisiones futuras.'
    },
    en:{
      label:'Case 06',
      title:'When teams need shared criteria to analyze and decide',
      context:'Technical, operational, and management areas discuss the same problems with different language, criteria, and priorities.',
      decision:'Management needs to install a shared way to analyze causality, prioritize actions, compare scenarios, and sustain decisions.',
      work:'Praxys designs workshops around the organization’s real cases. Teams work on causal maps, prioritization, scenarios, decision criteria, and executive follow-up using the client’s own information.',
      receives:['Applied workshop','Work guides','Reusable templates','Shared criteria','Transferred tools'],
      use:'It installs shared language, analytical capability, and follow-up discipline for future decisions.'
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
        <h2>${lang === 'en' ? 'Typical situations where Praxys can be hired' : 'Situaciones típicas donde Praxys puede intervenir'}</h2>
        <p class="praxys-lead">${lang === 'en' ? 'Each case shows the operational situation, the pending decision, the work performed, and the concrete deliverables for leadership.' : 'Cada caso muestra la situación operativa, la decisión pendiente, el trabajo realizado y los entregables concretos para la dirección.'}</p>
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