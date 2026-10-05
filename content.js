// Praxys Web — consolidated professional B2B system
(function(){
  const WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20sobre%20un%20problema%20de%20decisi%C3%B3n%20que%20cruza%20%C3%A1reas.';

  const PHOTO = {
    hero:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=82',
    problem1:'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=78',
    problem2:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=78',
    problem3:'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=78',
    service1:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=78',
    service2:'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=78',
    service3:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=78',
    service4:'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=78',
    service5:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=78',
    service6:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=78',
    case1:'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=78',
    case2:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=78',
    case3:'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=78',
    case4:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=78',
    case5:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=78',
    case6:'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=78',
    authority:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80'
  };

  const I18N = {
    es:{
      nav:['Problemas','Servicios','Casos','Método','Publicaciones','Contacto'],
      heroEyebrow:'Riesgo, decisión y sistemas complejos',
      heroTitle:'Decisiones ejecutivas para problemas que cruzan áreas',
      heroLead:'Ayudamos a equipos directivos y técnicos a ordenar evidencia, modelar relaciones, priorizar alternativas y sostener decisiones en organizaciones complejas.',
      heroTag:'Consultoría para organizaciones complejas, industriales y reguladas.',
      cta:'Agendar conversación',
      cta2:'Ver casos concretos',
      problemsEyebrow:'Problemas de gestión',
      problemsTitle:'Problemas que traban decisiones',
      problemsLead:'Situaciones donde la evidencia, las áreas, los recursos y el seguimiento quedan desalineados.',
      servicesEyebrow:'Servicios',
      servicesTitle:'Qué hace Praxys',
      servicesLead:'Intervenciones breves, concretas y orientadas a entregar criterios ejecutivos para decidir.',
      casesEyebrow:'Casos concretos',
      casesTitle:'Dónde se aplica',
      casesLead:'Ejemplos breves y legibles. El detalle se abre solo cuando hace falta.',
      methodEyebrow:'Método',
      methodTitle:'Cómo trabajamos',
      methodLead:'Una secuencia simple para pasar de un problema disperso a una decisión sostenida.',
      authorityEyebrow:'Autoridad técnica',
      authorityTitle:'Riesgo, sistemas sociotécnicos y decisión',
      authorityLead:'Praxys integra experiencia en gestión de riesgos, seguridad nuclear, factores humanos, dinámica de sistemas, análisis organizacional y toma de decisiones en contextos técnicos complejos.',
      publicationsEyebrow:'Publicaciones',
      publicationsTitle:'Producción técnica que respalda el enfoque',
      publicationsLead:'Artículos y trabajos aplicados a seguridad, sistemas complejos, factores humanos y dinámica organizacional.',
      contactEyebrow:'Contacto',
      contactTitle:'Empezar con una conversación concreta',
      contactLead:'En una primera conversación identificamos la decisión, las áreas involucradas y el entregable que podría ayudar.',
      contactNote:'Sin formulario largo. Una conversación enfocada alcanza para encuadrar el problema.',
      detail:'Ver detalle del caso',
      serviceDetail:'Ver servicio',
      close:'Cerrar',
      situation:'Situación',
      decision:'Decisión',
      work:'Cómo trabaja Praxys',
      deliverables:'Entregables concretos',
      useful:'Sirve para',
      paper:'Ver publicación'
    },
    en:{
      nav:['Problems','Services','Cases','Method','Publications','Contact'],
      heroEyebrow:'Risk, decision, and complex systems',
      heroTitle:'Executive decisions for problems that cross areas',
      heroLead:'We help leadership and technical teams organize evidence, model relationships, prioritize alternatives, and sustain decisions in complex organizations.',
      heroTag:'Consulting for complex, industrial, and regulated organizations.',
      cta:'Schedule conversation',
      cta2:'View concrete cases',
      problemsEyebrow:'Management problems',
      problemsTitle:'Problems that block decisions',
      problemsLead:'Situations where evidence, areas, resources, and follow-up become misaligned.',
      servicesEyebrow:'Services',
      servicesTitle:'What Praxys does',
      servicesLead:'Short, concrete interventions focused on delivering executive criteria for decision-making.',
      casesEyebrow:'Concrete cases',
      casesTitle:'Where it applies',
      casesLead:'Brief and readable examples. Detail opens only when needed.',
      methodEyebrow:'Method',
      methodTitle:'How we work',
      methodLead:'A simple sequence to move from a dispersed problem to a sustained decision.',
      authorityEyebrow:'Technical authority',
      authorityTitle:'Risk, sociotechnical systems, and decision-making',
      authorityLead:'Praxys integrates experience in risk management, nuclear safety, human factors, system dynamics, organizational analysis, and decision-making in technically complex contexts.',
      publicationsEyebrow:'Publications',
      publicationsTitle:'Technical production behind the approach',
      publicationsLead:'Articles and applied work on safety, complex systems, human factors, and organizational dynamics.',
      contactEyebrow:'Contact',
      contactTitle:'Start with a concrete conversation',
      contactLead:'In a first conversation we identify the decision, the areas involved, and the deliverable that could help.',
      contactNote:'No long form. A focused conversation is enough to frame the problem.',
      detail:'View case detail',
      serviceDetail:'View service',
      close:'Close',
      situation:'Situation',
      decision:'Decision',
      work:'How Praxys works',
      deliverables:'Concrete deliverables',
      useful:'Useful for',
      paper:'View publication'
    }
  };

  const PROBLEMS = {
    es:[
      ['El riesgo se propaga entre áreas','Un cambio local termina afectando continuidad, recursos, costos o decisiones de dirección.',PHOTO.problem1],
      ['Las prioridades compiten por los mismos recursos','Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.',PHOTO.problem2],
      ['Los problemas vuelven aunque se cierren acciones','Las soluciones puntuales no modifican las condiciones que reproducen el patrón.',PHOTO.problem3]
    ],
    en:[
      ['Risk propagates across areas','A local change ends up affecting continuity, resources, costs, or leadership decisions.',PHOTO.problem1],
      ['Priorities compete for the same resources','Everything seems important, but not everything can be executed at the same time or with the same capacity.',PHOTO.problem2],
      ['Problems return after actions are closed','Local fixes do not change the conditions that reproduce the pattern.',PHOTO.problem3]
    ]
  };

  const SERVICES = {
    diagnosis:{photo:PHOTO.service1, es:{title:'Diagnóstico ejecutivo de riesgos combinados',line:'Sirve cuando un problema cruza áreas y nadie tiene una lectura completa.',receive:'Mapa causal, dependencias críticas y prioridades de intervención.',detail:'Integramos datos, eventos, restricciones y criterios de distintas áreas para construir una lectura común del problema y orientar decisiones concretas.'}, en:{title:'Executive diagnosis of combined risks',line:'Useful when a problem crosses areas and no one has the complete picture.',receive:'Causal map, critical dependencies, and intervention priorities.',detail:'We integrate data, events, constraints, and criteria from different areas to build a shared reading of the problem and guide concrete decisions.'}},
    prioritization:{photo:PHOTO.service2, es:{title:'Priorización de acciones y recursos',line:'Sirve cuando hay demasiadas acciones abiertas y poca capacidad real para ejecutarlas.',receive:'Matriz de priorización, secuencia ejecutable y responsables.',detail:'Ordenamos qué acciones ejecutar primero, cuáles agrupar, cuáles postergar y qué riesgos quedan aceptados temporalmente.'}, en:{title:'Prioritization of actions and resources',line:'Useful when too many actions are open for the available execution capacity.',receive:'Prioritization matrix, executable sequence, and owners.',detail:'We decide what goes first, what can be grouped, what waits, and which risks are temporarily accepted.'}},
    scenarios:{photo:PHOTO.service3, es:{title:'Evaluación de escenarios de decisión',line:'Sirve antes de comprometer inversión, cambios operativos o recursos críticos.',receive:'Escenarios comparados, trade-offs, riesgos residuales y recomendación.',detail:'Estructuramos escenarios comparables, explicitamos supuestos y analizamos consecuencias sobre continuidad, costos, riesgo residual y capacidad de seguimiento.'}, en:{title:'Decision scenario assessment',line:'Useful before committing investment, operational changes, or critical resources.',receive:'Compared scenarios, trade-offs, residual risks, and recommendation.',detail:'We structure comparable scenarios, make assumptions explicit, and analyze consequences on continuity, costs, residual risk, and follow-up capability.'}},
    recurrence:{photo:PHOTO.service4, es:{title:'Investigación sistémica de eventos recurrentes',line:'Sirve cuando fallas o incidentes vuelven aunque existan acciones correctivas.',receive:'Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.',detail:'Reconstruimos eventos, decisiones, barreras, señales, presiones y responsabilidades para separar causas inmediatas de condiciones que sostienen la recurrencia.'}, en:{title:'Systemic investigation of recurring events',line:'Useful when failures or incidents return despite corrective actions.',receive:'Timeline, degraded barriers, causal map, and higher-impact actions.',detail:'We reconstruct events, decisions, barriers, signals, pressures, and responsibilities to separate immediate causes from conditions that sustain recurrence.'}},
    governance:{photo:PHOTO.service5, es:{title:'Diseño de gobernanza y seguimiento',line:'Sirve cuando una decisión aprobada se diluye entre áreas.',receive:'Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.',detail:'Diseñamos mecanismos de seguimiento para que una decisión pueda verificarse con indicadores, responsables y reglas claras.'}, en:{title:'Governance and follow-up design',line:'Useful when an approved decision dilutes across areas.',receive:'Executive dashboard, review routine, roles, and escalation rules.',detail:'We design follow-up mechanisms so decisions can be verified through indicators, owners, and clear rules.'}},
    training:{photo:PHOTO.service6, es:{title:'Capacitación ejecutiva y transferencia metodológica',line:'Sirve para instalar criterios comunes de análisis y decisión.',receive:'Workshops aplicados, plantillas y herramientas transferibles.',detail:'Trabajamos sobre casos reales del cliente para transferir criterios, plantillas y rutinas que queden instaladas en el equipo.'}, en:{title:'Executive training and method transfer',line:'Useful to install shared analysis and decision criteria.',receive:'Applied workshops, templates, and transferable tools.',detail:'We work on the client’s real cases to transfer criteria, templates, and routines that remain installed in the team.'}}
  };

  const CASES = [
    {id:'diagnosis',photo:PHOTO.case1,es:{label:'Caso 01',title:'Cada área explica una causa distinta del mismo problema',situation:'Las áreas interpretan la situación desde evidencia, responsabilidades y restricciones diferentes.',decision:'Construir una lectura común y decidir dónde intervenir primero.',deliver:['Mapa causal','Dependencias críticas','Prioridades'],work:'Praxys reconstruye eventos, datos, decisiones previas y restricciones para distinguir causas inmediatas, condiciones sistémicas y puntos de intervención.',use:'Alinear áreas, reducir discusiones circulares y decidir por dónde empezar.'},en:{label:'Case 01',title:'Each area explains a different cause of the same problem',situation:'Areas interpret the situation from different evidence, responsibilities, and constraints.',decision:'Build a shared reading and decide where to intervene first.',deliver:['Causal map','Critical dependencies','Priorities'],work:'Praxys reconstructs events, data, previous decisions, and constraints to distinguish immediate causes, systemic conditions, and intervention points.',use:'Align areas, reduce circular discussions, and decide where to start.'}},
    {id:'prioritization',photo:PHOTO.case2,es:{label:'Caso 02',title:'Hay más acciones abiertas que capacidad real para ejecutarlas',situation:'Las acciones compiten por personas, presupuesto, tiempo y capacidad de gestión.',decision:'Ordenar qué ejecutar primero, qué agrupar y qué postergar.',deliver:['Matriz de priorización','Secuencia ejecutable','Responsables'],work:'Praxys releva acciones, restricciones, impacto esperado, dependencias y responsables para construir una secuencia realista de implementación.',use:'Evitar carteras imposibles y concentrar recursos donde tienen mayor efecto.'},en:{label:'Case 02',title:'More actions are open than the real capacity to execute them',situation:'Actions compete for people, budget, time, and management capacity.',decision:'Decide what goes first, what can be grouped, and what waits.',deliver:['Prioritization matrix','Executable sequence','Owners'],work:'Praxys reviews actions, constraints, expected impact, dependencies, and owners to build a realistic implementation sequence.',use:'Avoid impossible portfolios and focus resources where they have greater effect.'}},
    {id:'scenarios',photo:PHOTO.case3,es:{label:'Caso 03',title:'Una inversión requiere comparar escenarios antes de comprometer recursos',situation:'La dirección debe comprometer recursos relevantes y necesita comparar impactos, supuestos y riesgos residuales con criterios explícitos.',decision:'Comparar alternativas con los mismos criterios y elegir una opción defendible.',deliver:['Escenarios comparados','Trade-offs','Supuestos críticos'],work:'Praxys define escenarios comparables, explicita supuestos y analiza consecuencias sobre continuidad, disponibilidad, costos, riesgo residual y capacidad de seguimiento.',use:'Sostener decisiones de inversión, cambio operativo o asignación de recursos críticos.'},en:{label:'Case 03',title:'An investment requires comparing scenarios before committing resources',situation:'Leadership must commit relevant resources and compare impacts, assumptions, and residual risks through explicit criteria.',decision:'Compare alternatives with the same criteria and choose a defensible option.',deliver:['Compared scenarios','Trade-offs','Critical assumptions'],work:'Praxys defines comparable scenarios, makes assumptions explicit, and analyzes consequences on continuity, availability, costs, residual risk, and follow-up capability.',use:'Support investment, operational change, or critical resource allocation decisions.'}},
    {id:'recurrence',photo:PHOTO.case4,es:{label:'Caso 04',title:'Los incidentes vuelven aunque las acciones estén cerradas',situation:'Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.',decision:'Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto.',deliver:['Línea de tiempo','Barreras degradadas','Mapa causal'],work:'Praxys reconstruye la secuencia de eventos, decisiones, barreras, señales, presiones, demoras y responsabilidades para separar síntomas de condiciones sistémicas.',use:'Ir más allá de la corrección puntual y actuar sobre condiciones de recurrencia.'},en:{label:'Case 04',title:'Incidents return even when actions are closed',situation:'Reports show closed events, but the pattern reappears in real operation.',decision:'Determine which conditions sustain recurrence and which intervention has the highest effect.',deliver:['Timeline','Degraded barriers','Causal map'],work:'Praxys reconstructs event sequences, decisions, barriers, signals, pressures, delays, and responsibilities to separate symptoms from systemic conditions.',use:'Move beyond local correction and act on recurrence conditions.'}},
    {id:'governance',photo:PHOTO.case5,es:{label:'Caso 05',title:'La decisión se aprueba, pero el seguimiento se diluye',situation:'La ejecución queda repartida sin suficiente claridad sobre responsabilidades, indicadores y escalamiento.',decision:'Definir cómo se gobierna la decisión y cuándo deben escalarse los desvíos.',deliver:['Modelo de gobernanza','Tablero ejecutivo','Roles'],work:'Praxys diseña un mecanismo de seguimiento con tablero, frecuencia de revisión, responsables y reglas de escalamiento.',use:'Evitar que las decisiones pierdan tracción después de ser aprobadas.'},en:{label:'Case 05',title:'The decision is approved, but follow-up dilutes',situation:'Execution is distributed without enough clarity on responsibilities, indicators, and escalation.',decision:'Define how the decision is governed and when deviations must be escalated.',deliver:['Governance model','Executive dashboard','Roles'],work:'Praxys designs a follow-up mechanism with dashboard, review frequency, owners, and escalation rules.',use:'Prevent decisions from losing traction after approval.'}},
    {id:'training',photo:PHOTO.case6,es:{label:'Caso 06',title:'Los equipos usan criterios distintos para decidir',situation:'Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.',decision:'Instalar una forma común de analizar, priorizar y sostener decisiones.',deliver:['Workshops aplicados','Guías','Plantillas'],work:'Praxys trabaja sobre casos reales para transferir criterios, plantillas y rutinas que queden instaladas en el equipo.',use:'Construir capacidad interna para analizar problemas complejos sin depender de consultoría permanente.'},en:{label:'Case 06',title:'Teams use different criteria to decide',situation:'Technical areas, operations, and management discuss with different language and criteria.',decision:'Install a shared way to analyze, prioritize, and sustain decisions.',deliver:['Applied workshops','Guides','Templates'],work:'Praxys works on real cases to transfer criteria, templates, and routines that remain installed in the team.',use:'Build internal capacity to analyze complex problems without permanent consulting dependence.'}}
  ];

  const PAPERS = {
    es:[
      ['2025','Cultura de seguridad','Modelo cuantitativo de cultura de seguridad','Simulación de liderazgo, comunicación, mejora continua y desempeño operacional.','papers/2819_BJRS.pdf'],
      ['2023','Dinámica de sistemas','Modelo causal de gestión de seguridad','Modelo para estudiar seguridad, disponibilidad y trade-offs operacionales.','#'],
      ['2021','Modelado funcional','Modelado jerárquico de reactores nucleares','Combinación de GTST-DMLD y dinámica de sistemas aplicada a seguridad.','#'],
      ['2020','Post-Fukushima','Gestión de seguridad después de Fukushima','Revisión crítica del estado del arte y factores organizacionales.','#'],
      ['2023','Sistemas complejos','Modelo conceptual HTOE/MTOE','Integración de factores humanos, tecnológicos, organizacionales y ambientales.','#']
    ],
    en:[
      ['2025','Safety culture','Quantitative safety culture model','Simulation of leadership, communication, continuous improvement, and operational performance.','papers/2819_BJRS.pdf'],
      ['2023','System dynamics','Causal model of safety management','Model to study safety, availability, and operational trade-offs.','#'],
      ['2021','Functional modeling','Hierarchical modeling of nuclear reactors','Combination of GTST-DMLD and system dynamics applied to safety.','#'],
      ['2020','Post-Fukushima','Safety management after Fukushima','Critical review of the state of the art and organizational factors.','#'],
      ['2023','Complex systems','HTOE/MTOE conceptual model','Integration of human, technological, organizational, and environmental factors.','#']
    ]
  };

  function currentLang(){ return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es'; }
  function esc(v){ return String(v == null ? '' : v).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
  function photo(src,alt){ return `<figure class="px-photo"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></figure>`; }
  function sectionHead(eyebrow,title,lead){ return `<div class="section-head"><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(title)}</h2><p>${esc(lead)}</p></div>`; }
  function chips(items){ return `<div class="chip-row">${items.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`; }

  function installStyles(){
    let style = document.getElementById('praxys-consolidated-styles');
    if(!style){ style = document.createElement('style'); style.id = 'praxys-consolidated-styles'; document.head.appendChild(style); }
    style.textContent = `
      :root{--navy:#102033;--blue:#17365D;--text:#25384D;--muted:#637487;--line:rgba(16,32,51,.12);--soft:#F4F8FB;--soft2:#EAF3FA;--orange:#E8632A;--amber:#F2C94C;--shadow:0 18px 48px rgba(16,32,51,.09);--radius:24px;}
      *{box-sizing:border-box}html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}body{margin:0;background:#fff;color:var(--text);font-family:Inter,Manrope,Segoe UI,Arial,sans-serif;line-height:1.58}.wrap{width:min(1160px,calc(100% - 44px));margin:0 auto}.navbar{background:rgba(255,255,255,.96)!important;border-bottom:1px solid var(--line)!important;box-shadow:0 10px 26px rgba(16,32,51,.05)!important}.nav-inner{min-height:74px!important}.brand{color:var(--navy)!important}.nav-menu a{color:var(--text)!important}.nav-menu a:hover{color:var(--orange)!important}.lang-btn.active{background:var(--navy)!important;color:#fff!important}.hero{position:relative;min-height:720px;display:flex;align-items:center;overflow:hidden;background:#EAF3FA}.hero::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(244,248,251,.98) 0%,rgba(244,248,251,.92) 33%,rgba(244,248,251,.58) 58%,rgba(244,248,251,.18) 100%);z-index:1}.hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center;filter:saturate(.95) contrast(1.02)}.hero-content{position:relative;z-index:2;max-width:780px;padding:96px 0}.eyebrow{display:inline-block;color:var(--orange);font-size:.78rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}.hero h1{margin:14px 0 20px;color:var(--navy);font-size:clamp(3rem,6.2vw,5.6rem);line-height:.96;letter-spacing:-.06em;font-weight:950;text-wrap:balance}.hero p{margin:0;color:#354A60;font-size:clamp(1.08rem,1.6vw,1.3rem);line-height:1.62;max-width:720px;font-weight:560}.hero-tag{display:inline-flex;margin-top:22px;padding:9px 14px;border:1px solid rgba(16,32,51,.13);border-radius:999px;background:rgba(255,255,255,.72);color:var(--navy);font-size:.88rem;font-weight:850;backdrop-filter:blur(8px)}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;text-decoration:none;font-size:.8rem;font-weight:950;letter-spacing:.04em;text-transform:uppercase}.btn.primary{background:var(--orange);color:#fff;box-shadow:0 14px 30px rgba(232,99,42,.24)}.btn.secondary{background:var(--navy);color:#fff}.section{padding:78px 0}.section.alt{background:var(--soft)}.section.dark{background:linear-gradient(180deg,#102033 0%,#17304E 100%);color:#fff}.section-head{max-width:820px;margin:0 auto 34px;text-align:center}.section-head h2{margin:9px 0 10px;color:var(--navy);font-size:clamp(2.05rem,4vw,3.35rem);line-height:1.04;letter-spacing:-.045em;font-weight:930;text-wrap:balance}.section-head p{margin:0;color:var(--muted);font-size:1.08rem;line-height:1.65}.dark .section-head h2{color:#fff}.dark .section-head p{color:#CFDDEA}.dark .eyebrow{color:var(--amber)}.grid{display:grid;gap:22px}.grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}.grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}.card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)}.card-body{padding:24px;display:flex;flex-direction:column;gap:12px}.px-photo{margin:0;aspect-ratio:16/9;overflow:hidden;background:#DCE8F2}.px-photo img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.95) contrast(1.02)}.card .kicker,.case-label{color:var(--orange);font-size:.73rem;font-weight:950;letter-spacing:.12em;text-transform:uppercase}.card h3{margin:0;color:var(--navy);font-size:1.28rem;line-height:1.22;letter-spacing:-.018em;font-weight:900;text-wrap:balance}.card p{margin:0;color:var(--muted);font-size:.98rem;line-height:1.58}.problem-card{box-shadow:none}.dark .problem-card{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.14)}.dark .problem-card h3{color:#fff}.dark .problem-card p{color:#D3E0EE}.receive{margin-top:auto;padding:14px;border-radius:16px;background:var(--soft);border:1px solid var(--line)}.receive strong{display:block;color:var(--orange);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;margin-bottom:5px}.receive span{color:var(--text);font-size:.94rem;line-height:1.45;font-weight:750}.small-btn{min-height:42px;border:0;border-radius:999px;background:var(--navy);color:#fff;padding:0 16px;font-size:.76rem;font-weight:950;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;margin-top:4px}.small-btn:hover{background:var(--orange)}.case-card .px-photo{aspect-ratio:16/8.4}.case-card .case-main{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:4px}.mini{padding:14px;border:1px solid var(--line);border-radius:16px;background:#FAFCFE}.mini strong{display:block;margin-bottom:5px;color:var(--orange);font-size:.72rem;font-weight:950;letter-spacing:.1em;text-transform:uppercase}.chip-row{display:flex;flex-wrap:wrap;gap:8px}.chip-row span{display:inline-flex;align-items:center;min-height:28px;padding:5px 10px;border-radius:999px;background:rgba(232,99,42,.10);color:#A9461D;font-size:.78rem;font-weight:850}.method-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.method-card{padding:26px}.method-card .num{width:40px;height:40px;border-radius:999px;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:950;margin-bottom:16px}.authority{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center}.authority .px-photo{border-radius:var(--radius);box-shadow:var(--shadow);aspect-ratio:16/10}.authority-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:22px}.authority-list span{padding:12px 14px;border-radius:16px;background:var(--soft);font-size:.92rem;font-weight:800;color:var(--navy)}.paper-controls{display:flex;justify-content:flex-end;align-items:center;gap:10px;margin:-8px 0 18px}.paper-count{font-weight:950;color:var(--navy);font-size:.86rem;letter-spacing:.05em}.paper-count em{font-style:normal}.paper-arrow{width:42px;height:42px;border:0;border-radius:999px;background:var(--navy);color:#fff;font-weight:950;cursor:pointer}.paper-arrow:hover{background:var(--orange)}.paper-reel{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:2px 2px 16px;scrollbar-width:none}.paper-reel::-webkit-scrollbar{display:none}.paper{flex:0 0 calc((100% - 40px)/3);scroll-snap-align:start;min-height:270px}.paper .card-body{height:100%}.paper a{margin-top:auto;color:var(--orange);font-weight:950;text-decoration:none}.contact-box{text-align:center;max-width:760px;margin:0 auto}.contact-box p{margin:12px 0 0;color:var(--muted)}.modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(5,12,22,.66);backdrop-filter:blur(8px);padding:24px}.modal.open{display:flex}.modal-box{position:relative;width:min(980px,100%);max-height:88vh;overflow:auto;background:#fff;border-radius:28px;box-shadow:0 34px 90px rgba(0,0,0,.32)}.modal-box .px-photo{border-radius:28px 28px 0 0;aspect-ratio:16/7}.modal-content{padding:34px}.modal h2{margin:8px 52px 14px 0;color:var(--navy);font-size:clamp(1.85rem,3.4vw,2.85rem);line-height:1.05;letter-spacing:-.04em}.modal p{color:var(--muted);font-size:1.03rem;line-height:1.62}.modal-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:18px 0}.modal h4{color:var(--orange);font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;margin:0 0 7px}.close{position:absolute;right:16px;top:16px;z-index:2;width:42px;height:42px;border:0;border-radius:999px;background:var(--navy);color:#fff;font-size:1.35rem;cursor:pointer}.lock{overflow:hidden}@media(max-width:1050px){.grid.three,.grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}.method-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.authority{grid-template-columns:1fr}.paper{flex-basis:calc((100% - 20px)/2)}.hero{min-height:660px}.hero h1{font-size:clamp(2.7rem,8vw,4.8rem)}}@media(max-width:720px){.wrap{width:min(100% - 30px,1160px)}.hero{min-height:620px}.hero::before{background:linear-gradient(180deg,rgba(244,248,251,.96) 0%,rgba(244,248,251,.85) 72%,rgba(244,248,251,.70) 100%)}.hero-bg{object-position:center center}.hero-content{padding:70px 0}.hero h1{font-size:clamp(2.35rem,12vw,3.55rem);letter-spacing:-.045em}.hero p{font-size:1.03rem}.section{padding:58px 0}.section-head{text-align:left;margin-bottom:24px}.section-head h2{font-size:clamp(1.95rem,9vw,2.65rem)}.grid.three,.grid.two,.method-grid{grid-template-columns:1fr}.case-card .case-main,.modal-grid{grid-template-columns:1fr}.paper{flex-basis:88%}.authority-list{grid-template-columns:1fr}.modal-box .px-photo{aspect-ratio:16/9}.modal-content{padding:24px}.nav-inner{align-items:flex-start}.nav-menu{gap:10px;justify-content:flex-end;flex-wrap:wrap}.nav-menu a{font-size:.78rem}}
    `;
  }

  function renderNav(t){
    const links = document.querySelectorAll('.nav-menu a');
    t.nav.forEach((label,i)=>{ if(links[i]) links[i].textContent = label; });
    const es = document.getElementById('lang-es'), en = document.getElementById('lang-en');
    const l = currentLang();
    if(es) es.classList.toggle('active', l === 'es');
    if(en) en.classList.toggle('active', l === 'en');
  }

  function renderHero(t){
    const sec = document.getElementById('inicio');
    sec.className = 'hero';
    sec.innerHTML = `<img class="hero-bg" src="${PHOTO.hero}" alt="${esc(t.heroTitle)}" fetchpriority="high"><div class="wrap"><div class="hero-content"><span class="eyebrow">${esc(t.heroEyebrow)}</span><h1>${esc(t.heroTitle)}</h1><p>${esc(t.heroLead)}</p><span class="hero-tag">${esc(t.heroTag)}</span><div class="hero-actions"><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.cta)}</a><a class="btn secondary" href="#casos-concretos">${esc(t.cta2)}</a></div></div></div>`;
  }

  function renderProblems(l,t){
    const sec = document.getElementById('problemas');
    sec.className = 'section dark';
    sec.innerHTML = `<div class="wrap">${sectionHead(t.problemsEyebrow,t.problemsTitle,t.problemsLead)}<div class="grid three">${PROBLEMS[l].map(p=>`<article class="card problem-card">${photo(p[2],p[0])}<div class="card-body"><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></div></article>`).join('')}</div></div>`;
  }

  function renderServices(l,t){
    const sec = document.getElementById('servicios');
    sec.className = 'section';
    const cards = Object.entries(SERVICES).map(([id,s])=>{ const v=s[l]; return `<article class="card">${photo(s.photo,v.title)}<div class="card-body"><span class="kicker">${esc(t.servicesEyebrow)}</span><h3>${esc(v.title)}</h3><p>${esc(v.line)}</p><div class="receive"><strong>${l==='en'?'Leadership receives':'La dirección recibe'}</strong><span>${esc(v.receive)}</span></div><button class="small-btn" data-open-service="${id}">${esc(t.serviceDetail)}</button></div></article>`; }).join('');
    sec.innerHTML = `<div class="wrap">${sectionHead(t.servicesEyebrow,t.servicesTitle,t.servicesLead)}<div class="grid three">${cards}</div></div>`;
  }

  function renderCases(l,t){
    const sec = document.getElementById('casos-concretos');
    sec.className = 'section alt';
    const cards = CASES.map(c=>{ const v=c[l]; return `<article class="card case-card">${photo(c.photo,v.title)}<div class="card-body"><span class="case-label">${esc(v.label)}</span><h3>${esc(v.title)}</h3><div class="case-main"><p class="mini"><strong>${esc(t.situation)}</strong>${esc(v.situation)}</p><p class="mini"><strong>${esc(t.decision)}</strong>${esc(v.decision)}</p></div>${chips(v.deliver)}<button class="small-btn" data-open-case="${c.id}">${esc(t.detail)}</button></div></article>`; }).join('');
    sec.innerHTML = `<div class="wrap">${sectionHead(t.casesEyebrow,t.casesTitle,t.casesLead)}<div class="grid two">${cards}</div></div>`;
  }

  function renderMethod(l,t){
    const data = l === 'en' ? [
      ['01','Frame the decision','Clarify what must be decided, by whom, with what constraints, and over what time horizon.'],
      ['02','Integrate evidence','Bring together data, events, responsibilities, resources, and operational restrictions.'],
      ['03','Model relationships','Identify causal loops, dependencies, delays, trade-offs, and intervention points.'],
      ['04','Sustain follow-up','Define owners, indicators, review routines, and escalation rules.']
    ] : [
      ['01','Encuadrar la decisión','Precisar qué debe decidirse, quién decide, con qué restricciones y en qué horizonte.'],
      ['02','Integrar evidencia','Reunir datos, eventos, responsabilidades, recursos y restricciones operativas.'],
      ['03','Modelar relaciones','Identificar bucles causales, dependencias, demoras, trade-offs y puntos de intervención.'],
      ['04','Sostener seguimiento','Definir responsables, indicadores, rutinas de revisión y reglas de escalamiento.']
    ];
    const sec = document.getElementById('metodo');
    sec.className = 'section';
    sec.innerHTML = `<div class="wrap">${sectionHead(t.methodEyebrow,t.methodTitle,t.methodLead)}<div class="grid method-grid">${data.map(x=>`<article class="card method-card"><div class="num">${x[0]}</div><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></article>`).join('')}</div></div>`;
  }

  function renderAuthority(l,t){
    const existing = document.getElementById('autoridad');
    if(existing) existing.remove();
    const sec = document.createElement('section');
    sec.id = 'autoridad';
    sec.className = 'section alt';
    const items = l === 'en' ? ['Risk governance','System dynamics','Human factors','Operational continuity','Complex organizations','Executive decision-making'] : ['Gobernanza del riesgo','Dinámica de sistemas','Factores humanos','Continuidad operativa','Organizaciones complejas','Decisión ejecutiva'];
    sec.innerHTML = `<div class="wrap"><div class="authority"><div>${sectionHead(t.authorityEyebrow,t.authorityTitle,t.authorityLead).replace('section-head','section-head authority-head')}<div class="authority-list">${items.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>${photo(PHOTO.authority,t.authorityTitle)}</div></div>`;
    document.getElementById('articulos').before(sec);
  }

  function setupPaperReel(sec){
    const track = sec.querySelector('.paper-reel');
    const prev = sec.querySelector('[data-paper-prev]');
    const next = sec.querySelector('[data-paper-next]');
    const current = sec.querySelector('.paper-count b');
    const total = sec.querySelector('.paper-count em');
    if(!track || !prev || !next || !current || !total) return;
    const cards = () => Array.from(track.querySelectorAll('.paper'));
    const perView = () => window.innerWidth <= 720 ? 1 : (window.innerWidth <= 1050 ? 2 : 3);
    const pages = () => Math.max(1, Math.ceil(cards().length / perView()));
    const nearest = () => { const cs=cards(); if(!cs.length) return 0; let best=0, delta=Math.abs(cs[0].offsetLeft-track.scrollLeft); cs.forEach((c,i)=>{ const d=Math.abs(c.offsetLeft-track.scrollLeft); if(d<delta){delta=d; best=i;} }); return best; };
    const update = () => { current.textContent = String(Math.min(pages(), Math.floor(nearest()/perView())+1)); total.textContent = String(pages()); };
    const move = dir => { const cs=cards(); if(!cs.length) return; const i=Math.max(0, Math.min(cs.length-1, nearest()+dir*perView())); track.scrollTo({left:cs[i].offsetLeft, behavior:'smooth'}); setTimeout(update,260); };
    if(!sec.dataset.paperBound){ prev.addEventListener('click',()=>move(-1)); next.addEventListener('click',()=>move(1)); track.addEventListener('scroll',()=>{ clearTimeout(track._timer); track._timer=setTimeout(update,80); },{passive:true}); window.addEventListener('resize',update); sec.dataset.paperBound='1'; }
    update();
  }

  function renderPapers(l,t){
    const sec = document.getElementById('articulos');
    sec.className = 'section';
    const cards = PAPERS[l].map(p=>`<article class="card paper"><div class="card-body"><span class="kicker">${esc(p[0])} · ${esc(p[1])}</span><h3>${esc(p[2])}</h3><p>${esc(p[3])}</p><a href="${esc(p[4])}" target="_blank" rel="noopener">${esc(t.paper)} →</a></div></article>`).join('');
    sec.innerHTML = `<div class="wrap">${sectionHead(t.publicationsEyebrow,t.publicationsTitle,t.publicationsLead)}<div class="paper-controls"><button class="paper-arrow" data-paper-prev type="button" aria-label="Anterior">←</button><span class="paper-count"><b>1</b> / <em>1</em></span><button class="paper-arrow" data-paper-next type="button" aria-label="Siguiente">→</button></div><div class="paper-reel">${cards}</div></div>`;
    setupPaperReel(sec);
  }

  function renderContact(l,t){
    const sec = document.getElementById('contacto');
    sec.className = 'section alt';
    sec.innerHTML = `<div class="wrap"><div class="contact-box">${sectionHead(t.contactEyebrow,t.contactTitle,t.contactLead)}<a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.cta)}</a><p>${esc(t.contactNote)}</p></div></div>`;
  }

  function modal(){ let m=document.getElementById('px-modal'); if(!m){ m=document.createElement('div'); m.id='px-modal'; m.className='modal'; document.body.appendChild(m); } return m; }
  function openService(id){ const l=currentLang(), t=I18N[l], base=SERVICES[id]; if(!base) return; const v=base[l]; const m=modal(); m.innerHTML = `<div class="modal-box"><button class="close" data-close type="button" aria-label="${esc(t.close)}">×</button>${photo(base.photo,v.title)}<div class="modal-content"><span class="kicker">${esc(t.servicesEyebrow)}</span><h2>${esc(v.title)}</h2><p>${esc(v.detail)}</p><h4>${l==='en'?'Leadership receives':'La dirección recibe'}</h4><p>${esc(v.receive)}</p><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.cta)}</a></div></div>`; m.classList.add('open'); document.body.classList.add('lock'); }
  function openCase(id){ const l=currentLang(), t=I18N[l], base=CASES.find(c=>c.id===id); if(!base) return; const v=base[l]; const m=modal(); m.innerHTML = `<div class="modal-box"><button class="close" data-close type="button" aria-label="${esc(t.close)}">×</button>${photo(base.photo,v.title)}<div class="modal-content"><span class="kicker">${esc(v.label)}</span><h2>${esc(v.title)}</h2><p>${esc(v.situation)}</p><div class="modal-grid"><div><h4>${esc(t.decision)}</h4><p>${esc(v.decision)}</p></div><div><h4>${esc(t.work)}</h4><p>${esc(v.work)}</p></div></div><h4>${esc(t.deliverables)}</h4>${chips(v.deliver)}<h4>${esc(t.useful)}</h4><p>${esc(v.use)}</p><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.cta)}</a></div></div>`; m.classList.add('open'); document.body.classList.add('lock'); }
  function closeModal(){ const m=document.getElementById('px-modal'); if(m){m.classList.remove('open');m.innerHTML='';} document.body.classList.remove('lock'); }

  function bind(){
    if(window.__praxysBound) return; window.__praxysBound = true;
    document.addEventListener('click', e=>{
      const langButton = e.target.closest('#lang-es,#lang-en');
      if(langButton){ const l = langButton.id === 'lang-en' ? 'en' : 'es'; localStorage.setItem('selectedLanguage', l); document.documentElement.lang = l; render(); return; }
      const service = e.target.closest('[data-open-service]');
      const kase = e.target.closest('[data-open-case]');
      const close = e.target.closest('[data-close]');
      if(close || e.target.id === 'px-modal'){ closeModal(); return; }
      if(service) openService(service.dataset.openService);
      if(kase) openCase(kase.dataset.openCase);
    });
    document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeModal(); });
  }

  function render(){
    installStyles();
    const l = currentLang(), t = I18N[l];
    renderNav(t);
    renderHero(t);
    renderProblems(l,t);
    renderServices(l,t);
    renderCases(l,t);
    renderMethod(l,t);
    renderAuthority(l,t);
    renderPapers(l,t);
    renderContact(l,t);
    bind();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
  window.praxysRender = render;
})();