document.addEventListener('DOMContentLoaded',function(){
  const saved=localStorage.getItem('selectedLanguage')||'es';
  setLanguage(saved);
  document.getElementById('lang-es').addEventListener('click',()=>setLanguage('es'));
  document.getElementById('lang-en').addEventListener('click',()=>setLanguage('en'));
  praxysUnifySectionEyebrows();
  setTimeout(praxysUnifySectionEyebrows,300);
  setTimeout(praxysUnifySectionEyebrows,1000);
  setTimeout(praxysUnifySectionEyebrows,2500);
});
function setLanguage(lang){
  localStorage.setItem('selectedLanguage',lang);
  document.querySelectorAll('[data-es][data-en]').forEach(el=>{el.innerHTML=el.getAttribute('data-'+lang);});
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  const a=document.getElementById('lang-'+lang); if(a)a.classList.add('active');
  document.documentElement.lang=lang;
  if(window.reloadArticles)window.reloadArticles();
  praxysUnifySectionEyebrows();
  setTimeout(praxysUnifySectionEyebrows,120);
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
try{
  let praxysEyebrowTimer=null;
  const praxysEyebrowObserver=new MutationObserver(()=>{
    clearTimeout(praxysEyebrowTimer);
    praxysEyebrowTimer=setTimeout(praxysUnifySectionEyebrows,120);
  });
  praxysEyebrowObserver.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
}catch(e){}
