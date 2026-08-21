document.addEventListener('DOMContentLoaded',function(){
  const saved=localStorage.getItem('selectedLanguage')||'es';
  setLanguage(saved);
  document.getElementById('lang-es').addEventListener('click',()=>setLanguage('es'));
  document.getElementById('lang-en').addEventListener('click',()=>setLanguage('en'));
  praxysRefreshVisualFixes();
  setTimeout(praxysRefreshVisualFixes,300);
  setTimeout(praxysRefreshVisualFixes,1000);
  setTimeout(praxysRefreshVisualFixes,2500);
  if(!window.praxysWhiteboardNotesTimer){
    window.praxysWhiteboardNotesTimer=setInterval(praxysAnnotateHeroWhiteboard,700);
  }
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
  praxysAnnotateHeroWhiteboard();
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
function praxysAnnotateHeroWhiteboard(){
  const hero=document.querySelector('.hero') || document.getElementById('inicio');
  if(!hero) return;
  let s=document.getElementById('praxys-whiteboard-notes-style');
  if(!s){
    s=document.createElement('style');
    s.id='praxys-whiteboard-notes-style';
    document.head.appendChild(s);
  }
  s.textContent=`
    .hero{position:relative!important;overflow:hidden!important}
    #praxys-whiteboard-notes{position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0;transition:opacity .75s cubic-bezier(.22,1,.36,1);}
    #praxys-whiteboard-notes.is-visible{opacity:.92;}
    #praxys-whiteboard-notes .wb-note{position:absolute;color:rgba(26,32,38,.70);font-family:'Segoe Print','Bradley Hand','Comic Sans MS',cursive;font-weight:700;font-size:clamp(.78rem,1.05vw,1.05rem);line-height:1.05;letter-spacing:.01em;text-shadow:0 1px 0 rgba(255,255,255,.45);white-space:nowrap;}
    #praxys-whiteboard-notes .wb-note.small{font-size:clamp(.68rem,.88vw,.92rem);font-weight:700;color:rgba(26,32,38,.62)}
    #praxys-whiteboard-notes .wb-line{position:absolute;height:2px;background:rgba(26,32,38,.38);border-radius:999px;transform-origin:left center;}
    #praxys-whiteboard-notes .wb-dot{position:absolute;width:7px;height:7px;border-radius:50%;background:rgba(26,32,38,.45)}
    @media(max-width:900px){#praxys-whiteboard-notes{display:none!important}}
  `;
  let layer=document.getElementById('praxys-whiteboard-notes');
  if(!layer){
    layer=document.createElement('div');
    layer.id='praxys-whiteboard-notes';
    layer.setAttribute('aria-hidden','true');
    layer.innerHTML=`
      <span class="wb-note" style="left:53.5%;top:18.5%;transform:rotate(-3deg)">riesgo</span>
      <span class="wb-note small" style="left:61.0%;top:20.5%;transform:rotate(2deg)">procesos</span>
      <span class="wb-note" style="left:71.0%;top:16.2%;transform:rotate(-2deg)">decisión</span>
      <span class="wb-note small" style="left:77.6%;top:25.7%;transform:rotate(3deg)">responsables</span>
      <span class="wb-note" style="left:62.5%;top:39.8%;transform:rotate(-1deg)">barreras</span>
      <span class="wb-note small" style="left:70.2%;top:45.7%;transform:rotate(2deg)">recursos</span>
      <span class="wb-note" style="left:76.3%;top:52.0%;transform:rotate(-4deg)">seguimiento</span>
      <span class="wb-line" style="left:55.8%;top:25.0%;width:5.2%;transform:rotate(13deg)"></span>
      <span class="wb-line" style="left:69.8%;top:23.0%;width:5.6%;transform:rotate(-17deg)"></span>
      <span class="wb-line" style="left:67.7%;top:44.8%;width:6.0%;transform:rotate(8deg)"></span>
      <span class="wb-line" style="left:75.0%;top:50.0%;width:4.9%;transform:rotate(16deg)"></span>
      <span class="wb-dot" style="left:58.4%;top:27.0%"></span>
      <span class="wb-dot" style="left:73.8%;top:28.6%"></span>
      <span class="wb-dot" style="left:79.4%;top:54.4%"></span>
    `;
    hero.appendChild(layer);
  }else if(layer.parentElement!==hero){
    hero.appendChild(layer);
  }
  const txt=((document.querySelector('.hero h1')||{}).textContent+' '+((document.querySelector('.hero-sub')||{}).textContent||'')).toLowerCase();
  const isWhiteboard=/capacidad|capacidades|métodos|metodos|herramientas|criterios|installed capability|methods|tools|internal capabilities/.test(txt);
  layer.classList.toggle('is-visible', !!isWhiteboard);
}
try{
  let praxysVisualTimer=null;
  const praxysVisualObserver=new MutationObserver(()=>{
    clearTimeout(praxysVisualTimer);
    praxysVisualTimer=setTimeout(praxysRefreshVisualFixes,120);
  });
  praxysVisualObserver.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
}catch(e){}
