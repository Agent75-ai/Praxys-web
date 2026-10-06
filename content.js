// Praxys Web — stable full render without heavy embedded assets
(function(){
  const WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20sobre%20un%20problema%20de%20decisi%C3%B3n%20que%20cruza%20%C3%A1reas.';

  const PHOTOS = {
    hero: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=82',
    problem1: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=78',
    problem2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=78',
    problem3: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=78',
    service1: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=78',
    service2: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=78',
    service3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=78',
    service4: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=78',
    service5: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=78',
    service6: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=78',
    case1: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    case2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    case3: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
    case4: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    case5: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    case6: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80',
    authority: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=82'
  };

  const COPY = {
    es: {
      heroEyebrow: 'Riesgo, decisión y sistemas complejos',
      heroTitle: 'Decisiones ejecutivas para problemas que cruzan áreas',
      heroLead: 'Ayudamos a equipos directivos y técnicos a ordenar evidencia, modelar relaciones, priorizar alternativas y sostener decisiones en organizaciones complejas.',
      heroTag: 'Consultoría para organizaciones complejas, industriales y reguladas.',
      primary: 'Agendar conversación',
      secondary: 'Ver casos concretos',
      problemEyebrow: 'Problemas de gestión',
      problemTitle: 'Problemas que traban decisiones',
      problemLead: 'Situaciones donde evidencia, áreas, recursos y seguimiento quedan desalineados.',
      serviceEyebrow: 'Servicios',
      serviceTitle: 'Qué hace Praxys',
      serviceLead: 'Intervenciones concretas orientadas a entregar criterios ejecutivos para decidir.',
      casesEyebrow: 'Casos concretos',
      casesTitle: 'Dónde se aplica',
      casesLead: 'Ejemplos breves y legibles para reconocer problemas frecuentes de dirección.',
      methodEyebrow: 'Método',
      methodTitle: 'Cómo trabajamos',
      methodLead: 'Una secuencia simple para pasar de un problema disperso a una decisión sostenida.',
      authorityEyebrow: 'Autoridad técnica',
      authorityTitle: 'Riesgo, sistemas sociotécnicos y decisión',
      authorityLead: 'Praxys integra experiencia en gestión de riesgos, seguridad nuclear, factores humanos, dinámica de sistemas, análisis organizacional y toma de decisiones en contextos técnicos complejos.',
      publicationsEyebrow: 'Publicaciones',
      publicationsTitle: 'Producción técnica que respalda el enfoque',
      publicationsLead: 'Trabajos aplicados a seguridad, sistemas complejos, factores humanos y dinámica organizacional.',
      contactEyebrow: 'Contacto',
      contactTitle: 'Empezar con una conversación concreta',
      contactLead: 'En una primera conversación identificamos la decisión, las áreas involucradas y el entregable que podría ayudar.',
      detail: 'Ver detalle del caso',
      situation: 'Situación',
      decision: 'Decisión',
      work: 'Cómo trabaja Praxys',
      deliverables: 'Entregables',
      viewPaper: 'Ver publicación'
    },
    en: {
      heroEyebrow: 'Risk, decision, and complex systems',
      heroTitle: 'Executive decisions for problems that cross areas',
      heroLead: 'We help leadership and technical teams organize evidence, model relationships, prioritize alternatives, and sustain decisions in complex organizations.',
      heroTag: 'Consulting for complex, industrial, and regulated organizations.',
      primary: 'Schedule conversation',
      secondary: 'View cases',
      problemEyebrow: 'Management problems',
      problemTitle: 'Problems that block decisions',
      problemLead: 'Situations where evidence, areas, resources, and follow-up become misaligned.',
      serviceEyebrow: 'Services',
      serviceTitle: 'What Praxys does',
      serviceLead: 'Concrete interventions focused on delivering executive criteria for decision-making.',
      casesEyebrow: 'Concrete cases',
      casesTitle: 'Where it applies',
      casesLead: 'Short readable examples to recognize frequent leadership problems.',
      methodEyebrow: 'Method',
      methodTitle: 'How we work',
      methodLead: 'A simple sequence to move from a dispersed problem to a sustained decision.',
      authorityEyebrow: 'Technical authority',
      authorityTitle: 'Risk, sociotechnical systems, and decision-making',
      authorityLead: 'Praxys integrates experience in risk management, nuclear safety, human factors, system dynamics, organizational analysis, and decision-making in technically complex contexts.',
      publicationsEyebrow: 'Publications',
      publicationsTitle: 'Technical production behind the approach',
      publicationsLead: 'Applied work on safety, complex systems, human factors, and organizational dynamics.',
      contactEyebrow: 'Contact',
      contactTitle: 'Start with a concrete conversation',
      contactLead: 'In a first conversation we identify the decision, the areas involved, and the deliverable that could help.',
      detail: 'View case detail',
      situation: 'Situation',
      decision: 'Decision',
      work: 'How Praxys works',
      deliverables: 'Deliverables',
      viewPaper: 'View publication'
    }
  };

  const PROBLEMS = {
    es: [
      ['El riesgo se propaga entre áreas','Un cambio local termina afectando continuidad, recursos, costos o decisiones de dirección.',PHOTOS.problem1],
      ['Las prioridades compiten por los mismos recursos','Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.',PHOTOS.problem2],
      ['Los problemas vuelven aunque se cierren acciones','Las soluciones puntuales no modifican las condiciones que reproducen el patrón.',PHOTOS.problem3]
    ],
    en: [
      ['Risk propagates across areas','A local change ends up affecting continuity, resources, costs, or leadership decisions.',PHOTOS.problem1],
      ['Priorities compete for the same resources','Everything seems important, but not everything can be executed at the same time or with the same capacity.',PHOTOS.problem2],
      ['Problems return after actions are closed','Local fixes do not change the conditions that reproduce the pattern.',PHOTOS.problem3]
    ]
  };

  const SERVICES = [
    ['diagnosis',PHOTOS.service1,{es:['Diagnóstico ejecutivo de riesgos combinados','Sirve cuando un problema cruza áreas y nadie tiene una lectura completa.','Mapa causal, dependencias críticas y prioridades de intervención.'],en:['Executive diagnosis of combined risks','Useful when a problem crosses areas and no one has the complete picture.','Causal map, critical dependencies, and intervention priorities.']}],
    ['prioritization',PHOTOS.service2,{es:['Priorización de acciones y recursos','Sirve cuando hay demasiadas acciones abiertas y poca capacidad real para ejecutarlas.','Matriz de priorización, secuencia ejecutable y responsables.'],en:['Prioritization of actions and resources','Useful when too many actions are open for the available execution capacity.','Prioritization matrix, executable sequence, and owners.']}],
    ['scenarios',PHOTOS.service3,{es:['Evaluación de escenarios de decisión','Sirve antes de comprometer inversión, cambios operativos o recursos críticos.','Escenarios comparados, trade-offs, riesgos residuales y recomendación.'],en:['Decision scenario assessment','Useful before committing investment, operational changes, or critical resources.','Compared scenarios, trade-offs, residual risks, and recommendation.']}],
    ['recurrence',PHOTOS.service4,{es:['Investigación sistémica de eventos recurrentes','Sirve cuando fallas o incidentes vuelven aunque existan acciones correctivas.','Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.'],en:['Systemic investigation of recurring events','Useful when failures or incidents return despite corrective actions.','Timeline, degraded barriers, causal map, and higher-impact actions.']}],
    ['governance',PHOTOS.service5,{es:['Diseño de gobernanza y seguimiento','Sirve cuando una decisión aprobada se diluye entre áreas.','Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.'],en:['Governance and follow-up design','Useful when an approved decision dilutes across areas.','Executive dashboard, review routine, roles, and escalation rules.']}],
    ['training',PHOTOS.service6,{es:['Capacitación ejecutiva y transferencia metodológica','Sirve para instalar criterios comunes de análisis y decisión.','Workshops aplicados, plantillas y herramientas transferibles.'],en:['Executive training and method transfer','Useful to install shared analysis and decision criteria.','Applied workshops, templates, and transferable tools.']}]
  ];

  const CASES = [
    ['diagnosis',PHOTOS.case1,{es:['Caso 01','Cada área explica una causa distinta del mismo problema','Las áreas interpretan la situación desde evidencia, responsabilidades y restricciones diferentes.','Construir una lectura común y decidir dónde intervenir primero.',['Mapa causal','Dependencias críticas','Prioridades'],'Praxys reconstruye eventos, datos, decisiones previas y restricciones para distinguir causas inmediatas, condiciones sistémicas y puntos de intervención.'],en:['Case 01','Each area explains a different cause of the same problem','Areas interpret the situation from different evidence, responsibilities, and constraints.','Build a shared reading and decide where to intervene first.',['Causal map','Critical dependencies','Priorities'],'Praxys reconstructs events, data, previous decisions, and constraints to distinguish immediate causes, systemic conditions, and intervention points.']}],
    ['prioritization',PHOTOS.case2,{es:['Caso 02','Hay más acciones abiertas que capacidad real para ejecutarlas','Las acciones compiten por personas, presupuesto, tiempo y capacidad de gestión.','Ordenar qué ejecutar primero, qué agrupar y qué postergar.',['Matriz de priorización','Secuencia ejecutable','Responsables'],'Praxys releva acciones, restricciones, impacto esperado, dependencias y responsables para construir una secuencia realista de implementación.'],en:['Case 02','More actions are open than the real capacity to execute them','Actions compete for people, budget, time, and management capacity.','Decide what goes first, what can be grouped, and what waits.',['Prioritization matrix','Executable sequence','Owners'],'Praxys reviews actions, constraints, expected impact, dependencies, and owners to build a realistic implementation sequence.']}],
    ['scenarios',PHOTOS.case3,{es:['Caso 03','Una inversión requiere comparar escenarios antes de comprometer recursos','La dirección debe comprometer recursos relevantes y necesita comparar impactos, supuestos y riesgos residuales con criterios explícitos.','Comparar alternativas con los mismos criterios y elegir una opción defendible.',['Escenarios comparados','Trade-offs','Supuestos críticos'],'Praxys define escenarios comparables, explicita supuestos y analiza consecuencias sobre continuidad, disponibilidad, costos, riesgo residual y capacidad de seguimiento.'],en:['Case 03','Investment requires comparing scenarios before committing resources','Leadership must commit relevant resources and compare impacts, assumptions, and residual risks through explicit criteria.','Compare alternatives with the same criteria and choose a defensible option.',['Compared scenarios','Trade-offs','Critical assumptions'],'Praxys defines comparable scenarios, makes assumptions explicit, and analyzes consequences on continuity, availability, costs, residual risk, and follow-up capability.']}],
    ['recurrence',PHOTOS.case4,{es:['Caso 04','Los incidentes vuelven aunque las acciones estén cerradas','Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.','Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto.',['Línea de tiempo','Barreras degradadas','Mapa causal'],'Praxys reconstruye la secuencia de eventos, decisiones, barreras, señales, presiones, demoras y responsabilidades para separar síntomas de condiciones sistémicas.'],en:['Case 04','Incidents return even when actions are closed','Reports show closed events, but the pattern reappears in real operation.','Determine which conditions sustain recurrence and which intervention has the highest effect.',['Timeline','Degraded barriers','Causal map'],'Praxys reconstructs event sequences, decisions, barriers, signals, pressures, delays, and responsibilities to separate symptoms from systemic conditions.']}],
    ['governance',PHOTOS.case5,{es:['Caso 05','La decisión se aprueba, pero el seguimiento se diluye','La ejecución queda repartida sin suficiente claridad sobre responsabilidades, indicadores y escalamiento.','Definir cómo se gobierna la decisión y cuándo deben escalarse los desvíos.',['Modelo de gobernanza','Tablero ejecutivo','Roles'],'Praxys diseña un mecanismo de seguimiento con tablero, frecuencia de revisión, responsables y reglas de escalamiento.'],en:['Case 05','The decision is approved, but follow-up dilutes','Execution is distributed without enough clarity on responsibilities, indicators, and escalation.','Define how the decision is governed and when deviations must be escalated.',['Governance model','Executive dashboard','Roles'],'Praxys designs a follow-up mechanism with dashboard, review frequency, owners, and escalation rules.']}],
    ['training',PHOTOS.case6,{es:['Caso 06','Los equipos usan criterios distintos para decidir','Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.','Instalar una forma común de analizar, priorizar y sostener decisiones.',['Workshops aplicados','Guías','Plantillas'],'Praxys trabaja sobre casos reales para transferir criterios, plantillas y rutinas que queden instaladas en el equipo.'],en:['Case 06','Teams use different criteria to decide','Technical areas, operations, and management discuss with different language and criteria.','Install a shared way to analyze, prioritize, and sustain decisions.',['Applied workshops','Guides','Templates'],'Praxys works on real cases to transfer criteria, templates, and routines that remain installed in the team.']}]
  ];

  const PAPERS = [
    ['2020','Gestión de seguridad post-Fukushima','Revisión crítica del estado del arte sobre gestión de seguridad y aprendizaje organizacional.'],
    ['2021','Modelado funcional de reactores','Aplicación de GTST-DMLD y dinámica de sistemas para estudiar escenarios de seguridad.'],
    ['2023','Modelo causal de gestión de seguridad','Modelo basado en dinámica de sistemas para estudiar trade-offs operacionales.'],
    ['2025','Cultura de seguridad','Simulación de liderazgo, comunicación, mejora continua y desempeño operacional.']
  ];

  function getLang(){return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es').startsWith('en') ? 'en' : 'es';}
  function t(){return COPY[getLang()];}
  function esc(s){return String(s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
  function secHead(eyebrow,title,lead){return `<div class="section-head"><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(title)}</h2><p>${esc(lead)}</p></div>`;}

  function installStyles(){
    let style=document.getElementById('praxys-stable-styles');
    if(!style){style=document.createElement('style');style.id='praxys-stable-styles';document.head.appendChild(style);}
    style.textContent = `
      :root{--navy:#102033;--ink:#243447;--muted:#64758A;--soft:#F4F8FB;--line:rgba(16,32,51,.12);--orange:#E8632A;--amber:#F2C94C;--shadow:0 18px 46px rgba(16,32,51,.10);--radius:24px}
      body{background:#fff!important;color:var(--ink)!important;line-height:1.55!important}.wrap{width:min(1160px,calc(100% - 44px));margin:0 auto}.navbar{background:rgba(255,255,255,.96)!important;border-bottom:1px solid var(--line)!important}.brand{color:var(--navy)!important}.nav-menu a{color:var(--ink)!important}.lang-btn.active{background:var(--navy)!important;color:#fff!important}
      .hero{position:relative;min-height:680px;display:flex;align-items:center;overflow:hidden;background:#102033;color:#fff}.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(16,32,51,.92) 0%,rgba(16,32,51,.76) 43%,rgba(16,32,51,.18) 100%),var(--hero-img);background-size:cover;background-position:center;z-index:0}.hero .wrap{position:relative;z-index:1}.hero-copy{max-width:760px}.eyebrow{display:inline-block;color:var(--orange);font-size:.76rem;letter-spacing:.16em;text-transform:uppercase;font-weight:950}.hero .eyebrow{color:var(--amber)}.hero h1{margin:16px 0 20px;color:#F5FAFF;font-size:clamp(3rem,6vw,5.5rem);line-height:.96;letter-spacing:-.055em;font-weight:900;text-wrap:balance}.hero p{max-width:720px;color:#DDE8F4;font-size:1.18rem;line-height:1.62;font-weight:560}.hero-tag{display:inline-flex;margin:20px 0 28px;padding:10px 16px;border-radius:999px;background:rgba(255,255,255,.12);color:#fff;font-weight:850}.btn-row{display:flex;gap:14px;flex-wrap:wrap}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;text-decoration:none;font-weight:950;font-size:.86rem;letter-spacing:.04em;text-transform:uppercase}.btn.primary{background:var(--orange);color:#fff;box-shadow:0 14px 28px rgba(232,99,42,.24)}.btn.secondary{background:#0F2E50;color:#fff}.section{padding:82px 0}.section.alt{background:var(--soft)}.section.dark{background:#102033;color:#fff}.section-head{max-width:820px;margin-bottom:34px}.section-head.center{text-align:center;margin-left:auto;margin-right:auto}.section-head h2{margin:10px 0 12px;color:var(--navy);font-size:clamp(2.15rem,3.6vw,3.4rem);line-height:1.05;letter-spacing:-.04em;text-wrap:balance}.section-head p{margin:0;color:var(--muted);font-size:1.08rem;line-height:1.62}.dark .section-head h2{color:#fff}.dark .section-head p{color:#CAD8E7}.grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)}.card img{width:100%;height:220px;object-fit:cover;display:block}.card-body{padding:24px}.card h3{margin:0 0 10px;color:var(--navy);font-size:1.28rem;line-height:1.2;letter-spacing:-.02em}.card p{margin:0;color:var(--muted);font-size:1rem;line-height:1.6}.dark .card{background:#13263D;border-color:rgba(255,255,255,.10);box-shadow:none}.dark .card h3{color:#fff}.dark .card p{color:#D6E2EF}.service-card img{height:190px}.receive{margin-top:18px;padding:14px;border-radius:16px;background:#F4F8FB;border:1px solid var(--line);color:var(--ink);font-weight:760}.case-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);display:grid;grid-template-columns:46% 1fr}.case-card img{width:100%;height:100%;min-height:360px;object-fit:cover;display:block}.case-content{padding:26px}.case-label{color:var(--orange);font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;font-weight:950}.case-content h3{margin:8px 0 16px;color:var(--navy);font-size:1.42rem;line-height:1.16}.case-mini{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0}.case-mini div{padding:14px;border-radius:16px;background:#F8FBFD;border:1px solid var(--line)}.case-mini strong{display:block;margin-bottom:6px;color:var(--orange);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase}.chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.chips span{display:inline-flex;padding:7px 10px;border-radius:999px;background:rgba(232,99,42,.10);color:#A9461D;font-size:.78rem;font-weight:850}.method{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.step{background:#fff;border:1px solid var(--line);border-radius:20px;padding:22px}.step b{color:var(--orange)}.authority{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}.authority img{width:100%;border-radius:var(--radius);box-shadow:var(--shadow)}.paper-track{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:10px}.paper{flex:0 0 calc((100% - 36px)/3);scroll-snap-align:start;background:#fff;border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:var(--shadow)}.paper b{color:var(--orange)}.contact-box{display:grid;grid-template-columns:1.3fr .7fr;gap:28px;background:#102033;color:#fff;border-radius:28px;padding:34px}.contact-box h2{margin:0 0 12px;font-size:2rem}.contact-box p{color:#D4E1EF}.contact-actions{display:flex;align-items:center;justify-content:flex-end}.modal{position:fixed;inset:0;background:rgba(7,12,18,.72);display:none;align-items:center;justify-content:center;z-index:5000;padding:24px}.modal.open{display:flex}.modal-box{background:#fff;border-radius:26px;max-width:980px;max-height:88vh;overflow:auto;display:grid;grid-template-columns:42% 1fr}.modal-box img{width:100%;height:100%;object-fit:cover}.modal-content{padding:30px}.modal-close{position:absolute;right:24px;top:18px;border:0;border-radius:999px;background:#102033;color:#fff;width:42px;height:42px;font-weight:900;cursor:pointer}@media(max-width:900px){.hero{min-height:620px}.grid-3,.grid-2,.method,.authority,.contact-box{grid-template-columns:1fr}.case-card,.modal-box{display:block}.case-card img,.modal-box img{height:240px;min-height:0}.paper{flex-basis:86%}.contact-actions{justify-content:flex-start}.hero h1{font-size:clamp(2.6rem,12vw,4.2rem)}}`;
  }

  function renderHero(c){
    const el=document.getElementById('inicio');
    if(!el) return;
    el.className='hero';
    el.style.setProperty('--hero-img', `url("${PHOTOS.hero}")`);
    el.innerHTML=`<div class="wrap"><div class="hero-copy"><span class="eyebrow">${esc(c.heroEyebrow)}</span><h1>${esc(c.heroTitle)}</h1><p>${esc(c.heroLead)}</p><div class="hero-tag">${esc(c.heroTag)}</div><div class="btn-row"><a class="btn primary" href="${WHATSAPP}">${esc(c.primary)}</a><a class="btn secondary" href="#casos-concretos">${esc(c.secondary)}</a></div></div></div>`;
  }

  function renderProblems(c, lang){
    const el=document.getElementById('problemas'); if(!el) return;
    const items=PROBLEMS[lang].map(p=>`<article class="card"><img src="${p[2]}" alt="${esc(p[0])}" loading="lazy"><div class="card-body"><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></div></article>`).join('');
    el.className='section alt';
    el.innerHTML=`<div class="wrap">${secHead(c.problemEyebrow,c.problemTitle,c.problemLead)}<div class="grid-3">${items}</div></div>`;
  }

  function renderServices(c, lang){
    const el=document.getElementById('servicios'); if(!el) return;
    const cards=SERVICES.map(([id,photo,data])=>{const d=data[lang];return `<article class="card service-card"><img src="${photo}" alt="${esc(d[0])}" loading="lazy"><div class="card-body"><span class="eyebrow">${esc(c.serviceEyebrow)}</span><h3>${esc(d[0])}</h3><p>${esc(d[1])}</p><div class="receive">${esc(d[2])}</div></div></article>`}).join('');
    el.className='section';
    el.innerHTML=`<div class="wrap">${secHead(c.serviceEyebrow,c.serviceTitle,c.serviceLead)}<div class="grid-3">${cards}</div></div>`;
  }

  function renderCases(c, lang){
    const el=document.getElementById('casos-concretos'); if(!el) return;
    const cards=CASES.map(([id,photo,data],idx)=>{const d=data[lang];return `<article class="case-card" id="case-${id}"><img src="${photo}" alt="${esc(d[1])}" loading="lazy"><div class="case-content"><span class="case-label">${esc(d[0])}</span><h3>${esc(d[1])}</h3><div class="case-mini"><div><strong>${esc(c.situation)}</strong><p>${esc(d[2])}</p></div><div><strong>${esc(c.decision)}</strong><p>${esc(d[3])}</p></div></div><div class="chips">${d[4].map(x=>`<span>${esc(x)}</span>`).join('')}</div><p style="margin-top:16px;color:#64758A">${esc(d[5])}</p><button class="btn secondary" style="border:0;margin-top:16px" data-open-case="${idx}">${esc(c.detail)}</button></div></article>`}).join('');
    el.className='section alt';
    el.innerHTML=`<div class="wrap">${secHead(c.casesEyebrow,c.casesTitle,c.casesLead)}<div class="grid-2">${cards}</div></div>`;
  }

  function renderMethod(c, lang){
    const steps = lang==='es' ? ['Encuadrar la decisión','Ordenar evidencia','Modelar relaciones','Priorizar intervención'] : ['Frame the decision','Organize evidence','Model relationships','Prioritize intervention'];
    const body = lang==='es' ? ['Definimos qué decisión debe tomar la dirección y qué áreas quedan involucradas.','Reunimos datos, eventos, restricciones, responsables y supuestos críticos.','Construimos una lectura común de causas, dependencias y efectos combinados.','Traducimos el análisis en escenarios, prioridades, seguimiento y próximos pasos.'] : ['We define the decision leadership must make and which areas are involved.','We gather data, events, constraints, owners, and critical assumptions.','We build a shared reading of causes, dependencies, and combined effects.','We translate the analysis into scenarios, priorities, follow-up, and next steps.'];
    const html=steps.map((s,i)=>`<article class="step"><b>0${i+1}</b><h3>${esc(s)}</h3><p>${esc(body[i])}</p></article>`).join('');
    const el=document.getElementById('metodo'); if(!el) return;
    el.className='section'; el.innerHTML=`<div class="wrap">${secHead(c.methodEyebrow,c.methodTitle,c.methodLead)}<div class="method">${html}</div></div>`;
  }

  function renderAuthority(c){
    const el=document.createElement('section');
    el.id='autoridad'; el.className='section dark';
    el.innerHTML=`<div class="wrap authority"><div>${secHead(c.authorityEyebrow,c.authorityTitle,c.authorityLead)}<div class="chips"><span>ISO 31000</span><span>Dinámica de sistemas</span><span>Factores humanos</span><span>Seguridad nuclear</span><span>Decisión ejecutiva</span></div></div><img src="${PHOTOS.authority}" alt="${esc(c.authorityTitle)}" loading="lazy"></div>`;
    const method=document.getElementById('metodo'); if(method && !document.getElementById('autoridad')) method.insertAdjacentElement('afterend', el);
  }

  function renderPapers(c){
    const el=document.getElementById('articulos'); if(!el) return;
    const cards=PAPERS.map(p=>`<article class="paper"><b>${esc(p[0])}</b><h3>${esc(p[1])}</h3><p>${esc(p[2])}</p><a class="btn secondary" style="margin-top:16px" href="#contacto">${esc(c.viewPaper)}</a></article>`).join('');
    el.className='section alt'; el.innerHTML=`<div class="wrap">${secHead(c.publicationsEyebrow,c.publicationsTitle,c.publicationsLead)}<div class="paper-track">${cards}</div></div>`;
  }

  function renderContact(c){
    const el=document.getElementById('contacto'); if(!el) return;
    el.className='section'; el.innerHTML=`<div class="wrap"><div class="contact-box"><div><span class="eyebrow">${esc(c.contactEyebrow)}</span><h2>${esc(c.contactTitle)}</h2><p>${esc(c.contactLead)}</p></div><div class="contact-actions"><a class="btn primary" href="${WHATSAPP}">${esc(c.primary)}</a></div></div></div>`;
  }

  function ensureModal(){
    if(document.getElementById('case-modal')) return;
    const m=document.createElement('div'); m.id='case-modal'; m.className='modal'; m.innerHTML='<button class="modal-close" type="button">×</button><div class="modal-box"></div>'; document.body.appendChild(m);
    m.addEventListener('click', e=>{if(e.target===m || e.target.classList.contains('modal-close')) m.classList.remove('open')});
  }

  function bindCases(lang){
    ensureModal();
    document.querySelectorAll('[data-open-case]').forEach(btn=>btn.addEventListener('click',()=>{
      const idx=Number(btn.getAttribute('data-open-case')); const item=CASES[idx]; if(!item) return; const d=item[2][lang]; const c=t();
      const box=document.querySelector('#case-modal .modal-box');
      box.innerHTML=`<img src="${item[1]}" alt="${esc(d[1])}"><div class="modal-content"><span class="case-label">${esc(d[0])}</span><h2>${esc(d[1])}</h2><h4>${esc(c.work)}</h4><p>${esc(d[5])}</p><h4>${esc(c.deliverables)}</h4><div class="chips">${d[4].map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`;
      document.getElementById('case-modal').classList.add('open');
    }));
  }

  function render(){
    installStyles();
    const lang=getLang(); const c=t(); document.documentElement.lang=lang;
    document.getElementById('lang-es')?.classList.toggle('active', lang==='es'); document.getElementById('lang-en')?.classList.toggle('active', lang==='en');
    renderHero(c); renderProblems(c,lang); renderServices(c,lang); renderCases(c,lang); renderMethod(c,lang); renderAuthority(c); renderPapers(c); renderContact(c); bindCases(lang);
    document.dispatchEvent(new CustomEvent('praxys:rendered'));
  }

  document.addEventListener('click', e=>{
    const b=e.target.closest('#lang-es,#lang-en'); if(!b) return;
    localStorage.setItem('selectedLanguage', b.id==='lang-en'?'en':'es');
    render();
  });

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', render); else render();
})();