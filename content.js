// Praxys Web — clean executive visual system
(function(){
  const WHATSAPP = 'https://wa.me/5492944770005?text=Hola%20Praxys%2C%20quisiera%20agendar%20una%20conversaci%C3%B3n%20ejecutiva%20sobre%20un%20problema%20que%20cruza%20%C3%A1reas.';

  const PHOTOS = {
    hero: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1900&q=78',
    problemRisk: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=76',
    problemResources: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=76',
    problemRecurrence: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=76',
    serviceDiagnosis: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=76',
    servicePrioritization: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=76',
    serviceScenarios: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=76',
    serviceRecurrence: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=76',
    serviceGovernance: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=76',
    serviceTraining: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=76',
    caseDiagnosis: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=76',
    casePrioritization: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=76',
    caseScenarios: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=76',
    caseRecurrence: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1000&q=76',
    caseGovernance: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=76',
    caseTraining: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=76'
  };

  const SERVICES = [
    {id:'diagnosis', photo:PHOTOS.serviceDiagnosis,
      es:{title:'Diagnóstico ejecutivo de riesgos combinados', line:'Ordena causas, dependencias y efectos cuando el problema cruza áreas.', receive:'Mapa causal, prioridades de intervención y criterios de seguimiento.', detail:'Integramos datos, eventos, restricciones y criterios de distintas áreas para construir una lectura común del problema y orientar decisiones concretas.'},
      en:{title:'Executive diagnosis of combined risks', line:'Structures causes, dependencies, and effects when the problem crosses areas.', receive:'Causal map, intervention priorities, and follow-up criteria.', detail:'We integrate data, events, constraints, and criteria from different areas to build a shared reading of the problem and guide concrete decisions.'}
    },
    {id:'prioritization', photo:PHOTOS.servicePrioritization,
      es:{title:'Priorización de acciones y recursos', line:'Convierte carteras extensas en una secuencia ejecutable con recursos limitados.', receive:'Matriz de priorización, responsables y condiciones de implementación.', detail:'Ayudamos a decidir qué acciones ejecutar primero, cuáles agrupar, cuáles postergar y qué riesgos quedan aceptados temporalmente.'},
      en:{title:'Prioritization of actions and resources', line:'Turns extensive action portfolios into an executable sequence under limited resources.', receive:'Prioritization matrix, owners, and implementation conditions.', detail:'We help decide what goes first, what can be grouped, what waits, and which risks are temporarily accepted.'}
    },
    {id:'scenarios', photo:PHOTOS.serviceScenarios,
      es:{title:'Evaluación de escenarios de decisión', line:'Compara alternativas antes de comprometer inversión, recursos o cambios operativos.', receive:'Escenarios comparados, trade-offs, riesgos residuales y recomendación.', detail:'Estructuramos escenarios comparables, explicitamos supuestos y analizamos consecuencias sobre continuidad, costos, riesgo residual y capacidad de seguimiento.'},
      en:{title:'Decision scenario assessment', line:'Compares alternatives before committing investment, resources, or operational changes.', receive:'Compared scenarios, trade-offs, residual risks, and recommendation.', detail:'We structure comparable scenarios, make assumptions explicit, and analyze consequences on continuity, costs, residual risk, and follow-up capability.'}
    },
    {id:'recurrence', photo:PHOTOS.serviceRecurrence,
      es:{title:'Investigación sistémica de eventos recurrentes', line:'Identifica por qué fallas o incidentes vuelven aunque existan acciones correctivas.', receive:'Línea de tiempo, barreras degradadas, mapa causal y acciones de mayor impacto.', detail:'Reconstruimos eventos, decisiones, barreras, señales, presiones y responsabilidades para separar causas inmediatas de condiciones que sostienen la recurrencia.'},
      en:{title:'Systemic investigation of recurring events', line:'Identifies why failures or incidents reappear despite corrective actions.', receive:'Timeline, degraded barriers, causal map, and higher-impact actions.', detail:'We reconstruct events, decisions, barriers, signals, pressures, and responsibilities to separate immediate causes from conditions that sustain recurrence.'}
    },
    {id:'governance', photo:PHOTOS.serviceGovernance,
      es:{title:'Diseño de gobernanza y seguimiento', line:'Hace que decisiones aprobadas tengan responsables, indicadores y reglas de escalamiento.', receive:'Tablero ejecutivo, rutina de revisión, roles y reglas de escalamiento.', detail:'Diseñamos mecanismos de seguimiento para que una decisión no se diluya entre áreas y pueda verificarse con indicadores, responsables y reglas claras.'},
      en:{title:'Governance and follow-up design', line:'Gives approved decisions owners, indicators, and escalation rules.', receive:'Executive dashboard, review routine, roles, and escalation rules.', detail:'We design follow-up mechanisms so decisions do not dilute across areas and can be verified through indicators, owners, and clear rules.'}
    },
    {id:'training', photo:PHOTOS.serviceTraining,
      es:{title:'Capacitación ejecutiva y transferencia metodológica', line:'Instala criterios comunes para analizar problemas reales y decidir entre áreas.', receive:'Workshops aplicados, plantillas y herramientas transferibles.', detail:'Trabajamos sobre casos reales del cliente para transferir criterios, plantillas y rutinas que queden instaladas en el equipo.'},
      en:{title:'Executive training and method transfer', line:'Installs shared criteria to analyze real problems and decide across areas.', receive:'Applied workshops, templates, and transferable tools.', detail:'We work on the client’s real cases to transfer criteria, templates, and routines that remain installed in the team.'}
    }
  ];

  const CASES = [
    {id:'diagnosis', photo:PHOTOS.caseDiagnosis,
      es:{label:'Caso 01', title:'Cada área explica una causa distinta del mismo problema', situation:'Las áreas interpretan la situación desde evidencia, responsabilidades y restricciones diferentes.', decision:'Construir una lectura común y decidir dónde intervenir primero.', deliver:['Mapa causal','Dependencias críticas','Prioridades'], work:'Praxys reconstruye eventos, datos, decisiones previas y restricciones para distinguir causas inmediatas, condiciones sistémicas y puntos de intervención.'},
      en:{label:'Case 01', title:'Each area explains a different cause of the same problem', situation:'Areas interpret the situation from different evidence, responsibilities, and constraints.', decision:'Build a shared reading and decide where to intervene first.', deliver:['Causal map','Critical dependencies','Priorities'], work:'Praxys reconstructs events, data, previous decisions, and constraints to distinguish immediate causes, systemic conditions, and intervention points.'}
    },
    {id:'prioritization', photo:PHOTOS.casePrioritization,
      es:{label:'Caso 02', title:'Hay demasiadas acciones abiertas para la capacidad disponible', situation:'Las acciones compiten por personas, presupuesto, tiempo y capacidad de gestión.', decision:'Ordenar qué ejecutar primero, qué agrupar y qué postergar.', deliver:['Matriz de priorización','Secuencia ejecutable','Responsables'], work:'Praxys releva acciones, restricciones, impacto esperado, dependencias y responsables para construir una secuencia realista de implementación.'},
      en:{label:'Case 02', title:'Too many actions are open for available capacity', situation:'Actions compete for people, budget, time, and management capacity.', decision:'Decide what goes first, what can be grouped, and what waits.', deliver:['Prioritization matrix','Executable sequence','Owners'], work:'Praxys reviews actions, constraints, expected impact, dependencies, and owners to build a realistic implementation sequence.'}
    },
    {id:'scenarios', photo:PHOTOS.caseScenarios,
      es:{label:'Caso 03', title:'La inversión requiere comparar escenarios, costos y riesgos', situation:'La dirección debe comprometer recursos relevantes y necesita comparar impactos, supuestos y riesgos residuales con criterios explícitos.', decision:'Comparar alternativas con los mismos criterios y elegir una opción defendible.', deliver:['Escenarios comparados','Trade-offs','Supuestos críticos'], work:'Praxys define escenarios comparables, explicita supuestos y analiza consecuencias sobre continuidad, disponibilidad, costos, riesgo residual y capacidad de seguimiento.'},
      en:{label:'Case 03', title:'Investment requires comparing scenarios, costs, and risks', situation:'Leadership must commit relevant resources and compare impacts, assumptions, and residual risks through explicit criteria.', decision:'Compare alternatives with the same criteria and choose a defensible option.', deliver:['Compared scenarios','Trade-offs','Critical assumptions'], work:'Praxys defines comparable scenarios, makes assumptions explicit, and analyzes consequences on continuity, availability, costs, residual risk, and follow-up capability.'}
    },
    {id:'recurrence', photo:PHOTOS.caseRecurrence,
      es:{label:'Caso 04', title:'Las acciones se cierran, pero los incidentes vuelven', situation:'Los reportes muestran eventos cerrados, pero el patrón reaparece en la operación real.', decision:'Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto.', deliver:['Línea de tiempo','Barreras degradadas','Mapa causal'], work:'Praxys reconstruye la secuencia de eventos, decisiones, barreras, señales, presiones, demoras y responsabilidades para separar síntomas de condiciones sistémicas.'},
      en:{label:'Case 04', title:'Actions are closed, but incidents keep coming back', situation:'Reports show closed events, but the pattern reappears in real operation.', decision:'Determine which conditions sustain recurrence and which intervention has the highest effect.', deliver:['Timeline','Degraded barriers','Causal map'], work:'Praxys reconstructs event sequences, decisions, barriers, signals, pressures, delays, and responsibilities to separate symptoms from systemic conditions.'}
    },
    {id:'governance', photo:PHOTOS.caseGovernance,
      es:{label:'Caso 05', title:'La decisión está aprobada, pero el seguimiento se diluye', situation:'La ejecución queda repartida sin suficiente claridad sobre responsabilidades, indicadores y escalamiento.', decision:'Definir cómo se gobierna la decisión y cuándo deben escalarse los desvíos.', deliver:['Modelo de gobernanza','Tablero ejecutivo','Roles'], work:'Praxys diseña un mecanismo de seguimiento con tablero, frecuencia de revisión, responsables y reglas de escalamiento.'},
      en:{label:'Case 05', title:'The decision is approved, but follow-up dilutes', situation:'Execution is distributed without enough clarity on responsibilities, indicators, and escalation.', decision:'Define how the decision is governed and when deviations must be escalated.', deliver:['Governance model','Executive dashboard','Roles'], work:'Praxys designs a follow-up mechanism with dashboard, review frequency, owners, and escalation rules.'}
    },
    {id:'training', photo:PHOTOS.caseTraining,
      es:{label:'Caso 06', title:'Los equipos analizan el problema con criterios distintos', situation:'Áreas técnicas, operación y gerencias discuten con lenguajes y criterios diferentes.', decision:'Instalar una forma común de analizar, priorizar y sostener decisiones.', deliver:['Workshops aplicados','Guías','Plantillas'], work:'Praxys trabaja sobre casos reales para transferir criterios, plantillas y rutinas que queden instaladas en el equipo.'},
      en:{label:'Case 06', title:'Teams analyze the problem with different criteria', situation:'Technical areas, operations, and management discuss with different language and criteria.', decision:'Install a shared way to analyze, prioritize, and sustain decisions.', deliver:['Applied workshops','Guides','Templates'], work:'Praxys works on real cases to transfer criteria, templates, and routines that remain installed in the team.'}
    }
  ];

  const PROBLEMS = {
    es: [
      {title:'El riesgo se propaga entre áreas', text:'Un cambio o falla local termina afectando recursos, continuidad, costos o decisiones de dirección.', photo:PHOTOS.problemRisk},
      {title:'Las prioridades compiten por los mismos recursos', text:'Todo parece importante, pero no todo puede ejecutarse al mismo tiempo ni con la misma capacidad.', photo:PHOTOS.problemResources},
      {title:'Los problemas vuelven aunque se cierren acciones', text:'Las soluciones puntuales no modifican las condiciones que reproducen el patrón.', photo:PHOTOS.problemRecurrence}
    ],
    en: [
      {title:'Risk propagates across areas', text:'A local change or failure ends up affecting resources, continuity, costs, or leadership decisions.', photo:PHOTOS.problemRisk},
      {title:'Priorities compete for the same resources', text:'Everything seems important, but not everything can be executed at the same time or with the same capacity.', photo:PHOTOS.problemResources},
      {title:'Problems return after actions are closed', text:'Local fixes do not change the conditions that reproduce the pattern.', photo:PHOTOS.problemRecurrence}
    ]
  };

  const PAPERS = [
    ['2020','Revisión post-Fukushima','Gestión de la seguridad nuclear después de Fukushima','Revisión crítica del estado del arte sobre gestión de seguridad, factores organizacionales y aprendizaje post-accidente.'],
    ['2021','Modelado jerárquico','Modelado funcional de reactores nucleares','Aplicación combinada de GTST-DMLD y dinámica de sistemas para evaluar seguridad, disponibilidad y escenarios de falla.'],
    ['2021','Dinámica de sistemas','Marco para modelar gestión de seguridad','Propuesta conceptual para integrar decisiones, acciones humanas, tecnología y entorno en la gestión de seguridad.'],
    ['2023','ESREL','Modelo causal detallado de gestión de seguridad','Modelo basado en dinámica de sistemas para estudiar seguridad, disponibilidad y trade-offs operacionales.'],
    ['2023','ISDC','Modelo conceptual HTOE/MTOE','Integración de factores humanos, tecnológicos, organizacionales y ambientales en organizaciones complejas.'],
    ['2025','BJRS','Modelo cuantitativo de cultura de seguridad','Simulación de cultura de seguridad, liderazgo, comunicación, mejora continua y desempeño operacional.']
  ];

  function lang(){ return (localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es') === 'en' ? 'en' : 'es'; }
  function esc(s){ return String(s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
  function photo(src, alt){ return `<figure class="px-photo"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></figure>`; }
  function head(kicker,title,lead){ return `<div class="px-head"><span class="px-kicker">${esc(kicker)}</span><h2>${esc(title)}</h2><p>${esc(lead)}</p></div>`; }

  function renderHero(l){
    const el = document.getElementById('inicio'); if(!el) return;
    el.className = 'px-hero';
    el.innerHTML = `<div class="px-hero-bg" role="img" aria-label="${l==='en'?'Executive team analyzing a complex system':'Equipo ejecutivo analizando un sistema complejo'}"></div><div class="wrap px-hero-inner"><div class="px-hero-copy"><span class="px-kicker">Integral Risk Consulting</span><h1>${l==='en'?'Executive decisions for problems that cross areas':'Decisiones ejecutivas para problemas que cruzan áreas'}</h1><p>${l==='en'?'Praxys structures evidence, models relationships, prioritizes alternatives and helps sustain decisions in complex systems.':'Praxys ordena evidencia, modela relaciones, prioriza alternativas y ayuda a sostener decisiones en sistemas complejos.'}</p><div class="px-hero-actions"><a href="${WHATSAPP}" target="_blank" rel="noopener">${l==='en'?'Schedule conversation':'Agendar conversación'}</a><a href="#casos-concretos">${l==='en'?'View cases':'Ver casos'}</a></div></div></div>`;
  }

  function renderProblems(l){
    const el = document.getElementById('problemas'); if(!el) return;
    el.className = 'px-section px-section-soft';
    el.innerHTML = `<div class="wrap">${head(l==='en'?'Management problems':'Problemas de gestión',l==='en'?'Problems that block management decisions':'Problemas que traban decisiones de gestión',l==='en'?'Recurring situations where evidence, areas, resources, and follow-up become misaligned.':'Situaciones recurrentes donde evidencia, áreas, recursos y seguimiento quedan desalineados.')}<div class="px-grid px-grid-3">${PROBLEMS[l].map(p=>`<article class="px-card">${photo(p.photo,p.title)}<div class="px-card-body"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></article>`).join('')}</div></div>`;
  }

  function renderServices(l){
    const el = document.getElementById('servicios'); if(!el) return;
    el.className = 'px-section';
    el.innerHTML = `<div class="wrap">${head(l==='en'?'Services':'Servicios',l==='en'?'Services designed around decisions':'Servicios diseñados alrededor de decisiones',l==='en'?'Each service is a focused intervention with a concrete executive output.':'Cada servicio es una intervención acotada con un resultado ejecutivo concreto.')}<div class="px-grid px-grid-3">${SERVICES.map(s=>{const x=s[l]; return `<article class="px-card">${photo(s.photo,x.title)}<div class="px-card-body"><h3>${esc(x.title)}</h3><p>${esc(x.line)}</p><div class="px-receive"><strong>${l==='en'?'Leadership receives':'La dirección recibe'}</strong><span>${esc(x.receive)}</span></div><button class="px-btn" data-service="${s.id}">${l==='en'?'View detail':'Ver detalle'}</button></div></article>`}).join('')}</div></div>`;
  }

  function renderCTA(l){
    let el = document.getElementById('praxys-mid-cta');
    if(!el){ el = document.createElement('section'); el.id = 'praxys-mid-cta'; document.getElementById('servicios')?.after(el); }
    el.className = 'px-cta-section';
    el.innerHTML = `<div class="wrap px-cta"><div><span>${l==='en'?'First step':'Primer paso'}</span><h2>${l==='en'?'Start by clarifying the decision, not by adding another report':'Empezar por aclarar la decisión, no por sumar otro informe'}</h2><p>${l==='en'?'A short conversation is enough to identify the decision, the areas involved, and the useful deliverable.':'Una conversación breve alcanza para identificar la decisión, las áreas involucradas y el entregable útil.'}</p></div><a href="${WHATSAPP}" target="_blank" rel="noopener">${l==='en'?'Schedule conversation':'Agendar conversación'}</a></div>`;
  }

  function renderCases(l){
    const el = document.getElementById('casos-concretos'); if(!el) return;
    el.className = 'px-section px-section-soft';
    el.innerHTML = `<div class="wrap">${head(l==='en'?'Concrete cases':'Casos concretos',l==='en'?'Where Praxys helps decide and move forward':'Problemas donde Praxys ayuda a decidir y avanzar',l==='en'?'Short, legible examples. Detail opens only when needed.':'Ejemplos breves y legibles. El detalle se abre solo cuando hace falta.')}<div class="px-grid px-grid-cases">${CASES.map(c=>{const x=c[l]; return `<article class="px-card px-case"><div class="px-case-image">${photo(c.photo,x.title)}</div><div class="px-card-body"><span class="px-kicker">${esc(x.label)}</span><h3>${esc(x.title)}</h3><div class="px-case-cols"><p><strong>${l==='en'?'Situation':'Situación'}</strong>${esc(x.situation)}</p><p><strong>${l==='en'?'Decision':'Decisión'}</strong>${esc(x.decision)}</p></div><div class="px-chips">${x.deliver.map(d=>`<span>${esc(d)}</span>`).join('')}</div><button class="px-btn" data-case="${c.id}">${l==='en'?'View case detail':'Ver detalle del caso'}</button></div></article>`}).join('')}</div></div>`;
  }

  function renderMethod(l){
    const steps = l==='en' ? [
      ['01','Clarify the decision','Frame what needs to be decided and which areas are affected.'],
      ['02','Structure evidence','Organize data, events, constraints and conflicting interpretations.'],
      ['03','Model relationships','Identify dependencies, feedbacks, trade-offs and propagation paths.'],
      ['04','Govern action','Define priorities, owners, indicators and escalation rules.']
    ] : [
      ['01','Aclarar la decisión','Encuadrar qué debe decidirse y qué áreas quedan afectadas.'],
      ['02','Ordenar evidencia','Organizar datos, eventos, restricciones e interpretaciones en conflicto.'],
      ['03','Modelar relaciones','Identificar dependencias, realimentaciones, trade-offs y rutas de propagación.'],
      ['04','Gobernar la acción','Definir prioridades, responsables, indicadores y reglas de escalamiento.']
    ];
    const el=document.getElementById('metodo'); if(!el) return;
    el.className='px-section';
    el.innerHTML=`<div class="wrap">${head(l==='en'?'Method':'Método',l==='en'?'How Praxys works':'Cómo trabaja Praxys',l==='en'?'A compact path from dispersed information to governed decisions.':'Un recorrido compacto desde información dispersa hacia decisiones gobernadas.')}<div class="px-grid px-grid-4">${steps.map(s=>`<article class="px-step"><span>${s[0]}</span><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p></article>`).join('')}</div></div>`;
  }

  function renderPapers(l){
    const el=document.getElementById('articulos'); if(!el) return;
    el.className='px-section px-section-soft';
    el.innerHTML=`<div class="wrap">${head(l==='en'?'Publications':'Publicaciones',l==='en'?'Technical authority behind the method':'Autoridad técnica detrás del método',l==='en'?'Selected publications that support Praxys’ systemic approach.':'Publicaciones seleccionadas que respaldan el enfoque sistémico de Praxys.')}<div class="px-reel-head"><button type="button" data-reel-prev>←</button><span><b>1</b> / <em>1</em></span><button type="button" data-reel-next>→</button></div><div class="px-paper-reel">${PAPERS.map(p=>`<article class="px-card px-paper"><div class="px-card-body"><span class="px-kicker">${p[0]} · ${esc(p[1])}</span><h3>${esc(p[2])}</h3><p>${esc(p[3])}</p></div></article>`).join('')}</div></div>`;
    setupReel(el);
  }

  function setupReel(sec){
    const track=sec.querySelector('.px-paper-reel'), prev=sec.querySelector('[data-reel-prev]'), next=sec.querySelector('[data-reel-next]'), cur=sec.querySelector('.px-reel-head b'), total=sec.querySelector('.px-reel-head em');
    if(!track||!prev||!next||!cur||!total) return;
    const cards=()=>Array.from(track.querySelectorAll('.px-paper'));
    const per=()=>window.innerWidth<760?1:(window.innerWidth<1050?2:3);
    const pages=()=>Math.max(1,Math.ceil(cards().length/per()));
    const nearest=()=>{const cs=cards();let best=0,delta=999999;cs.forEach((c,i)=>{const d=Math.abs(c.offsetLeft-track.scrollLeft);if(d<delta){delta=d;best=i;}});return best;};
    const update=()=>{cur.textContent=String(Math.min(pages(),Math.floor(nearest()/per())+1));total.textContent=String(pages());};
    const move=dir=>{const cs=cards();if(!cs.length)return;const idx=Math.max(0,Math.min(cs.length-1,nearest()+dir*per()));track.scrollTo({left:cs[idx].offsetLeft,behavior:'smooth'});setTimeout(update,250);};
    prev.onclick=()=>move(-1); next.onclick=()=>move(1); track.onscroll=()=>{clearTimeout(track._t);track._t=setTimeout(update,80)}; window.addEventListener('resize',update,{passive:true}); update();
  }

  function renderContact(l){
    const el=document.getElementById('contacto'); if(!el) return;
    el.className='px-section px-contact';
    el.innerHTML=`<div class="wrap">${head(l==='en'?'Contact':'Contacto',l==='en'?'Start with a focused conversation':'Empezar con una conversación concreta',l==='en'?'In one short conversation we identify the decision, the areas involved, and the deliverable that would help.':'En una conversación breve identificamos la decisión, las áreas involucradas y el entregable que podría ayudar.')}<div class="px-contact-box"><a href="${WHATSAPP}" target="_blank" rel="noopener">${l==='en'?'Schedule conversation by WhatsApp':'Agendar conversación por WhatsApp'}</a><p>${l==='en'?'No long form. A focused first conversation is enough to frame the problem.':'Sin formulario largo. Una primera conversación enfocada alcanza para encuadrar el problema.'}</p></div></div>`;
  }

  function installStyles(){
    let s=document.getElementById('praxys-final-styles'); if(!s){s=document.createElement('style');s.id='praxys-final-styles';document.head.appendChild(s)}
    s.textContent=`
      :root{--navy:#102033;--blue:#17365d;--ink:#26384d;--muted:#5f7084;--line:rgba(16,32,51,.12);--bg:#f4f8fb;--orange:#E8632A;--amber:#F2C94C;--shadow:0 18px 48px rgba(16,32,51,.08)}
      *{box-sizing:border-box}html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}body{margin:0;background:#fff;color:var(--ink);font-family:Inter,Manrope,Segoe UI,Arial,sans-serif;line-height:1.55}.wrap{width:min(1160px,calc(100% - 44px));margin:0 auto}.navbar{background:rgba(255,255,255,.96)!important;border-bottom:1px solid var(--line)!important;box-shadow:0 8px 26px rgba(16,32,51,.05)!important}.nav-inner{min-height:76px}.brand{color:var(--navy)!important}.nav-menu a{color:var(--ink)!important;font-size:.88rem!important;font-weight:850!important}.nav-menu a:hover{color:var(--orange)!important}.lang-btn.active{background:var(--navy)!important;color:#fff!important}
      .px-hero{position:relative;min-height:680px;display:flex;align-items:center;overflow:hidden;background:#eef5fb}.px-hero-bg{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(247,251,255,.98) 0%,rgba(247,251,255,.92) 37%,rgba(247,251,255,.54) 62%,rgba(247,251,255,.12) 100%),url('${PHOTOS.hero}');background-size:cover;background-position:center;transform:scale(1.01)}.px-hero-inner{position:relative;z-index:2;padding:104px 0}.px-hero-copy{max-width:760px}.px-kicker{display:inline-block;color:var(--orange);font-size:.76rem;letter-spacing:.17em;text-transform:uppercase;font-weight:950}.px-hero h1{margin:16px 0 18px;color:var(--navy);font-size:clamp(2.8rem,5.6vw,5.4rem);line-height:1.01;letter-spacing:-.055em;font-weight:900;max-width:790px;text-wrap:balance}.px-hero p{max-width:690px;color:#4b5f75;font-size:clamp(1.08rem,1.6vw,1.27rem);line-height:1.65;font-weight:560}.px-hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}.px-hero-actions a,.px-contact-box a,.px-cta a{min-height:48px;display:inline-flex;align-items:center;justify-content:center;padding:0 22px;border-radius:999px;text-decoration:none;background:var(--orange);color:#fff;font-size:.8rem;font-weight:950;letter-spacing:.055em;text-transform:uppercase;box-shadow:0 14px 28px rgba(232,99,42,.22)}.px-hero-actions a:nth-child(2){background:var(--navy);box-shadow:none}
      .px-section{padding:76px 0;background:#fff}.px-section-soft{background:var(--bg)}.px-head{text-align:center;max-width:850px;margin:0 auto 34px}.px-head h2{margin:10px 0;color:var(--navy);font-size:clamp(2rem,3.5vw,3.15rem);line-height:1.07;letter-spacing:-.04em;font-weight:900;text-wrap:balance}.px-head p{margin:0;color:var(--muted);font-size:1.08rem;line-height:1.65}.px-grid{display:grid;gap:22px}.px-grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.px-grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}.px-grid-cases{grid-template-columns:repeat(2,minmax(0,1fr));gap:26px}.px-card{background:#fff;border:1px solid var(--line);border-radius:24px;overflow:hidden;box-shadow:var(--shadow)}.px-photo{margin:0;aspect-ratio:16/9;background:#e7edf4;overflow:hidden}.px-photo img{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.95) contrast(1.02)}.px-card-body{padding:22px;display:flex;flex-direction:column;gap:12px}.px-card h3{margin:0;color:var(--navy);font-size:1.28rem;line-height:1.22;font-weight:900;letter-spacing:-.02em;text-wrap:balance}.px-card p{margin:0;color:var(--muted);font-size:1rem;line-height:1.58}.px-receive{padding:14px;border:1px solid var(--line);border-radius:16px;background:#f7fafc}.px-receive strong,.px-case-cols strong{display:block;color:var(--orange);font-size:.72rem;letter-spacing:.11em;text-transform:uppercase;font-weight:950;margin-bottom:5px}.px-receive span{font-weight:750;color:var(--ink);line-height:1.45}.px-btn{margin-top:auto;min-height:42px;border:0;border-radius:999px;background:var(--navy);color:#fff;padding:0 16px;font-size:.76rem;font-weight:950;letter-spacing:.05em;text-transform:uppercase;cursor:pointer}.px-btn:hover{background:var(--orange)}.px-case .px-photo{aspect-ratio:16/8.6}.px-case h3{font-size:1.34rem}.px-case-cols{display:grid;grid-template-columns:1fr 1fr;gap:12px}.px-case-cols p{padding:14px;border:1px solid var(--line);border-radius:16px;background:#fbfdff}.px-chips{display:flex;flex-wrap:wrap;gap:7px}.px-chips span{border-radius:999px;background:rgba(232,99,42,.10);color:#A9461D;padding:6px 10px;font-size:.78rem;font-weight:850}.px-step{padding:24px;border:1px solid var(--line);border-radius:24px;background:#fff;box-shadow:0 12px 34px rgba(16,32,51,.06)}.px-step span{color:var(--orange);font-weight:950}.px-step h3{margin:10px 0;color:var(--navy);font-size:1.18rem}.px-step p{margin:0;color:var(--muted);line-height:1.58}.px-cta-section{background:linear-gradient(135deg,#102033,#1b3656);color:#fff;padding:38px 0}.px-cta{display:flex;justify-content:space-between;align-items:center;gap:30px}.px-cta span{color:var(--amber);font-size:.76rem;letter-spacing:.15em;text-transform:uppercase;font-weight:950}.px-cta h2{margin:6px 0;color:#fff;font-size:clamp(1.7rem,2.6vw,2.35rem);line-height:1.1}.px-cta p{margin:0;color:#d9e6f2;max-width:730px}.px-paper-reel{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:2px 2px 14px;scrollbar-width:none}.px-paper-reel::-webkit-scrollbar{display:none}.px-paper{flex:0 0 calc((100% - 40px)/3);scroll-snap-align:start;min-height:250px}.px-reel-head{display:flex;justify-content:flex-end;align-items:center;gap:10px;margin-bottom:18px}.px-reel-head button{width:42px;height:42px;border:0;border-radius:999px;background:var(--navy);color:#fff;font-weight:950;cursor:pointer}.px-reel-head span{font-weight:900;color:var(--navy)}.px-reel-head em{font-style:normal}.px-contact{background:#fff}.px-contact-box{text-align:center;max-width:720px;margin:0 auto}.px-contact-box p{color:var(--muted)}.px-modal{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(4,10,18,.62);backdrop-filter:blur(7px)}.px-modal.open{display:flex}.px-modal-box{width:min(940px,100%);max-height:86vh;overflow:auto;background:#fff;border-radius:28px;box-shadow:0 34px 100px rgba(0,0,0,.32)}.px-modal-box .px-photo{aspect-ratio:16/7.2}.px-modal-content{padding:32px}.px-modal-content h2{margin:8px 46px 12px 0;color:var(--navy);font-size:clamp(1.8rem,3vw,2.55rem);line-height:1.08}.px-modal-content p{color:var(--muted);line-height:1.65}.px-close{position:absolute;right:16px;top:16px;z-index:3;width:40px;height:40px;border:0;border-radius:999px;background:var(--navy);color:#fff;font-size:1.35rem;cursor:pointer}.px-lock{overflow:hidden}
      @media(max-width:1050px){.px-grid-3,.px-grid-4{grid-template-columns:repeat(2,minmax(0,1fr))}.px-grid-cases{grid-template-columns:1fr}.px-paper{flex-basis:calc((100% - 20px)/2)}}
      @media(max-width:760px){.wrap{width:min(100% - 30px,1160px)}.px-hero{min-height:620px}.px-hero-bg{background-image:linear-gradient(180deg,rgba(247,251,255,.98) 0%,rgba(247,251,255,.92) 54%,rgba(247,251,255,.70) 100%),url('${PHOTOS.hero}');background-position:center top}.px-hero-inner{padding:72px 0}.px-hero h1{font-size:clamp(2.35rem,12vw,3.55rem)}.px-grid-3,.px-grid-4{grid-template-columns:1fr}.px-grid-cases{grid-template-columns:1fr}.px-section{padding:58px 0}.px-head{text-align:left}.px-case-cols{grid-template-columns:1fr}.px-cta{display:block}.px-cta a{margin-top:20px}.px-paper{flex-basis:88%;min-height:0}.px-modal-content{padding:24px}.px-modal-box .px-photo{aspect-ratio:16/9}}
    `;
  }

  function bind(){
    if(window.PRAXYS && window.PRAXYS.bound) return;
    window.PRAXYS = window.PRAXYS || {}; window.PRAXYS.bound = true;
    document.addEventListener('click', e=>{
      const s=e.target.closest('[data-service]'); const c=e.target.closest('[data-case]'); const close=e.target.closest('[data-close]');
      if(close || e.target.id==='px-modal'){ closeModal(); return; }
      if(s) openDetail('service',s.dataset.service); if(c) openDetail('case',c.dataset.case);
    });
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
  }
  function modal(){let m=document.getElementById('px-modal');if(!m){m=document.createElement('div');m.id='px-modal';m.className='px-modal';document.body.appendChild(m)}return m;}
  function openDetail(type,id){
    const l=lang(); let data, title, lead, detail, src;
    if(type==='service'){ data=SERVICES.find(x=>x.id===id); if(!data)return; const x=data[l]; title=x.title; lead=x.line; detail=`<p>${esc(x.detail)}</p><div class="px-receive"><strong>${l==='en'?'Leadership receives':'La dirección recibe'}</strong><span>${esc(x.receive)}</span></div>`; src=data.photo; }
    else { data=CASES.find(x=>x.id===id); if(!data)return; const x=data[l]; title=x.title; lead=x.situation; detail=`<div class="px-case-cols"><p><strong>${l==='en'?'Decision':'Decisión'}</strong>${esc(x.decision)}</p><p><strong>${l==='en'?'How Praxys works':'Cómo trabaja Praxys'}</strong>${esc(x.work)}</p></div><div class="px-chips">${x.deliver.map(d=>`<span>${esc(d)}</span>`).join('')}</div>`; src=data.photo; }
    const m=modal(); m.innerHTML=`<div class="px-modal-box"><button class="px-close" data-close="1">×</button>${photo(src,title)}<div class="px-modal-content"><span class="px-kicker">${type==='service'?(l==='en'?'Service detail':'Detalle del servicio'):(l==='en'?'Case detail':'Detalle del caso')}</span><h2>${esc(title)}</h2><p>${esc(lead)}</p>${detail}<p><a class="px-hero-actions" style="display:inline-flex;margin-top:18px" href="${WHATSAPP}" target="_blank" rel="noopener"><span style="min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;border-radius:999px;background:var(--orange);color:#fff;font-size:.8rem;font-weight:950;text-transform:uppercase;text-decoration:none">${l==='en'?'Schedule conversation':'Agendar conversación'}</span></a></p></div></div>`; m.classList.add('open'); document.body.classList.add('px-lock');
  }
  function closeModal(){const m=document.getElementById('px-modal'); if(m){m.classList.remove('open');m.innerHTML=''} document.body.classList.remove('px-lock');}

  function render(){ const l=lang(); installStyles(); renderHero(l); renderProblems(l); renderServices(l); renderCTA(l); renderCases(l); renderMethod(l); renderPapers(l); renderContact(l); bind(); document.dispatchEvent(new CustomEvent('praxys:rendered',{detail:{lang:l}})); }
  window.PRAXYS = window.PRAXYS || {}; window.PRAXYS.refresh = render;
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render); else render();
  document.addEventListener('praxys:lang',render);
})();