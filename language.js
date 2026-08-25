// Praxys language controller — clean, no visual overrides
(function(){
  function normalizeLang(lang){ return lang === 'en' ? 'en' : 'es'; }
  function currentLang(){ return normalizeLang(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es'); }
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
    document.querySelectorAll('.lang-btn').forEach(btn=>{
      const idLang = btn.id === 'lang-en' ? 'en' : 'es';
      btn.classList.toggle('active', idLang === lang);
      btn.setAttribute('aria-pressed', idLang === lang ? 'true' : 'false');
    });
    if(window.PRAXYS && typeof window.PRAXYS.refresh === 'function'){
      window.PRAXYS.refresh();
    }
    document.dispatchEvent(new CustomEvent('praxys:lang', { detail:{ lang } }));
  }

  window.setLanguage = setLanguage;
  window.praxysLang = currentLang;

  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('lang-es')?.addEventListener('click', function(){ setLanguage('es'); });
    document.getElementById('lang-en')?.addEventListener('click', function(){ setLanguage('en'); });
    setLanguage(currentLang());
  });
})();
