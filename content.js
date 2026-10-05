// Praxys Web — consolidated Argentine B2B consulting website
(function(){
  'use strict';

  const WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20sobre%20un%20problema%20de%20riesgo%20o%20decisi%C3%B3n%20que%20cruza%20%C3%A1reas.';

  const PHOTO = {
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=82',
    problemRisk: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=78',
    problemCapacity: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=78',
    problemRecurrence: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=78',
    serviceDiagnosis: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=78',
    servicePriority: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=78',
    serviceScenario: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=78',
    serviceRecurrence: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=78',
    serviceGovernance: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=78',
    serviceTraining: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=78',
    caseDiagnosis: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1100&q=78',
    casePriority: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1100&q=78',
    caseScenario: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=78',
    caseRecurrence: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=78',
    caseGovernance: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1100&q=78',
    caseTraining: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=78'
  };

  const COPY = {
    es: {
      nav: ['Problemas','Servicios','Casos','Método','Publicaciones','Contacto'],
      heroKicker: 'Consultoría argentina en riesgo y decisión',
      heroTitle: 'Decisiones ejecutivas para problemas que cruzan áreas',
      heroLead: 'Ayudamos a equipos directivos y técnicos a ordenar evidencia, modelar relaciones, priorizar alternativas y sostener decisiones en organizaciones complejas.',
      heroBadge: 'Consultoría argentina para organizaciones técnicas, industriales y reguladas.',
      cta: 'Agendar conversación',
      casesCta: 'Ver casos concretos',
      problemsKicker: 'Problemas de gestión',
      problemsTitle: 'Cuando el problema no pertenece a una sola área',
      problemsLead: 'Situaciones frecuentes en organizaciones técnicas donde evidencia, recursos, responsabilidades y seguimiento quedan desalineados.',
      servicesKicker: 'Servicios',
      servicesTitle: 'Intervenciones acotadas para decisiones reales',
      servicesLead: 'Cada servicio está pensado para entregar claridad ejecutiva, priorización y capacidad de seguimiento, no informes decorativos.',
      casesKicker: 'Casos concretos',
      casesTitle: 'Problemas donde Praxys ayuda a decidir y avanzar',
      casesLead: 'Ejemplos breves y legibles. El detalle completo se abre solo cuando hace falta.',
      methodKicker: 'Método',
      methodTitle: 'Cómo trabaja Praxys',
      methodLead: 'Un recorrido compacto desde información dispersa hacia decisiones defendibles y gobernadas.',
      authorityKicker: 'Autoridad técnica',
      authorityTitle: 'Consultoría argentina para sistemas sociotécnicos complejos',
      authorityLead: 'Praxys integra experiencia en gestión de riesgos, seguridad nuclear, dinámica de sistemas, factores humanos, análisis organizacional y toma de decisiones en contextos técnicos complejos.',
      papersKicker: 'Publicaciones',
      papersTitle: 'Producción técnica detrás del método',
      papersLead: 'Publicaciones seleccionadas que respaldan el enfoque sistémico de Praxys.',
      contactKicker: 'Contacto',
      contactTitle: 'Empezar con una conversación concreta',
      contactLead: 'En una conversación breve identificamos la decisión, las áreas involucradas y el entregable que podría ayudar.',
      whatsapp: 'Agendar por WhatsApp'
    },
    en: {
      nav: ['Problems','Services','Cases','Method','Publications','Contact'],
      heroKicker: 'Argentine consulting in risk and decision-making',
      heroTitle: 'Executive decisions for problems that cross areas',
      heroLead: 'We help leadership and technical teams structure evidence, model relationships, prioritize alternatives, and sustain decisions in complex organizations.',
      heroBadge: 'Argentine consulting for technical, industrial, and regulated organizations.',
      cta: 'Schedule conversation',
      casesCta: 'View concrete cases',
      problemsKicker: 'Management problems',
      problemsTitle: 'When the problem does not belong to one area',
      problemsLead: 'Frequent situations in technical organizations where evidence, resources, responsibilities, and follow-up become misaligned.',
      servicesKicker: 'Services',
      servicesTitle: 'Focused interventions for real decisions',
      servicesLead: 'Each service is designed to deliver executive clarity, prioritization, and follow-up capability, not decorative reports.',
      casesKicker: 'Concrete cases',
      casesTitle: 'Problems where Praxys helps decide and move forward',
      casesLead: 'Short, readable examples. Full detail opens only when needed.',
      methodKicker: 'Method',
      methodTitle: 'How Praxys works',
      methodLead: 'A compact path from dispersed information to defensible and governed decisions.',
      authorityKicker: 'Technical authority',
      authorityTitle: 'Argentine consulting for complex sociotechnical systems',
      authorityLead: 'Praxys integrates experience in risk management, nuclear safety, system dynamics, human factors, organizational analysis, and decision-making in technically complex contexts.',
      papersKicker: 'Publications',
      papersTitle: 'Technical production behind the method',
      papersLead: 'Selected publications that support Praxys’ systemic approach.',
      contactKicker: 'Contact',
      contactTitle: 'Start with a concrete conversation',
      contactLead: 'In a short conversation we identify the decision, the areas involved, and the deliverable that could help.',
      whatsapp: 'Schedule by WhatsApp'
    }
  };

  const PROBLEMS = {
    es: [
      ['El riesgo se propaga entre áreas','Un cambio local termina afectando continuidad, costos, recursos, seguridad o decisiones de dirección.', PHOTO.problemRisk],
      ['Las prioridades compiten por los mismos recursos','Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.', PHOTO.problemCapacity],
      ['Los problemas vuelven aunque se cierren acciones','Las soluciones puntuales no modifican las condiciones que reproducen el patrón.', PHOTO.problemRecurrence]
    ],
    en: [
      ['Risk propagates across areas','A local change ends up affecting continuity, costs, resources, safety, or leadership decisions.', PHOTO.problemRisk],
      ['Priorities compete for the same resources','Everything seems important, but not everything can be executed at the same time or with the same capacity.', PHOTO.problemCapacity],
      ['Problems return after actions are closed','Local fixes do not change the conditions that reproduce the pattern.', PHOTO.problemRecurrence]
    ]
  };

  const SERVICES = [
    {photo: PHOTO.serviceDiagnosis, es:{title:'Diagnóstico ejecutivo de riesgos combinados', line:'Sirve cuando un problema cruza áreas y nadie tiene una lectura completa.', receive:'Mapa causal, dependencias críticas, prioridades y próximos pasos.'}, en:{title:'Executive diagnosis of combined risks', line:'Useful when a problem crosses areas and no one has the complete picture.', receive:'Causal map, critical dependencies, priorities, and next steps.'}},
    {photo: PHOTO.servicePriority, es:{title:'Priorización de acciones y recursos', line:'Sirve cuando hay demasiadas acciones abiertas y poca capacidad real para ejecutarlas.', receive:'Matriz de priorización, secuencia ejecutable, responsables y riesgos aceptados temporalmente.'}, en:{title:'Prioritization of actions and resources', line:'Useful when too many actions are open and capacity is limited.', receive:'Prioritization matrix, executable sequence, owners, and temporarily accepted risks.'}},
    {photo: PHOTO.serviceScenario, es:{title:'Evaluación de escenarios de decisión', line:'Sirve antes de comprometer inversión, cambios operativos o recursos críticos.', receive:'Escenarios comparados, trade-offs, supuestos críticos y recomendación defendible.'}, en:{title:'Decision scenario assessment', line:'Useful before committing investment, operational changes, or critical resources.', receive:'Compared scenarios, trade-offs, critical assumptions, and a defensible recommendation.'}},
    {photo: PHOTO.serviceRecurrence, es:{title:'Investigación sistémica de eventos recurrentes', line:'Sirve cuando fallas, desvíos o incidentes vuelven aunque existan acciones correctivas.', receive:'Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.'}, en:{title:'Systemic investigation of recurring events', line:'Useful when failures, deviations, or incidents recur despite corrective actions.', receive:'Timeline, degraded barriers, causal map, and higher-impact actions.'}},
    {photo: PHOTO.serviceGovernance, es:{title:'Diseño de gobernanza y seguimiento', line:'Sirve cuando una decisión se aprueba, pero luego se diluye entre áreas.', receive:'Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.'}, en:{title:'Governance and follow-up design', line:'Useful when a decision is approved but then diluted across areas.', receive:'Executive dashboard, review routine, roles, and escalation rules.'}},
    {photo: PHOTO.serviceTraining, es:{title:'Capacitación ejecutiva y transferencia metodológica', line:'Sirve para instalar criterios comunes de análisis, priorización y decisión.', receive:'Workshops aplicados, plantillas, guías y herramientas transferibles.'}, en:{title:'Executive training and method transfer', line:'Useful to install shared criteria for analysis, prioritization, and decision-making.', receive:'Applied workshops, templates, guides, and transferable tools.'}}
  ];

  const CASES = [
    {photo: PHOTO.caseDiagnosis, es:{label:'Caso 01', title:'Cada área explica una causa distinta del mismo problema', situation:'Las áreas interpretan la situación desde evidencia, responsabilidades y restricciones diferentes.', decision:'Construir una lectura común y decidir dónde intervenir primero.', chips:['Mapa causal','Dependencias críticas','Prioridades'], detail:'Praxys reconstruye datos, eventos, decisiones previas y restricciones para distinguir causas inmediatas, condiciones sistémicas y puntos de intervención.'}, en:{label:'Case 01', title:'Each area explains a different cause of the same problem', situation:'Areas interpret the situation from different evidence, responsibilities, and constraints.', decision:'Build a shared reading and decide where to intervene first.', chips:['Causal map','Critical dependencies','Priorities'], detail:'Praxys reconstructs data, events, prior decisions, and constraints to distinguish immediate causes, systemic conditions, and intervention points.'}},
    {photo: PHOTO.casePriority, es:{label:'Caso 02', title:'Hay más acciones abiertas que capacidad real para ejecutarlas', situation:'Las acciones compiten por personas, presupuesto, tiempo y capacidad de gestión.', decision:'Ordenar qué ejecutar primero, qué agrupar y qué postergar.', chips:['Matriz de priorización','Secuencia ejecutable','Responsables'], detail:'Praxys releva acciones, restricciones, impacto esperado, dependencias y responsables para construir una secuencia realista.'}, en:{label:'Case 02', title:'There are more open actions than real execution capacity', situation:'Actions compete for people, budget, time, and management capacity.', decision:'Decide what goes first, what can be grouped, and what waits.', chips:['Prioritization matrix','Executable sequence','Owners'], detail:'Praxys reviews actions, constraints, expected impact, dependencies, and owners to build a realistic sequence.'}},
    {photo: PHOTO.caseScenario, es:{label:'Caso 03', title:'Una inversión requiere comparar escenarios antes de comprometer recursos', situation:'La dirección debe comprometer recursos relevantes y necesita comparar impactos, supuestos y riesgos residuales.', decision:'Comparar alternativas con los mismos criterios y elegir una opción defendible.', chips:['Escenarios comparados','Trade-offs','Supuestos críticos'], detail:'Praxys define escenarios comparables y analiza efectos sobre continuidad, disponibilidad, costos, riesgo residual y capacidad de seguimiento.'}, en:{label:'Case 03', title:'An investment requires comparing scenarios before committing resources', situation:'Leadership must commit relevant resources and compare impacts, assumptions, and residual risks.', decision:'Compare alternatives using the same criteria and choose a defensible option.', chips:['Compared scenarios','Trade-offs','Critical assumptions'], detail:'Praxys defines comparable scenarios and analyzes effects on continuity, availability, costs, residual risk, and follow-up capability.'}},
    {photo: PHOTO.caseRecurrence, es:{label:'Caso 04', title:'Los incidentes vuelven aunque las acciones estén cerradas', situation:'Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.', decision:'Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto.', chips:['Línea de tiempo','Barreras degradadas','Mapa causal'], detail:'Praxys reconstruye eventos, decisiones, barreras, señales, presiones y demoras para separar síntomas de condiciones sistémicas.'}, en:{label:'Case 04', title:'Incidents return even after actions are closed', situation:'Reports show closed events, but the pattern reappears in real operation.', decision:'Determine which conditions sustain recurrence and which intervention has the highest effect.', chips:['Timeline','Degraded barriers','Causal map'], detail:'Praxys reconstructs events, decisions, barriers, signals, pressures, and delays to separate symptoms from systemic conditions.'}},
    {photo: PHOTO.caseGovernance, es:{label:'Caso 05', title:'La decisión se aprueba, pero el seguimiento se diluye', situation:'La ejecución queda repartida sin suficiente claridad sobre responsabilidades, indicadores y escalamiento.', decision:'Definir cómo se gobierna la decisión y cuándo deben escalarse los desvíos.', chips:['Modelo de gobernanza','Tablero ejecutivo','Roles'], detail:'Praxys diseña mecanismos de seguimiento con tablero, frecuencia de revisión, responsables y reglas de escalamiento.'}, en:{label:'Case 05', title:'The decision is approved, but follow-up dilutes', situation:'Execution is distributed without enough clarity on responsibilities, indicators, and escalation.', decision:'Define how the decision is governed and when deviations must be escalated.', chips:['Governance model','Executive dashboard','Roles'], detail:'Praxys designs follow-up mechanisms with dashboard, review frequency, owners, and escalation rules.'}},
    {photo: PHOTO.caseTraining, es:{label:'Caso 06', title:'Los equipos usan criterios distintos para decidir', situation:'Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.', decision:'Instalar una forma común de analizar, priorizar y sostener decisiones.', chips:['Workshops aplicados','Guías','Plantillas'], detail:'Praxys trabaja sobre casos reales para transferir criterios, plantillas y rutinas que queden instaladas en el equipo.'}, en:{label:'Case 06', title:'Teams use different criteria to decide', situation:'Technical areas, operations, and management discuss with different language and criteria.', decision:'Install a shared way to analyze, prioritize, and sustain decisions.', chips:['Applied workshops','Guides','Templates'], detail:'Praxys works on real cases to transfer criteria, templates, and routines that remain installed in the team.'}}
  ];

  const PAPERS = {
    es: [
      ['2025','BJRS','Modelo cuantitativo de cultura de seguridad','Simulación de cultura de seguridad, liderazgo, comunicación y desempeño operacional.'],
      ['2023','ESREL','Modelo causal de gestión de seguridad','Modelo sistémico para estudiar seguridad, disponibilidad y trade-offs operacionales.'],
      ['2023','ISDC','Modelo HTOE/MTOE','Integración de factores humanos, tecnológicos, organizacionales y ambientales.'],
      ['2021','Dinámica de sistemas','Marco para modelar gestión de seguridad','Integración de decisiones, acciones humanas, tecnología y entorno.'],
      ['2021','Modelado jerárquico','Modelado funcional de reactores nucleares','Combinación de GTST-DMLD y dinámica de sistemas.'],
      ['2020','Revisión post-Fukushima','Gestión de seguridad nuclear','Revisión crítica del estado del arte sobre seguridad y aprendizaje organizacional.']
    ],
    en: [
      ['2025','BJRS','Quantitative safety culture model','Simulation of safety culture, leadership, communication, and operational performance.'],
      ['2023','ESREL','Causal model of safety management','Systemic model to study safety, availability, and operational trade-offs.'],
      ['2023','ISDC','HTOE/MTOE model','Integration of human, technological, organizational, and environmental factors.'],
      ['2021','System dynamics','Framework to model safety management','Integration of decisions, human actions, technology, and context.'],
      ['2021','Hierarchical modeling','Functional modeling of nuclear reactors','Combination of GTST-DMLD and system dynamics.'],
      ['2020','Post-Fukushima review','Nuclear safety management','Critical review of safety management and organizational learning.']
    ]
  };

  function lang(){ return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es'; }
  function esc(v){ return String(v || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function photo(src, alt, cls=''){ return `<figure class="photo ${cls}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></figure>`; }
  function head(kicker, title, lead){ return `<div class="section-head"><span class="eyebrow">${esc(kicker)}</span><h2>${esc(title)}</h2><p>${esc(lead)}</p></div>`; }
  function section(id, html){ const el = document.getElementById(id); if(el) el.innerHTML = html; }

  function installStyles(){
    let style = document.getElementById('praxys-consolidated-styles');
    if(!style){ style = document.createElement('style'); style.id = 'praxys-consolidated-styles'; document.head.appendChild(style); }
    style.textContent = `
      :root{--navy:#102033;--blue:#17365d;--text:#25384d;--muted:#5b6d82;--line:rgba(16,32,51,.12);--bg:#f5f8fb;--soft:#eef5fb;--orange:#E8632A;--amber:#F2C94C;--radius:24px;--shadow:0 18px 46px rgba(16,32,51,.08)}
      *{box-sizing:border-box} html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility} body{margin:0;background:#fff;color:var(--text);font-family:Inter,Manrope,Segoe UI,Arial,sans-serif;line-height:1.58}.wrap{width:min(1160px,calc(100% - 44px));margin:0 auto}.navbar{background:rgba(255,255,255,.96)!important;border-bottom:1px solid var(--line)!important;box-shadow:0 8px 26px rgba(16,32,51,.05)!important}.nav-inner{min-height:74px!important}.brand{color:var(--navy)!important}.nav-menu a{color:var(--text)!important}.nav-menu a:hover{color:var(--orange)!important}.lang-btn.active{background:var(--navy)!important;color:#fff!important}
      .hero{position:relative;min-height:680px;display:flex;align-items:center;overflow:hidden;background:var(--soft)}.hero::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(246,250,253,.98) 0%,rgba(246,250,253,.94) 37%,rgba(246,250,253,.60) 61%,rgba(246,250,253,.22) 100%),url('${PHOTO.hero}') center/cover no-repeat}.hero .wrap{position:relative;z-index:2;padding:102px 0 98px}.hero-box{max-width:770px}.eyebrow{display:inline-block;color:var(--orange);font-size:.76rem;letter-spacing:.16em;text-transform:uppercase;font-weight:950}.hero h1{margin:16px 0 18px;color:var(--navy);font-size:clamp(2.85rem,6.1vw,5.4rem);line-height:.96;letter-spacing:-.056em;font-weight:900;text-wrap:balance}.hero p{margin:0;color:#3f5268;font-size:clamp(1.08rem,1.45vw,1.28rem);line-height:1.62;max-width:760px;font-weight:560}.hero-badge{display:inline-flex;margin-top:22px;padding:10px 14px;border-radius:999px;background:#fff;border:1px solid var(--line);color:var(--blue);font-weight:850;font-size:.92rem;box-shadow:0 12px 30px rgba(16,32,51,.07)}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 20px;border-radius:999px;text-decoration:none;font-size:.8rem;text-transform:uppercase;letter-spacing:.055em;font-weight:950}.btn.primary{background:var(--orange);color:#fff;box-shadow:0 12px 28px rgba(232,99,42,.20)}.btn.secondary{background:var(--navy);color:#fff}.btn.ghost{background:#fff;color:var(--navy);border:1px solid var(--line)}
      .section{padding:76px 0}.section.alt{background:var(--bg)}.section.dark{background:linear-gradient(180deg,#102033,#142b45);color:#fff}.section-head{max-width:840px;margin:0 auto 34px;text-align:center}.section-head h2{margin:10px 0 10px;color:var(--navy);font-size:clamp(2.0rem,3.7vw,3.25rem);line-height:1.05;letter-spacing:-.04em;font-weight:890;text-wrap:balance}.section-head p{margin:0 auto;color:var(--muted);font-size:1.08rem;line-height:1.66;max-width:760px}.dark .section-head h2{color:#fff}.dark .section-head p{color:#cfddea}.dark .eyebrow{color:var(--amber)}
      .grid{display:grid;gap:22px}.grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}.grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}.card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)}.photo{margin:0;overflow:hidden;background:#e5edf5;aspect-ratio:16/9}.photo img{display:block;width:100%;height:100%;object-fit:cover;filter:saturate(.96) contrast(1.02)}.card-body{padding:22px}.card h3{margin:0 0 10px;color:var(--navy);font-size:1.22rem;line-height:1.22;letter-spacing:-.02em;font-weight:900;text-wrap:balance}.card p{margin:0;color:var(--muted);font-size:.99rem;line-height:1.58}.service-card .card-body{display:flex;flex-direction:column;gap:12px;min-height:260px}.receive{margin-top:auto;padding:14px;border-radius:16px;background:#f4f8fb;border:1px solid var(--line)}.receive strong{display:block;margin-bottom:4px;color:var(--orange);font-size:.72rem;letter-spacing:.11em;text-transform:uppercase}.receive span{display:block;color:var(--text);font-weight:760;font-size:.95rem;line-height:1.45}
      .identity{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:stretch}.identity-panel{background:var(--navy);color:#fff;border-radius:28px;padding:34px;box-shadow:var(--shadow)}.identity-panel h3{margin:0 0 12px;font-size:clamp(1.65rem,3vw,2.35rem);line-height:1.08;letter-spacing:-.035em}.identity-panel p{margin:0;color:#d8e5f2;font-size:1.05rem;line-height:1.65}.identity-list{display:grid;gap:12px}.identity-item{background:#fff;border:1px solid var(--line);border-radius:20px;padding:18px 20px;box-shadow:0 12px 30px rgba(16,32,51,.05)}.identity-item strong{display:block;color:var(--orange);font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;margin-bottom:6px}.identity-item span{display:block;color:var(--text);font-weight:760}
      .case-card{background:#fff;border:1px solid var(--line);border-radius:26px;overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column}.case-card .photo{aspect-ratio:16/8.6}.case-body{padding:24px}.case-label{display:block;color:var(--orange);font-size:.72rem;letter-spacing:.13em;text-transform:uppercase;font-weight:950;margin-bottom:8px}.case-card h3{margin:0 0 16px;color:var(--navy);font-size:1.36rem;line-height:1.16;letter-spacing:-.025em;font-weight:900;text-wrap:balance}.case-mini{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}.case-mini div{padding:14px;border:1px solid var(--line);border-radius:16px;background:#fbfdff}.case-mini strong{display:block;color:var(--orange);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px}.case-mini p{margin:0;color:var(--muted);font-size:.95rem;line-height:1.5}.chips{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}.chips span{display:inline-flex;border-radius:999px;background:rgba(232,99,42,.10);color:#A9461D;padding:6px 10px;font-size:.76rem;font-weight:850}.case-card button,.paper-arrow{border:0;cursor:pointer}.case-card .btn{width:100%;margin-top:12px;background:var(--navy);color:#fff}.steps{grid-template-columns:repeat(4,minmax(0,1fr))}.step{padding:24px}.step b{display:inline-flex;width:42px;height:42px;border-radius:999px;background:var(--orange);color:#fff;align-items:center;justify-content:center;margin-bottom:16px}.step h3{margin:0 0 8px;color:var(--navy);font-size:1.12rem}.step p{margin:0;color:var(--muted);font-size:.96rem;line-height:1.55}.paper-controls{display:flex;justify-content:flex-end;align-items:center;gap:10px;margin-bottom:18px}.paper-arrow{width:42px;height:42px;border-radius:999px;background:var(--navy);color:#fff;font-weight:950}.paper-count{font-size:.88rem;color:var(--navy);font-weight:950}.paper-count em{font-style:normal}.paper-reel{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:2px 2px 14px;scrollbar-width:none}.paper-reel::-webkit-scrollbar{display:none}.paper{flex:0 0 calc((100% - 40px)/3);min-height:300px;scroll-snap-align:start}.paper .card-body{height:100%;display:flex;flex-direction:column}.paper-meta{color:var(--orange)!important;font-size:.82rem!important;font-weight:900!important;text-transform:uppercase;letter-spacing:.08em}.paper-link{margin-top:auto;color:var(--orange);font-weight:900;text-decoration:none}.contact-box{text-align:center;background:#fff;border:1px solid var(--line);border-radius:28px;max-width:760px;margin:0 auto;padding:34px;box-shadow:var(--shadow)}.contact-box p{margin:14px auto 0;color:var(--muted);max-width:560px}.modal{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;background:rgba(7,15,27,.62);backdrop-filter:blur(6px);padding:24px}.modal.open{display:flex}.modal-box{position:relative;background:#fff;border-radius:28px;width:min(980px,100%);max-height:88vh;overflow:auto;box-shadow:0 36px 100px rgba(0,0,0,.34)}.modal-box .photo{aspect-ratio:16/6.4}.modal-content{padding:32px}.modal-content h2{margin:8px 44px 14px 0;color:var(--navy);font-size:clamp(1.8rem,3vw,2.65rem);line-height:1.08;letter-spacing:-.035em}.modal-content p{color:var(--muted);font-size:1.02rem;line-height:1.62}.close{position:absolute;right:16px;top:16px;width:42px;height:42px;border:0;border-radius:999px;background:var(--navy);color:#fff;font-size:1.5rem;cursor:pointer;z-index:2}
      @media(max-width:1050px){.grid.three,.steps{grid-template-columns:repeat(2,minmax(0,1fr))}.grid.two,.identity{grid-template-columns:1fr}.paper{flex-basis:calc((100% - 20px)/2)}.hero{min-height:620px}.hero::before{background:linear-gradient(90deg,rgba(246,250,253,.99) 0%,rgba(246,250,253,.91) 60%,rgba(246,250,253,.70) 100%),url('${PHOTO.hero}') center/cover no-repeat}}
      @media(max-width:720px){.wrap{width:min(100% - 30px,1160px)}.section{padding:56px 0}.hero{min-height:600px}.hero .wrap{padding:76px 0}.hero h1{font-size:clamp(2.2rem,12vw,3.4rem);line-height:1.02}.hero p{font-size:1.02rem}.hero-badge{border-radius:18px;line-height:1.45}.section-head{text-align:left;margin-bottom:24px}.section-head h2{font-size:clamp(1.9rem,9vw,2.55rem)}.grid.three,.grid.two,.steps{grid-template-columns:1fr}.case-mini{grid-template-columns:1fr}.paper{flex-basis:88%;min-height:0}.paper-controls{justify-content:center}.identity-panel{padding:26px}.modal-box .photo{aspect-ratio:16/9}.modal-content{padding:24px}.nav-inner{align-items:flex-start!important;padding:16px 0!important}.nav-menu{gap:10px!important;flex-wrap:wrap!important;justify-content:flex-end!important}.nav-menu a{font-size:.78rem!important}}
    `;
  }

  function renderHero(t){
    section('inicio', `<div class="hero"><div class="wrap"><div class="hero-box"><span class="eyebrow">${esc(t.heroKicker)}</span><h1>${esc(t.heroTitle)}</h1><p>${esc(t.heroLead)}</p><span class="hero-badge">${esc(t.heroBadge)}</span><div class="hero-actions"><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.cta)}</a><a class="btn secondary" href="#casos-concretos">${esc(t.casesCta)}</a></div></div></div></div>`);
  }

  function renderProblems(l,t){
    section('problemas', `<div class="section alt"><div class="wrap">${head(t.problemsKicker,t.problemsTitle,t.problemsLead)}<div class="grid three">${PROBLEMS[l].map(p=>`<article class="card">${photo(p[2],p[0])}<div class="card-body"><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p></div></article>`).join('')}</div></div></div>`);
  }

  function renderServices(t){
    section('servicios', `<div class="section"><div class="wrap">${head(t.servicesKicker,t.servicesTitle,t.servicesLead)}<div class="grid three">${SERVICES.map(s=>{ const v=s[lang()]; return `<article class="card service-card">${photo(s.photo,v.title)}<div class="card-body"><h3>${esc(v.title)}</h3><p>${esc(v.line)}</p><div class="receive"><strong>${lang()==='en'?'Leadership receives':'La dirección recibe'}</strong><span>${esc(v.receive)}</span></div></div></article>`}).join('')}</div></div></div>`);
  }

  function renderCases(t){
    section('casos-concretos', `<div class="section alt"><div class="wrap">${head(t.casesKicker,t.casesTitle,t.casesLead)}<div class="grid two">${CASES.map((c,i)=>{ const v=c[lang()]; return `<article class="case-card" id="case-${i+1}">${photo(c.photo,v.title)}<div class="case-body"><span class="case-label">${esc(v.label)}</span><h3>${esc(v.title)}</h3><div class="case-mini"><div><strong>${lang()==='en'?'Situation':'Situación'}</strong><p>${esc(v.situation)}</p></div><div><strong>${lang()==='en'?'Decision':'Decisión'}</strong><p>${esc(v.decision)}</p></div></div><div class="chips">${v.chips.map(x=>`<span>${esc(x)}</span>`).join('')}</div><button class="btn" type="button" data-case="${i}">${lang()==='en'?'View case detail':'Ver detalle del caso'}</button></div></article>`}).join('')}</div></div></div>`);
  }

  function renderMethod(t){
    const steps = lang()==='en' ? [
      ['01','Frame the decision','Clarify what must be decided, by whom, under which constraints, and with which evidence.'],
      ['02','Map the system','Connect events, causes, dependencies, resources, barriers, incentives, and delays.'],
      ['03','Prioritize alternatives','Compare actions and scenarios using explicit criteria, residual risk, and execution capacity.'],
      ['04','Govern follow-up','Define owners, indicators, review rhythm, and escalation rules.']
    ] : [
      ['01','Encuadrar la decisión','Aclarar qué debe decidirse, quién decide, con qué restricciones y con qué evidencia.'],
      ['02','Mapear el sistema','Conectar eventos, causas, dependencias, recursos, barreras, incentivos y demoras.'],
      ['03','Priorizar alternativas','Comparar acciones y escenarios con criterios explícitos, riesgo residual y capacidad de ejecución.'],
      ['04','Gobernar el seguimiento','Definir responsables, indicadores, ritmo de revisión y reglas de escalamiento.']
    ];
    section('metodo', `<div class="section"><div class="wrap">${head(t.methodKicker,t.methodTitle,t.methodLead)}<div class="grid steps">${steps.map(s=>`<article class="card step"><b>${s[0]}</b><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p></article>`).join('')}</div><div class="identity" style="margin-top:28px"><div class="identity-panel"><span class="eyebrow">${esc(t.authorityKicker)}</span><h3>${esc(t.authorityTitle)}</h3><p>${esc(t.authorityLead)}</p></div><div class="identity-list">${(lang()==='en' ? [['Integrated risk','Risk as relationships between technical, human, organizational, and economic factors.'],['Critical operations','Approach suited to industrial, technical, regulated, and high-consequence contexts.'],['Spanish / English','Work and deliverables available in both languages for local and international teams.']] : [['Riesgo integrado','El riesgo como relación entre factores técnicos, humanos, organizacionales y económicos.'],['Operaciones críticas','Enfoque apto para contextos industriales, técnicos, regulados y de alta consecuencia.'],['Español / inglés','Trabajo y entregables disponibles en ambos idiomas para equipos locales e internacionales.']]).map(x=>`<div class="identity-item"><strong>${esc(x[0])}</strong><span>${esc(x[1])}</span></div>`).join('')}</div></div></div></div>`);
  }

  function renderPapers(t){
    const papers = PAPERS[lang()];
    section('articulos', `<div class="section alt"><div class="wrap">${head(t.papersKicker,t.papersTitle,t.papersLead)}<div class="paper-controls"><button class="paper-arrow" type="button" data-prev aria-label="Anterior">←</button><span class="paper-count"><b>1</b> / <em>1</em></span><button class="paper-arrow" type="button" data-next aria-label="Siguiente">→</button></div><div class="paper-reel">${papers.map(p=>`<article class="card paper"><div class="card-body"><p class="paper-meta">${esc(p[0])} · ${esc(p[1])}</p><h3>${esc(p[2])}</h3><p>${esc(p[3])}</p><a class="paper-link" href="#contacto">${lang()==='en'?'Discuss application':'Conversar aplicación'} →</a></div></article>`).join('')}</div></div></div>`);
    bindPaperReel();
  }

  function renderContact(t){
    section('contacto', `<div class="section"><div class="wrap">${head(t.contactKicker,t.contactTitle,t.contactLead)}<div class="contact-box"><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${esc(t.whatsapp)}</a><p>${lang()==='en'?'No long form. A focused first conversation is enough to frame the problem.':'Sin formulario largo. Una primera conversación enfocada alcanza para encuadrar el problema.'}</p></div></div></div>`);
  }

  function bindPaperReel(){
    const sec = document.getElementById('articulos');
    const track = sec && sec.querySelector('.paper-reel');
    const prev = sec && sec.querySelector('[data-prev]');
    const next = sec && sec.querySelector('[data-next]');
    const current = sec && sec.querySelector('.paper-count b');
    const total = sec && sec.querySelector('.paper-count em');
    if(!track || !prev || !next || !current || !total) return;
    const cards = () => Array.from(track.querySelectorAll('.paper'));
    const perView = () => window.innerWidth <= 720 ? 1 : (window.innerWidth <= 1050 ? 2 : 3);
    const pages = () => Math.max(1, Math.ceil(cards().length / perView()));
    const nearest = () => { const cs=cards(); let best=0, d=Infinity; cs.forEach((c,i)=>{ const x=Math.abs(c.offsetLeft-track.scrollLeft); if(x<d){d=x; best=i;} }); return best; };
    const update = () => { current.textContent=String(Math.min(pages(),Math.floor(nearest()/perView())+1)); total.textContent=String(pages()); };
    const move = dir => { const cs=cards(); if(!cs.length) return; const i=Math.max(0,Math.min(cs.length-1,nearest()+dir*perView())); track.scrollTo({left:cs[i].offsetLeft, behavior:'smooth'}); setTimeout(update,260); };
    prev.onclick = () => move(-1); next.onclick = () => move(1); track.onscroll = () => { clearTimeout(track._timer); track._timer=setTimeout(update,80); }; window.onresize = update; update();
  }

  function bindCases(){
    document.querySelectorAll('[data-case]').forEach(btn=>{ btn.onclick = () => openCase(Number(btn.dataset.case)); });
  }

  function openCase(index){
    const base = CASES[index]; if(!base) return; const c = base[lang()];
    let modal = document.getElementById('praxys-modal');
    if(!modal){ modal = document.createElement('div'); modal.id='praxys-modal'; modal.className='modal'; document.body.appendChild(modal); }
    modal.innerHTML = `<div class="modal-box"><button class="close" type="button" aria-label="Cerrar">×</button>${photo(base.photo,c.title)}<div class="modal-content"><span class="case-label">${esc(c.label)}</span><h2>${esc(c.title)}</h2><p>${esc(c.detail)}</p><div class="case-mini"><div><strong>${lang()==='en'?'Situation':'Situación'}</strong><p>${esc(c.situation)}</p></div><div><strong>${lang()==='en'?'Decision':'Decisión'}</strong><p>${esc(c.decision)}</p></div></div><div class="chips">${c.chips.map(x=>`<span>${esc(x)}</span>`).join('')}</div><a class="btn primary" href="${WHATSAPP}" target="_blank" rel="noopener">${lang()==='en'?'Discuss this case':'Conversar este caso'}</a></div></div>`;
    modal.classList.add('open');
    modal.querySelector('.close').onclick = closeModal;
    modal.onclick = e => { if(e.target === modal) closeModal(); };
  }
  function closeModal(){ const m=document.getElementById('praxys-modal'); if(m){m.classList.remove('open');m.innerHTML='';} }

  function updateStaticNav(l){
    const labels = COPY[l].nav;
    document.querySelectorAll('.nav-menu a').forEach((a,i)=>{ if(labels[i]) a.textContent = labels[i]; });
  }

  function render(){
    const l = lang();
    const t = COPY[l];
    document.documentElement.lang = l;
    updateStaticNav(l);
    installStyles();
    renderHero(t);
    renderProblems(l,t);
    renderServices(t);
    renderCases(t);
    renderMethod(t);
    renderPapers(t);
    renderContact(t);
    bindCases();
    document.dispatchEvent(new CustomEvent('praxys:rendered', {detail:{lang:l}}));
  }

  window.PRAXYS = window.PRAXYS || {};
  window.PRAXYS.refresh = render;

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
  document.addEventListener('praxys:lang', render);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
})();
