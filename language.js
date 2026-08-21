document.addEventListener('DOMContentLoaded',function(){
  const saved=localStorage.getItem('selectedLanguage')||'es';
  setLanguage(saved);
  document.getElementById('lang-es').addEventListener('click',()=>setLanguage('es'));
  document.getElementById('lang-en').addEventListener('click',()=>setLanguage('en'));
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
}
function praxysRefreshVisualFixes(){
  praxysUnifySectionEyebrows();
  praxysSmoothHeroTransitions();
}
function praxysUnifySectionEyebrows(){
  let s=document.getElementById('praxys-eyebrow-uniform-style');
  if(!s){
    s=document.createElement('style');
    s.id='praxys-eyebrow-uniform-style';
    document.head.appendChild(s);
  }
  s.textContent=`
    #problemas .serv-head .eyebrow,#problemas .eyebrow,
    #servicios .serv-head .eyebrow,#servicios .eyebrow,
    #entregables .serv-head .eyebrow,#entregables .eyebrow,
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
      #entregables .serv-head .eyebrow,#entregables .eyebrow,
      #metodo .serv-head .eyebrow,#metodo .eyebrow,
      #articulos .serv-head .eyebrow,#articulos .eyebrow,
      #contacto .serv-head .eyebrow,#contacto .eyebrow,
      #praxys-mid-cta .praxys-mid-cta-inner span{
        font-size:1.15rem!important;
        letter-spacing:.10em!important;
      }
    }
  `;
}
function praxysSmoothHeroTransitions(){
  let s=document.getElementById('praxys-hero-smooth-transitions');
  if(!s){
    s=document.createElement('style');
    s.id='praxys-hero-smooth-transitions';
    document.head.appendChild(s);
  }
  s.textContent=`
    .hero .eyebrow,
    .hero h1,
    .hero-sub,
    .rotating-title,
    .rotating-copy{
      backface-visibility:hidden!important;
      transform:translate3d(0,0,0);
      will-change:opacity,transform,filter;
    }
    .rotating-title,
    .rotating-copy,
    .hero h1,
    .hero-sub{
      transition:
        opacity .95s cubic-bezier(.22,1,.36,1),
        transform .95s cubic-bezier(.22,1,.36,1),
        filter .95s cubic-bezier(.22,1,.36,1)!important;
    }
    .rotating-title.is-fading,
    .rotating-copy.is-fading,
    .hero h1.is-fading,
    .hero-sub.is-fading{
      opacity:0!important;
      transform:translate3d(0,2px,0)!important;
      filter:blur(.35px)!important;
    }
    .hero-media img{
      transition:
        opacity 1.15s cubic-bezier(.22,1,.36,1),
        transform 8s cubic-bezier(.22,1,.36,1)!important;
      will-change:opacity,transform;
    }
    .hero-media img.is-fading{
      opacity:.18!important;
      transform:scale(1.006)!important;
    }
    @media(prefers-reduced-motion:reduce){
      .rotating-title,.rotating-copy,.hero h1,.hero-sub,.hero-media img{
        transition:none!important;
        transform:none!important;
        filter:none!important;
      }
    }
  `;
}
try{
  let praxysVisualTimer=null;
  const praxysVisualObserver=new MutationObserver(()=>{
    clearTimeout(praxysVisualTimer);
    praxysVisualTimer=setTimeout(praxysRefreshVisualFixes,120);
  });
  praxysVisualObserver.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
}catch(e){}
