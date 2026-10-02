// Praxys visual audit — typography, color and readability normalization
(function(){
  const STYLE_ID = 'praxys-visual-audit-v1';
  function installVisualAudit(){
    let style = document.getElementById(STYLE_ID);
    if(!style){
      style = document.createElement('style');
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = `
      :root{
        --px-navy:#102033!important;
        --px-navy-2:#162B45!important;
        --px-ink:#213044!important;
        --px-muted:#53647A!important;
        --px-soft:#EFF5FA!important;
        --px-line:rgba(16,32,51,.13)!important;
        --px-orange:#E8632A!important;
        --px-amber:#F2C94C!important;
      }

      html{font-size:16px!important;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;}
      body{font-family:Inter,Manrope,Segoe UI,Arial,sans-serif!important;color:var(--px-ink)!important;background:#F7FAFC!important;line-height:1.6!important;}
      .wrap{width:min(1160px,calc(100% - 44px))!important;}

      .navbar{background:rgba(255,255,255,.96)!important;border-bottom:1px solid rgba(16,32,51,.12)!important;box-shadow:0 8px 22px rgba(16,32,51,.04)!important;}
      .nav-inner{min-height:70px!important;}
      .brand{font-size:1.02rem!important;color:var(--px-navy)!important;letter-spacing:.095em!important;}
      .nav-menu a{font-size:.88rem!important;font-weight:850!important;color:var(--px-ink)!important;}
      .nav-menu a:hover{color:var(--px-orange)!important;}
      .lang-btn{font-size:.82rem!important;color:var(--px-navy)!important;}
      .lang-btn.active{background:var(--px-navy)!important;color:#fff!important;}

      .hero{min-height:620px!important;background-position:center center!important;}
      .hero:after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(16,32,51,.93) 0%,rgba(16,32,51,.82) 38%,rgba(16,32,51,.46) 70%,rgba(16,32,51,.28) 100%)!important;}
      .hero .wrap{padding:92px 0!important;}
      .hero .eyebrow,.eyebrow{font-size:.78rem!important;letter-spacing:.18em!important;font-weight:950!important;color:var(--px-orange)!important;}
      .hero .eyebrow{color:var(--px-amber)!important;}
      .hero h1{max-width:860px!important;font-size:clamp(2.6rem,5.25vw,4.85rem)!important;line-height:.98!important;letter-spacing:-.048em!important;font-weight:850!important;color:#F5FAFF!important;text-wrap:balance!important;text-shadow:0 12px 30px rgba(0,0,0,.22)!important;}
      .hero-sub{max-width:760px!important;font-size:clamp(1.08rem,1.55vw,1.28rem)!important;line-height:1.6!important;color:#DCE8F5!important;font-weight:540!important;}
      .btn-primary,.px-contact-btn,.px-mid-inner a,.px-modal-cta{background:var(--px-orange)!important;color:#fff!important;font-size:.82rem!important;letter-spacing:.055em!important;font-weight:950!important;box-shadow:0 14px 28px rgba(232,99,42,.20)!important;}

      .praxys-section{padding:72px 0!important;}
      .serv-head{max-width:820px!important;margin-bottom:34px!important;}
      .serv-head h2{font-size:clamp(2.05rem,3.45vw,3.15rem)!important;line-height:1.05!important;letter-spacing:-.038em!important;color:var(--px-navy)!important;font-weight:850!important;text-wrap:balance!important;}
      .praxys-lead{font-size:1.08rem!important;line-height:1.65!important;color:var(--px-muted)!important;font-weight:520!important;}

      .px-card{border:1px solid rgba(16,32,51,.12)!important;border-radius:24px!important;box-shadow:0 20px 48px rgba(16,32,51,.08)!important;background:#fff!important;}
      .px-body{padding:22px!important;gap:12px!important;}
      .px-card h3{font-size:1.26rem!important;line-height:1.22!important;color:var(--px-navy)!important;font-weight:900!important;letter-spacing:-.018em!important;text-wrap:balance!important;}
      .px-card p{font-size:1rem!important;line-height:1.58!important;color:var(--px-muted)!important;font-weight:500!important;}
      .px-kicker{font-size:.74rem!important;letter-spacing:.12em!important;color:var(--px-orange)!important;font-weight:950!important;}
      .px-receive{background:#F4F8FB!important;border-color:rgba(16,32,51,.11)!important;padding:14px!important;}
      .px-receive strong{font-size:.72rem!important;color:var(--px-orange)!important;}
      .px-receive span{font-size:.95rem!important;color:var(--px-ink)!important;line-height:1.45!important;}
      .px-btn,.px-papers-toggle,.px-paper-arrow{background:var(--px-navy)!important;color:#fff!important;font-size:.78rem!important;font-weight:950!important;}
      .px-btn:hover,.px-paper-arrow:hover,.px-papers-toggle:hover{background:var(--px-orange)!important;}

      #problemas{background:linear-gradient(180deg,#102033 0%,#132944 100%)!important;}
      #problemas .serv-head h2,#problemas h2{color:#F5FAFF!important;}
      #problemas .praxys-lead{color:#CAD9EA!important;}
      #problemas .eyebrow{color:var(--px-amber)!important;}
      #problemas .px-card{background:rgba(255,255,255,.07)!important;border-color:rgba(242,201,76,.18)!important;box-shadow:none!important;}
      #problemas .px-card h3{color:#FFFFFF!important;}
      #problemas .px-card p{color:#D3E0EE!important;}

      #casos-concretos,#articulos{background:#F4F8FB!important;}
      .px-case-card{background:#fff!important;}
      .px-case-card h3{font-size:1.34rem!important;line-height:1.18!important;}
      .px-mini p{font-size:.96rem!important;background:#FAFCFE!important;}
      .px-mini strong{font-size:.72rem!important;color:var(--px-orange)!important;}
      .px-chip-row span{font-size:.78rem!important;background:rgba(232,99,42,.10)!important;color:#A9461D!important;}

      .px-method-grid .px-card,.px-step{background:#fff!important;}
      .px-step h3{font-size:1.18rem!important;}

      .px-paper-controls{margin-bottom:20px!important;}
      .px-paper-count{font-size:.9rem!important;color:var(--px-navy)!important;}
      .px-paper{min-height:310px!important;box-shadow:0 18px 42px rgba(16,32,51,.08)!important;}
      .px-paper h3{font-size:1.18rem!important;line-height:1.24!important;}
      .px-paper p{font-size:.96rem!important;line-height:1.55!important;}
      .px-link{font-size:.86rem!important;color:var(--px-orange)!important;}

      .px-mid-cta{background:linear-gradient(135deg,#102033,#1B3554)!important;}
      .px-mid-inner h2{font-size:clamp(1.72rem,2.7vw,2.35rem)!important;color:#fff!important;}
      .px-mid-inner p{font-size:1.03rem!important;color:#D4E1EF!important;line-height:1.6!important;}

      .contact-box p{font-size:1rem!important;color:var(--px-muted)!important;}

      .px-modal-content h2{font-size:clamp(1.85rem,3vw,2.65rem)!important;line-height:1.08!important;color:var(--px-navy)!important;}
      .px-modal-lead,.px-modal-content p{font-size:1.03rem!important;line-height:1.62!important;color:var(--px-muted)!important;}
      .px-modal-content h4{font-size:.76rem!important;color:var(--px-orange)!important;}

      @media(max-width:1050px){
        .px-problem-grid,.px-service-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
        .px-cases-grid{grid-template-columns:1fr!important;}
        .px-case-card{grid-template-columns:220px 1fr!important;}
        .px-method-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
        .px-paper{flex-basis:calc((100% - 20px)/2)!important;}
      }

      @media(max-width:720px){
        html{font-size:15.5px!important;}
        .wrap{width:min(100% - 30px,1160px)!important;}
        .nav-inner{min-height:auto!important;padding:16px 0!important;align-items:flex-start!important;}
        .nav-menu{gap:10px!important;justify-content:flex-end!important;flex-wrap:wrap!important;}
        .nav-menu a{font-size:.78rem!important;}
        .hero{min-height:560px!important;background-position:center top!important;}
        .hero .wrap{padding:72px 0!important;}
        .hero h1{font-size:clamp(2.28rem,12vw,3.45rem)!important;line-height:1.02!important;letter-spacing:-.04em!important;}
        .hero-sub{font-size:1.04rem!important;line-height:1.58!important;}
        .praxys-section{padding:54px 0!important;}
        .serv-head{text-align:left!important;margin-bottom:24px!important;}
        .serv-head h2{font-size:clamp(1.86rem,9vw,2.55rem)!important;}
        .praxys-lead{font-size:1rem!important;}
        .px-problem-grid,.px-service-grid,.px-method-grid{grid-template-columns:1fr!important;}
        .px-case-card{display:block!important;}
        .px-case-card .px-photo{height:210px!important;min-height:0!important;}
        .px-mini{grid-template-columns:1fr!important;}
        .px-mid-inner{display:block!important;}
        .px-mid-inner a{margin-top:20px!important;}
        .px-paper{flex-basis:88%!important;min-height:0!important;}
        .px-modal-box{display:block!important;max-height:88vh!important;}
        .px-modal-box .px-photo{height:230px!important;min-height:0!important;}
        .px-modal-content{padding:24px!important;}
      }
    `;
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installVisualAudit);
  else installVisualAudit();
  document.addEventListener('praxys:rendered', installVisualAudit);
})();
