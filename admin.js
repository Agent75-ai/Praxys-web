const ADMIN_PASSWORD="Praxys2025!";
document.addEventListener('DOMContentLoaded',function(){
  reloadArticles();
  document.getElementById('admin-toggle')?.addEventListener('click',()=>document.getElementById('login-modal').style.display='flex');
  document.getElementById('admin-close-btn')?.addEventListener('click',()=>{document.getElementById('login-modal').style.display='none';document.getElementById('login-error').textContent='';});
  document.getElementById('admin-login-btn')?.addEventListener('click',()=>{
    if(document.getElementById('admin-password').value===ADMIN_PASSWORD){
      document.getElementById('login-modal').style.display='none';
      document.getElementById('admin-panel').style.display='block';
      document.getElementById('admin-password').value='';
      document.getElementById('login-error').textContent='';
      loadAdmin();
    }else{document.getElementById('login-error').textContent='Contraseña incorrecta';}
  });
  document.getElementById('admin-logout-btn')?.addEventListener('click',()=>document.getElementById('admin-panel').style.display='none');
  document.getElementById('a-add')?.addEventListener('click',addArticle);
});
function addArticle(){
  const t=v('a-title'),au=v('a-author'),l=v('a-link'),d=v('a-date'),de=v('a-desc');
  if(!t||!au||!l||!d){alert('Completá título, autor, URL y fecha');return;}
  const arr=get();arr.push({id:Date.now(),title:t,author:au,link:l,date:d,desc:de});
  localStorage.setItem('praxys_articles',JSON.stringify(arr));
  ['a-title','a-author','a-link','a-date','a-desc'].forEach(id=>document.getElementById(id).value='');
  loadAdmin();reloadArticles();alert('Artículo agregado');
}
function v(id){return document.getElementById(id).value.trim();}
function get(){return JSON.parse(localStorage.getItem('praxys_articles')||'[]');}
function reloadArticles(){
  const c=document.getElementById('articles-container');if(!c)return;
  const arr=get();
  const lang=localStorage.getItem('selectedLanguage')||'es';
  const readTxt=lang==='en'?'Read more →':'Leer más →';
  if(!arr.length){c.innerHTML='<div class="articles-empty"><p>'+(lang==='en'?'Coming soon...':'Próximamente...')+'</p></div>';return;}
  c.innerHTML='';
  arr.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).forEach(a=>{
    const d=document.createElement('div');d.className='article-card';
    const df=new Date(a.date+'T00:00:00').toLocaleDateString(lang==='en'?'en-US':'es-ES',{year:'numeric',month:'short'});
    d.innerHTML='<div class="ah"><h3>'+esc(a.title)+'</h3><span class="ad">'+df+'</span></div><p class="au">'+esc(a.author)+'</p><p>'+esc(a.desc)+'</p><a class="read" href="'+encodeURI(a.link)+'" target="_blank" rel="noopener">'+readTxt+'</a>';
    c.appendChild(d);
  });
}
window.reloadArticles=reloadArticles;
function loadAdmin(){
  const c=document.getElementById('a-list');if(!c)return;const arr=get();c.innerHTML='';
  if(!arr.length){c.innerHTML='<p style="color:#8a98ad;font-size:.88rem">No hay artículos aún.</p>';return;}
  arr.forEach(a=>{
    const d=document.createElement('div');d.className='admin-item';
    d.innerHTML='<div><h4>'+esc(a.title)+'</h4><p>'+esc(a.author)+' — '+a.date+'</p></div><button class="del-btn">Eliminar</button>';
    d.querySelector('.del-btn').addEventListener('click',()=>{if(confirm('¿Eliminar?')){const n=get().filter(x=>x.id!==a.id);localStorage.setItem('praxys_articles',JSON.stringify(n));loadAdmin();reloadArticles();}});
    c.appendChild(d);
  });
}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
