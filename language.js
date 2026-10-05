// Praxys language controller — side-effect free
(function(){
  'use strict';

  function normalize(lang){ return lang === 'en' ? 'en' : 'es'; }

  function setLanguage(lang){
    lang = normalize(lang);
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.id === 'lang-' + lang));
    document.dispatchEvent(new CustomEvent('praxys:lang', { detail:{ lang } }));
  }

  window.setLanguage = setLanguage;
  window.praxysLang = function(){ return normalize(localStorage.getItem('selectedLanguage') || document.documentElement.lang || 'es'); };

  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('lang-es')?.addEventListener('click', function(){ setLanguage('es'); });
    document.getElementById('lang-en')?.addEventListener('click', function(){ setLanguage('en'); });
    setLanguage(window.praxysLang());
  });
})();
