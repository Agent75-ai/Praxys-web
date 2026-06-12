const cfg = window.PRAXYS_CONFIG || {};
let content = null;
let lang = localStorage.getItem('praxys_lang') || 'es';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

async function loadContent(){
  const local = localStorage.getItem('praxys_content');
  if(local){ content = JSON.parse(local); return; }
  if(cfg.dataSource === 'supabase' && cfg.supabaseUrl && cfg.supabaseAnonKey){
    try{
      const client = supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
      const { data, error } = await client.from(cfg.supabaseTable || 'site_content').select('content').eq('id','main').single();
      if(!error && data?.content){ content = data.content; return; }
    }catch(e){ console.warn('Supabase fallback:', e); }
  }
  const res = await fetch('data.json', {cache:'no-store'});
  content = await res.json();
}

function t(path){
  return path.split('.').reduce((o,k)=>o?.[k], content);
}

function render(){
  const h = content.home[lang];
  document.documentElement.lang = lang;
  $$('[data-nav]').forEach(a => a.textContent = h.nav[Number(a.dataset.nav)]);
  $('#heroEyebrow').textContent = h.eyebrow;
  $('#heroTitle').textContent = h.title;
  $('#heroLead').textContent = h.lead;
  $('#heroTagline').textContent = h.tagline;
  $('#primaryCta').textContent = h.primaryCta;
  $('#secondaryCta').textContent = h.secondaryCta;
  $('#servicesTitle').textContent = h.servicesTitle;
  $('#servicesLead').textContent = h.servicesLead;
  $('#methodTitle').textContent = h.methodTitle;
  $('#methodLead').textContent = h.methodLead;
  $('#researchTitle').textContent = h.researchTitle;
  $('#researchLead').textContent = h.researchLead;
  $('#aboutTitle').textContent = h.aboutTitle;
  $('#aboutBody').textContent = h.aboutBody;
  $('#contactTitle').textContent = h.contactTitle;
  $('#contactLead').textContent = h.contactLead;
  $('#footerPhrase').textContent = h.footerPhrase;

  $('#linkedin').href = content.site.linkedin;
  $('#researchgate').href = content.site.researchgate;
  $('#emailLink').href = `mailto:${content.site.email}`;
  $('#emailLink').textContent = content.site.email;
  $('#phoneLink').href = `tel:${content.site.phone.replaceAll(' ','')}`;
  $('#phoneLink').textContent = content.site.phone;

  $('#servicesGrid').innerHTML = content.services.map(s => `
    <article class="service-card">
      <div><div class="service-icon">${s.icon}</div><h3>${s[lang].title}</h3><div class="kicker">${s[lang].kicker}</div></div>
      <p>${s[lang].body}</p>
    </article>`).join('');

  $('#methodFlow').innerHTML = content.method.map((m,i)=>`<div class="step"><span>0${i+1}</span>${m[lang]}</div>`).join('');

  $('#articlesGrid').innerHTML = content.articles.map(a=>`<article class="article"><time>${a.date}</time><h3>${a[lang].title}</h3><p>${a[lang].body}</p></article>`).join('');

  $$('.lang').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  fillEditor();
}

function fillEditor(){
  if(!content) return;
  const editLang = $('#editLang')?.value || lang;
  if($('#editHeroTitle')) $('#editHeroTitle').value = content.home[editLang].title;
  if($('#editHeroLead')) $('#editHeroLead').value = content.home[editLang].lead;
  if($('#editServices')) $('#editServices').value = JSON.stringify(content.services, null, 2);
}

async function saveToSupabase(){
  if(cfg.dataSource !== 'supabase' || !cfg.supabaseUrl || !cfg.supabaseAnonKey) return false;
  const client = supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
  const { error } = await client.from(cfg.supabaseTable || 'site_content').upsert({ id:'main', content, updated_at:new Date().toISOString() });
  if(error) throw error;
  return true;
}

function wire(){
  $$('.lang').forEach(b => b.addEventListener('click', () => { lang=b.dataset.lang; localStorage.setItem('praxys_lang',lang); render(); }));
  $('#hamb').addEventListener('click', () => document.body.classList.toggle('mobile-open'));
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('mobile-open')));
  window.addEventListener('scroll', () => $('#nav').classList.toggle('scrolled', scrollY > 30));

  $('#adminOpen').addEventListener('click', () => { $('#adminModal').showModal(); $('#loginBox').hidden=false; $('#editorBox').hidden=true; });
  $('#adminClose').addEventListener('click', () => $('#adminModal').close());
  $('#loginBtn').addEventListener('click', () => {
    const ok = $('#adminUser').value === (cfg.adminUser || 'praxys') && $('#adminPass').value === (cfg.adminPassword || 'Praxys2026!');
    if(!ok){ $('#loginMsg').textContent = 'Usuario o contraseña incorrectos.'; return; }
    $('#loginBox').hidden=true; $('#editorBox').hidden=false; fillEditor();
  });
  $('#editLang').addEventListener('change', fillEditor);
  $('#saveLocal').addEventListener('click', async () => {
    const editLang = $('#editLang').value;
    content.home[editLang].title = $('#editHeroTitle').value.trim();
    content.home[editLang].lead = $('#editHeroLead').value.trim();
    try{ content.services = JSON.parse($('#editServices').value); }catch(e){ alert('El JSON de servicios tiene un error.'); return; }
    localStorage.setItem('praxys_content', JSON.stringify(content));
    try{ await saveToSupabase(); }catch(e){ alert('Guardado local correcto. Error Supabase: '+e.message); }
    render(); alert('Contenido guardado.');
  });
  $('#exportJson').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(content,null,2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='data.json'; a.click(); URL.revokeObjectURL(url);
  });
  $('#resetLocal').addEventListener('click', () => { localStorage.removeItem('praxys_content'); location.reload(); });
}

loadContent().then(()=>{ wire(); render(); }).catch(err=>{
  document.body.innerHTML = `<main style="padding:40px;font-family:Arial"><h1>Error cargando contenido</h1><p>${err.message}</p></main>`;
});
