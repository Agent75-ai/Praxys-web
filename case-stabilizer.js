// Praxys case image stabilizer — prevents the investment case image from alternating
(function(){
  const CASE_ID='case-decision-scenario-assessment';
  const TEXT={
    es:{title:'La inversión requiere comparar escenarios, costos y riesgos',label:'Situación',situation:'La dirección debe comprometer recursos relevantes y necesita comparar impactos, supuestos y riesgos residuales con criterios explícitos.'},
    en:{title:'Investment requires comparing scenarios, costs, and risks',label:'Situation',situation:'Leadership must commit significant resources and needs to compare impacts, assumptions, and residual risks using explicit criteria.'}
  };
  const state={lockedSrc:''};
  let raf=0;

  function lang(){return (localStorage.getItem('selectedLanguage')||document.documentElement.lang||'es')==='en'?'en':'es';}
  function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}

  function installStyle(){
    let s=document.getElementById('px-case-stabilizer-style');
    if(!s){s=document.createElement('style');s.id='px-case-stabilizer-style';document.head.appendChild(s);}
    s.textContent=`
      #${CASE_ID} > .px-photo img{transition:opacity .12s ease!important;}
      #${CASE_ID}:not([data-case3-locked="1"]) > .px-photo img{opacity:0!important;}
      #${CASE_ID}[data-case3-locked="1"] > .px-photo img{opacity:1!important;}
    `;
  }

  function stabilize(){
    installStyle();
    const card=document.getElementById(CASE_ID);
    if(!card) return;

    const img=card.querySelector(':scope > .px-photo img');
    if(img){
      const current=img.getAttribute('src')||'';
      if(!state.lockedSrc && current.startsWith('data:image/')) state.lockedSrc=current;
      if(state.lockedSrc && current!==state.lockedSrc){
        img.setAttribute('src',state.lockedSrc);
        img.removeAttribute('srcset');
        img.loading='lazy';
        img.decoding='async';
      }
      if(state.lockedSrc) card.setAttribute('data-case3-locked','1');
    }

    const t=TEXT[lang()];
    const h3=card.querySelector('h3');
    if(h3 && h3.textContent.trim()!==t.title) h3.textContent=t.title;
    const situation=card.querySelector('.px-mini p:first-child');
    if(situation) situation.innerHTML='<strong>'+esc(t.label)+'</strong>'+esc(t.situation);

    const modal=document.getElementById('px-modal');
    if(modal && modal.classList.contains('open')){
      const h2=modal.querySelector('.px-modal-content h2');
      if(h2 && h2.textContent.trim()!==t.title) h2.textContent=t.title;
      const lead=modal.querySelector('.px-modal-lead');
      if(lead && lead.textContent.trim()!==t.situation) lead.textContent=t.situation;
      const modalImg=modal.querySelector('.px-modal-box > .px-photo img');
      if(modalImg && state.lockedSrc && modalImg.getAttribute('src')!==state.lockedSrc){
        modalImg.setAttribute('src',state.lockedSrc);
        modalImg.removeAttribute('srcset');
      }
    }
  }

  function schedule(){
    if(raf) return;
    raf=requestAnimationFrame(()=>{raf=0;stabilize();});
  }

  function observe(){
    const root=document.getElementById('casos-concretos')||document.body;
    if(!root || root.dataset.case3Observer==='1') return;
    root.dataset.case3Observer='1';
    new MutationObserver(schedule).observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:['src','class','id','data-case3-locked']});
  }

  function boot(){
    installStyle();
    observe();
    schedule();
    [60,180,420,900,1400].forEach(t=>setTimeout(schedule,t));
  }

  document.addEventListener('DOMContentLoaded',boot);
  window.addEventListener('load',boot);
  document.addEventListener('praxys:lang',boot);
  document.addEventListener('click',e=>{if(e.target.closest('[data-open-case="decision-scenario-assessment"]')) setTimeout(schedule,40);});
})();
