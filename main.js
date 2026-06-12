const DEFAULT_DATA_URL = 'data.json';
let siteData = null;
let currentLang = localStorage.getItem('praxys_lang') || 'es';

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

async function boot(){
  const local = localStorage.getItem('praxys_data');
  if(local){
    try{ siteData = JSON.parse(local); } catch { siteData = null; }
  }
  if(!siteData){
    const res = await fetch(DEFAULT_DATA_URL, {cache:'no-store'});
    siteData = await res.json();
  }
  bindUI();
  renderAll();
}

function t(key){ return siteData?.i18n?.[currentLang]?.[key] ?? key; }
function localize(obj){ return typeof obj === 'object' ? (obj[currentLang] || obj.es || '') : obj; }

function bindUI(){
  $('#menuBtn')?.addEventListener('click',()=>$('#nav').classList.toggle('open'));
  $$('.lang').forEach(btn=>btn.addEventListener('click',()=>{
    currentLang = btn.dataset.lang;
    localStorage.setItem('praxys_lang', currentLang);
    renderAll();
  }));
  $('#adminOpen')?.addEventListener('click',()=> openAdmin());
  $('#adminLogin')?.addEventListener('submit', adminLogin);
  $('#closeEditor')?.addEventListener('click',()=>$('#adminModal').close());
  $('#saveJson')?.addEventListener('click', saveJson);
  $('#downloadJson')?.addEventListener('click', downloadJson);
  $('#resetJson')?.addEventListener('click', resetJson);
}

function renderAll(){
  document.documentElement.lang = currentLang;
  $$('.lang').forEach(b=>b.classList.toggle('active', b.dataset.lang===currentLang));
  $$('[data-i18n]').forEach(el=> el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-html]').forEach(el=> el.innerHTML = t(el.dataset.i18nHtml));
  renderServices();
  renderValues();
  renderArticles();
  renderBadges();
  renderContact();
}

function renderServices(){
  const risk = siteData.services.filter(s=>s.group==='risk');
  const support = siteData.services.filter(s=>s.group==='support');
  $('#riskServices').innerHTML = risk.map(serviceCard).join('');
  $('#supportServices').innerHTML = support.map(serviceCard).join('');
}

function serviceCard(s){
  const keys = localize(s.keywords).map(k=>`<span>${escapeHtml(k)}</span>`).join('<span class="dot">•</span>');
  return `<article class="service-card">
    <div class="num">${s.id}</div>
    ${iconSvg(s.icon)}
    <h3>${escapeHtml(localize(s.title))}</h3>
    <p>${keys}</p>
  </article>`;
}

function renderValues(){
  $('#valueStrip').innerHTML = siteData.values.map(v=>`<div class="value-item"><div class="value-icon">${v.icon}</div><div><h3>${escapeHtml(localize(v.title))}</h3><p>${escapeHtml(localize(v.text))}</p></div></div>`).join('');
}

function renderArticles(){
  $('#articleList').innerHTML = siteData.articles.map(a=>`<article class="article-card"><img src="${a.image}" alt=""><div><h3>${escapeHtml(localize(a.title))}</h3><p>${escapeHtml(localize(a.text))}</p><a href="${a.url}">${currentLang==='es'?'Leer artículo':'Read article'} →</a></div></article>`).join('');
}

function renderBadges(){
  $('#badges').innerHTML = siteData.badges.map(b=>`<div class="badge"><span>${b.icon}</span>${escapeHtml(localize(b.label))}</div>`).join('');
}

function renderContact(){
  const c = siteData.contact;
  $('#emailLink').textContent = c.email;
  $('#emailLink').href = `mailto:${c.email}`;
  $('#locationText').textContent = localize(c.location);
  $('#linkedin').href = c.linkedin;
  $('#researchgate').href = c.researchgate;
}

function iconSvg(name){
  const common = `class="icon" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#071b46" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`;
  const orange = '#ff5a13';
  const navy = '#071b46';
  const icons = {
    'shield-people': `<svg ${common}><path d="M60 8l35 13v20c0 23-14 35-35 43-21-8-35-20-35-43V21z"/><path d="M48 40l9 9 18-21" stroke="${orange}"/><circle cx="28" cy="70" r="10"/><path d="M12 88c3-13 28-13 32 0"/><circle cx="92" cy="70" r="10"/><path d="M76 88c3-13 28-13 32 0"/></svg>`,
    'bank-shield': `<svg ${common}><path d="M15 35h55M22 35v35M38 35v35M54 35v35M15 73h58M12 82h65"/><path d="M13 31l30-18 30 18z" fill="${navy}"/><path d="M82 38l25 9v15c0 14-9 21-25 27-16-6-25-13-25-27V47z" fill="#fff"/><path d="M73 60l8 8 16-21" stroke="${orange}"/></svg>`,
    'root-cause': `<svg ${common}><circle cx="55" cy="42" r="28"/><path d="M77 64l27 20"/><path d="M37 55V38h10v17M53 55V28h10v27M69 55V18h10v37"/><path d="M83 26l8-14 8 14z" stroke="${orange}"/><path d="M91 32v2" stroke="${orange}"/></svg>`,
    'fmea': `<svg ${common}><rect x="25" y="8" width="62" height="74" rx="4"/><path d="M43 7h26v12H43z" fill="#fff"/><path d="M42 30l7 7 12-15M42 50l7 7 12-15M42 70l7 7 12-15M70 32h20M70 52h20M70 72h20"/><circle cx="90" cy="62" r="18" stroke="${orange}"/><path d="M90 50v24M78 62h24" stroke="${orange}"/></svg>`,
    'ai': `<svg ${common}><rect x="38" y="22" width="45" height="45" rx="3" fill="${orange}" stroke="${orange}"/><text x="47" y="55" font-family="Arial" font-size="27" font-weight="800" fill="#fff" stroke="none">AI</text><path d="M20 30h18M20 45h18M20 60h18M83 30h18M83 45h18M83 60h18M47 5v17M61 5v17M75 5v17M47 67v17M61 67v17M75 67v17"/><circle cx="18" cy="30" r="3"/><circle cx="18" cy="45" r="3"/><circle cx="18" cy="60" r="3"/><circle cx="103" cy="30" r="3"/><circle cx="103" cy="45" r="3"/><circle cx="103" cy="60" r="3"/></svg>`,
    'simulation': `<svg ${common}><path d="M22 52c-7-20 6-37 25-41M85 21c17 9 22 31 11 47M43 78c20 9 41 0 50-17"/><path d="M45 10l7 13h-16M101 64l-15-1 9 13M40 76l14-7-2 16"/><path d="M40 48h34v24H40z" fill="${navy}"/><path d="M75 39l12 8-12 8z" fill="${orange}" stroke="${orange}"/><circle cx="92" cy="18" r="9" stroke="${orange}"/><path d="M92 5v26M79 18h26" stroke="${orange}"/></svg>`,
    'training': `<svg ${common}><rect x="23" y="14" width="74" height="52" rx="4"/><circle cx="49" cy="42" r="10" fill="${navy}"/><path d="M32 61c5-15 29-15 34 0" fill="${navy}"/><circle cx="80" cy="40" r="16" fill="${orange}" stroke="${orange}"/><path d="M76 31l14 9-14 9z" fill="#fff" stroke="#fff"/><path d="M48 66v16h24V66"/></svg>`
  };
  return icons[name] || icons['shield-people'];
}

function openAdmin(){
  $('#adminLogin').classList.remove('hidden');
  $('#adminEditor').classList.add('hidden');
  $('#adminModal').showModal();
}
function adminLogin(e){
  e.preventDefault();
  const cfg = window.PRAXYS_CONFIG || {};
  if($('#adminUser').value===cfg.adminUser && $('#adminPass').value===cfg.adminPass){
    $('#adminLogin').classList.add('hidden');
    $('#adminEditor').classList.remove('hidden');
    $('#jsonEditor').value = JSON.stringify(siteData,null,2);
    $('#loginMsg').textContent='';
  } else $('#loginMsg').textContent='Usuario o contraseña incorrectos.';
}
function saveJson(){
  try{
    siteData = JSON.parse($('#jsonEditor').value);
    localStorage.setItem('praxys_data', JSON.stringify(siteData));
    renderAll();
    alert('Contenido guardado en este navegador. Descargá data.json para subirlo a GitHub.');
  }catch(err){ alert('JSON inválido: '+err.message); }
}
function downloadJson(){
  const blob = new Blob([JSON.stringify(siteData,null,2)],{type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download='data.json'; a.click(); URL.revokeObjectURL(a.href);
}
async function resetJson(){
  localStorage.removeItem('praxys_data');
  const res = await fetch(DEFAULT_DATA_URL, {cache:'no-store'});
  siteData = await res.json();
  $('#jsonEditor').value = JSON.stringify(siteData,null,2);
  renderAll();
}
function escapeHtml(str=''){ return String(str).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

boot();
