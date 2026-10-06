// Praxys Web — stable industrial visual system
(function(){
  const WHATSAPP='https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20sobre%20un%20problema%20de%20decisi%C3%B3n%20que%20cruza%20%C3%A1reas.';
  const IMG={
    hero:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=82',
    plant:'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80',
    pipes:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
    control:'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1400&q=80',
    field:'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80',
    analysis:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    meeting:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
    board:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80'
  };

  const TXT={
    es:{
      nav:['Problemas','Servicios','Casos','Método','Publicaciones','Contacto'],
      eyebrow:'Riesgo, decisión y sistemas complejos',
      title:'Decisiones ejecutivas para problemas que cruzan áreas',
      lead:'Ayudamos a equipos directivos y técnicos a ordenar evidencia, modelar relaciones, priorizar alternativas y sostener decisiones en organizaciones complejas.',
      tag:'Consultoría para organizaciones complejas, industriales y reguladas.',
      cta:'Agendar conversación', cta2:'Ver casos concretos',
      pEy:'Problemas de gestión', pTitle:'Problemas que traban decisiones', pLead:'Situaciones donde evidencia, áreas, recursos y seguimiento quedan desalineados.',
      sEy:'Servicios', sTitle:'Qué hace Praxys', sLead:'Intervenciones concretas para entregar criterios ejecutivos de decisión.',
      cEy:'Casos concretos', cTitle:'Dónde se aplica', cLead:'Problemas frecuentes en operaciones, áreas técnicas y dirección.',
      mEy:'Método', mTitle:'Cómo trabajamos', mLead:'Una secuencia simple para pasar de un problema disperso a una decisión sostenida.',
      aEy:'Autoridad técnica', aTitle:'Riesgo, sistemas sociotécnicos y decisión', aLead:'Praxys integra gestión de riesgos, seguridad nuclear, factores humanos, dinámica de sistemas, análisis organizacional y toma de decisiones en contextos técnicos complejos.',
      pubEy:'Publicaciones', pubTitle:'Producción técnica que respalda el enfoque', pubLead:'Trabajos aplicados a seguridad, sistemas complejos, factores humanos y dinámica organizacional.',
      contactEy:'Contacto', contactTitle:'Empezar con una conversación concreta', contactLead:'En una primera conversación identificamos la decisión, las áreas involucradas y el entregable que podría ayudar.',
      situation:'Situación', decision:'Decisión', detail:'Ver detalle del caso', paper:'Ver publicación'
    },
    en:{
      nav:['Problems','Services','Cases','Method','Publications','Contact'],
      eyebrow:'Risk, decision, and complex systems',
      title:'Executive decisions for problems that cross areas',
      lead:'We help leadership and technical teams organize evidence, model relationships, prioritize alternatives, and sustain decisions in complex organizations.',
      tag:'Consulting for complex, industrial, and regulated organizations.',
      cta:'Schedule conversation', cta2:'View cases',
      pEy:'Management problems', pTitle:'Problems that block decisions', pLead:'Situations where evidence, areas, resources, and follow-up become misaligned.',
      sEy:'Services', sTitle:'What Praxys does', sLead:'Concrete interventions focused on delivering executive criteria for decision-making.',
      cEy:'Concrete cases', cTitle:'Where it applies', cLead:'Frequent problems in operations, technical areas, and leadership.',
      mEy:'Method', mTitle:'How we work', mLead:'A simple sequence to move from a dispersed problem to a sustained decision.',
      aEy:'Technical authority', aTitle:'Risk, sociotechnical systems, and decision-making', aLead:'Praxys integrates risk management, nuclear safety, human factors, system dynamics, organizational analysis, and decision-making in technically complex contexts.',
      pubEy:'Publications', pubTitle:'Technical production behind the approach', pubLead:'Applied work on safety, complex systems, human factors, and organizational dynamics.',
      contactEy:'Contact', contactTitle:'Start with a concrete conversation', contactLead:'In a first conversation we identify the decision, the areas involved, and the deliverable that could help.',
      situation:'Situation', decision:'Decision', detail:'View case detail', paper:'View publication'
    }
  };

  const PROBLEMS={
    es:[['El riesgo se propaga entre áreas','Un cambio local termina afectando continuidad, recursos, costos o decisiones de dirección.',IMG.plant],['Las prioridades compiten por los mismos recursos','Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.',IMG.control],['Los problemas vuelven aunque se cierren acciones','Las soluciones puntuales no modifican las condiciones que reproducen el patrón.',IMG.pipes]],
    en:[['Risk propagates across areas','A local change ends up affecting continuity, resources, costs, or leadership decisions.',IMG.plant],['Priorities compete for the same resources','Everything seems important, but not everything can be executed at the same time or with the same capacity.',IMG.control],['Problems return after actions are closed','Local fixes do not change the conditions that reproduce the pattern.',IMG.pipes]]
  };

  const SERVICES=[
    {img:IMG.pipes,es:['Diagnóstico ejecutivo de riesgos combinados','Cuando un problema cruza áreas y nadie tiene una lectura completa.','Mapa causal, dependencias críticas y prioridades de intervención.'],en:['Executive diagnosis of combined risks','When a problem crosses areas and no one has the complete picture.','Causal map, critical dependencies, and intervention priorities.']},
    {img:IMG.control,es:['Priorización de acciones y recursos','Cuando hay demasiadas acciones abiertas y poca capacidad real de ejecución.','Matriz de priorización, secuencia ejecutable y responsables.'],en:['Prioritization of actions and resources','When too many actions are open for actual execution capacity.','Prioritization matrix, executable sequence, and owners.']},
    {img:IMG.field,es:['Evaluación de escenarios de decisión','Antes de comprometer inversión, cambios operativos o recursos críticos.','Escenarios comparados, trade-offs, riesgos residuales y recomendación.'],en:['Decision scenario assessment','Before committing investment, operational changes, or critical resources.','Compared scenarios, trade-offs, residual risks, and recommendation.']},
    {img:IMG.plant,es:['Investigación sistémica de eventos recurrentes','Cuando fallas o incidentes vuelven aunque existan acciones correctivas.','Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.'],en:['Systemic investigation of recurring events','When failures or incidents return despite corrective actions.','Timeline, degraded barriers, causal map, and higher-impact actions.']},
    {img:IMG.analysis,es:['Diseño de gobernanza y seguimiento','Cuando una decisión aprobada se diluye entre áreas.','Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.'],en:['Governance and follow-up design','When an approved decision dilutes across areas.','Executive dashboard, review routine, roles, and escalation rules.']},
    {img:IMG.board,es:['Capacitación ejecutiva y transferencia metodológica','Para instalar criterios comunes de análisis y decisión.','Workshops aplicados, plantillas y herramientas transferibles.'],en:['Executive training and method transfer','To install shared analysis and decision criteria.','Applied workshops, templates, and transferable tools.']}
  ];

  const CASES=[
    {img:IMG.pipes,es:['Caso 01','Cada área explica una causa distinta del mismo problema','Las áreas interpretan la situación desde evidencia, responsabilidades y restricciones diferentes.','Construir una lectura común y decidir dónde intervenir primero.',['Mapa causal','Dependencias críticas','Prioridades']],en:['Case 01','Each area explains a different cause of the same problem','Areas interpret the situation from different evidence, responsibilities, and constraints.','Build a shared reading and decide where to intervene first.',['Causal map','Critical dependencies','Priorities']]},
    {img:IMG.control,es:['Caso 02','Hay más acciones abiertas que capacidad real para ejecutarlas','Las acciones compiten por personas, presupuesto, tiempo y capacidad de gestión.','Ordenar qué ejecutar primero, qué agrupar y qué postergar.',['Matriz de priorización','Secuencia ejecutable','Responsables']],en:['Case 02','More actions are open than the real capacity to execute them','Actions compete for people, budget, time, and management capacity.','Decide what goes first, what can be grouped, and what waits.',['Prioritization matrix','Executable sequence','Owners']]},
    {img:IMG.field,es:['Caso 03','Una inversión requiere comparar escenarios antes de comprometer recursos','La dirección debe comparar impactos, supuestos y riesgos residuales con criterios explícitos.','Comparar alternativas con los mismos criterios y elegir una opción defendible.',['Escenarios comparados','Trade-offs','Supuestos críticos']],en:['Case 03','Investment requires comparing scenarios before committing resources','Leadership must compare impacts, assumptions, and residual risks through explicit criteria.','Compare alternatives with the same criteria and choose a defensible option.',['Compared scenarios','Trade-offs','Critical assumptions']]},
    {img:IMG.plant,es:['Caso 04','Los incidentes vuelven aunque las acciones estén cerradas','Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.','Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto.',['Línea de tiempo','Barreras degradadas','Mapa causal']],en:['Case 04','Incidents return even when actions are closed','Reports show closed events, but the pattern reappears in real operation.','Determine which conditions sustain recurrence and which intervention has the highest effect.',['Timeline','Degraded barriers','Causal map']]},
    {img:IMG.analysis,es:['Caso 05','La decisión se aprueba, pero el seguimiento se diluye','La ejecución queda repartida sin claridad suficiente sobre responsabilidades, indicadores y escalamiento.','Definir cómo se gobierna la decisión y cuándo deben escalarse los desvíos.',['Modelo de gobernanza','Tablero ejecutivo','Roles']],en:['Case 05','The decision is approved, but follow-up dilutes','Execution is distributed without enough clarity on responsibilities, indicators, and escalation.','Define how the decision is governed and when deviations must be escalated.',['Governance model','Executive dashboard','Roles']]},
    {img:IMG.board,es:['Caso 06','Los equipos usan criterios distintos para decidir','Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.','Instalar una forma común de analizar, priorizar y sostener decisiones.',['Workshops aplicados','Guías','Plantillas']],en:['Case 06','Teams use different criteria to decide','Technical areas, operations, and management discuss with different language and criteria.','Install a shared way to analyze, prioritize, and sustain decisions.',['Applied workshops','Guides','Templates']]}
  ];

  const PAPERS=[
    ['2023','Safety management and organizational factors','ESREL / safety, systems, human factors'],
    ['2021','Functional modeling of nuclear reactors','GTST, DMLD and system dynamics'],
    ['2020','Safety management after Fukushima','Systematic and critical review']
  ];

  function lang(){return document.documentElement.lang==='en'?'en':'es'}
  function t(){return TXT[lang()]}
  function img(src,alt=''){return `<img src="${src}" alt="${alt}" loading="lazy">`}
  function section(id,ey,title,lead,body){document.getElementById(id).innerHTML=`<div class="wrap"><div class="section-head"><p class="eyebrow">${ey}</p><h2>${title}</h2><p>${lead}</p></div>${body}</div>`}

  function styles(){
    if(document.getElementById('praxys-style'))return;
    const s=document.createElement('style'); s.id='praxys-style';
    s.textContent=`
      :root{--navy:#102033;--ink:#203246;--muted:#607085;--orange:#E8632A;--soft:#F4F8FC;--line:rgba(16,32,51,.12)}
      body{background:#fff!important;color:var(--ink)!important}.wrap{width:min(1160px,calc(100% - 44px));margin:0 auto}.loading-shell{display:none!important}
      .hero{min-height:calc(100vh - 76px);display:grid;align-items:center;position:relative;overflow:hidden;background:#08121e;color:white}.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,12,22,.88),rgba(5,12,22,.60),rgba(5,12,22,.10)),url('${IMG.hero}') center/cover no-repeat}.hero .wrap{position:relative;z-index:1}.hero-content{max-width:780px;padding:112px 0}.eyebrow{margin:0 0 14px;color:var(--orange);text-transform:uppercase;letter-spacing:.14em;font-weight:950;font-size:.78rem}.hero h1{margin:0;color:#fff;font-size:clamp(2.9rem,6vw,6rem);line-height:.98;letter-spacing:-.055em;font-weight:950}.hero p{max-width:700px;color:#d9e5f0;font-size:1.18rem;line-height:1.65}.hero-tag{display:inline-flex;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:10px 14px;color:#fff!important;font-weight:900;font-size:.9rem}.actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;text-decoration:none;font-weight:950;font-size:.86rem;text-transform:uppercase;letter-spacing:.03em}.btn.primary{background:var(--orange);color:#fff}.btn.secondary{background:var(--navy);color:#fff}
      section:not(.hero){padding:86px 0}.section-head{text-align:center;max-width:840px;margin:0 auto 34px}.section-head h2{margin:0;color:var(--navy);font-size:clamp(2rem,4vw,3.35rem);line-height:1.05;letter-spacing:-.04em}.section-head p:not(.eyebrow){color:var(--muted);font-size:1.05rem;line-height:1.65}.soft{background:var(--soft)}
      .grid{display:grid;gap:24px}.grid.three{grid-template-columns:repeat(3,1fr)}.grid.two{grid-template-columns:repeat(2,1fr)}.card{background:#fff;border:1px solid var(--line);border-radius:24px;overflow:hidden;box-shadow:0 16px 44px rgba(16,32,51,.08)}.card img,.case img{width:100%;height:220px;object-fit:cover;display:block}.card-body{padding:24px}.card h3{margin:0 0 10px;color:var(--navy);font-size:1.28rem;line-height:1.18}.card p{margin:0;color:var(--muted);line-height:1.62}.service .card-body{display:grid;gap:10px}.service strong{color:var(--navy)}
      .case{background:#fff;border:1px solid var(--line);border-radius:26px;overflow:hidden;box-shadow:0 16px 42px rgba(16,32,51,.08)}.case-body{padding:24px}.case-label{color:var(--orange);font-weight:950;text-transform:uppercase;letter-spacing:.09em;font-size:.75rem}.case h3{margin:8px 0 18px;color:var(--navy);font-size:1.34rem;line-height:1.16}.case-cols{display:grid;grid-template-columns:1fr 1fr;gap:12px}.mini{border:1px solid var(--line);border-radius:16px;padding:15px;background:#fbfdff}.mini b{display:block;color:var(--orange);font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}.mini p{margin:0;color:var(--muted);font-size:.95rem;line-height:1.55}.chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.chips span{background:rgba(232,99,42,.10);color:#A9461D;border-radius:999px;padding:7px 10px;font-weight:850;font-size:.78rem}
      .method{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.step{background:#fff;border:1px solid var(--line);border-radius:22px;padding:24px}.step b{color:var(--orange);font-size:.82rem}.step h3{margin:10px 0;color:var(--navy)}.authority{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}.authority img{width:100%;height:420px;object-fit:cover;border-radius:28px;box-shadow:0 20px 50px rgba(16,32,51,.13)}.authority-text h2{color:var(--navy);font-size:clamp(2rem,4vw,3.2rem);line-height:1.05;margin:0 0 16px}.authority-text p{color:var(--muted);font-size:1.05rem;line-height:1.7}.bullets{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px}.bullets span{background:#fff;border:1px solid var(--line);border-radius:999px;padding:10px 13px;font-weight:850;color:var(--navy)}
      .papers{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px}.paper{min-width:330px;scroll-snap-align:start;background:#fff;border:1px solid var(--line);border-radius:22px;padding:24px}.paper b{color:var(--orange)}.contact-box{text-align:center;background:var(--navy);color:#fff;border-radius:30px;padding:54px}.contact-box h2{font-size:clamp(2rem,4vw,3.2rem);margin:0 0 12px}.contact-box p{color:#d9e5f0;max-width:720px;margin:0 auto 24px;line-height:1.7}
      @media(max-width:900px){.grid.three,.grid.two,.method,.authority{grid-template-columns:1fr}.hero h1{font-size:clamp(2.6rem,12vw,4.6rem)}.hero-content{padding:86px 0}.case-cols{grid-template-columns:1fr}.authority img{height:300px}.bullets{grid-template-columns:1fr}}
    `;
    document.head.appendChild(s);
  }

  function render(){
    styles(); const L=lang(), C=t();
    document.querySelectorAll('.nav-menu a').forEach((a,i)=>{ if(C.nav[i]) a.textContent=C.nav[i]; });
    document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.id===`lang-${L}`));
    document.getElementById('inicio').className='hero';
    document.getElementById('inicio').innerHTML=`<div class="wrap"><div class="hero-content"><p class="eyebrow">${C.eyebrow}</p><h1>${C.title}</h1><p>${C.lead}</p><p class="hero-tag">${C.tag}</p><div class="actions"><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${C.cta}</a><a class="btn secondary" href="#casos-concretos">${C.cta2}</a></div></div></div>`;
    document.getElementById('problemas').className='soft';
    section('problemas',C.pEy,C.pTitle,C.pLead,`<div class="grid three">${PROBLEMS[L].map(p=>`<article class="card">${img(p[2],p[0])}<div class="card-body"><h3>${p[0]}</h3><p>${p[1]}</p></div></article>`).join('')}</div>`);
    document.getElementById('servicios').className='';
    section('servicios',C.sEy,C.sTitle,C.sLead,`<div class="grid three">${SERVICES.map(s=>`<article class="card service">${img(s.img,s[2]?.[L]?.[0]||'')}<div class="card-body"><h3>${s[2][L][0]}</h3><p><strong>Para qué sirve:</strong> ${s[2][L][1]}</p><p><strong>Qué recibe la dirección:</strong> ${s[2][L][2]}</p></div></article>`).join('')}</div>`);
    document.getElementById('casos-concretos').className='soft';
    section('casos-concretos',C.cEy,C.cTitle,C.cLead,`<div class="grid two">${CASES.map(c=>{const v=c[L];return `<article class="case">${img(c.img,v[1])}<div class="case-body"><div class="case-label">${v[0]}</div><h3>${v[1]}</h3><div class="case-cols"><div class="mini"><b>${C.situation}</b><p>${v[2]}</p></div><div class="mini"><b>${C.decision}</b><p>${v[3]}</p></div></div><div class="chips">${v[4].map(x=>`<span>${x}</span>`).join('')}</div></div></article>`}).join('')}</div>`);
    document.getElementById('metodo').className='';
    const steps=L==='es'?[['01','Encuadrar','Decisión pendiente, áreas involucradas y restricciones reales.'],['02','Modelar','Relaciones causales, dependencias, escenarios y efectos combinados.'],['03','Priorizar','Acciones, recursos, trade-offs y riesgos residuales.'],['04','Sostener','Seguimiento, indicadores, roles y reglas de escalamiento.']]:[['01','Frame','Pending decision, involved areas, and real constraints.'],['02','Model','Causal relationships, dependencies, scenarios, and combined effects.'],['03','Prioritize','Actions, resources, trade-offs, and residual risks.'],['04','Sustain','Follow-up, indicators, roles, and escalation rules.']];
    section('metodo',C.mEy,C.mTitle,C.mLead,`<div class="method">${steps.map(s=>`<div class="step"><b>${s[0]}</b><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div>`);
    document.getElementById('autoridad')?.remove(); document.getElementById('metodo').insertAdjacentHTML('afterend',`<section id="autoridad" class="soft"><div class="wrap authority"><div>${img(IMG.control,'Autoridad técnica')}</div><div class="authority-text"><p class="eyebrow">${C.aEy}</p><h2>${C.aTitle}</h2><p>${C.aLead}</p><div class="bullets"><span>ISO 31000</span><span>Dinámica de sistemas</span><span>Factores humanos</span><span>Operaciones críticas</span></div></div></div></section>`);
    document.getElementById('articulos').className='';
    section('articulos',C.pubEy,C.pubTitle,C.pubLead,`<div class="papers">${PAPERS.map(p=>`<article class="paper"><b>${p[0]}</b><h3>${p[1]}</h3><p>${p[2]}</p><a class="btn secondary" href="#contacto">${C.paper}</a></article>`).join('')}</div>`);
    document.getElementById('contacto').className='';
    document.getElementById('contacto').innerHTML=`<div class="wrap"><div class="contact-box"><p class="eyebrow">${C.contactEy}</p><h2>${C.contactTitle}</h2><p>${C.contactLead}</p><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${C.cta}</a></div></div>`;
  }

  document.addEventListener('DOMContentLoaded',()=>{document.getElementById('lang-es')?.addEventListener('click',()=>{document.documentElement.lang='es';render()});document.getElementById('lang-en')?.addEventListener('click',()=>{document.documentElement.lang='en';render()});render();});
})();
