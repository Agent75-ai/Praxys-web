// Praxys visual layer: language + editorial photos
(function(){
  const PHOTOS={
    collab:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=72',
    board:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=72',
    data:'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=72',
    scenarios:'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=72',
    followup:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=72',
    workshop:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=72',
    table:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=72'
  };
  const SERVICE_TITLES={
    'diagnostico ejecutivo de riesgos combinados':'combined-risk-diagnosis',
    'executive diagnosis of combined risks':'combined-risk-diagnosis',
    'priorizacion de acciones y recursos':'action-resource-prioritization',
    'prioritization of actions and resources':'action-resource-prioritization',
    'evaluacion de escenarios de decision':'decision-scenario-assessment',
    'decision scenario assessment':'decision-scenario-assessment',
    'investigacion sistemica de eventos recurrentes':'recurring-events-investigation',
    'systemic investigation of recurring events':'recurring-events-investigation',
    'diseno de gobernanza y seguimiento':'governance-followup-design',
    'governance and follow-up design':'governance-followup-design',
    'capacitacion ejecutiva y transferencia metodologica':'executive-training-transfer',
    'executive training and method transfer':'executive-training-transfer'
  };
  const SERVICE_PHOTOS={
    'combined-risk-diagnosis':PHOTOS.board,
    'action-resource-prioritization':PHOTOS.table,
    'decision-scenario-assessment':PHOTOS.scenarios,
    'recurring-events-investigation':PHOTOS.data,
    'governance-followup-design':PHOTOS.followup,
    'executive-training-transfer':PHOTOS.workshop
  };
  const CASE_PHOTOS={
    'combined-risk-diagnosis':PHOTOS.collab,
    'action-resource-prioritization':PHOTOS.board,
    'decision-scenario-assessment':PHOTOS.scenarios,
    'recurring-events-investigation':PHOTOS.data,
    'governance-followup-design':PHOTOS.followup,
    'executive-training-transfer':PHOTOS.workshop
  };
  const PROBLEM_PHOTOS=[PHOTOS.collab,PHOTOS.table,PHOTOS.data];

  function praxysLang(){return (localStorage.getItem('selectedLanguage')||document.documentElement.lang||'es')==='en'?'en':'es'}
  window.praxysLang=window.praxysLang||praxysLang;
  function norm(s){return String(s||'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
  function serviceId(card){
    if(!card)return'';
    if(card.dataset&&card.dataset.praxysCase)return card.dataset.praxysCase;
    return SERVICE_TITLES[norm((card.querySelector('h3')||{}).textContent||'')]||'';
  }

  function setLanguage(lang){
    lang=lang==='en'?'en':'es';
    localStorage.setItem('selectedLanguage',lang);
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-es][data-en]').forEach(el=>{const v=el.getAttribute('data-'+lang);if(v!==null)el.innerHTML=v});
    document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
    document.getElementById('lang-'+lang)?.classList.add('active');
    if(window.reloadArticles)window.reloadArticles();
    if(window.PRAXYS&&typeof window.PRAXYS.apply==='function')setTimeout(()=>window.PRAXYS.apply(),30);
    scheduleVisualRefresh();
  }
  window.setLanguage=setLanguage;

  function removeOldMedia(host){
    Array.from(host.children).forEach(ch=>{
      if(ch.classList&&ch.classList.contains('praxys-ai-photo'))return;
      const cls=String(ch.className||'');
      if(ch.tagName==='IMG'||ch.tagName==='PICTURE'||ch.tagName==='FIGURE'||/photo|image|media|visual|picture/i.test(cls))ch.remove();
    });
  }
  function caption(){return praxysLang()==='en'?'work session':'mesa de trabajo'}
  function putPhoto(host,src,kind,label){
    if(!host||!src)return;
    let fig=host.querySelector(':scope > .praxys-ai-photo');
    if(!fig){
      removeOldMedia(host);
      fig=document.createElement('figure');
      fig.className='praxys-ai-photo '+kind;
      fig.innerHTML='<img loading="lazy"><figcaption></figcaption>';
      if(kind==='case'){
        const main=host.querySelector('.praxys-case-main');
        main?host.insertBefore(fig,main):host.prepend(fig);
      }else host.prepend(fig);
    }
    const img=fig.querySelector('img');
    if(img&&img.src!==src){img.src=src;img.alt=label||'Praxys';}
    const cap=fig.querySelector('figcaption');
    if(cap)cap.textContent=caption();
  }

  function applyPhotos(){
    document.querySelectorAll('#problemas .praxys-card').forEach((card,i)=>{if(i<3)putPhoto(card,PROBLEM_PHOTOS[i],'problem','Equipo de trabajo analizando problemas de gestión')});
    document.querySelectorAll('#servicios .praxys-card').forEach(card=>{const id=serviceId(card);putPhoto(card,SERVICE_PHOTOS[id],'service','Servicio Praxys en una mesa de trabajo')});
    document.querySelectorAll('#casos-concretos .praxys-concrete-case').forEach(card=>{const id=String(card.id||'').replace(/^case-/,'');putPhoto(card,CASE_PHOTOS[id],'case','Caso Praxys en una mesa de trabajo')});
  }

  function installStyle(){
    let s=document.getElementById('praxys-editorial-photo-style');
    if(!s){s=document.createElement('style');s.id='praxys-editorial-photo-style';document.head.appendChild(s)}
    s.textContent=`
      :root{--px-ink:#102033;--px-muted:#546477;--px-orange:#E8632A;--px-line:rgba(16,32,51,.10)}
      body.praxys-editorial-v2{font-family:var(--f,'Manrope',Arial,sans-serif)!important;color:var(--px-ink)!important}
      body.praxys-editorial-v2 h1,body.praxys-editorial-v2 h2,body.praxys-editorial-v2 h3{letter-spacing:-.035em!important}
      body.praxys-editorial-v2 .eyebrow{color:var(--px-orange)!important;font-size:.78rem!important;letter-spacing:.14em!important;font-weight:900!important;text-transform:uppercase!important}
      body.praxys-editorial-v2 .praxys-lead{color:var(--px-muted)!important;line-height:1.56!important;max-width:780px!important}
      .praxys-ai-photo{position:relative!important;display:block!important;overflow:hidden!important;margin:0 0 14px!important;border-radius:18px!important;background:#DDE8F1!important;border:1px solid var(--px-line)!important;box-shadow:0 16px 34px rgba(16,32,51,.08)!important;isolation:isolate!important}
      .praxys-ai-photo img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;filter:saturate(.96) contrast(1.03)!important;transform:scale(1.005)!important}
      .praxys-ai-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(16,32,51,0) 54%,rgba(16,32,51,.28));pointer-events:none}
      .praxys-ai-photo figcaption{position:absolute;left:10px;bottom:9px;z-index:2;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.86);color:#102033;font-size:.58rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(4px)}
      .praxys-ai-photo.problem{height:112px!important;border-color:rgba(242,201,76,.20)!important}
      .praxys-ai-photo.service{height:130px!important;margin:-2px -2px 14px!important;border-radius:18px 18px 14px 14px!important}
      .praxys-ai-photo.case{height:184px!important;grid-column:1/-1!important;margin:0 0 8px!important}
      #servicios .praxys-card{background:#fff!important;border:1px solid var(--px-line)!important;border-radius:22px!important;box-shadow:0 16px 38px rgba(16,32,51,.06)!important}
      #servicios .praxys-card h3{font-size:1.08rem!important;line-height:1.18!important;color:var(--px-ink)!important}
      #servicios .praxys-card p{color:#4B5A6B!important;font-size:.92rem!important;line-height:1.44!important}
      #servicios .praxys-card p strong{color:var(--px-orange)!important}
      #casos-concretos .praxys-concrete-case{grid-template-columns:1fr!important;gap:12px!important;padding:20px!important;border-radius:24px!important;background:#fff!important;border:1px solid var(--px-line)!important;box-shadow:0 18px 46px rgba(16,32,51,.07)!important}
      #casos-concretos .praxys-case-number{font-size:.78rem!important;font-family:var(--f,'Manrope',Arial,sans-serif)!important;font-weight:950!important;letter-spacing:.12em!important;text-transform:uppercase!important;color:var(--px-orange)!important}
      #casos-concretos .praxys-case-main h3{font-size:clamp(1.26rem,2vw,1.72rem)!important;line-height:1.12!important;color:var(--px-ink)!important}
      #casos-concretos .praxys-case-main p{font-size:.94rem!important;line-height:1.48!important;color:#4B5A6B!important}
      .praxys-case-btn,.praxys-detail-btn,.praxys-mid-cta-btn{border-radius:999px!important;background:var(--px-ink)!important;color:#fff!important}
      .praxys-case-btn:hover,.praxys-detail-btn:hover,.praxys-mid-cta-btn:hover{background:var(--px-orange)!important;color:#fff!important}
      @media(max-width:760px){.praxys-ai-photo.problem{height:98px!important}.praxys-ai-photo.service{height:112px!important}.praxys-ai-photo.case{height:136px!important}.praxys-ai-photo figcaption{font-size:.54rem;left:8px;bottom:8px}}
    `;
  }

  let timer=null;
  function refresh(){document.body.classList.add('praxys-editorial-v2');installStyle();applyPhotos();}
  function scheduleVisualRefresh(){clearTimeout(timer);timer=setTimeout(refresh,80);setTimeout(refresh,450);setTimeout(refresh,1300)}
  document.addEventListener('DOMContentLoaded',()=>{setLanguage(localStorage.getItem('selectedLanguage')||'es');document.getElementById('lang-es')?.addEventListener('click',()=>setLanguage('es'));document.getElementById('lang-en')?.addEventListener('click',()=>setLanguage('en'));scheduleVisualRefresh()});
  window.addEventListener('load',scheduleVisualRefresh);
  try{const obs=new MutationObserver(scheduleVisualRefresh);obs.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['lang','class']})}catch(e){}
})();