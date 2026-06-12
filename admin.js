const ADMIN_PASSWORD = "Praxys2025!";

// Etiquetas legibles para cada campo de texto editable
const TEXT_LABELS = {
  hero_h1:"Hero — Título", hero_sub:"Hero — Subtítulo",
  serv_h2:"Servicios — Título",
  s1_h3:"Servicio 1 — Título", s1_m:"Servicio 1 — Método", s1_p:"Servicio 1 — Descripción",
  s2_h3:"Servicio 2 — Título", s2_m:"Servicio 2 — Método", s2_p:"Servicio 2 — Descripción",
  s3_h3:"Servicio 3 — Título", s3_m:"Servicio 3 — Método", s3_p:"Servicio 3 — Descripción",
  s4_h3:"Servicio 4 — Título", s4_m:"Servicio 4 — Método", s4_p:"Servicio 4 — Descripción",
  s5_h3:"Servicio 5 — Título", s5_m:"Servicio 5 — Método", s5_p:"Servicio 5 — Descripción",
  s6_h3:"Servicio 6 — Título", s6_m:"Servicio 6 — Método", s6_p:"Servicio 6 — Descripción",
  s7_h3:"Servicio 7 — Título", s7_m:"Servicio 7 — Método", s7_p:"Servicio 7 — Descripción",
  about_h2:"Quiénes Somos — Título", about_p:"Quiénes Somos — Texto"
};
const IMG_LABELS = {
  hero:"Hero — Fondo montañas",
  s1:"Servicio 1 — Gestión del Riesgo", s2:"Servicio 2 — Gobernanza", s3:"Servicio 3 — Causa Raíz",
  s4:"Servicio 4 — FMEA", s5:"Servicio 5 — Analítica e IA", s6:"Servicio 6 — Optimización",
  s7:"Servicio 7 — Capacitaciones", about:"Quiénes Somos — Foto"
};

document.addEventListener('DOMContentLoaded', function(){
  reloadArticles();
  document.getElementById('admin-toggle')?.addEventListener('click', ()=> document.getElementById('login-modal').style.display='flex');
  document.getElementById('admin-close-btn')?.addEventListener('click', ()=>{ document.getElementById('login-modal').style.display='none'; document.getElementById('login-error').textContent=''; });
  document.getElementById('admin-login-btn')?.addEventListener('click', ()=>{
    if(document.getElementById('admin-password').value === ADMIN_PASSWORD){
      document.getElementById('login-modal').style.display='none';
      document.getElementById('admin-panel').style.display='block';
      document.getElementById('admin-password').value='';
      document.getElementById('login-error').textContent='';
      buildTextFields(); buildImageFields(); loadAdmin();
    } else { document.getElementById('login-error').textContent='Contraseña incorrecta'; }
  });
  document.getElementById('admin-logout-btn')?.addEventListener('click', ()=> document.getElementById('admin-panel').style.display='none');

  // Pestañas
  document.querySelectorAll('.atab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.atab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.apane').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    document.getElementById('pane-'+t.getAttribute('data-tab')).classList.add('active');
  }));

  document.getElementById('a-add')?.addEventListener('click', addArticle);
  document.getElementById('export-btn')?.addEventListener('click', exportContent);
  document.getElementById('reset-btn')?.addEventListener('click', resetLocal);
});

function getLocal(){ return JSON.parse(localStorage.getItem('praxys_content') || '{"texts":{},"images":{}}'); }
function setLocal(o){ localStorage.setItem('praxys_content', JSON.stringify(o)); }

// ---------- TEXTOS ----------
function buildTextFields(){
  const wrap = document.getElementById('text-fields'); wrap.innerHTML='';
  const loc = getLocal();
  Object.keys(TEXT_LABELS).forEach(key=>{
    const el = document.querySelector('[data-edit="'+key+'"]');
    if(!el) return;
    const es = (loc.texts[key]&&loc.texts[key].es) ?? el.getAttribute('data-es') ?? '';
    const en = (loc.texts[key]&&loc.texts[key].en) ?? el.getAttribute('data-en') ?? '';
    const long = key.endsWith('_p')||key==='hero_sub';
    const box = document.createElement('div'); box.className='efield';
    box.innerHTML = '<label>'+TEXT_LABELS[key]+'</label>'+
      '<span class="sub">Español</span>'+(long?'<textarea rows="3" data-k="'+key+'" data-l="es"></textarea>':'<input type="text" data-k="'+key+'" data-l="es">')+
      '<span class="sub">English</span>'+(long?'<textarea rows="3" data-k="'+key+'" data-l="en"></textarea>':'<input type="text" data-k="'+key+'" data-l="en">');
    wrap.appendChild(box);
    box.querySelector('[data-l="es"]').value = es;
    box.querySelector('[data-l="en"]').value = en;
  });
  wrap.querySelectorAll('input,textarea').forEach(inp=>{
    inp.addEventListener('input', ()=>{
      const k=inp.getAttribute('data-k'), l=inp.getAttribute('data-l');
      const loc=getLocal(); loc.texts[k]=loc.texts[k]||{}; loc.texts[k][l]=inp.value; setLocal(loc);
      window.PRAXYS.local=loc; window.PRAXYS.apply();
    });
  });
}

// ---------- IMÁGENES ----------
function buildImageFields(){
  const wrap=document.getElementById('img-fields'); wrap.innerHTML='';
  const loc=getLocal();
  Object.keys(IMG_LABELS).forEach(key=>{
    const el=document.querySelector('[data-img="'+key+'"]'); if(!el)return;
    const cur = (loc.images[key]) || el.src;
    const box=document.createElement('div'); box.className='efield imgfield';
    box.innerHTML='<label>'+IMG_LABELS[key]+'</label>'+
      '<div class="imgrow"><img class="thumb" src="'+cur+'" alt=""><div class="imgctrl">'+
      '<input type="text" placeholder="Pegar URL de imagen" data-imgk="'+key+'" value="">'+
      '<label class="upload">📁 Subir foto<input type="file" accept="image/*" data-upk="'+key+'" hidden></label>'+
      '</div></div>';
    wrap.appendChild(box);
  });
  // URL
  wrap.querySelectorAll('input[data-imgk]').forEach(inp=>{
    inp.addEventListener('input',()=>{
      const k=inp.getAttribute('data-imgk'); const v=inp.value.trim(); if(!v)return;
      const loc=getLocal(); loc.images[k]=v; setLocal(loc);
      window.PRAXYS.local=loc; window.PRAXYS.apply();
      const th=inp.closest('.imgfield').querySelector('.thumb'); th.src=v;
    });
  });
  // Subir archivo -> base64
  wrap.querySelectorAll('input[data-upk]').forEach(inp=>{
    inp.addEventListener('change',()=>{
      const k=inp.getAttribute('data-upk'); const f=inp.files[0]; if(!f)return;
      if(f.size>1500000){ alert('La imagen es muy pesada (máx ~1.5MB). Usá una más liviana o pegá una URL.'); return; }
      const rd=new FileReader();
      rd.onload=()=>{
        const loc=getLocal(); loc.images[k]=rd.result; setLocal(loc);
        window.PRAXYS.local=loc; window.PRAXYS.apply();
        inp.closest('.imgfield').querySelector('.thumb').src=rd.result;
      };
      rd.readAsDataURL(f);
    });
  });
}

// ---------- ARTÍCULOS ----------
function addArticle(){
  const t=v('a-title'),au=v('a-author'),l=v('a-link'),d=v('a-date'),de=v('a-desc');
  if(!t||!au||!l||!d){ alert('Completá título, autor, URL y fecha'); return; }
  const arr=getArts(); arr.push({id:Date.now(),title:t,author:au,link:l,date:d,desc:de});
  localStorage.setItem('praxys_articles',JSON.stringify(arr));
  ['a-title','a-author','a-link','a-date','a-desc'].forEach(id=>document.getElementById(id).value='');
  loadAdmin(); reloadArticles(); alert('Artículo agregado');
}
function v(id){return document.getElementById(id).value.trim();}
function getArts(){return JSON.parse(localStorage.getItem('praxys_articles')||'[]');}
function reloadArticles(){
  const c=document.getElementById('articles-container'); if(!c)return;
  const arr=getArts(); const lang=localStorage.getItem('selectedLanguage')||'es';
  const readTxt=lang==='en'?'Read more →':'Leer más →';
  if(!arr.length){ c.innerHTML='<div class="articles-empty"><p>'+(lang==='en'?'Coming soon...':'Próximamente...')+'</p></div>'; return; }
  c.innerHTML='';
  arr.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).forEach(a=>{
    const d=document.createElement('div'); d.className='article-card';
    const df=new Date(a.date+'T00:00:00').toLocaleDateString(lang==='en'?'en-US':'es-ES',{year:'numeric',month:'short'});
    d.innerHTML='<div class="ah"><h3>'+esc(a.title)+'</h3><span class="ad">'+df+'</span></div><p class="au">'+esc(a.author)+'</p><p>'+esc(a.desc)+'</p><a class="read" href="'+encodeURI(a.link)+'" target="_blank" rel="noopener">'+readTxt+'</a>';
    c.appendChild(d);
  });
}
window.reloadArticles=reloadArticles;
function loadAdmin(){
  const c=document.getElementById('a-list'); if(!c)return; const arr=getArts(); c.innerHTML='';
  if(!arr.length){ c.innerHTML='<p style="color:#8a98ad;font-size:.88rem">No hay artículos aún.</p>'; return; }
  arr.forEach(a=>{
    const d=document.createElement('div'); d.className='admin-item';
    d.innerHTML='<div><h4>'+esc(a.title)+'</h4><p>'+esc(a.author)+' — '+a.date+'</p></div><button class="del-btn">Eliminar</button>';
    d.querySelector('.del-btn').addEventListener('click',()=>{ if(confirm('¿Eliminar?')){ const n=getArts().filter(x=>x.id!==a.id); localStorage.setItem('praxys_articles',JSON.stringify(n)); loadAdmin(); reloadArticles(); } });
    c.appendChild(d);
  });
}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

// ---------- EXPORTAR ----------
function exportContent(){
  const loc=getLocal();
  const out={ texts: loc.texts||{}, images: loc.images||{}, articles: getArts() };
  const blob=new Blob([JSON.stringify(out,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='content.json';
  document.body.appendChild(a); a.click(); a.remove();
}
function resetLocal(){
  if(confirm('Esto borra tus cambios locales no publicados. ¿Continuar?')){
    localStorage.removeItem('praxys_content');
    window.PRAXYS.local={texts:{},images:{}};
    location.reload();
  }
}
