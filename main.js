// Menú móvil
const t=document.getElementById('nav-toggle'),m=document.getElementById('nav-menu');
if(t){t.addEventListener('click',()=>{t.classList.toggle('open');m.classList.toggle('open');});
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{t.classList.remove('open');m.classList.remove('open');}));}
// Reveal
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){
  const o=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i%4,3)*.08)+'s';o.observe(el);});
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));}
