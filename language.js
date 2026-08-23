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

function praxysRefreshVisualFixes(){
  praxysUnifySectionEyebrows();
  praxysSmoothHeroTransitions();
  praxysInstallArtifactIllustrations();
}

function praxysUnifySectionEyebrows(){
  let s=document.getElementById('praxys-eyebrow-uniform-style');
  if(!s){s=document.createElement('style');s.id='praxys-eyebrow-uniform-style';document.head.appendChild(s)}
  s.textContent=`
    #problemas .serv-head .eyebrow,#problemas .eyebrow,
    #servicios .serv-head .eyebrow,#servicios .eyebrow,
    #casos-concretos .serv-head .eyebrow,#casos-concretos .eyebrow,
    #metodo .serv-head .eyebrow,#metodo .eyebrow,
    #articulos .serv-head .eyebrow,#articulos .eyebrow,
    #contacto .serv-head .eyebrow,#contacto .eyebrow,
    #praxys-mid-cta .praxys-mid-cta-inner span{
      color:#F2C94C!important;
      font-family:var(--f,'Manrope',sans-serif)!important;
      font-size:1.35rem!important;
      line-height:1.08!important;
      font-weight:900!important;
      letter-spacing:.14em!important;
      text-transform:uppercase!important;
      text-shadow:none!important;
      margin-bottom:6px!important;
    }
    @media(max-width:720px){
      #problemas .serv-head .eyebrow,#problemas .eyebrow,
      #servicios .serv-head .eyebrow,#servicios .eyebrow,
      #casos-concretos .serv-head .eyebrow,#casos-concretos .eyebrow,
      #metodo .serv-head .eyebrow,#metodo .eyebrow,
      #articulos .serv-head .eyebrow,#articulos .eyebrow,
      #contacto .serv-head .eyebrow,#contacto .eyebrow,
      #praxys-mid-cta .praxys-mid-cta-inner span{font-size:1.15rem!important;letter-spacing:.10em!important}
    }`;
}

function praxysSmoothHeroTransitions(){
  let s=document.getElementById('praxys-hero-smooth-transitions');
  if(!s){s=document.createElement('style');s.id='praxys-hero-smooth-transitions';document.head.appendChild(s)}
  s.textContent=`
    .hero .eyebrow,.hero h1,.hero-sub,.rotating-title,.rotating-copy{backface-visibility:hidden!important;transform:translate3d(0,0,0);will-change:opacity,transform,filter}
    .rotating-title,.rotating-copy,.hero h1,.hero-sub{transition:opacity .95s cubic-bezier(.22,1,.36,1),transform .95s cubic-bezier(.22,1,.36,1),filter .95s cubic-bezier(.22,1,.36,1)!important}
    .rotating-title.is-fading,.rotating-copy.is-fading,.hero h1.is-fading,.hero-sub.is-fading{opacity:0!important;transform:translate3d(0,2px,0)!important;filter:blur(.35px)!important}
    .hero-media img{transition:opacity 1.15s cubic-bezier(.22,1,.36,1),transform 8s cubic-bezier(.22,1,.36,1)!important;will-change:opacity,transform}
    .hero-media img.is-fading{opacity:.18!important;transform:scale(1.006)!important}
    @media(prefers-reduced-motion:reduce){.rotating-title,.rotating-copy,.hero h1,.hero-sub,.hero-media img{transition:none!important;transform:none!important;filter:none!important}}
  `;
}

const PRAXYS_VISUAL_TYPES={
  problems:['scenarios','causal','timeline'],
  services:{
    'combined-risk-diagnosis':'causal',
    'action-resource-prioritization':'matrix',
    'decision-scenario-assessment':'scenarios',
    'recurring-events-investigation':'timeline',
    'governance-followup-design':'governance',
    'executive-training-transfer':'workshop'
  }
};

const PRAXYS_VISUAL_COPY={
  es:{
    causal:['Mapa causal','Operación','Recursos','Costos','Dirección','Riesgo combinado','Prioridad'],
    matrix:['Matriz de priorización','Impacto','Esfuerzo','Ejecutar','Planificar','Postergar'],
    scenarios:['Escenarios comparados','Esc. A','Esc. B','Esc. C','Costo','Riesgo','Plazo'],
    timeline:['Línea de tiempo','Evento','Barrera','Acción','Recurrencia','Condición sistémica'],
    governance:['Tablero de seguimiento','Responsable','Indicador','Umbral','Escalar','Revisar'],
    workshop:['Transferencia metodológica','Caso real','Mapa','Criterios','Plantilla','Rutina']
  },
  en:{
    causal:['Causal map','Operations','Resources','Costs','Leadership','Combined risk','Priority'],
    matrix:['Prioritization matrix','Impact','Effort','Execute','Plan','Defer'],
    scenarios:['Compared scenarios','Scen. A','Scen. B','Scen. C','Cost','Risk','Time'],
    timeline:['Timeline','Event','Barrier','Action','Recurrence','Systemic condition'],
    governance:['Follow-up dashboard','Owner','Indicator','Threshold','Escalate','Review'],
    workshop:['Method transfer','Real case','Map','Criteria','Template','Routine']
  }
};

function praxysVisualMarkup(type,lang){
  const c=(PRAXYS_VISUAL_COPY[lang]||PRAXYS_VISUAL_COPY.es)[type]||PRAXYS_VISUAL_COPY.es.causal;
  if(type==='matrix')return `<div class="praxys-artifact-visual artifact-matrix" aria-hidden="true"><span class="artifact-title">${praxysEsc(c[0])}</span><div class="matrix-grid"><b>${praxysEsc(c[3])}</b><b>${praxysEsc(c[4])}</b><b>${praxysEsc(c[5])}</b><b>Backlog</b><i></i><i></i><i></i><i></i></div><span class="axis axis-y">${praxysEsc(c[1])}</span><span class="axis axis-x">${praxysEsc(c[2])}</span></div>`;
  if(type==='scenarios')return `<div class="praxys-artifact-visual artifact-scenarios" aria-hidden="true"><span class="artifact-title">${praxysEsc(c[0])}</span><div class="scenario-cols"><div><b>${praxysEsc(c[1])}</b><i style="--w:62%"></i><i style="--w:76%"></i><i style="--w:48%"></i></div><div><b>${praxysEsc(c[2])}</b><i style="--w:82%"></i><i style="--w:54%"></i><i style="--w:66%"></i></div><div><b>${praxysEsc(c[3])}</b><i style="--w:50%"></i><i style="--w:44%"></i><i style="--w:78%"></i></div></div><div class="scenario-labels"><span>${praxysEsc(c[4])}</span><span>${praxysEsc(c[5])}</span><span>${praxysEsc(c[6])}</span></div></div>`;
  if(type==='timeline')return `<div class="praxys-artifact-visual artifact-timeline" aria-hidden="true"><span class="artifact-title">${praxysEsc(c[0])}</span><div class="timeline-line"><i></i><i></i><i></i><i></i></div><div class="timeline-tags"><span>${praxysEsc(c[1])}</span><span>${praxysEsc(c[2])}</span><span>${praxysEsc(c[3])}</span><span>${praxysEsc(c[4])}</span></div><div class="systemic-tag">${praxysEsc(c[5])}</div></div>`;
  if(type==='governance')return `<div class="praxys-artifact-visual artifact-governance" aria-hidden="true"><span class="artifact-title">${praxysEsc(c[0])}</span><div class="dash-row"><b>78%</b><b>15</b><b>3</b></div><div class="governance-table"><span>${praxysEsc(c[1])}</span><span>${praxysEsc(c[2])}</span><span>${praxysEsc(c[3])}</span><span>${praxysEsc(c[4])}</span><span>${praxysEsc(c[5])}</span></div></div>`;
  if(type==='workshop')return `<div class="praxys-artifact-visual artifact-workshop" aria-hidden="true"><span class="artifact-title">${praxysEsc(c[0])}</span><div class="workshop-board"><b>${praxysEsc(c[1])}</b><i>${praxysEsc(c[2])}</i><i>${praxysEsc(c[3])}</i><i>${praxysEsc(c[4])}</i><i>${praxysEsc(c[5])}</i></div></div>`;
  return `<div class="praxys-artifact-visual artifact-causal" aria-hidden="true"><span class="artifact-title">${praxysEsc(c[0])}</span><div class="causal-map"><b>${praxysEsc(c[5])}</b><i>${praxysEsc(c[1])}</i><i>${praxysEsc(c[2])}</i><i>${praxysEsc(c[3])}</i><i>${praxysEsc(c[4])}</i><em>${praxysEsc(c[6])}</em></div></div>`;
}

function praxysSetVisual(host,type,position){
  if(!host||!type)return;
  const lang=praxysLang();
  let visual=host.querySelector(':scope > .praxys-artifact-visual');
  if(!visual){
    const tmp=document.createElement('div');
    tmp.innerHTML=praxysVisualMarkup(type,lang).trim();
    visual=tmp.firstElementChild;
    if(position==='case'){
      const main=host.querySelector('.praxys-case-main');
      if(main)host.insertBefore(visual,main); else host.prepend(visual);
      host.classList.add('has-artifact-visual');
    }else{
      host.prepend(visual);
    }
  }
  if(visual.dataset.type!==type||visual.dataset.lang!==lang){
    const tmp=document.createElement('div');
    tmp.innerHTML=praxysVisualMarkup(type,lang).trim();
    visual.replaceWith(tmp.firstElementChild);
  }
  const current=host.querySelector(':scope > .praxys-artifact-visual');
  if(current){current.dataset.type=type;current.dataset.lang=lang;}
}

function praxysInstallArtifactIllustrations(){
  praxysEnsureArtifactStyle();
  document.querySelectorAll('#problemas .praxys-card').forEach((card,i)=>{
    if(i<3)praxysSetVisual(card,PRAXYS_VISUAL_TYPES.problems[i]);
  });
  document.querySelectorAll('#servicios .praxys-card').forEach(card=>{
    const id=card.dataset.praxysCase;
    if(id&&PRAXYS_VISUAL_TYPES.services[id])praxysSetVisual(card,PRAXYS_VISUAL_TYPES.services[id]);
  });
  document.querySelectorAll('#casos-concretos .praxys-concrete-case').forEach(card=>{
    const id=String(card.id||'').replace(/^case-/,'');
    if(id&&PRAXYS_VISUAL_TYPES.services[id])praxysSetVisual(card,PRAXYS_VISUAL_TYPES.services[id],'case');
  });
}

function praxysEnsureArtifactStyle(){
  let s=document.getElementById('praxys-artifact-illustrations-style');
  if(!s){s=document.createElement('style');s.id='praxys-artifact-illustrations-style';document.head.appendChild(s)}
  s.textContent=`
    .praxys-artifact-visual{position:relative!important;display:block!important;height:132px!important;margin:0 0 14px!important;border-radius:18px!important;overflow:hidden!important;border:1px solid rgba(16,32,51,.12)!important;background:linear-gradient(135deg,#102033 0%,#142B44 58%,#0E1B2C 100%)!important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.035)!important;flex:none!important;color:#fff!important;}
    #problemas .praxys-artifact-visual{background:linear-gradient(135deg,rgba(5,14,24,.82),rgba(16,32,51,.58))!important;border-color:rgba(242,201,76,.20)!important;}
    .artifact-title{position:absolute;left:14px;top:10px;color:#F2C94C!important;font-size:.62rem!important;line-height:1!important;font-weight:950!important;letter-spacing:.13em!important;text-transform:uppercase!important;z-index:3;}
    .praxys-artifact-visual:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:22px 22px;opacity:.6;}
    .praxys-artifact-visual:after{content:"";position:absolute;inset:auto 0 0 0;height:40%;background:linear-gradient(180deg,transparent,rgba(232,99,42,.12));pointer-events:none;}
    .causal-map{position:absolute;inset:34px 14px 12px;}
    .causal-map b{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:88px;height:42px;border-radius:999px;background:rgba(232,99,42,.20);border:1px solid rgba(232,99,42,.75);display:flex;align-items:center;justify-content:center;text-align:center;font-size:.68rem;line-height:1.05;font-weight:900;color:#fff;}
    .causal-map i,.causal-map em{position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;min-width:70px;height:28px;padding:0 8px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);font-style:normal;font-size:.6rem;font-weight:850;color:#DCE8F5;}
    .causal-map i:nth-of-type(1){left:0;top:4px}.causal-map i:nth-of-type(2){right:0;top:4px}.causal-map i:nth-of-type(3){left:8px;bottom:4px}.causal-map i:nth-of-type(4){right:8px;bottom:4px}.causal-map em{left:50%;bottom:-2px;transform:translateX(-50%);color:#F2C94C;border-color:rgba(242,201,76,.45);}
    .causal-map:before,.causal-map:after{content:"";position:absolute;left:14%;right:14%;top:50%;height:1px;background:linear-gradient(90deg,transparent,rgba(242,201,76,.55),transparent);}.causal-map:after{transform:rotate(90deg);}
    .matrix-grid{position:absolute;left:30px;right:18px;top:34px;bottom:26px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;border:1px solid rgba(255,255,255,.20);}
    .matrix-grid b{display:flex;align-items:center;justify-content:center;font-size:.62rem;color:#DDE9F4;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.09)}.matrix-grid b:nth-child(1){background:rgba(242,201,76,.20);color:#fff}.matrix-grid b:nth-child(2){background:rgba(232,99,42,.18)}
    .matrix-grid i{position:absolute;width:9px;height:9px;border-radius:50%;background:#F2C94C;box-shadow:0 0 0 4px rgba(242,201,76,.13)}.matrix-grid i:nth-of-type(1){left:25%;top:24%}.matrix-grid i:nth-of-type(2){left:68%;top:28%;background:#E8632A}.matrix-grid i:nth-of-type(3){left:36%;top:70%}.matrix-grid i:nth-of-type(4){left:78%;top:72%;background:#7FB3D5}.axis{position:absolute;font-size:.55rem;color:#AFC0D2;font-weight:900;text-transform:uppercase}.axis-y{left:7px;top:64px;transform:rotate(-90deg)}.axis-x{right:20px;bottom:8px;}
    .scenario-cols{position:absolute;left:16px;right:16px;top:38px;bottom:26px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.scenario-cols div{border:1px solid rgba(255,255,255,.13);border-radius:12px;background:rgba(255,255,255,.055);padding:9px}.scenario-cols b{display:block;color:#fff;font-size:.62rem;margin-bottom:7px}.scenario-cols i{display:block;height:6px;width:var(--w);border-radius:999px;margin:6px 0;background:linear-gradient(90deg,#E8632A,#F2C94C)}.scenario-labels{position:absolute;left:18px;right:18px;bottom:8px;display:flex;justify-content:space-around;color:#AFC0D2;font-size:.54rem;font-weight:900;text-transform:uppercase}
    .timeline-line{position:absolute;left:20px;right:20px;top:65px;height:2px;background:linear-gradient(90deg,#7FB3D5,#E8632A,#F2C94C)}.timeline-line i{position:absolute;top:-6px;width:14px;height:14px;border-radius:50%;background:#102033;border:3px solid #F2C94C}.timeline-line i:nth-child(1){left:0}.timeline-line i:nth-child(2){left:33%;border-color:#E8632A}.timeline-line i:nth-child(3){left:64%;border-color:#7FB3D5}.timeline-line i:nth-child(4){right:0;border-color:#F2C94C}.timeline-tags{position:absolute;left:12px;right:12px;top:84px;display:flex;justify-content:space-between;gap:4px}.timeline-tags span{font-size:.53rem;color:#DCE8F5;background:rgba(255,255,255,.07);border-radius:999px;padding:4px 6px}.systemic-tag{position:absolute;right:14px;top:34px;color:#F2C94C;border:1px solid rgba(242,201,76,.35);border-radius:999px;padding:5px 8px;font-size:.55rem;font-weight:900;text-transform:uppercase}
    .dash-row{position:absolute;left:16px;right:16px;top:38px;display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.dash-row b{height:34px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;color:#F2C94C;font-size:1rem}.governance-table{position:absolute;left:16px;right:16px;bottom:14px;display:grid;grid-template-columns:1.1fr 1fr 1fr 1fr 1fr;gap:4px}.governance-table span{border-radius:8px;background:rgba(255,255,255,.07);padding:7px 4px;text-align:center;color:#DCE8F5;font-size:.52rem;font-weight:800}
    .workshop-board{position:absolute;left:16px;right:16px;top:36px;bottom:14px;border:1px solid rgba(255,255,255,.16);border-radius:14px;background:rgba(255,255,255,.055);padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:7px}.workshop-board b{grid-column:1/-1;color:#F2C94C;font-size:.65rem}.workshop-board i{font-style:normal;border-radius:8px;background:rgba(242,201,76,.16);color:#fff;font-size:.55rem;font-weight:850;padding:6px;text-align:center}.workshop-board i:nth-of-type(2),.workshop-board i:nth-of-type(4){background:rgba(232,99,42,.16)}
    .praxys-concrete-case.has-artifact-visual{grid-template-columns:92px minmax(250px,310px) 1fr!important;align-items:start!important;}.praxys-concrete-case.has-artifact-visual>.praxys-artifact-visual{height:185px!important;margin:0!important;position:sticky!important;top:96px!important}.praxys-concrete-case.has-artifact-visual>.praxys-case-main{grid-column:3!important;}
    @media(max-width:1040px){.praxys-concrete-case.has-artifact-visual{grid-template-columns:78px 1fr!important}.praxys-concrete-case.has-artifact-visual>.praxys-artifact-visual{grid-column:2!important;position:relative!important;top:auto!important;height:150px!important;margin-bottom:6px!important}.praxys-concrete-case.has-artifact-visual>.praxys-case-main{grid-column:2!important}}
    @media(max-width:720px){.praxys-artifact-visual{height:118px!important;border-radius:16px!important}.praxys-concrete-case.has-artifact-visual{grid-template-columns:1fr!important}.praxys-concrete-case.has-artifact-visual>.praxys-artifact-visual,.praxys-concrete-case.has-artifact-visual>.praxys-case-main{grid-column:1!important}.praxys-concrete-case.has-artifact-visual>.praxys-artifact-visual{height:128px!important}.artifact-title{font-size:.56rem!important}}
  `;
}

try{
  let praxysVisualTimer=null;
  const praxysVisualObserver=new MutationObserver(()=>{
    clearTimeout(praxysVisualTimer);
    praxysVisualTimer=setTimeout(praxysRefreshVisualFixes,120);
  });
  praxysVisualObserver.observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['lang','data-praxys-case','id','class']});
}catch(e){}
