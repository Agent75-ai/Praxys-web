// Praxys language controller — lightweight only
(function(){
  const CASE_PHOTO_AUDIT = {
    'combined-risk-diagnosis': {
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=72',
      es: 'Análisis causal entre áreas',
      en: 'Cross-area causal analysis'
    },
    'action-resource-prioritization': {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=72',
      es: 'Priorización de acciones',
      en: 'Action prioritization'
    },
    'decision-scenario-assessment': {
      src: 'https://images.unsplash.com/photo-1767706508497-a747426a7e14?auto=format&fit=crop&w=900&q=72',
      es: 'Escenarios de inversión y operación',
      en: 'Investment and operation scenarios'
    },
    'recurring-events-investigation': {
      src: 'https://images.unsplash.com/photo-1780752849375-fd8df4632dae?auto=format&fit=crop&w=900&q=72',
      es: 'Recurrencia en operación crítica',
      en: 'Recurrence in critical operation'
    },
    'governance-followup-design': {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=72',
      es: 'Seguimiento ejecutivo',
      en: 'Executive follow-up'
    },
    'executive-training-transfer': {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=72',
      es: 'Criterios comunes de trabajo',
      en: 'Shared working criteria'
    }
  };

  function normalizeLang(lang){ return lang === 'en' ? 'en' : 'es'; }
  function applyStaticLanguage(lang){
    document.querySelectorAll('[data-es][data-en]').forEach(el=>{
      const value = el.getAttribute('data-' + lang);
      if(value !== null) el.innerHTML = value;
    });
  }
  function setLanguage(lang){
    lang = normalizeLang(lang);
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    applyStaticLanguage(lang);
    document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.id === 'lang-' + lang));
    if(window.reloadArticles) window.reloadArticles();
    document.dispatchEvent(new CustomEvent('praxys:lang', { detail:{ lang } }));
    if(window.PRAXYS && typeof window.PRAXYS.refresh === 'function'){
      window.requestAnimationFrame(()=>{
        window.PRAXYS.refresh();
        scheduleCasePhotoAudit();
      });
    } else {
      scheduleCasePhotoAudit();
    }
  }
  function applyCasePhotoAudit(){
    const lang = normalizeLang(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es');
    Object.keys(CASE_PHOTO_AUDIT).forEach(id=>{
      const cfg = CASE_PHOTO_AUDIT[id];
      const card = document.getElementById('case-' + id);
      if(!card) return;
      const img = card.querySelector('.px-photo img, img[data-praxys-photo], img');
      if(!img) return;
      if(img.getAttribute('src') !== cfg.src) img.setAttribute('src', cfg.src);
      img.setAttribute('alt', cfg[lang] || cfg.es);
      img.setAttribute('loading', 'lazy');
      const fig = img.closest('figure');
      if(fig){
        fig.setAttribute('data-photo-audit', id);
        fig.classList.add('px-audited-case-photo');
      }
    });
  }
  let photoTimer = null;
  function scheduleCasePhotoAudit(){
    clearTimeout(photoTimer);
    window.requestAnimationFrame(applyCasePhotoAudit);
    photoTimer = setTimeout(applyCasePhotoAudit, 120);
    setTimeout(applyCasePhotoAudit, 700);
  }

  window.setLanguage = setLanguage;
  window.praxysLang = function(){ return normalizeLang(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es'); };
  window.praxysAuditCasePhotos = scheduleCasePhotoAudit;

  document.addEventListener('praxys:rendered', scheduleCasePhotoAudit);
  document.addEventListener('DOMContentLoaded', function(){
    const saved = normalizeLang(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es');
    document.getElementById('lang-es')?.addEventListener('click', function(){ setLanguage('es'); });
    document.getElementById('lang-en')?.addEventListener('click', function(){ setLanguage('en'); });
    setLanguage(saved);
    scheduleCasePhotoAudit();
  });
  window.addEventListener('load', scheduleCasePhotoAudit);
})();
