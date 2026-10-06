// Praxys Web — stable executive industrial layout
(function(){
  'use strict';

  const WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20sobre%20un%20problema%20de%20decisi%C3%B3n%20que%20cruza%20%C3%A1reas.';

  const IMG = {
    hero:'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2200&q=82',
    p1:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    p2:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    p3:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    s1:'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80',
    s2:'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    s3:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    s4:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    s5:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    s6:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    c1:'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
    c2:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    c3:'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
    c4:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    c5:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    c6:'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80',
    authority:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=82'
  };

  const TEXT = {
    es:{
      nav:['Problemas','Servicios','Casos','Método','Publicaciones','Contacto'],
      eyebrow:'Riesgo, decisión y sistemas complejos',
      title:'Decisiones ejecutivas para problemas que cruzan áreas',
      lead:'Ayudamos a equipos directivos y técnicos a ordenar evidencia, modelar relaciones, priorizar alternativas y sostener decisiones en organizaciones complejas.',
      tag:'Consultoría para organizaciones complejas, industriales y reguladas.',
      cta:'Agendar conversación', cta2:'Ver casos concretos',
      problems:['Problemas de gestión','Problemas que traban decisiones','Situaciones donde evidencia, áreas, recursos y seguimiento quedan desalineados.'],
      services:['Servicios','Qué hace Praxys','Intervenciones concretas orientadas a entregar criterios ejecutivos para decidir.'],
      cases:['Casos concretos','Dónde se aplica','Ejemplos breves y legibles para reconocer problemas frecuentes de dirección.'],
      method:['Método','Cómo trabajamos','Una secuencia simple para pasar de un problema disperso a una decisión sostenida.'],
      authority:['Autoridad técnica','Riesgo, sistemas sociotécnicos y decisión','Praxys integra gestión de riesgos, seguridad nuclear, factores humanos, dinámica de sistemas, análisis organizacional y toma de decisiones en contextos técnicos complejos.'],
      publications:['Publicaciones','Producción técnica que respalda el enfoque','Trabajos aplicados a seguridad, sistemas complejos, factores humanos y dinámica organizacional.'],
      contact:['Contacto','Empezar con una conversación concreta','En una primera conversación identificamos la decisión, las áreas involucradas y el entregable que podría ayudar.'],
      situation:'Situación', decision:'Decisión', detail:'Ver detalle del caso', view:'Ver publicación'
    },
    en:{
      nav:['Problems','Services','Cases','Method','Publications','Contact'],
      eyebrow:'Risk, decision, and complex systems',
      title:'Executive decisions for problems that cross areas',
      lead:'We help leadership and technical teams organize evidence, model relationships, prioritize alternatives, and sustain decisions in complex organizations.',
      tag:'Consulting for complex, industrial, and regulated organizations.',
      cta:'Schedule conversation', cta2:'View concrete cases',
      problems:['Management problems','Problems that block decisions','Situations where evidence, areas, resources, and follow-up become misaligned.'],
      services:['Services','What Praxys does','Concrete interventions focused on delivering executive criteria for decision-making.'],
      cases:['Concrete cases','Where it applies','Short readable examples to recognize frequent leadership problems.'],
      method:['Method','How we work','A simple sequence to move from a dispersed problem to a sustained decision.'],
      authority:['Technical authority','Risk, sociotechnical systems, and decision-making','Praxys integrates risk management, nuclear safety, human factors, system dynamics, organizational analysis, and decision-making in technically complex contexts.'],
      publications:['Publications','Technical production behind the approach','Applied work on safety, complex systems, human factors, and organizational dynamics.'],
      contact:['Contact','Start with a concrete conversation','In a first conversation we identify the decision, the areas involved, and the deliverable that could help.'],
      situation:'Situation', decision:'Decision', detail:'View case detail', view:'View publication'
    }
  };

  const problems = {
    es:[
      ['El riesgo se propaga entre áreas','Un cambio local termina afectando continuidad, recursos, costos o decisiones de dirección.',IMG.p1],
      ['Las prioridades compiten por los mismos recursos','Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.',IMG.p2],
      ['Los problemas vuelven aunque se cierren acciones','Las soluciones puntuales no modifican las condiciones que reproducen el patrón.',IMG.p3]
    ],
    en:[
      ['Risk propagates across areas','A local change affects continuity, resources, costs, or leadership decisions.',IMG.p1],
      ['Priorities compete for the same resources','Everything seems important, but not everything can be executed at the same time or capacity.',IMG.p2],
      ['Problems return after actions are closed','Local fixes do not change the conditions that reproduce the pattern.',IMG.p3]
    ]
  };

  const services = [
    {img:IMG.s1, es:['Diagnóstico ejecutivo de riesgos combinados','Para problemas que cruzan áreas y no tienen una lectura común.','Mapa causal, dependencias críticas y prioridades de intervención.'], en:['Executive diagnosis of combined risks','For problems that cross areas and lack a shared reading.','Causal map, critical dependencies, and intervention priorities.']},
    {img:IMG.s2, es:['Priorización de acciones y recursos','Para carteras de acciones que exceden la capacidad real de ejecución.','Matriz de priorización, secuencia ejecutable y responsables.'], en:['Prioritization of actions and resources','For action portfolios that exceed real execution capacity.','Prioritization matrix, executable sequence, and owners.']},
    {img:IMG.s3, es:['Evaluación de escenarios de decisión','Para comparar alternativas antes de comprometer recursos relevantes.','Escenarios comparados, trade-offs, riesgos residuales y recomendación.'], en:['Decision scenario assessment','To compare alternatives before committing relevant resources.','Compared scenarios, trade-offs, residual risks, and recommendation.']},
    {img:IMG.s4, es:['Investigación sistémica de eventos recurrentes','Para fallas o incidentes que vuelven pese a las acciones correctivas.','Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.'], en:['Systemic investigation of recurring events','For failures or incidents that return despite corrective actions.','Timeline, degraded barriers, causal map, and high-impact actions.']},
    {img:IMG.s5, es:['Diseño de gobernanza y seguimiento','Para decisiones aprobadas que pierden fuerza entre áreas.','Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.'], en:['Governance and follow-up design','For approved decisions that lose force across areas.','Executive dashboard, review routine, roles, and escalation rules.']},
    {img:IMG.s6, es:['Capacitación ejecutiva y transferencia metodológica','Para instalar criterios comunes de análisis y decisión.','Workshops aplicados, plantillas y herramientas transferibles.'], en:['Executive training and method transfer','To install shared analysis and decision criteria.','Applied workshops, templates, and transferable tools.']}
  ];

  const cases = [
    {img:IMG.c1, es:['Caso 01','Cada área explica una causa distinta del mismo problema','Las áreas interpretan la situación desde evidencia, responsabilidades y restricciones diferentes.','Construir una lectura común y decidir dónde intervenir primero.',['Mapa causal','Dependencias críticas','Prioridades']], en:['Case 01','Each area explains a different cause of the same problem','Areas interpret the situation from different evidence, responsibilities, and constraints.','Build a shared reading and decide where to intervene first.',['Causal map','Critical dependencies','Priorities']]},
    {img:IMG.c2, es:['Caso 02','Hay más acciones abiertas que capacidad real para ejecutarlas','Las acciones compiten por personas, presupuesto, tiempo y capacidad de gestión.','Ordenar qué ejecutar primero, qué agrupar y qué postergar.',['Matriz de priorización','Secuencia ejecutable','Responsables']], en:['Case 02','More actions are open than the real capacity to execute them','Actions compete for people, budget, time, and management capacity.','Decide what goes first, what can be grouped, and what waits.',['Prioritization matrix','Executable sequence','Owners']]},
    {img:IMG.c3, es:['Caso 03','Una inversión requiere comparar escenarios antes de comprometer recursos','La dirección debe comparar impactos, supuestos y riesgos residuales con criterios explícitos.','Comparar alternativas con los mismos criterios y elegir una opción defendible.',['Escenarios comparados','Trade-offs','Supuestos críticos']], en:['Case 03','Investment requires comparing scenarios before committing resources','Leadership must compare impacts, assumptions, and residual risks through explicit criteria.','Compare alternatives with the same criteria and choose a defensible option.',['Compared scenarios','Trade-offs','Critical assumptions']]},
    {img:IMG.c4, es:['Caso 04','Los incidentes vuelven aunque las acciones estén cerradas','Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.','Determinar qué condiciones sostienen la recurrencia.',['Línea de tiempo','Barreras degradadas','Mapa causal']], en:['Case 04','Incidents return even when actions are closed','Reports show closed events, but the pattern reappears in real operation.','Determine which conditions sustain recurrence.',['Timeline','Degraded barriers','Causal map']]},
    {img:IMG.c5, es:['Caso 05','La decisión se aprueba, pero el seguimiento se diluye','La ejecución queda repartida sin suficiente claridad sobre responsabilidades e indicadores.','Definir cómo se gobierna la decisión y cuándo escalar desvíos.',['Tablero ejecutivo','Roles','Reglas de escalamiento']], en:['Case 05','The decision is approved, but follow-up dilutes','Execution is distributed without enough clarity on responsibilities and indicators.','Define how the decision is governed and when deviations escalate.',['Executive dashboard','Roles','Escalation rules']]},
    {img:IMG.c6, es:['Caso 06','Los equipos usan criterios distintos para decidir','Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.','Instalar una forma común de analizar, priorizar y sostener decisiones.',['Workshops aplicados','Guías','Plantillas']], en:['Case 06','Teams use different criteria to decide','Technical areas, operations, and management discuss with different language and criteria.','Install a shared way to analyze, prioritize, and sustain decisions.',['Applied workshops','Guides','Templates']]}
  ];

  const method = {
    es:[['1','Encuadre','Definir la decisión, los actores y las restricciones reales.'],['2','Modelo compartido','Ordenar evidencia, relaciones causales y dependencias críticas.'],['3','Priorización','Comparar alternativas y definir una secuencia ejecutable.'],['4','Seguimiento','Instalar criterios, responsables e indicadores para sostener la decisión.']],
    en:[['1','Framing','Define the decision, stakeholders, and real constraints.'],['2','Shared model','Organize evidence, causal relationships, and critical dependencies.'],['3','Prioritization','Compare alternatives and define an executable sequence.'],['4','Follow-up','Install criteria, owners, and indicators to sustain the decision.']]
  };

  const publications = [
    ['2023','Safety management and system dynamics','Aplicación de pensamiento sistémico a gestión de seguridad.','#'],
    ['2021','Human factors and organizational risk','Factores humanos, organización y decisiones en contextos críticos.','#'],
    ['2020','Post-Fukushima safety management','Revisión crítica de gestión de seguridad nuclear.','#'],
    ['2020','Functional modeling of nuclear reactors','Modelado funcional y relaciones sistémicas.','#']
  ];

  function lang(){ return document.documentElement.lang === 'en' ? 'en' : 'es'; }
  function esc(s){ return String(s).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function chipList(items){ return items.map(x=>`<span>${esc(x)}</span>`).join(''); }
  function sectionHead(arr){ return `<div class="px-head"><p class="px-eyebrow">${esc(arr[0])}</p><h2>${esc(arr[1])}</h2><p>${esc(arr[2])}</p></div>`; }

  function ensureCSS(){
    if(document.getElementById('px-stable-css')) return;
    const css = `
      :root{--px-navy:#102033;--px-ink:#1f3044;--px-muted:#617287;--px-orange:#E8632A;--px-soft:#f4f8fb;--px-line:rgba(16,32,51,.12);--px-white:#fff;--px-radius:22px;}
      html,body{background:#fff!important;color:var(--px-ink)!important;font-family:Inter,Manrope,Segoe UI,Arial,sans-serif!important;}
      body{overflow-x:hidden!important}.wrap,.px-wrap{width:min(1160px,calc(100% - 44px));margin:0 auto}.loading-shell{display:none!important}.navbar{background:rgba(255,255,255,.96)!important;border-bottom:1px solid var(--px-line)!important;box-shadow:0 10px 28px rgba(16,32,51,.06)!important}.brand{color:var(--px-navy)!important}.nav-menu a{color:var(--px-ink)!important}.lang-btn.active{background:var(--px-navy)!important;color:#fff!important}
      .px-hero{min-height:680px;display:flex;align-items:center;position:relative;background:linear-gradient(90deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.88) 43%,rgba(255,255,255,.18) 70%),url('${IMG.hero}') center/cover no-repeat;border-bottom:1px solid var(--px-line)}
      .px-hero-card{max-width:690px;padding:86px 0}.px-eyebrow{margin:0 0 14px;color:var(--px-orange);font-size:.78rem;font-weight:950;letter-spacing:.14em;text-transform:uppercase}.px-hero h1{margin:0;color:var(--px-navy);font-size:clamp(3rem,5.4vw,5.4rem);line-height:.98;letter-spacing:-.06em;font-weight:950}.px-hero-lead{max-width:670px;margin:26px 0 0;color:#36506c;font-size:clamp(1.05rem,1.5vw,1.26rem);line-height:1.62;font-weight:650}.px-tag{display:inline-flex;margin-top:20px;padding:10px 14px;border-radius:999px;background:rgba(16,32,51,.08);color:var(--px-navy);font-size:.92rem;font-weight:850}.px-actions{display:flex;gap:14px;margin-top:30px;flex-wrap:wrap}.px-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;text-decoration:none;font-weight:950;font-size:.88rem;text-transform:uppercase;letter-spacing:.02em}.px-btn.primary{background:var(--px-orange);color:#fff;box-shadow:0 14px 30px rgba(232,99,42,.22)}.px-btn.secondary{background:var(--px-navy);color:#fff}
      .px-section{padding:86px 0}.px-section.soft{background:var(--px-soft)}.px-section.dark{background:#0f2033;color:#fff}.px-head{max-width:780px;margin:0 auto 36px;text-align:center}.px-head h2{margin:0;color:var(--px-navy);font-size:clamp(2rem,3.4vw,3.4rem);line-height:1.05;letter-spacing:-.045em;font-weight:950}.dark .px-head h2,.dark .px-head p{color:#fff}.px-head p:last-child{margin:16px 0 0;color:var(--px-muted);font-size:1.04rem;line-height:1.6}.dark .px-head p:last-child{color:#c9d6e5}
      .px-grid{display:grid;gap:24px}.three{grid-template-columns:repeat(3,minmax(0,1fr))}.two{grid-template-columns:repeat(2,minmax(0,1fr))}.px-card{background:#fff;border:1px solid var(--px-line);border-radius:var(--px-radius);overflow:hidden;box-shadow:0 18px 44px rgba(16,32,51,.08)}.px-card img{width:100%;height:230px;object-fit:cover;display:block}.px-card-body{padding:24px}.px-card h3{margin:0 0 10px;color:var(--px-navy);font-size:1.28rem;line-height:1.22;font-weight:900;letter-spacing:-.02em}.px-card p{margin:0;color:#4d6076;font-size:1rem;line-height:1.58}.service-card img{height:190px}.service-note{margin-top:15px;padding:14px;border-radius:16px;background:#f4f8fb;color:#38516b!important;font-weight:750}
      .case-card{display:grid;grid-template-columns:42% 1fr;min-height:360px}.case-card img{height:100%;min-height:360px}.case-label{color:var(--px-orange);font-size:.78rem;font-weight:950;letter-spacing:.10em;text-transform:uppercase;margin-bottom:10px}.case-cols{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0}.case-mini{padding:14px;border:1px solid var(--px-line);border-radius:16px;background:#fbfdff}.case-mini b{display:block;color:var(--px-orange);font-size:.76rem;text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px}.chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.chips span{padding:7px 10px;border-radius:999px;background:#fff0ea;color:#b64b22;font-size:.78rem;font-weight:850}.case-btn{margin-top:18px;border:0;background:var(--px-navy);color:#fff;border-radius:999px;padding:13px 18px;font-weight:900;cursor:pointer}.case-detail{display:none;margin-top:16px;color:#40566f!important}.case-card.open .case-detail{display:block}
      .method-row{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.step{background:#fff;border-radius:20px;padding:24px;border:1px solid var(--px-line)}.step strong{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;border-radius:50%;background:var(--px-orange);color:#fff;margin-bottom:14px}.authority-box{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}.authority-box img{width:100%;height:420px;object-fit:cover;border-radius:26px}.authority-text h2{margin:0;color:#fff;font-size:clamp(2rem,3vw,3.1rem);line-height:1.05}.authority-text p{color:#d8e3ef;font-size:1.08rem;line-height:1.7}.authority-list{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.authority-list span{border:1px solid rgba(255,255,255,.18);padding:9px 12px;border-radius:999px;color:#fff;font-weight:850;font-size:.85rem}
      .papers-track{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:12px}.paper-card{flex:0 0 calc((100% - 40px)/3);scroll-snap-align:start}.paper-meta{color:var(--px-orange);font-weight:950;font-size:.78rem;text-transform:uppercase;letter-spacing:.10em;margin-bottom:12px}.contact-panel{background:linear-gradient(135deg,#102033,#163451);color:#fff;border-radius:28px;padding:44px;display:flex;align-items:center;justify-content:space-between;gap:28px}.contact-panel h2{margin:0;font-size:clamp(2rem,3vw,3.2rem);line-height:1.05}.contact-panel p{color:#d8e3ef;font-size:1.05rem;line-height:1.65;max-width:650px}
      @media(max-width:980px){.three,.two,.method-row,.authority-box{grid-template-columns:1fr}.case-card{grid-template-columns:1fr}.case-card img{height:260px;min-height:0}.paper-card{flex-basis:82%}.px-hero{min-height:620px;background-position:center}.contact-panel{display:block}.contact-panel .px-btn{margin-top:16px}}
      @media(max-width:640px){.px-wrap{width:min(100% - 30px,1160px)}.px-section{padding:64px 0}.px-hero{min-height:650px;background:linear-gradient(180deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.88) 58%,rgba(255,255,255,.30) 100%),url('${IMG.hero}') center/cover no-repeat}.px-hero h1{font-size:clamp(2.45rem,13vw,3.4rem)}.case-cols{grid-template-columns:1fr}.px-card-body{padding:20px}.contact-panel{padding:28px}}
    `;
    const style=document.createElement('style');style.id='px-stable-css';style.textContent=css;document.head.appendChild(style);
  }

  function renderHero(t){
    document.getElementById('inicio').outerHTML = `<section id="inicio" class="px-hero"><div class="px-wrap"><div class="px-hero-card"><p class="px-eyebrow">${esc(t.eyebrow)}</p><h1>${esc(t.title)}</h1><p class="px-hero-lead">${esc(t.lead)}</p><span class="px-tag">${esc(t.tag)}</span><div class="px-actions"><a class="px-btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.cta)}</a><a class="px-btn secondary" href="#casos-concretos">${esc(t.cta2)}</a></div></div></div></section>`;
  }

  function renderProblems(t,l){
    document.getElementById('problemas').outerHTML = `<section id="problemas" class="px-section soft"><div class="px-wrap">${sectionHead(t.problems)}<div class="px-grid three">${problems[l].map(p=>`<article class="px-card"><img src="${p[2]}" alt=""><div class="px-card-body"><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></div></article>`).join('')}</div></div></section>`;
  }

  function renderServices(t,l){
    document.getElementById('servicios').outerHTML = `<section id="servicios" class="px-section"><div class="px-wrap">${sectionHead(t.services)}<div class="px-grid three">${services.map(s=>{const x=s[2][l];return `<article class="px-card service-card"><img src="${s[1]}" alt=""><div class="px-card-body"><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p><p class="service-note">${esc(x[2])}</p></div></article>`}).join('')}</div></div></section>`;
  }

  function renderCases(t,l){
    document.getElementById('casos-concretos').outerHTML = `<section id="casos-concretos" class="px-section soft"><div class="px-wrap">${sectionHead(t.cases)}<div class="px-grid two">${cases.map((c,i)=>{const x=c[l];return `<article class="px-card case-card" id="caso-${i+1}"><img src="${c.img}" alt=""><div class="px-card-body"><div class="case-label">${esc(x[0])}</div><h3>${esc(x[1])}</h3><div class="case-cols"><div class="case-mini"><b>${esc(t.situation)}</b><p>${esc(x[2])}</p></div><div class="case-mini"><b>${esc(t.decision)}</b><p>${esc(x[3])}</p></div></div><div class="chips">${chipList(x[4])}</div><button class="case-btn" type="button">${esc(t.detail)}</button><p class="case-detail">${esc(x[5])}</p></div></article>`}).join('')}</div></div></section>`;
  }

  function renderMethod(t,l){
    document.getElementById('metodo').outerHTML = `<section id="metodo" class="px-section"><div class="px-wrap">${sectionHead(t.method)}<div class="method-row">${method[l].map(s=>`<div class="step"><strong>${esc(s[0])}</strong><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p></div>`).join('')}</div></div></section>`;
  }

  function renderAuthority(t){
    document.getElementById('articulos').insertAdjacentHTML('beforebegin', `<section id="autoridad" class="px-section dark"><div class="px-wrap authority-box"><img src="${IMG.authority}" alt=""><div class="authority-text"><p class="px-eyebrow">${esc(t.authority[0])}</p><h2>${esc(t.authority[1])}</h2><p>${esc(t.authority[2])}</p><div class="authority-list"><span>ISO 31000</span><span>System Dynamics</span><span>HRA/HFE</span><span>Risk governance</span><span>Executive decisions</span></div></div></div></section>`);
  }

  function renderPublications(t){
    document.getElementById('articulos').outerHTML = `<section id="articulos" class="px-section"><div class="px-wrap">${sectionHead(t.publications)}<div class="papers-track">${publications.map(p=>`<article class="px-card paper-card"><div class="px-card-body"><div class="paper-meta">${esc(p[0])}</div><h3>${esc(p[1])}</h3><p>${esc(p[2])}</p><a class="px-btn secondary" href="${p[3]}">${esc(t.view)}</a></div></article>`).join('')}</div></div></section>`;
  }

  function renderContact(t){
    document.getElementById('contacto').outerHTML = `<section id="contacto" class="px-section soft"><div class="px-wrap"><div class="contact-panel"><div><p class="px-eyebrow">${esc(t.contact[0])}</p><h2>${esc(t.contact[1])}</h2><p>${esc(t.contact[2])}</p></div><a class="px-btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.cta)}</a></div></div></section>`;
  }

  function updateNav(l){
    document.querySelectorAll('.nav-menu a').forEach((a,i)=>{if(TEXT[l].nav[i]) a.textContent=TEXT[l].nav[i];});
    document.getElementById('lang-es')?.classList.toggle('active', l==='es');
    document.getElementById('lang-en')?.classList.toggle('active', l==='en');
  }

  function bind(){
    document.addEventListener('click',e=>{
      const b=e.target.closest('.case-btn');
      if(b) b.closest('.case-card')?.classList.toggle('open');
      if(e.target.id==='lang-es'){document.documentElement.lang='es';render();}
      if(e.target.id==='lang-en'){document.documentElement.lang='en';render();}
    });
  }

  function render(){
    ensureCSS();
    const l=lang();const t=TEXT[l];
    updateNav(l);
    ['autoridad'].forEach(id=>document.getElementById(id)?.remove());
    renderHero(t);renderProblems(t,l);renderServices(t,l);renderCases(t,l);renderMethod(t,l);renderAuthority(t);renderPublications(t);renderContact(t);
  }

  document.addEventListener('DOMContentLoaded',()=>{bind();render();});
  window.addEventListener('load',()=>setTimeout(render,200));
})();
