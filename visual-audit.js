// Praxys visual audit — final readability, case layout and unique photo pass
(function(){
  const STYLE_ID='praxys-visual-audit-final-20261002';

  const PHOTO_SETS={
    problemas:[
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1100&q=78',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=78',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=78'
    ],
    servicios:[
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1100&q=78',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=78',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=78',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1100&q=78',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=78',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1100&q=78'
    ],
    casos:[
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=78',
      'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&w=1200&q=78',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=78',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=78',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=78',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=78'
    ]
  };

  function installStyles(){
    let style=document.getElementById(STYLE_ID);
    if(!style){
      style=document.createElement('style');
      style.id=STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent=`
      :root{
        --px-navy:#102033;
        --px-ink:#233449;
        --px-muted:#586b80;
        --px-soft:#F4F8FB;
        --px-line:rgba(16,32,51,.12);
        --px-orange:#E8632A;
        --px-amber:#F2C94C;
        --px-radius:22px;
      }

      body{background:#fff!important;color:var(--px-ink)!important;font-family:Inter,Manrope,Segoe UI,Arial,sans-serif!important;}
      .navbar{background:#fff!important;border-bottom:1px solid var(--px-line)!important;box-shadow:0 8px 24px rgba(16,32,51,.05)!important;}
      .nav-menu a{color:var(--px-ink)!important;font-size:.86rem!important;font-weight:850!important;}
      .lang-btn.active{background:var(--px-navy)!important;color:#fff!important;}

      .section-head,.serv-head{text-align:center!important;max-width:820px!important;margin:0 auto 34px!important;}
      .section-head h2,.serv-head h2{font-size:clamp(2rem,3.3vw,3rem)!important;line-height:1.06!important;letter-spacing:-.035em!important;color:var(--px-navy)!important;font-weight:850!important;}
      .section-head p,.serv-head p,.praxys-lead{font-size:1.05rem!important;line-height:1.65!important;color:var(--px-muted)!important;font-weight:500!important;}
      .eyebrow{font-size:.75rem!important;letter-spacing:.16em!important;text-transform:uppercase!important;font-weight:950!important;color:var(--px-orange)!important;}

      /* Hero: readable, not literary-heavy */
      .hero-clean,.hero{background:#F4F8FB!important;color:var(--px-navy)!important;}
      .hero-copy h1,.hero h1{font-size:clamp(2.45rem,5vw,4.4rem)!important;line-height:1.02!important;letter-spacing:-.045em!important;color:var(--px-navy)!important;font-weight:850!important;max-width:840px!important;text-shadow:none!important;}
      .hero-copy p,.hero-sub{font-size:clamp(1.04rem,1.45vw,1.2rem)!important;line-height:1.62!important;color:var(--px-muted)!important;font-weight:540!important;max-width:720px!important;}
      .hero-photo,.hero-media,.hero-visual{border-radius:28px!important;overflow:hidden!important;box-shadow:0 24px 60px rgba(16,32,51,.14)!important;}
      .hero-photo img,.hero-media img,.hero-visual img{width:100%!important;height:100%!important;object-fit:cover!important;}

      /* Cards: lighter and readable */
      .card,.px-card,.problem-card,.service-card,article{border-radius:24px!important;border:1px solid var(--px-line)!important;background:#fff!important;box-shadow:0 18px 48px rgba(16,32,51,.08)!important;}
      .card h3,.px-card h3,article h3{font-size:1.2rem!important;line-height:1.22!important;color:var(--px-navy)!important;font-weight:880!important;letter-spacing:-.018em!important;}
      .card p,.px-card p,article p{font-size:.98rem!important;line-height:1.58!important;color:var(--px-muted)!important;font-weight:500!important;}
      .photo,figure.photo{overflow:hidden!important;background:#E9F1F7!important;}
      .photo img,figure.photo img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;filter:saturate(.96) contrast(1.02)!important;}

      /* Problems section should not make every photo/card feel like a black block */
      #problemas{background:#102033!important;color:#fff!important;}
      #problemas .section-head h2,#problemas .serv-head h2{color:#fff!important;}
      #problemas .section-head p,#problemas .serv-head p{color:#D3E0EC!important;}
      #problemas .card,#problemas .px-card,#problemas article{background:#fff!important;color:var(--px-ink)!important;}
      #problemas .card h3,#problemas .px-card h3,#problemas article h3{color:var(--px-navy)!important;}
      #problemas .card p,#problemas .px-card p,#problemas article p{color:var(--px-muted)!important;}

      /* Cases: no more vertical strip photos. Photos become horizontal, visible and comparable. */
      #casos-concretos{background:#F4F8FB!important;color:var(--px-ink)!important;padding-block:72px!important;}
      #casos-concretos .section-head h2,#casos-concretos .serv-head h2{color:var(--px-navy)!important;}
      #casos-concretos .section-head p,#casos-concretos .serv-head p{color:var(--px-muted)!important;}
      #casos-concretos .grid,#casos-concretos .praxys-grid,#casos-concretos .cases-grid,#casos-concretos .case-grid,#casos-concretos .px-cases-grid{
        display:grid!important;
        grid-template-columns:repeat(2,minmax(0,1fr))!important;
        gap:28px!important;
        align-items:stretch!important;
      }
      #casos-concretos article,#casos-concretos .case-card,#casos-concretos .px-case-card{
        display:flex!important;
        flex-direction:column!important;
        background:#fff!important;
        color:var(--px-ink)!important;
        border:1px solid rgba(16,32,51,.11)!important;
        border-radius:26px!important;
        overflow:hidden!important;
        box-shadow:0 18px 46px rgba(16,32,51,.09)!important;
        min-height:0!important;
      }
      #casos-concretos article > .photo:first-child,
      #casos-concretos article > figure:first-child,
      #casos-concretos .case-card > .photo:first-child,
      #casos-concretos .case-card > figure:first-child,
      #casos-concretos .px-case-card > .photo:first-child,
      #casos-concretos .px-case-card > figure:first-child{
        width:100%!important;
        height:auto!important;
        min-height:0!important;
        max-height:none!important;
        aspect-ratio:16/9!important;
        flex:0 0 auto!important;
        border-radius:0!important;
      }
      #casos-concretos .body,#casos-concretos .case-body,#casos-concretos .px-body{
        padding:24px!important;
        display:flex!important;
        flex-direction:column!important;
        gap:14px!important;
      }
      #casos-concretos h3{font-size:1.34rem!important;line-height:1.2!important;color:var(--px-navy)!important;font-weight:900!important;}
      #casos-concretos p{font-size:.98rem!important;line-height:1.6!important;color:var(--px-muted)!important;}
      #casos-concretos .mini,#casos-concretos .px-mini,#casos-concretos .case-mini{
        display:grid!important;
        grid-template-columns:1fr 1fr!important;
        gap:12px!important;
      }
      #casos-concretos .mini p,#casos-concretos .px-mini p,#casos-concretos .case-mini p{
        background:#F8FBFD!important;
        border:1px solid rgba(16,32,51,.10)!important;
        border-radius:16px!important;
        padding:14px!important;
        margin:0!important;
      }
      #casos-concretos strong,#casos-concretos .kicker,#casos-concretos .px-kicker{color:var(--px-orange)!important;}
      #casos-concretos .chip,#casos-concretos .chips span,#casos-concretos .px-chip-row span{
        background:rgba(232,99,42,.10)!important;
        color:#A9461D!important;
        border-radius:999px!important;
        font-size:.78rem!important;
        font-weight:850!important;
      }

      /* Buttons */
      .btn,.px-btn,.case-btn,button[data-open-case],button[data-open-service],.px-contact-btn,.btn-primary{
        background:var(--px-navy)!important;
        color:#fff!important;
        border-radius:999px!important;
        min-height:44px!important;
        font-size:.78rem!important;
        letter-spacing:.05em!important;
        font-weight:950!important;
      }
      .btn:hover,.px-btn:hover,.case-btn:hover,button[data-open-case]:hover,button[data-open-service]:hover,.px-contact-btn:hover,.btn-primary:hover{background:var(--px-orange)!important;}

      /* Publications reel */
      #articulos{background:#fff!important;}
      #articulos article,#articulos .px-paper{background:#fff!important;min-height:280px!important;}

      @media(max-width:1050px){
        #casos-concretos .grid,#casos-concretos .praxys-grid,#casos-concretos .cases-grid,#casos-concretos .case-grid,#casos-concretos .px-cases-grid{grid-template-columns:1fr!important;}
      }
      @media(max-width:720px){
        .section-head,.serv-head{text-align:left!important;margin-bottom:24px!important;}
        .section-head h2,.serv-head h2{font-size:clamp(1.85rem,9vw,2.55rem)!important;}
        #casos-concretos article > .photo:first-child,#casos-concretos article > figure:first-child,#casos-concretos .case-card > .photo:first-child,#casos-concretos .case-card > figure:first-child{aspect-ratio:16/10!important;}
        #casos-concretos .mini,#casos-concretos .px-mini,#casos-concretos .case-mini{grid-template-columns:1fr!important;}
      }
    `;
  }

  function setImages(selector, urls){
    const imgs=Array.from(document.querySelectorAll(selector));
    imgs.forEach((img,index)=>{
      const url=urls[index % urls.length];
      if(img.getAttribute('src')!==url){
        img.setAttribute('src',url);
        img.removeAttribute('srcset');
      }
      img.setAttribute('loading','lazy');
      img.setAttribute('decoding','async');
    });
  }

  function enforceUniquePhotos(){
    setImages('#problemas figure.photo img,#problemas .photo img',PHOTO_SETS.problemas);
    setImages('#servicios figure.photo img,#servicios .photo img',PHOTO_SETS.servicios);
    setImages('#casos-concretos figure.photo img,#casos-concretos .photo img',PHOTO_SETS.casos);
  }

  function run(){
    installStyles();
    enforceUniquePhotos();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run);
  else run();
  document.addEventListener('praxys:rendered',run);
  document.addEventListener('praxys:lang',run);
  window.addEventListener('load',run);
  setTimeout(run,250);
  setTimeout(run,900);
})();
