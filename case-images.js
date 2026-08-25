// Praxys case image/layout override — clean case section photos and case copy fixes
(function(){
  const PHOTOS={
    collab:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=72',
    board:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=72',
    factory:'https://images.unsplash.com/photo-1767706508497-a747426a7e14?auto=format&fit=crop&w=900&q=72',
    industrial:'https://images.unsplash.com/photo-1780752849375-fd8df4632dae?auto=format&fit=crop&w=900&q=72',
    followup:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=72',
    workshop:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=72'
  };
  const MAP={
    'case-combined-risk-diagnosis':PHOTOS.collab,
    'case-action-resource-prioritization':PHOTOS.board,
    'case-decision-scenario-assessment':PHOTOS.factory,
    'case-recurring-events-investigation':PHOTOS.industrial,
    'case-governance-followup-design':PHOTOS.followup,
    'case-executive-training-transfer':PHOTOS.workshop
  };
  const CASE3_COPY={
    es:{
      oldTitle:'Hay que invertir, pero no están claras las consecuencias',
      title:'La inversión requiere comparar escenarios, costos y riesgos',
      oldSituation:'La dirección debe comprometer recursos sin una comparación suficiente de impactos y riesgos residuales.',
      situation:'La dirección debe comprometer recursos relevantes y necesita comparar impactos, supuestos y riesgos residuales con criterios explícitos.',
      labelSituation:'Situación'
    },
    en:{
      oldTitle:'Investment is needed, but the consequences are not clear',
      title:'Investment requires comparing scenarios, costs, and risks',
      oldSituation:'Leadership must commit resources without a sufficient comparison of impacts and residual risks.',
      situation:'Leadership must commit significant resources and needs to compare impacts, assumptions, and residual risks using explicit criteria.',
      labelSituation:'Situation'
    }
  };
  function lang(){return (localStorage.getItem('selectedLanguage')||document.documentElement.lang||'es')==='en'?'en':'es';}
  function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
  function style(){
    let s=document.getElementById('px-case-img-style');
    if(!s){s=document.createElement('style');s.id='px-case-img-style';document.head.appendChild(s);}
    s.textContent=`
      #casos-concretos{background:#f6f9fc!important;}
      #casos-concretos .px-cases-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:24px!important;align-items:stretch!important;}
      #casos-concretos .px-case-card{display:flex!important;flex-direction:column!important;background:#fff!important;border:1px solid rgba(16,32,51,.10)!important;border-radius:24px!important;overflow:hidden!important;box-shadow:0 18px 44px rgba(16,32,51,.08)!important;}
      #casos-concretos .px-case-card>.px-photo{width:100%!important;aspect-ratio:16/9!important;height:auto!important;min-height:0!important;border-radius:0!important;border-bottom:1px solid rgba(16,32,51,.10)!important;background:#e6eef6!important;}
      #casos-concretos .px-case-card>.px-photo img{width:100%!important;height:100%!important;display:block!important;object-fit:cover!important;object-position:center!important;filter:saturate(.96) contrast(1.03)!important;}
      #casos-concretos .px-case-content{padding:20px!important;display:flex!important;flex-direction:column!important;gap:12px!important;}
      #casos-concretos .px-case-card h3{font-size:clamp(1.24rem,2vw,1.55rem)!important;line-height:1.13!important;color:#102033!important;}
      #casos-concretos .px-case-mini{display:grid!important;grid-template-columns:1fr 1fr!important;gap:10px!important;}
      #casos-concretos .px-case-mini p{background:#fff!important;color:#5f7084!important;}
      @media(max-width:1050px){#casos-concretos .px-cases-grid{grid-template-columns:1fr!important;}}
      @media(max-width:760px){#casos-concretos .px-case-card>.px-photo{aspect-ratio:16/10!important;}#casos-concretos .px-case-mini{grid-template-columns:1fr!important;}}
    `;
  }
  function patchCase3Copy(){
    const l=lang();
    const copy=CASE3_COPY[l];
    const other=CASE3_COPY[l==='en'?'es':'en'];
    const card=document.getElementById('case-decision-scenario-assessment');
    if(card){
      const title=card.querySelector('h3');
      if(title&&(title.textContent.trim()===copy.oldTitle||title.textContent.trim()===other.oldTitle||title.textContent.trim()!==copy.title)) title.textContent=copy.title;
      const situation=card.querySelector('.px-case-mini p:first-child');
      if(situation) situation.innerHTML='<strong>'+esc(copy.labelSituation)+'</strong>'+esc(copy.situation);
    }
    const modal=document.getElementById('px-modal');
    if(modal&&modal.classList.contains('open')){
      const h2=modal.querySelector('.px-modal-content h2');
      if(h2&&(h2.textContent.trim()===copy.oldTitle||h2.textContent.trim()===other.oldTitle||h2.textContent.trim()!==copy.title)) h2.textContent=copy.title;
      const lead=modal.querySelector('.px-modal-content h2 + p');
      if(lead&&(lead.textContent.trim()===copy.oldSituation||lead.textContent.trim()===other.oldSituation||lead.textContent.trim()!==copy.situation)) lead.textContent=copy.situation;
    }
  }
  function apply(){
    style();
    Object.keys(MAP).forEach(id=>{
      const im=document.querySelector('#'+id+' > .px-photo img');
      if(im&&im.src!==MAP[id]){im.src=MAP[id];im.removeAttribute('srcset');im.loading='lazy';}
    });
    patchCase3Copy();
  }
  function schedule(){requestAnimationFrame(apply);setTimeout(apply,180);setTimeout(apply,700);}
  document.addEventListener('DOMContentLoaded',schedule);
  window.addEventListener('load',schedule);
  document.addEventListener('praxys:lang',schedule);
  document.addEventListener('click',e=>{
    if(e.target.closest('[data-open-case="decision-scenario-assessment"]')) setTimeout(apply,60);
  });
})();
