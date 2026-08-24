// Praxys language controller — lightweight only
(function(){
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
      window.requestAnimationFrame(()=>window.PRAXYS.refresh());
    }
  }
  window.setLanguage = setLanguage;
  window.praxysLang = function(){ return normalizeLang(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es'); };

  document.addEventListener('DOMContentLoaded', function(){
    const saved = normalizeLang(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es');
    document.getElementById('lang-es')?.addEventListener('click', function(){ setLanguage('es'); });
    document.getElementById('lang-en')?.addEventListener('click', function(){ setLanguage('en'); });
    setLanguage(saved);
  });
})();
