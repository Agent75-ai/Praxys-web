// Praxys Web — consolidated lightweight renderer
(function(){
  window.PRAXYS = window.PRAXYS || {};

  const WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20ejecutiva%20sobre%20un%20problema%20que%20impacta%20varias%20%C3%A1reas%2C%20recursos%20u%20objetivos%20del%20negocio.';
  const PHOTOS = {
    industrial: 'https://images.unsplash.com/photo-1780752849375-fd8df4632dae?auto=format&fit=crop&w=900&q=72',
    factory: 'https://images.unsplash.com/photo-1767706508497-a747426a7e14?auto=format&fit=crop&w=900&q=72',
    collab: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=72',
    board: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=72',
    data: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=72',
    scenarios: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=72',
    followup: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=72',
    workshop: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=72',
    table: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=72'
  };

  const SERVICES = {
    'combined-risk-diagnosis': {
      photo: PHOTOS.data,
      es:{title:'Diagnóstico ejecutivo de riesgos combinados', line:'Ordena causas, dependencias y efectos cuando el problema cruza áreas.', receive:'Mapa causal, prioridades de intervención y criterios de seguimiento.', detail:'Integramos datos, eventos, restricciones y criterios de distintas áreas para construir una lectura común del problema y orientar decisiones concretas.'},
      en:{title:'Executive diagnosis of combined risks', line:'Structures causes, dependencies, and effects when the problem crosses areas.', receive:'Causal map, intervention priorities, and follow-up criteria.', detail:'We integrate data, events, constraints, and criteria from different areas to build a shared reading of the problem and guide concrete decisions.'}
    },
    'action-resource-prioritization': {
      photo: PHOTOS.table,
      es:{title:'Priorización de acciones y recursos', line:'Convierte carteras extensas en una secuencia ejecutable con recursos limitados.', receive:'Matriz de priorización, responsables y condiciones de implementación.', detail:'Ayudamos a decidir qué acciones ejecutar primero, cuáles agrupar, cuáles postergar y qué riesgos quedan aceptados temporalmente.'},
      en:{title:'Prioritization of actions and resources', line:'Turns extensive action portfolios into an executable sequence under limited resources.', receive:'Prioritization matrix, owners, and implementation conditions.', detail:'We help decide what goes first, what can be grouped, what waits, and which risks are temporarily accepted.'}
    },
    'decision-scenario-assessment': {
      photo: PHOTOS.factory,
      es:{title:'Evaluación de escenarios de decisión', line:'Compara alternativas antes de comprometer inversión, recursos o cambios operativos.', receive:'Escenarios comparados, trade-offs, riesgos residuales y recomendación.', detail:'Estructuramos escenarios comparables, explicitamos supuestos y analizamos consecuencias sobre continuidad, costos, riesgo residual y capacidad de seguimiento.'},
      en:{title:'Decision scenario assessment', line:'Compares alternatives before committing investment, resources, or operational changes.', receive:'Compared scenarios, trade-offs, residual risks, and recommendation.', detail:'We structure comparable scenarios, make assumptions explicit, and analyze consequences on continuity, costs, residual risk, and follow-up capability.'}
    },
    'recurring-events-investigation': {
      photo: PHOTOS.industrial,
      es:{title:'Investigación sistémica de eventos recurrentes', line:'Identifica por qué fallas o incidentes vuelven aunque existan acciones correctivas.', receive:'Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.', detail:'Reconstruimos eventos, decisiones, barreras, señales, presiones y responsabilidades para separar causas inmediatas de condiciones que sostienen la recurrencia.'},
      en:{title:'Systemic investigation of recurring events', line:'Identifies why failures or incidents reappear despite corrective actions.', receive:'Timeline, degraded barriers, causal map, and higher-impact actions.', detail:'We reconstruct events, decisions, barriers, signals, pressures, and responsibilities to separate immediate causes from conditions that sustain recurrence.'}
    },
    'governance-followup-design': {
      photo: PHOTOS.followup,
      es:{title:'Diseño de gobernanza y seguimiento', line:'Hace que decisiones aprobadas tengan responsables, indicadores y reglas de escalamiento.', receive:'Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.', detail:'Diseñamos mecanismos de seguimiento para que una decisión no se diluya entre áreas y pueda verificarse con indicadores, responsables y reglas claras.'},
      en:{title:'Governance and follow-up design', line:'Gives approved decisions owners, indicators, and escalation rules.', receive:'Executive dashboard, review routine, roles, and escalation rules.', detail:'We design follow-up mechanisms so decisions do not dilute across areas and can be verified through indicators, owners, and clear rules.'}
    },
    'executive-training-transfer': {
      photo: PHOTOS.workshop,
      es:{title:'Capacitación ejecutiva y transferencia metodológica', line:'Instala criterios comunes para analizar problemas reales y decidir entre áreas.', receive:'Workshops aplicados, plantillas y herramientas transferibles.', detail:'Trabajamos sobre casos reales del cliente para transferir criterios, plantillas y rutinas que queden instaladas en el equipo.'},
      en:{title:'Executive training and method transfer', line:'Installs shared criteria to analyze real problems and decide across areas.', receive:'Applied workshops, templates, and transferable tools.', detail:'We work on the client’s real cases to transfer criteria, templates, and routines that remain installed in the team.'}
    }
  };

  const CASES = {
    'combined-risk-diagnosis': {
      service:'combined-risk-diagnosis', photo:PHOTOS.industrial,
      es:{label:'Caso 01', title:'El problema se repite y cada área explica una causa distinta', situation:'Cada área interpreta el problema desde su propia evidencia, responsabilidades y restricciones.', decision:'Construir una lectura común, acordar dónde intervenir primero y evitar acciones inconexas.', work:'Praxys reconstruye eventos, datos, decisiones previas, restricciones y criterios de cada área. Luego integra esa evidencia en un mapa causal para distinguir causas inmediatas, condiciones sistémicas y puntos de intervención.', deliver:['Mapa causal','Dependencias críticas','Puntos de intervención','Prioridades'], use:'Pasar de explicaciones parciales a una decisión compartida y controlable.'},
      en:{label:'Case 01', title:'The problem keeps recurring and each area explains a different cause', situation:'Each area interprets the problem from its own evidence, responsibilities, and constraints.', decision:'Build a shared reading, agree where to intervene first, and avoid disconnected actions.', work:'Praxys reconstructs events, data, previous decisions, constraints, and the criteria used by each area. It then integrates that evidence into a causal map to distinguish immediate causes, systemic conditions, and intervention points.', deliver:['Causal map','Critical dependencies','Intervention points','Priorities'], use:'Move from partial explanations to a shared and controllable decision.'}
    },
    'action-resource-prioritization': {
      service:'action-resource-prioritization', photo:PHOTOS.board,
      es:{label:'Caso 02', title:'Hay demasiadas acciones abiertas y poca capacidad para ejecutarlas', situation:'Las acciones compiten por las mismas personas, presupuesto, tiempo y capacidad de gestión.', decision:'Ordenar qué ejecutar primero, qué agrupar, qué postergar y qué riesgo aceptar temporalmente.', work:'Praxys releva acciones, restricciones, impacto esperado, dependencias y responsables. Después construye una matriz de priorización con criterios explícitos y una secuencia realista de implementación.', deliver:['Matriz de priorización','Secuencia ejecutable','Responsables','Criterios'], use:'Concentrar recursos donde generan mayor reducción de riesgo o recuperación de desempeño.'},
      en:{label:'Case 02', title:'Too many actions are open and execution capacity is limited', situation:'Actions compete for the same people, budget, time, and management capacity.', decision:'Decide what goes first, what can be grouped, what waits, and which risks are temporarily accepted.', work:'Praxys reviews actions, constraints, expected impact, dependencies, and owners. It then builds a prioritization matrix with explicit criteria and a realistic implementation sequence.', deliver:['Prioritization matrix','Executable sequence','Owners','Criteria'], use:'Focus resources where they most reduce risk or recover performance.'}
    },
    'decision-scenario-assessment': {
      service:'decision-scenario-assessment', photo:PHOTOS.factory,
      es:{label:'Caso 03', title:'Hay que invertir, pero no están claras las consecuencias', situation:'La dirección debe comprometer recursos sin una comparación suficiente de impactos y riesgos residuales.', decision:'Comparar alternativas con los mismos criterios y elegir una opción defendible.', work:'Praxys define escenarios comparables, explicita supuestos y analiza consecuencias sobre continuidad, disponibilidad, costos, riesgo residual y capacidad de seguimiento.', deliver:['Escenarios comparados','Trade-offs','Supuestos críticos','Recomendación'], use:'Decidir con trazabilidad, no por urgencia ni por una lectura parcial.'},
      en:{label:'Case 03', title:'Investment is needed, but the consequences are not clear', situation:'Leadership must commit resources without a sufficient comparison of impacts and residual risks.', decision:'Compare alternatives with the same criteria and choose a defensible option.', work:'Praxys defines comparable scenarios, makes assumptions explicit, and analyzes consequences on continuity, availability, costs, residual risk, and follow-up capability.', deliver:['Compared scenarios','Trade-offs','Critical assumptions','Recommendation'], use:'Decide with traceability, not urgency pressure or a partial reading.'}
    },
    'recurring-events-investigation': {
      service:'recurring-events-investigation', photo:PHOTOS.industrial,
      es:{label:'Caso 04', title:'Las acciones se cierran, pero los incidentes vuelven', situation:'Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.', decision:'Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto.', work:'Praxys reconstruye la secuencia de eventos, decisiones, barreras, señales, presiones, demoras y responsabilidades. El análisis separa causas inmediatas de condiciones sistémicas.', deliver:['Línea de tiempo','Barreras degradadas','Mapa causal','Acciones de impacto'], use:'Dejar de corregir síntomas aislados y actuar sobre las condiciones que reproducen el evento.'},
      en:{label:'Case 04', title:'Actions are closed, but incidents keep coming back', situation:'Reports show closed events, but the pattern reappears in real operation.', decision:'Determine which conditions sustain recurrence and which intervention has the highest effect.', work:'Praxys reconstructs event sequences, decisions, barriers, signals, pressures, delays, and responsibilities. The analysis separates immediate causes from systemic conditions.', deliver:['Timeline','Degraded barriers','Causal map','Impact actions'], use:'Stop correcting isolated symptoms and act on the conditions that reproduce the event.'}
    },
    'governance-followup-design': {
      service:'governance-followup-design', photo:PHOTOS.followup,
      es:{label:'Caso 05', title:'La decisión está aprobada, pero el seguimiento se diluye entre áreas', situation:'La ejecución queda repartida sin suficiente claridad sobre responsabilidades, indicadores y escalamiento.', decision:'Definir cómo se gobierna la decisión y cuándo deben escalarse los desvíos.', work:'Praxys releva circuitos de decisión, reuniones, reportes, roles e indicadores. Luego diseña un mecanismo de seguimiento con tablero, frecuencia de revisión y reglas de escalamiento.', deliver:['Modelo de gobernanza','Tablero ejecutivo','Roles','Reglas de escalamiento'], use:'Convertir una decisión aprobada en un proceso gestionable y verificable.'},
      en:{label:'Case 05', title:'The decision is approved, but follow-up dilutes across areas', situation:'Execution is distributed without enough clarity on responsibilities, indicators, and escalation.', decision:'Define how the decision is governed and when deviations must be escalated.', work:'Praxys reviews decision circuits, meetings, reports, roles, and indicators. It then designs a follow-up mechanism with dashboard, review frequency, and escalation rules.', deliver:['Governance model','Executive dashboard','Roles','Escalation rules'], use:'Turn an approved decision into a manageable and verifiable process.'}
    },
    'executive-training-transfer': {
      service:'executive-training-transfer', photo:PHOTOS.workshop,
      es:{label:'Caso 06', title:'Los equipos analizan el mismo problema con criterios distintos', situation:'Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.', decision:'Instalar una forma común de analizar, priorizar y sostener decisiones.', work:'Praxys diseña workshops sobre casos reales de la organización. Se trabajan mapas causales, priorización, escenarios, roles de decisión y rutinas de seguimiento.', deliver:['Workshops aplicados','Guías','Plantillas','Herramientas transferibles'], use:'Alinear criterios y dejar capacidad instalada para problemas futuros.'},
      en:{label:'Case 06', title:'Teams analyze the same problem with different criteria', situation:'Technical areas, operations, and management discuss with different language and criteria.', decision:'Install a shared way to analyze, prioritize, and sustain decisions.', work:'Praxys designs workshops based on the organization’s real cases. Teams work on causal maps, prioritization, scenarios, decision roles, and follow-up routines.', deliver:['Applied workshops','Guides','Templates','Transferable tools'], use:'Align criteria and leave installed capability for future problems.'}
    }
  };

  const PROBLEMS = {
    es:[
      {photo:PHOTOS.industrial, title:'El riesgo se propaga entre áreas', text:'Un cambio o falla local termina afectando recursos, continuidad, costos o decisiones de dirección.'},
      {photo:PHOTOS.table, title:'Hay prioridades que compiten por los mismos recursos', text:'Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.'},
      {photo:PHOTOS.data, title:'Los problemas vuelven aunque se hayan cerrado acciones', text:'Las soluciones puntuales no modifican las condiciones que reproducen el patrón.'}
    ],
    en:[
      {photo:PHOTOS.industrial, title:'Risk propagates across areas', text:'A local change or failure ends up affecting resources, continuity, costs, or leadership decisions.'},
      {photo:PHOTOS.table, title:'Priorities compete for the same resources', text:'Everything seems important, but not everything can be executed at the same time or with the same capacity.'},
      {photo:PHOTOS.data, title:'Problems return after actions are closed', text:'Local fixes do not change the conditions that reproduce the pattern.'}
    ]
  };

  let articles = [];
  let lastRenderKey = '';

  function lang(){ return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es'; }
  function esc(s){ return String(s || '').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
  function img(src, alt){ return `<figure class="px-photo"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"></figure>`; }

  async function loadContent(){
    try{
      const r = await fetch('content.json', { cache:'no-store' });
      if(r.ok){
        const data = await r.json();
        articles = Array.isArray(data.articles) ? data.articles : [];
      }
    }catch(e){}
    render(true);
  }

  function render(force){
    const l = lang();
    const key = l + ':' + articles.length + ':' + document.body.dataset.praxysShell;
    if(!force && key === lastRenderKey) return;
    lastRenderKey = key;
    document.body.classList.add('praxys-clean');
    installStyles();
    renderHero(l);
    renderProblems(l);
    renderServices(l);
    renderCta(l);
    renderCases(l);
    renderMethod(l);
    renderPapers(l);
    renderContact(l);
    bindOnce();
  }

  window.PRAXYS.refresh = function(){ render(true); };
  window.PRAXYS.apply = window.PRAXYS.refresh;

  document.addEventListener('DOMContentLoaded', function(){ render(true); loadContent(); });
  window.addEventListener('load', function(){ render(false); });
  document.addEventListener('praxys:lang', function(){ render(true); });

  function renderHero(l){
    const h1 = document.querySelector('.hero h1');
    const sub = document.querySelector('.hero-sub');
    const cta = document.querySelector('.hero .btn-primary');
    if(h1) h1.textContent = l === 'en' ? 'Executive decisions for problems that cross areas' : 'Decisiones ejecutivas para problemas que cruzan áreas';
    if(sub) sub.textContent = l === 'en' ? 'Praxys structures evidence, models relationships, prioritizes alternatives, and helps sustain decisions in complex systems.' : 'Praxys ordena evidencia, modela relaciones, prioriza alternativas y ayuda a sostener decisiones en sistemas complejos.';
    if(cta) cta.textContent = l === 'en' ? 'Schedule conversation' : 'Agendar conversación';
  }

  function setHead(id, eyebrow, title, lead){
    const sec = document.getElementById(id); if(!sec) return null;
    const e = sec.querySelector('.eyebrow');
    const h = sec.querySelector('h2');
    const p = sec.querySelector('.praxys-lead');
    if(e) e.textContent = eyebrow;
    if(h) h.textContent = title;
    if(p) p.textContent = lead;
    return sec;
  }

  function renderProblems(l){
    const sec = setHead('problemas', l==='en'?'Management problems':'Problemas de gestión', l==='en'?'Problems that block management decisions':'Problemas que traban decisiones de gestión', l==='en'?'Recurring situations where evidence, areas, resources, and follow-up are misaligned.':'Situaciones recurrentes donde evidencia, áreas, recursos y seguimiento quedan desalineados.');
    const grid = sec && sec.querySelector('.praxys-grid'); if(!grid) return;
    grid.className = 'praxys-grid px-problem-grid';
    grid.innerHTML = PROBLEMS[l].map((p,i)=>`<article class="px-card px-problem-card">${img(p.photo,p.title)}<div class="px-body"><span class="px-kicker">${String(i+1).padStart(2,'0')}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></article>`).join('');
  }

  function renderServices(l){
    const sec = setHead('servicios', l==='en'?'Services':'Servicios', l==='en'?'Services designed around decisions':'Servicios diseñados alrededor de decisiones', l==='en'?'Each service is a compact intervention with a concrete executive output.':'Cada servicio es una intervención acotada con un resultado ejecutivo concreto.');
    const grid = sec && sec.querySelector('.praxys-grid'); if(!grid) return;
    grid.className = 'praxys-grid px-service-grid';
    grid.innerHTML = Object.entries(SERVICES).map(([id,base])=>{const s=base[l];return `<article class="px-card px-service-card">${img(base.photo,s.title)}<div class="px-body"><h3>${esc(s.title)}</h3><p>${esc(s.line)}</p><div class="px-receive"><strong>${l==='en'?'Leadership receives':'La dirección recibe'}</strong><span>${esc(s.receive)}</span></div><button type="button" class="px-btn" data-open-service="${id}">${l==='en'?'View service detail':'Ver detalle del servicio'}</button></div></article>`;}).join('');
  }

  function renderCta(l){
    const sec = document.getElementById('praxys-mid-cta'); if(!sec) return;
    sec.innerHTML = `<div class="wrap px-mid-inner"><div><span>${l==='en'?'Executive conversation':'Conversación ejecutiva'}</span><h2>${l==='en'?'Do you have a decision blocked between areas?':'¿Tenés una decisión trabada entre áreas?'}</h2><p>${l==='en'?'In 30 minutes we can identify the decision, involved areas, and the most useful deliverable.':'En 30 minutos identificamos la decisión pendiente, las áreas involucradas y el entregable más útil.'}</p></div><a href="${WHATSAPP}" target="_blank" rel="noopener">${l==='en'?'Schedule conversation':'Agendar conversación'}</a></div>`;
  }

  function renderCases(l){
    const sec = setHead('casos-concretos', l==='en'?'Concrete cases':'Casos concretos', l==='en'?'Problems where Praxys helps teams decide and move forward':'Problemas donde Praxys ayuda a decidir y avanzar', l==='en'?'Short examples first. Full detail opens only when needed.':'Primero, ejemplos breves. El detalle completo se abre solo cuando hace falta.');
    const grid = sec && sec.querySelector('.praxys-grid'); if(!grid) return;
    grid.className = 'praxys-grid px-cases-grid';
    grid.innerHTML = Object.entries(CASES).map(([id,base])=>{const c=base[l];return `<article id="case-${id}" class="px-card px-case-card">${img(base.photo,c.title)}<div class="px-body"><span class="px-kicker">${esc(c.label)}</span><h3>${esc(c.title)}</h3><div class="px-mini"><p><strong>${l==='en'?'Situation':'Situación'}</strong>${esc(c.situation)}</p><p><strong>${l==='en'?'Decision':'Decisión'}</strong>${esc(c.decision)}</p></div><div class="px-chip-row">${c.deliver.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('')}</div><button type="button" class="px-btn" data-open-case="${id}">${l==='en'?'View case detail':'Ver detalle del caso'}</button></div></article>`;}).join('');
  }

  function renderMethod(l){
    const sec = setHead('metodo', l==='en'?'Method':'Método', l==='en'?'How Praxys works':'Cómo trabaja Praxys', l==='en'?'A compact path from dispersed information to governed decisions.':'Un recorrido compacto desde información dispersa hacia decisiones gobernadas.');
    const grid = sec && sec.querySelector('.praxys-grid'); if(!grid) return;
    const steps = l==='en' ? [['01','Structure evidence','Separate facts, assumptions, constraints, and decisions.'],['02','Model relationships','Show how technical, operational, organizational, and economic factors combine.'],['03','Prioritize decisions','Compare alternatives and sequence actions with explicit criteria.'],['04','Install follow-up','Define owners, indicators, review rhythm, and escalation rules.']] : [['01','Ordenar evidencia','Separar hechos, supuestos, restricciones y decisiones.'],['02','Modelar relaciones','Mostrar cómo se combinan factores técnicos, operativos, organizacionales y económicos.'],['03','Priorizar decisiones','Comparar alternativas y secuenciar acciones con criterios explícitos.'],['04','Instalar seguimiento','Definir responsables, indicadores, ritmo de revisión y reglas de escalamiento.']];
    grid.className = 'praxys-grid px-method-grid';
    grid.innerHTML = steps.map(x=>`<article class="px-card px-step"><span class="px-kicker">${x[0]}</span><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></article>`).join('');
  }

  function renderPapers(l){
    const sec = setHead('articulos', l==='en'?'Publications':'Publicaciones', l==='en'?'Technical authority behind the method':'Autoridad técnica detrás del método', l==='en'?'Selected papers and articles that support Praxys’ systems-based approach.':'Publicaciones seleccionadas que respaldan el enfoque sistémico de Praxys.');
    const grid = sec && sec.querySelector('.praxys-grid'); if(!grid) return;
    const expanded = sec.classList.contains('px-expanded');
    const list = expanded ? articles : articles.slice(0,3);
    grid.className = 'praxys-grid px-paper-grid';
    grid.innerHTML = list.map(a=>`<article class="px-card px-paper"><div class="px-body"><span class="px-kicker">${esc((l==='en'?a.type_en:a.type)||a.type||'Paper')} · ${esc(a.year||'')}</span><h3>${esc((l==='en'?a.title_en:a.title)||a.title)}</h3><p>${esc((l==='en'?a.desc_en:a.desc)||a.desc)}</p><p class="px-meta">${esc(a.author||'')}</p>${a.link?`<a class="px-link" href="${esc(a.link)}" target="_blank" rel="noopener">${l==='en'?'Open publication':'Abrir publicación'}</a>`:''}</div></article>`).join('');
    let btn = sec.querySelector('.px-papers-toggle');
    if(articles.length > 3 && !btn){ btn=document.createElement('button'); btn.type='button'; btn.className='px-papers-toggle'; btn.addEventListener('click',()=>{sec.classList.toggle('px-expanded'); renderPapers(lang());}); sec.querySelector('.wrap')?.appendChild(btn); }
    if(btn) btn.textContent = expanded ? (l==='en'?'Show fewer publications':'Ver menos publicaciones') : (l==='en'?'View more publications':'Ver más publicaciones');
  }

  function renderContact(l){
    const sec = setHead('contacto', l==='en'?'Contact':'Contacto', l==='en'?'Start with a focused conversation':'Empezar con una conversación concreta', l==='en'?'In one short conversation we identify the decision, the areas involved, and the deliverable that would help.':'En una conversación breve identificamos la decisión, las áreas involucradas y el entregable que podría ayudar.');
    const box = sec && sec.querySelector('.contact-box'); if(!box) return;
    box.innerHTML = `<a class="px-contact-btn" href="${WHATSAPP}" target="_blank" rel="noopener">${l==='en'?'Schedule conversation by WhatsApp':'Agendar conversación por WhatsApp'}</a><p>${l==='en'?'No long form. A focused first conversation is enough to frame the problem.':'Sin formulario largo. Una primera conversación enfocada alcanza para encuadrar el problema.'}</p>`;
  }

  function bindOnce(){
    if(window.PRAXYS.bound) return; window.PRAXYS.bound = true;
    document.addEventListener('click', function(e){
      const service = e.target.closest('[data-open-service]');
      const kase = e.target.closest('[data-open-case]');
      const close = e.target.closest('[data-px-close]');
      if(close || e.target.id === 'px-modal'){ closeModal(); return; }
      if(service) openService(service.dataset.openService);
      if(kase) openCase(kase.dataset.openCase);
    });
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
  }

  function modal(){ let m=document.getElementById('px-modal'); if(!m){m=document.createElement('div');m.id='px-modal';m.className='px-modal';document.body.appendChild(m);} return m; }
  function openService(id){ const l=lang(), base=SERVICES[id]; if(!base)return; const s=base[l]; const m=modal(); m.innerHTML=`<div class="px-modal-box"><button type="button" class="px-close" data-px-close="1">×</button>${img(base.photo,s.title)}<div class="px-modal-content"><span class="px-kicker">${l==='en'?'Service detail':'Detalle del servicio'}</span><h2>${esc(s.title)}</h2><p class="px-modal-lead">${esc(s.detail)}</p><h4>${l==='en'?'Leadership receives':'La dirección recibe'}</h4><p>${esc(s.receive)}</p><a class="px-modal-cta" href="${WHATSAPP}" target="_blank" rel="noopener">${l==='en'?'Schedule conversation':'Agendar conversación'}</a></div></div>`; m.classList.add('open'); document.body.classList.add('px-lock'); }
  function openCase(id){ const l=lang(), base=CASES[id]; if(!base)return; const c=base[l]; const m=modal(); m.innerHTML=`<div class="px-modal-box"><button type="button" class="px-close" data-px-close="1">×</button>${img(base.photo,c.title)}<div class="px-modal-content"><span class="px-kicker">${esc(c.label)}</span><h2>${esc(c.title)}</h2><p class="px-modal-lead">${esc(c.situation)}</p><div class="px-modal-grid"><div><h4>${l==='en'?'Decision':'Decisión'}</h4><p>${esc(c.decision)}</p></div><div><h4>${l==='en'?'How Praxys works':'Cómo trabaja Praxys'}</h4><p>${esc(c.work)}</p></div></div><h4>${l==='en'?'Concrete deliverables':'Entregables concretos'}</h4><div class="px-chip-row big">${c.deliver.map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="px-use"><strong>${l==='en'?'Useful for':'Sirve para'}:</strong> ${esc(c.use)}</div><a class="px-modal-cta" href="${WHATSAPP}" target="_blank" rel="noopener">${l==='en'?'Discuss this case':'Conversar este caso'}</a></div></div>`; m.classList.add('open'); document.body.classList.add('px-lock'); }
  function closeModal(){ const m=document.getElementById('px-modal'); if(m){m.classList.remove('open');m.innerHTML='';} document.body.classList.remove('px-lock'); }

  function installStyles(){
    let s = document.getElementById('praxys-clean-styles');
    if(!s){ s=document.createElement('style'); s.id='praxys-clean-styles'; document.head.appendChild(s); }
    s.textContent = `
      :root{--px-navy:#102033;--px-blue:#16315e;--px-ink:#26384d;--px-muted:#637287;--px-line:rgba(16,32,51,.12);--px-bg:#f6f9fc;--px-orange:#E8632A;--px-amber:#F2C94C;--px-radius:22px;}
      *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:Inter,Manrope,Segoe UI,Arial,sans-serif;color:var(--px-ink);background:#fff;} .wrap{width:min(1140px,calc(100% - 40px));margin:0 auto}.navbar{position:sticky;top:0;z-index:1000;background:rgba(255,255,255,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--px-line)}.nav-inner{min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{font-weight:950;letter-spacing:.08em;color:var(--px-navy);text-decoration:none}.nav-menu{display:flex;align-items:center;gap:18px;list-style:none;margin:0;padding:0}.nav-menu a{color:var(--px-ink);text-decoration:none;font-size:.86rem;font-weight:800}.lang-btn{border:1px solid var(--px-line);background:#fff;border-radius:999px;padding:7px 10px;font-weight:900;cursor:pointer}.lang-btn.active{background:var(--px-navy);color:#fff}.hero{position:relative;isolation:isolate;background:linear-gradient(135deg,rgba(16,32,51,.94),rgba(22,49,94,.84)),url('${PHOTOS.collab}') center/cover;min-height:560px;display:flex;align-items:center;color:#fff}.hero .wrap{padding:84px 0}.hero .eyebrow{color:var(--px-amber)!important}.hero h1{font-size:clamp(2.5rem,6vw,5.2rem);line-height:.96;margin:10px 0 18px;max-width:920px;letter-spacing:-.055em}.hero-sub{font-size:clamp(1.05rem,1.9vw,1.35rem);line-height:1.5;color:#d8e4f1;max-width:760px}.btn-primary,.px-contact-btn{display:inline-flex;align-items:center;justify-content:center;margin-top:24px;min-height:48px;padding:0 22px;border-radius:999px;background:var(--px-orange);color:#fff!important;text-decoration:none;font-weight:950;letter-spacing:.04em;text-transform:uppercase;font-size:.78rem}.praxys-section{padding:56px 0}.serv-head{text-align:center;max-width:780px;margin:0 auto 28px}.eyebrow{color:var(--px-orange);font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;font-weight:950}.serv-head h2{font-size:clamp(1.9rem,3.4vw,3rem);line-height:1.05;color:var(--px-navy);margin:8px 0 10px;letter-spacing:-.035em}.praxys-lead{color:var(--px-muted);font-size:1.04rem;line-height:1.55;margin:0}.praxys-grid{display:grid;gap:20px}.px-photo{margin:0;aspect-ratio:16/9;overflow:hidden;background:#e8eef5}.px-photo img{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.92) contrast(1.02)}.px-card{background:#fff;border:1px solid var(--px-line);border-radius:var(--px-radius);overflow:hidden;box-shadow:0 18px 46px rgba(16,32,51,.07)}.px-body{padding:18px;display:flex;flex-direction:column;gap:10px}.px-kicker{color:var(--px-orange);font-size:.7rem;font-weight:950;letter-spacing:.13em;text-transform:uppercase}.px-card h3{color:var(--px-navy);font-size:1.18rem;line-height:1.18;margin:0}.px-card p{color:var(--px-muted);font-size:.94rem;line-height:1.48;margin:0}.px-problem-grid,.px-service-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.px-problem-card .px-photo,.px-service-card .px-photo{height:132px;aspect-ratio:auto}.px-receive{padding:12px;border-radius:14px;background:var(--px-bg);border:1px solid var(--px-line)}.px-receive strong{display:block;color:var(--px-orange);font-size:.68rem;letter-spacing:.11em;text-transform:uppercase;margin-bottom:4px}.px-receive span{font-size:.88rem;line-height:1.4;font-weight:750;color:var(--px-ink)}.px-btn,.px-papers-toggle{margin-top:auto;min-height:42px;border:0;border-radius:999px;background:var(--px-navy);color:#fff;padding:0 16px;font-size:.74rem;font-weight:950;letter-spacing:.05em;text-transform:uppercase;cursor:pointer}.px-btn:hover,.px-papers-toggle:hover{background:var(--px-orange)}#problemas{background:var(--px-navy)}#problemas h2{color:#fff}#problemas .praxys-lead,#problemas .px-card p{color:#cad8e8}#problemas .eyebrow{color:var(--px-amber)}#problemas .px-card{background:rgba(255,255,255,.055);border-color:rgba(242,201,76,.18);box-shadow:none}#problemas .px-card h3{color:#fff}.px-mid-cta{background:linear-gradient(135deg,#102033,#162b45);color:#fff;padding:32px 0}.px-mid-inner{display:flex;align-items:center;justify-content:space-between;gap:28px}.px-mid-inner span{color:var(--px-amber);font-size:.72rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}.px-mid-inner h2{color:#fff;font-size:clamp(1.55rem,2.7vw,2.2rem);margin:6px 0}.px-mid-inner p{color:#cad8e8;max-width:720px;margin:0}.px-mid-inner a,.px-modal-cta{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;color:#fff;background:var(--px-orange);border-radius:999px;min-height:44px;padding:0 18px;font-size:.76rem;font-weight:950;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}#casos-concretos,#articulos{background:var(--px-bg)}.px-cases-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.px-case-card{display:grid;grid-template-columns:230px 1fr}.px-case-card .px-photo{height:100%;min-height:260px;aspect-ratio:auto}.px-case-card h3{font-size:1.28rem}.px-mini{display:grid;grid-template-columns:1fr 1fr;gap:12px}.px-mini p{padding:12px;border:1px solid var(--px-line);border-radius:14px;background:#fff}.px-mini strong{display:block;color:var(--px-orange);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px}.px-chip-row{display:flex;flex-wrap:wrap;gap:7px}.px-chip-row span{border-radius:999px;background:rgba(232,99,42,.09);color:#A9461D;padding:6px 10px;font-size:.76rem;font-weight:850}.px-method-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.px-step{box-shadow:none;padding:22px}.px-paper-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.px-meta{font-size:.84rem!important}.px-link{color:var(--px-orange);font-weight:900;text-decoration:none}.px-papers-toggle{display:flex;margin:22px auto 0;background:#fff;color:var(--px-navy);border:1.5px solid var(--px-navy)}.contact-box{text-align:center;max-width:720px;margin:0 auto}.contact-box p{color:var(--px-muted)}.px-modal{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(4,10,18,.68);backdrop-filter:blur(7px)}.px-modal.open{display:flex}.px-modal-box{position:relative;width:min(980px,100%);max-height:min(86vh,860px);overflow:auto;background:#fff;border-radius:28px;box-shadow:0 34px 100px rgba(0,0,0,.34);display:grid;grid-template-columns:360px 1fr}.px-modal-box .px-photo{height:100%;min-height:420px}.px-modal-content{padding:34px}.px-close{position:absolute;right:16px;top:16px;z-index:3;width:40px;height:40px;border:0;border-radius:999px;background:var(--px-navy);color:#fff;font-size:1.4rem;cursor:pointer}.px-modal-content h2{font-size:clamp(1.65rem,3vw,2.45rem);margin:8px 46px 12px 0;color:var(--px-navy)}.px-modal-lead{font-size:1.05rem;color:var(--px-muted);line-height:1.55}.px-modal-content h4{margin:16px 0 6px;color:var(--px-orange);font-size:.72rem;font-weight:950;letter-spacing:.12em;text-transform:uppercase}.px-modal-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.px-use{margin-top:16px;border-radius:16px;background:var(--px-bg);border:1px solid var(--px-line);padding:14px}.px-lock{overflow:hidden}@media(max-width:1050px){.px-problem-grid,.px-service-grid,.px-paper-grid{grid-template-columns:1fr 1fr}.px-cases-grid{grid-template-columns:1fr}.px-method-grid{grid-template-columns:1fr 1fr}}@media(max-width:760px){.wrap{width:min(100% - 28px,1140px)}.nav-menu{gap:10px;flex-wrap:wrap;justify-content:flex-end}.nav-menu a{font-size:.78rem}.hero{min-height:500px}.hero .wrap{padding:64px 0}.praxys-section{padding:38px 0}.serv-head{text-align:left}.px-problem-grid,.px-service-grid,.px-paper-grid,.px-method-grid{grid-template-columns:1fr}.px-problem-card .px-photo,.px-service-card .px-photo{height:122px}.px-mid-inner{flex-direction:column;align-items:flex-start}.px-mid-inner a{width:100%}.px-case-card{grid-template-columns:1fr}.px-case-card .px-photo{height:145px;min-height:0}.px-mini{grid-template-columns:1fr}.px-modal{padding:12px}.px-modal-box{display:block;border-radius:22px}.px-modal-box .px-photo{height:190px;min-height:0}.px-modal-content{padding:24px 18px}.px-modal-grid{grid-template-columns:1fr}}
    `;
  }
})();
