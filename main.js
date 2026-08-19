// Menú móvil
const t=document.getElementById('nav-toggle'),m=document.getElementById('nav-menu');
if(t){t.addEventListener('click',()=>{t.classList.toggle('open');m.classList.toggle('open');});
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{t.classList.remove('open');m.classList.remove('open');}));}
// Reveal
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){
  const o=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i%4,3)*.08)+'s';o.observe(el);});
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));}

// Artículos y Papers publicados
(function(){
  const css = `
  #articulos .papers-intro{max-width:820px;margin:.85rem 0 0;color:#4c5b6c;font-size:1.04rem;line-height:1.65;}
  #articulos .papers-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:22px!important;margin-top:30px!important;}
  #articulos .paper-card{position:relative;display:flex;flex-direction:column;min-height:385px;padding:26px 24px 24px;border:1px solid rgba(16,32,51,.10);border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.98) 0%,rgba(247,250,253,.98) 100%);box-shadow:0 18px 44px rgba(16,32,51,.08);overflow:hidden;}
  #articulos .paper-card::before{content:"";position:absolute;inset:0 0 auto 0;height:5px;background:linear-gradient(90deg,#E8632A,rgba(232,99,42,.22));}
  #articulos .paper-meta{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;color:#E8632A;font-size:.76rem;font-weight:900;letter-spacing:.10em;text-transform:uppercase;}
  #articulos .paper-card h3{margin:0 0 10px;color:#102033;font-size:1.18rem;line-height:1.25;letter-spacing:-.02em;}
  #articulos .paper-venue{margin:0 0 14px;color:#6c7887;font-size:.9rem;font-weight:750;}
  #articulos .paper-desc{margin:0;color:#3f4c5e;font-size:.95rem;line-height:1.58;}
  #articulos .paper-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:20px;}
  #articulos .paper-tags span{display:inline-flex;align-items:center;min-height:25px;padding:4px 9px;border-radius:999px;background:rgba(232,99,42,.08);color:#A9461D;font-size:.72rem;font-weight:800;}
  #articulos .paper-download{margin-top:auto;display:inline-flex;justify-content:center;align-items:center;min-height:44px;padding:0 18px;border-radius:14px;background:#102033;color:#ffffff!important;text-decoration:none;font-size:.86rem;font-weight:900;letter-spacing:.03em;text-transform:uppercase;transition:transform .18s ease,background .18s ease,box-shadow .18s ease;}
  #articulos .paper-download:hover{transform:translateY(-1px);background:#E8632A;box-shadow:0 12px 24px rgba(232,99,42,.20);}
  @media(max-width:1100px){#articulos .papers-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;}}
  @media(max-width:720px){#articulos .papers-grid{grid-template-columns:1fr!important;gap:18px!important;margin-top:22px!important;}#articulos .paper-card{min-height:0;padding:24px 20px 22px;border-radius:20px;}}
  `;
  const style=document.createElement('style');
  style.id='praxys-papers-render-style';
  style.textContent=css;
  document.head.appendChild(style);

  function esc(s){const d=document.createElement('div');d.textContent=s||'';return d.innerHTML;}
  function currentLang(){return localStorage.getItem('selectedLanguage')||document.documentElement.lang||'es';}
  function paperCard(p, lang){
    const title=lang==='en'?(p.title_en||p.title):(p.title||p.title_en);
    const desc=lang==='en'?(p.desc_en||p.desc):(p.desc||p.desc_en);
    const type=lang==='en'?(p.type_en||p.type):(p.type||p.type_en);
    const tags=(p.tags||[]).map(x=>'<span>'+esc(x)+'</span>').join('');
    const btn=lang==='en'?'Download PDF':'Descargar PDF';
    return '<article class="paper-card reveal">'+
      '<div class="paper-meta"><span>'+esc(p.year||'')+'</span><span>'+esc(type||'')+'</span></div>'+
      '<h3>'+esc(title)+'</h3>'+
      '<p class="paper-venue">'+esc(p.venue||'')+'</p>'+
      '<p class="paper-desc">'+esc(desc)+'</p>'+
      '<div class="paper-tags">'+tags+'</div>'+
      '<a class="paper-download" href="'+esc(p.link||'#')+'" target="_blank" rel="noopener">'+btn+'</a>'+
      '</article>';
  }

  async function renderPapers(){
    const container=document.getElementById('articles-container');
    const section=document.getElementById('articulos');
    if(!container || !section) return;
    try{
      const r=await fetch('content.json?papers='+Date.now());
      if(!r.ok) return;
      const data=await r.json();
      if(!data.articles || !data.articles.length) return;
      const lang=currentLang();
      const head=section.querySelector('.serv-head');
      if(head){
        const intro=head.querySelector('.papers-intro') || document.createElement('p');
        intro.className='papers-intro';
        intro.textContent=lang==='en'
          ? 'Publications, models, and conceptual developments applied to safety, risk, systemic analysis, availability, safety culture, and decision-making in complex organizations.'
          : 'Publicaciones, modelos y desarrollos conceptuales aplicados a seguridad, riesgo, análisis sistémico, disponibilidad, cultura de seguridad y toma de decisiones en organizaciones complejas.';
        if(!intro.parentNode) head.appendChild(intro);
      }
      container.className='articles-grid papers-grid reveal';
      container.innerHTML=data.articles.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).map(p=>paperCard(p,lang)).join('');
    }catch(e){console.warn('No se pudieron cargar los papers publicados', e);}
  }

  document.addEventListener('DOMContentLoaded',()=>setTimeout(renderPapers,350));
  window.addEventListener('storage',renderPapers);
  document.addEventListener('click',e=>{
    if(e.target && (e.target.id==='lang-es'||e.target.id==='lang-en'||e.target.matches('[data-lang]'))){
      setTimeout(renderPapers,250);
    }
  });
})();
