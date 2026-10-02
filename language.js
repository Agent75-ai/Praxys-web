// Praxys language controller — no visual side effects
(function(){
  function normalize(lang){ return lang === 'en' ? 'en' : 'es'; }
  function applyStatic(lang){
    document.querySelectorAll('[data-es][data-en]').forEach(function(el){
      var value = el.getAttribute('data-' + lang);
      if(value !== null) el.innerHTML = value;
    });
  }
  function setLanguage(lang){
    lang = normalize(lang);
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    applyStatic(lang);
    document.querySelectorAll('.lang-btn').forEach(function(btn){
      btn.classList.toggle('active', btn.id === 'lang-' + lang);
    });
    document.dispatchEvent(new CustomEvent('praxys:language', { detail:{ lang:lang } }));
    if(window.PRAXYS && typeof window.PRAXYS.refresh === 'function') window.PRAXYS.refresh();
  }
  window.setLanguage = setLanguage;
  window.praxysLang = function(){ return normalize(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es'); };
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('lang-es')?.addEventListener('click', function(){ setLanguage('es'); });
    document.getElementById('lang-en')?.addEventListener('click', function(){ setLanguage('en'); });
    setLanguage(window.praxysLang());
  });
})();
