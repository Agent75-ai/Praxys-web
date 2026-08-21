document.addEventListener('DOMContentLoaded',function(){
  const saved=localStorage.getItem('selectedLanguage')||'es';
  setLanguage(saved);
  document.getElementById('lang-es')?.addEventListener('click',()=>setLanguage('es'));
  document.getElementById('lang-en')?.addEventListener('click',()=>setLanguage('en'));
  praxysRefreshVisualFixes();
  setTimeout(praxysRefreshVisualFixes,300);
  setTimeout(praxysRefreshVisualFixes,1000);
  setTimeout(praxysRefreshVisualFixes,2500);
});

function setLanguage(lang){
  localStorage.setItem('selectedLanguage',lang);
  document.querySelectorAll('[data-es][data-en]').forEach(el=>{el.innerHTML=el.getAttribute('data-'+lang);});
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  const a=document.getElementById('lang-'+lang); if(a)a.classList.add('active');
  document.documentElement.lang=lang;
  if(window.reloadArticles)window.reloadArticles();
  praxysRefreshVisualFixes();
  setTimeout(praxysRefreshVisualFixes,120);
  setTimeout(praxysRefreshVisualFixes,700);
}

function praxysLang(){return (localStorage.getItem('selectedLanguage')||document.documentElement.lang||'es')==='en'?'en':'es'}
function praxysEsc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function praxysKey(s){return String(s||'').trim().toLowerCase()}

const PRAXYS_SERVICE_COMPACT={
 es:{
  'diagnóstico ejecutivo de riesgos combinados':['Para problemas donde cada área tiene una lectura parcial o diferente del riesgo.','Mapa causal, dependencias críticas, riesgos combinados y prioridades de intervención.'],
  'priorización de acciones y recursos':['Para ordenar carteras de acciones cuando hay restricciones de presupuesto, tiempo o capacidad operativa.','Criterios de priorización, matriz de alternativas, responsables y secuencia de acción.'],
  'evaluación de escenarios de decisión':['Para decidir antes de comprometer inversiones, cambios operativos o recursos críticos.','Escenarios comparados, trade-offs, sensibilidad frente a restricciones y recomendación ejecutiva.'],
  'investigación sistémica de eventos recurrentes':['Para entender por qué fallas, desvíos o incidentes reaparecen aunque existan acciones correctivas.','Línea de tiempo, mapa causal, barreras degradadas, condiciones organizacionales y acciones de mayor impacto.'],
  'diseño de gobernanza y seguimiento':['Para que una decisión tomada no quede sin responsables, control ni verificación de efectos.','Mecanismo de seguimiento, tablero ejecutivo, responsables, rutinas de revisión y reglas de escalamiento.'],
  'capacitación ejecutiva y transferencia metodológica':['Para alinear criterios entre equipos técnicos, operativos y gerenciales usando problemas reales.','Workshops aplicados, guías, plantillas, ejercicios y herramientas transferibles al equipo.']
 },
 en:{
  'executive diagnosis of combined risks':['For problems where each area has a partial or different reading of risk.','Causal map, critical dependencies, combined risks, and intervention priorities.'],
  'prioritization of actions and resources':['To structure action portfolios under budget, time, or operational-capacity constraints.','Prioritization criteria, alternatives matrix, owners, and action sequence.'],
  'decision scenario assessment':['To decide before committing investments, operational changes, or critical resources.','Compared scenarios, trade-offs, sensitivity to constraints, and executive recommendation.'],
  'systemic investigation of recurring events':['To understand why failures, deviations, or incidents reappear despite corrective actions.','Timeline, causal map, degraded barriers, organizational conditions, and higher-impact actions.'],
  'governance and follow-up design':['To ensure that decisions have owners, control points, and verification of actual effects.','Follow-up mechanism, executive dashboard, owners, review routines, and escalation rules.'],
  'executive training and method transfer':['To align technical, operational, and managerial teams around shared decision criteria.','Applied workshops, guides, templates, exercises, and tools transferred to the team.']
 }
};

const PRAXYS_DETAILED_CASES={
 es:{
  'diagnóstico ejecutivo de riesgos combinados':{
   title:'Pérdida recurrente de disponibilidad en un sistema operativo crítico',
   context:'Organización industrial con paradas repetidas en un sistema clave de producción o soporte operativo.',
   situation:'Mantenimiento atribuye el problema al envejecimiento de componentes; operación señala cambios en condiciones de uso; planificación sostiene que las ventanas de intervención son insuficientes; dirección necesita una lectura común antes de comprometer recursos.',
   decision:'Decidir si conviene invertir en reemplazo, rediseñar mantenimiento, modificar condiciones de operación, reforzar barreras o combinar varias intervenciones priorizadas.',
   work:'Praxys reconstruye eventos, secuencias operativas, datos de disponibilidad, restricciones de mantenimiento, decisiones diferidas y criterios usados por cada área. Con esa evidencia construye un mapa causal que muestra cómo se combinan presión operativa, mantenimiento diferido, información fragmentada, degradación de barreras y decisiones no coordinadas.',
   receives:['Mapa causal del problema','ciclos de recurrencia','dependencias críticas entre áreas','puntos de intervención','criterios de seguimiento ejecutivo'],
   use:'Decidir dónde intervenir primero, qué riesgo residual aceptar y cómo sostener el control desde dirección.'
  },
  'priorización de acciones y recursos':{
   title:'Cartera de acciones correctivas que supera la capacidad real de ejecución',
   context:'Planta, unidad operativa o área corporativa con decenas de acciones abiertas, responsables múltiples y recursos limitados.',
   situation:'Existen acciones de mantenimiento, seguridad, operación, calidad y gestión; todas parecen importantes, pero no hay criterios compartidos para ordenar urgencia, impacto, dependencia y factibilidad.',
   decision:'Definir qué acciones ejecutar primero, cuáles agrupar, cuáles postergar, qué recursos proteger y qué riesgos quedan aceptados temporalmente.',
   work:'Praxys releva acciones abiertas, historial de eventos, criticidad de activos, restricciones de recursos, impacto esperado y dependencias entre áreas. Luego construye una matriz de priorización con criterios explícitos y una secuencia de intervención realista.',
   receives:['Matriz de priorización','criterios de decisión','secuencia de intervención','responsables','acciones condicionadas por recursos o dependencias'],
   use:'Evitar una agenda dispersa y asignar recursos donde producen mayor reducción de riesgo o mayor recuperación de desempeño.'
  },
  'evaluación de escenarios de decisión':{
   title:'Inversión o cambio operativo con efectos inciertos sobre continuidad, costo y riesgo',
   context:'Dirección debe decidir entre alternativas técnicas u organizacionales antes de comprometer presupuesto o modificar la operación.',
   situation:'Una alternativa reduce riesgo técnico pero aumenta costos; otra mejora disponibilidad pero exige más coordinación; una tercera posterga inversión pero deja mayor exposición residual.',
   decision:'Comparar escenarios con los mismos criterios y elegir una alternativa defendible ante dirección, gerencias y áreas responsables.',
   work:'Praxys define alternativas, supuestos, restricciones, efectos esperados, riesgos residuales y condiciones de implementación. Después construye escenarios comparables con sensibilidad frente a recursos, plazos, capacidad interna y restricciones operativas.',
   receives:['Escenarios comparados','trade-offs explícitos','riesgos residuales','supuestos críticos','recomendación ejecutiva'],
   use:'Comprometer recursos con una justificación trazable y evitar decisiones basadas solo en intuición, presión coyuntural o lecturas sectoriales.'
  },
  'investigación sistémica de eventos recurrentes':{
   title:'Incidentes, desvíos o fallas que vuelven pese a acciones correctivas',
   context:'Sistema crítico donde los reportes cierran eventos, pero el patrón vuelve a aparecer en operación real.',
   situation:'Las investigaciones identifican causas inmediatas y acciones puntuales; sin embargo, persisten condiciones como presión por producción, barreras débiles, capacitación fragmentada, señales tempranas ignoradas o decisiones escaladas tarde.',
   decision:'Determinar qué condiciones sostienen la recurrencia y qué intervención tiene mayor efecto sistémico.',
   work:'Praxys reconstruye la línea de tiempo, decisiones, barreras, señales previas, condiciones organizacionales, roles, flujos de información y acciones implementadas. El análisis distingue causas inmediatas de condiciones sistémicas reproducidas por la propia operación.',
   receives:['Línea de tiempo integrada','mapa causal','barreras degradadas','condiciones organizacionales','acciones de mayor impacto'],
   use:'Pasar de correcciones aisladas a intervenciones sobre las condiciones que permiten que el evento reaparezca.'
  },
  'diseño de gobernanza y seguimiento':{
   title:'Decisión tomada que no se controla con suficiente claridad',
   context:'Programa, proyecto o plan de mejora con múltiples áreas involucradas y seguimiento débil o fragmentado.',
   situation:'La decisión ya fue aprobada, pero no queda claro quién mide avances, qué indicadores importan, cuándo escalar desvíos, cómo revisar efectos reales ni cómo ajustar la decisión si cambian las condiciones.',
   decision:'Diseñar una rutina de gobernanza que convierta la decisión en un proceso controlable.',
   work:'Praxys releva responsables, reuniones existentes, flujos de información, indicadores, reportes, decisiones pendientes y puntos de control. Con eso diseña un mecanismo de seguimiento con roles, frecuencia, tablero, criterios de escalamiento y reglas de revisión.',
   receives:['Mapa de gobernanza','tablero ejecutivo','rutinas de revisión','roles y responsabilidades','reglas de escalamiento'],
   use:'Evitar que una buena decisión se diluya por falta de seguimiento, control o coordinación interáreas.'
  },
  'capacitación ejecutiva y transferencia metodológica':{
   title:'Equipos técnicos y gerenciales que necesitan criterios comunes para decidir',
   context:'Organización que quiere instalar capacidades internas sin depender permanentemente de consultores externos.',
   situation:'Los equipos tienen experiencia, pero usan criterios diferentes para analizar riesgos, priorizar acciones, comparar escenarios o explicar decisiones ante dirección.',
   decision:'Transferir métodos aplicados a problemas reales para que la organización pueda sostener mejores decisiones en el tiempo.',
   work:'Praxys diseña workshops sobre casos propios de la organización. Se trabajan mapas causales, priorización, escenarios, criterios de decisión y seguimiento ejecutivo usando información y dilemas reales, no ejercicios genéricos.',
   receives:['Workshop aplicado','guías de trabajo','plantillas reutilizables','criterios compartidos','herramientas transferidas al equipo'],
   use:'Instalar lenguaje común, capacidad analítica y disciplina de seguimiento para problemas futuros.'
  }
 },
 en:{
  'executive diagnosis of combined risks':{
   title:'Recurring availability loss in a critical operating system',
   context:'Industrial organization with repeated stoppages in a key production or operational-support system.',
   situation:'Maintenance points to component aging; operations points to changed use conditions; planning argues intervention windows are insufficient; leadership needs a shared reading before committing resources.',
   decision:'Decide whether to invest in replacement, redesign maintenance, modify operating conditions, reinforce barriers, or combine prioritized interventions.',
   work:'Praxys reconstructs events, operating sequences, availability data, maintenance constraints, deferred decisions, and the criteria used by each area. Based on that evidence, it builds a causal map showing how operational pressure, deferred maintenance, fragmented information, degraded barriers, and uncoordinated decisions combine.',
   receives:['causal map','recurrence loops','critical dependencies','intervention points','executive follow-up criteria'],
   use:'Decide where to intervene first, which residual risk to accept, and how leadership will sustain control.'
  },
  'prioritization of actions and resources':{
   title:'Corrective-action portfolio exceeding real execution capacity',
   context:'Plant, operational unit, or corporate area with many open actions, multiple owners, and limited resources.',
   situation:'Maintenance, safety, operations, quality, and management actions all seem important, but there are no shared criteria to rank urgency, impact, dependency, and feasibility.',
   decision:'Define which actions go first, which can be grouped, which must wait, which resources must be protected, and which risks are temporarily accepted.',
   work:'Praxys reviews open actions, event history, asset criticality, resource constraints, expected impact, and dependencies across areas. It then builds a prioritization matrix with explicit criteria and a realistic intervention sequence.',
   receives:['prioritization matrix','decision criteria','intervention sequence','owners','resource-conditioned actions'],
   use:'Avoid a dispersed agenda and allocate resources where they have the highest effect on risk reduction or performance recovery.'
  },
  'decision scenario assessment':{
   title:'Investment or operational change with uncertain effects on continuity, cost, and risk',
   context:'Leadership must choose among technical or organizational alternatives before committing budget or changing operations.',
   situation:'One option reduces technical risk but increases costs; another improves availability but requires stronger coordination; a third postpones investment but leaves higher residual exposure.',
   decision:'Compare scenarios using the same criteria and choose an alternative that can be defended to leadership, managers, and responsible areas.',
   work:'Praxys defines alternatives, assumptions, constraints, expected effects, residual risks, and implementation conditions. It then builds comparable scenarios with sensitivity to resources, deadlines, internal capability, and operational restrictions.',
   receives:['compared scenarios','explicit trade-offs','residual risks','critical assumptions','executive recommendation'],
   use:'Commit resources with traceable justification and avoid decisions based only on intuition, short-term pressure, or siloed readings.'
  },
  'systemic investigation of recurring events':{
   title:'Incidents, deviations, or failures that reappear despite corrective actions',
   context:'Critical system where reports close events, but the pattern reappears in real operation.',
   situation:'Investigations identify immediate causes and local actions; however, production pressure, weak barriers, fragmented training, ignored early signals, or late escalation remain present.',
   decision:'Determine which conditions sustain recurrence and which intervention has the highest systemic effect.',
   work:'Praxys reconstructs the timeline, decisions, barriers, early signals, organizational conditions, roles, information flows, and implemented actions. The analysis separates immediate causes from systemic conditions reproduced by the operation itself.',
   receives:['integrated timeline','causal map','degraded barriers','organizational conditions','higher-impact actions'],
   use:'Move from isolated corrections to interventions on the conditions that allow the event to reappear.'
  },
  'governance and follow-up design':{
   title:'Approved decision without enough control clarity',
   context:'Program, project, or improvement plan involving multiple areas and weak or fragmented follow-up.',
   situation:'The decision is approved, but it is unclear who measures progress, which indicators matter, when deviations escalate, how actual effects are reviewed, or how the decision is adjusted if conditions change.',
   decision:'Design a governance routine that turns the decision into a controllable process.',
   work:'Praxys reviews owners, existing meetings, information flows, indicators, reports, pending decisions, and control points. It then designs a follow-up mechanism with roles, frequency, dashboard, escalation criteria, and review rules.',
   receives:['governance map','executive dashboard','review routines','roles and responsibilities','escalation rules'],
   use:'Prevent a good decision from diluting due to lack of follow-up, control, or cross-area coordination.'
  },
  'executive training and method transfer':{
   title:'Technical and managerial teams needing shared decision criteria',
   context:'Organization seeking to build internal capability without permanent dependence on external consultants.',
   situation:'Teams have experience, but use different criteria to analyze risks, prioritize actions, compare scenarios, or explain decisions to leadership.',
   decision:'Transfer applied methods using real problems so the organization can sustain better decisions over time.',
   work:'Praxys designs workshops around the organization’s own cases. Teams work on causal maps, prioritization, scenarios, decision criteria, and executive follow-up using real information and dilemmas, not generic exercises.',
   receives:['applied workshop','work guides','reusable templates','shared criteria','tools transferred to the team'],
   use:'Install shared language, analytical capability, and follow-up discipline for future problems.'
  }
 }
};

function praxysRefreshVisualFixes(){
  praxysUnifySectionEyebrows();
  praxysSmoothHeroTransitions();
  praxysSimplifyCommercialRoute();
  praxysCompactServiceCards();
  praxysPrepareDetailedCases();
}

function praxysUnifySectionEyebrows(){
  let s=document.getElementById('praxys-eyebrow-uniform-style');
  if(!s){s=document.createElement('style');s.id='praxys-eyebrow-uniform-style';document.head.appendChild(s)}
  s.textContent=`#problemas .serv-head .eyebrow,#problemas .eyebrow,#servicios .serv-head .eyebrow,#servicios .eyebrow,#metodo .serv-head .eyebrow,#metodo .eyebrow,#articulos .serv-head .eyebrow,#articulos .eyebrow,#contacto .serv-head .eyebrow,#contacto .eyebrow,#praxys-mid-cta .praxys-mid-cta-inner span{color:#F2C94C!important;font-family:var(--f,'Manrope',sans-serif)!important;font-size:1.35rem!important;line-height:1.08!important;font-weight:900!important;letter-spacing:.14em!important;text-transform:uppercase!important;text-shadow:none!important;margin-bottom:6px!important}@media(max-width:720px){#problemas .serv-head .eyebrow,#problemas .eyebrow,#servicios .serv-head .eyebrow,#servicios .eyebrow,#metodo .serv-head .eyebrow,#metodo .eyebrow,#articulos .serv-head .eyebrow,#articulos .eyebrow,#contacto .serv-head .eyebrow,#contacto .eyebrow,#praxys-mid-cta .praxys-mid-cta-inner span{font-size:1.15rem!important;letter-spacing:.10em!important}}`;
}
function praxysSmoothHeroTransitions(){
  let s=document.getElementById('praxys-hero-smooth-transitions');
  if(!s){s=document.createElement('style');s.id='praxys-hero-smooth-transitions';document.head.appendChild(s)}
  s.textContent=`.hero .eyebrow,.hero h1,.hero-sub,.rotating-title,.rotating-copy{backface-visibility:hidden!important;transform:translate3d(0,0,0);will-change:opacity,transform,filter}.rotating-title,.rotating-copy,.hero h1,.hero-sub{transition:opacity .95s cubic-bezier(.22,1,.36,1),transform .95s cubic-bezier(.22,1,.36,1),filter .95s cubic-bezier(.22,1,.36,1)!important}.rotating-title.is-fading,.rotating-copy.is-fading,.hero h1.is-fading,.hero-sub.is-fading{opacity:0!important;transform:translate3d(0,2px,0)!important;filter:blur(.35px)!important}.hero-media img{transition:opacity 1.15s cubic-bezier(.22,1,.36,1),transform 8s cubic-bezier(.22,1,.36,1)!important;will-change:opacity,transform}.hero-media img.is-fading{opacity:.18!important;transform:scale(1.006)!important}@media(prefers-reduced-motion:reduce){.rotating-title,.rotating-copy,.hero h1,.hero-sub,.hero-media img{transition:none!important;transform:none!important;filter:none!important}}`;
}
function praxysSimplifyCommercialRoute(){
  let s=document.getElementById('praxys-commercial-simplification-style');
  if(!s){s=document.createElement('style');s.id='praxys-commercial-simplification-style';document.head.appendChild(s)}
  s.textContent=`#entregables,#cuando,#quienes,#mision-vision,#valores{display:none!important}#problemas .praxys-grid .praxys-card:nth-child(n+4){display:none!important}#problemas .praxys-note{display:flex;max-width:720px;margin:18px auto 0;padding:12px 18px;border:1px solid rgba(242,201,76,.18);border-radius:999px;justify-content:center;text-align:center;color:#D9E6F2;background:rgba(255,255,255,.035);font-size:.92rem}#problemas .praxys-note strong{color:#F2C94C;margin-right:.35rem}#servicios .praxys-card{display:flex!important;flex-direction:column!important;min-height:245px!important;padding:22px!important}#servicios .praxys-card h3{margin-bottom:14px!important}#servicios .praxys-card .label{display:none!important}#servicios .praxys-card p{font-size:.95rem!important;line-height:1.48!important;margin:0 0 10px!important;color:#C8D6E5!important}#servicios .praxys-card p strong{color:#F4F8FF!important;font-weight:900!important}#servicios .praxys-case-btn{margin-top:auto!important;width:100%!important}#metodo .praxys-card{min-height:150px!important}#articulos .paper-card:nth-child(n+4){display:none!important}#articulos.praxys-expanded .paper-card{display:flex!important}.praxys-papers-toggle{display:flex;margin:24px auto 0;align-items:center;justify-content:center;min-height:42px;padding:0 18px;border-radius:12px;border:1px solid rgba(232,99,42,.38);background:transparent;color:#E8632A;font-weight:900;text-transform:uppercase;letter-spacing:.05em;cursor:pointer}@media(max-width:720px){#problemas .praxys-note{border-radius:18px;align-items:flex-start;flex-direction:column;text-align:left}#servicios .praxys-card{min-height:0!important}}`;
  document.querySelectorAll('.nav-menu a[href="#entregables"],.nav-menu a[href="#cuando"],.nav-menu a[href="#quienes"],.nav-menu a[href="#mision-vision"],.nav-menu a[href="#valores"]').forEach(a=>a.closest('li')?.remove());
  const problemas=document.getElementById('problemas');
  if(problemas && !problemas.querySelector('.praxys-note')){
    const note=document.createElement('div');note.className='praxys-note';problemas.querySelector('.wrap')?.appendChild(note);
  }
  const note=problemas?.querySelector('.praxys-note');
  if(note) note.innerHTML=praxysLang()==='en'?'<strong>Also addressed when needed:</strong> continuity, governance, and internal capabilities.':'<strong>También se aborda cuando corresponde:</strong> continuidad, gobernanza y capacidades internas.';
  const art=document.getElementById('articulos');
  const grid=art?.querySelector('.papers-grid,#articles-container,.articles-grid');
  if(art&&grid&&!art.querySelector('.praxys-papers-toggle')){const btn=document.createElement('button');btn.type='button';btn.className='praxys-papers-toggle';btn.addEventListener('click',()=>{art.classList.toggle('praxys-expanded');praxysSimplifyCommercialRoute()});grid.after(btn)}
  const toggle=art?.querySelector('.praxys-papers-toggle');
  if(toggle)toggle.textContent=art.classList.contains('praxys-expanded')?(praxysLang()==='en'?'Show fewer publications':'Ver menos publicaciones'):(praxysLang()==='en'?'View more publications':'Ver más publicaciones');
}
function praxysCompactServiceCards(){
 const lang=praxysLang(),map=PRAXYS_SERVICE_COMPACT[lang];
 document.querySelectorAll('#servicios .praxys-card').forEach(card=>{
  const h3=card.querySelector('h3');if(!h3)return;const key=praxysKey(h3.textContent);const data=map[key];if(!data)return;
  const oldBtn=card.querySelector('.praxys-case-btn');const btn=oldBtn||document.createElement('button');btn.type='button';btn.className='praxys-case-btn';btn.textContent=lang==='en'?'View concrete case':'Ver caso concreto';
  const html=h3.outerHTML+`<p><strong>${lang==='en'?'Purpose:':'Para qué sirve:'}</strong> ${praxysEsc(data[0])}</p><p><strong>${lang==='en'?'Leadership receives:':'Qué recibe la dirección:'}</strong> ${praxysEsc(data[1])}</p>`;
  if(!card.dataset.praxysCompact || card.dataset.praxysLang!==lang){card.innerHTML=html;card.appendChild(btn);card.dataset.praxysCompact='1';card.dataset.praxysLang=lang}
 });
}
function praxysPrepareDetailedCases(){
 praxysEnsureCaseModal();
 if(!window.__praxysDetailedCasesBound){
  document.addEventListener('click',function(e){const btn=e.target.closest('#servicios .praxys-case-btn');if(!btn)return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();praxysOpenDetailedCase(praxysKey(btn.closest('.praxys-card')?.querySelector('h3')?.textContent))},true);
  window.__praxysDetailedCasesBound=true;
 }
}
function praxysEnsureCaseModal(){
 let modal=document.getElementById('praxys-case-modal');
 if(!modal){modal=document.createElement('div');modal.id='praxys-case-modal';modal.className='praxys-case-modal';modal.setAttribute('aria-hidden','true');modal.innerHTML='<div class="praxys-case-backdrop" data-praxys-case-close="1"></div><div class="praxys-case-dialog" role="dialog" aria-modal="true"><button type="button" class="praxys-case-close" data-praxys-case-close="1" aria-label="Cerrar">×</button><div class="praxys-case-content"></div></div>';document.body.appendChild(modal)}
 if(!document.getElementById('praxys-detailed-case-style')){const s=document.createElement('style');s.id='praxys-detailed-case-style';document.head.appendChild(s);s.textContent=`.praxys-case-modal{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:24px}.praxys-case-modal.is-open{display:flex!important}.praxys-case-backdrop{position:absolute;inset:0;background:rgba(3,10,18,.72);backdrop-filter:blur(4px)}.praxys-case-dialog{position:relative;z-index:1;width:min(920px,100%);max-height:min(86vh,820px);overflow:auto;border-radius:24px;background:#F7FAFD;color:#102033;box-shadow:0 34px 90px rgba(0,0,0,.38);border:1px solid rgba(255,255,255,.18)}.praxys-case-close{position:absolute;right:16px;top:14px;width:38px;height:38px;border-radius:50%;border:none;background:#102033;color:#fff;font-size:1.45rem;line-height:1;cursor:pointer}.praxys-case-content{padding:34px}.praxys-case-kicker{font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;color:#E8632A;font-weight:900;margin-bottom:8px}.praxys-case-content h3{font-family:var(--display,Georgia,serif);font-size:clamp(1.55rem,2.6vw,2.35rem);line-height:1.08;color:#102033;margin:0 44px 18px 0}.praxys-case-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:18px 0}.praxys-case-block{background:#fff;border:1px solid rgba(16,32,51,.10);border-radius:16px;padding:18px}.praxys-case-block strong{display:block;margin-bottom:7px;color:#102033}.praxys-case-block p{margin:0;color:#405064;line-height:1.55;font-size:.96rem}.praxys-case-receives{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px}.praxys-case-receives span{border-radius:999px;background:rgba(232,99,42,.10);color:#A9461D;font-size:.78rem;font-weight:850;padding:6px 10px}.praxys-case-use{margin-top:16px;border-radius:18px;background:#102033;color:#fff;padding:18px}.praxys-case-use strong{color:#F2C94C}.praxys-case-use p{margin:.3rem 0 0;color:#E7EEF7;line-height:1.55}@media(max-width:720px){.praxys-case-content{padding:26px 20px}.praxys-case-grid{grid-template-columns:1fr}.praxys-case-content h3{margin-right:34px}}`}
 if(!window.__praxysCaseCloseBound){document.addEventListener('click',e=>{if(e.target.closest('[data-praxys-case-close]'))praxysCloseDetailedCase()});document.addEventListener('keydown',e=>{if(e.key==='Escape')praxysCloseDetailedCase()});window.__praxysCaseCloseBound=true}
}
function praxysOpenDetailedCase(key){
 const lang=praxysLang(),data=PRAXYS_DETAILED_CASES[lang][key];if(!data)return;const modal=document.getElementById('praxys-case-modal'),content=modal.querySelector('.praxys-case-content');
 content.innerHTML=`<div class="praxys-case-kicker">${lang==='en'?'Concrete application case':'Caso concreto de aplicación'}</div><h3>${praxysEsc(data.title)}</h3><div class="praxys-case-grid"><div class="praxys-case-block"><strong>${lang==='en'?'Typical context':'Contexto típico'}</strong><p>${praxysEsc(data.context)}</p></div><div class="praxys-case-block"><strong>${lang==='en'?'Pending decision':'Decisión pendiente'}</strong><p>${praxysEsc(data.decision)}</p></div><div class="praxys-case-block"><strong>${lang==='en'?'Observable situation':'Situación observable'}</strong><p>${praxysEsc(data.situation)}</p></div><div class="praxys-case-block"><strong>${lang==='en'?'What Praxys does':'Qué hace Praxys'}</strong><p>${praxysEsc(data.work)}</p></div></div><div class="praxys-case-block"><strong>${lang==='en'?'Leadership receives':'La dirección recibe'}</strong><div class="praxys-case-receives">${data.receives.map(x=>`<span>${praxysEsc(x)}</span>`).join('')}</div></div><div class="praxys-case-use"><strong>${lang==='en'?'Useful for':'Sirve para'}</strong><p>${praxysEsc(data.use)}</p></div>`;
 modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function praxysCloseDetailedCase(){const modal=document.getElementById('praxys-case-modal');if(modal){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true')}document.body.style.overflow=''}
try{let praxysVisualTimer=null;const praxysVisualObserver=new MutationObserver(()=>{clearTimeout(praxysVisualTimer);praxysVisualTimer=setTimeout(praxysRefreshVisualFixes,120)});praxysVisualObserver.observe(document.documentElement,{childList:true,subtree:true,characterData:true})}catch(e){}