const ADMIN_USER = "praxys";
const ADMIN_PASS = "Praxys2026!";
const STORAGE_KEY = "praxys_site_content_v2";

const defaultContent = {
  es: {
    "nav.services":"Servicios","nav.why":"Por qué Praxys","nav.capabilities":"Capacidades","nav.articles":"Artículos y Papers","nav.about":"Quiénes somos","nav.contact":"Contacto",
    "net.complex":"SISTEMAS COMPLEJOS","net.decisions":"DECISIONES","net.resilience":"RESILIENCIA","net.data":"DATOS","net.risks":"RIESGOS",
    "hero.eyebrow":"Consultoría integral del riesgo","hero.title":"Abordamos problemas organizacionales <span>complejos</span>","hero.lead":"Integramos modelado, simulación, analítica avanzada, inteligencia artificial y gestión sistémica del riesgo para fortalecer decisiones estratégicas.","hero.cta1":"Explorar servicios","hero.cta2":"Contactar",
    "services.eyebrow":"Nuestros servicios","services.title":"Decisiones <span>inteligentes</span> para entornos complejos.",
    "s1.title":"Optimización, modelado y simulación de procesos","s1.desc":"Mejoramos eficiencia, calidad y sostenibilidad.",
    "s2.title":"Analítica avanzada e inteligencia artificial","s2.desc":"Convertimos datos en decisiones accionables.",
    "s3.title":"Integración sistémica del riesgo","s3.desc":"Integramos riesgos para fortalecer decisiones.",
    "s4.title":"Análisis de causa raíz de accidentes e incidentes","s4.desc":"Identificamos causas y prevenimos recurrencias.",
    "s5.title":"FMEA / AMFE","s5.desc":"Evaluamos fallas y priorizamos acciones.",
    "s6.title":"Gobernanza, cumplimiento y cultura de seguridad","s6.desc":"Fortalecemos desempeño y resiliencia.",
    "s7.title":"Capacitaciones online y presenciales","s7.desc":"Formación práctica con impacto organizacional.",
    "why.eyebrow":"¿Por qué Praxys?","why.title":"Conocimiento. Seguridad. <span>Resultados.</span>",
    "why.knowledge.title":"Conocimiento","why.knowledge.desc":"Doctorado, MBA, investigación aplicada y publicaciones.",
    "why.safety.title":"Seguridad","why.safety.desc":"HRO, Safety Management, Root Cause Analysis y Governance.",
    "why.results.title":"Resultados","why.results.desc":"Modelado, simulación, IA y optimización.",
    "cap.eyebrow":"Nuestras capacidades","cap.title":"Metodologías probadas. Visión sistémica.","cap.m1":"System Dynamics","cap.m2":"Network Analysis","cap.m3":"Root Cause Analysis","cap.m4":"FMEA / AMFE","cap.m5":"Artificial Intelligence","cap.m6":"Safety Management Systems",
    "articles.eyebrow":"Research & Insights","articles.title":"Artículos y Papers","articles.all":"Ver todos los artículos →","articles.read":"Leer artículo →",
    "a1.title":"System Dynamics aplicado a la gestión de riesgos sociotécnicos","a1.desc":"Un enfoque sistémico para comprender interacciones complejas y mejorar decisiones.",
    "a2.title":"Modelado y simulación de escenarios en organizaciones HRO","a2.desc":"Exploración de escenarios para fortalecer resiliencia y desempeño.",
    "a3.title":"Inteligencia artificial para decisiones de alto impacto","a3.desc":"Aplicaciones prácticas de IA en contextos de riesgo y seguridad.",
    "about.eyebrow":"Quiénes somos","about.title":"+15 años abordando la complejidad con rigurosidad y propósito.","about.c1":"Ph.D.<br>MBA","about.c2":"Gestión del riesgo","about.c3":"Seguridad y confiabilidad","about.c4":"Dinámica de Sistemas","about.c5":"Inteligencia Artificial",
    "contact.eyebrow":"Contacto","contact.title":"¿Quieres saber cómo podemos ayudarte?","contact.desc":"Transformamos complejidad en decisiones inteligentes y resultados sostenibles.",
    "form.name":"Nombre","form.email":"Email","form.subject":"Asunto","form.message":"Mensaje","form.send":"Enviar mensaje",
    "footer.services":"Servicios","footer.servicesList":"Optimización y Simulación<br>Analítica e IA<br>Gestión de Riesgos<br>Capacitaciones","footer.research":"Investigación","footer.researchList":"Artículos y Papers<br>Publicaciones<br>Casos de Estudio","footer.contact":"Contacto"
  },
  en: {
    "nav.services":"Services","nav.why":"Why Praxys","nav.capabilities":"Capabilities","nav.articles":"Articles & Papers","nav.about":"About us","nav.contact":"Contact",
    "net.complex":"COMPLEX SYSTEMS","net.decisions":"DECISIONS","net.resilience":"RESILIENCE","net.data":"DATA","net.risks":"RISKS",
    "hero.eyebrow":"Integral Risk Consulting","hero.title":"We address <span>complex</span> organizational problems","hero.lead":"We integrate modeling, simulation, advanced analytics, artificial intelligence, and systemic risk management to strengthen strategic decisions.","hero.cta1":"Explore services","hero.cta2":"Contact",
    "services.eyebrow":"Our services","services.title":"<span>Intelligent</span> decisions for complex environments.",
    "s1.title":"Optimization, modeling and process simulation","s1.desc":"We improve efficiency, quality and sustainability.",
    "s2.title":"Advanced analytics and artificial intelligence","s2.desc":"We convert data into actionable decisions.",
    "s3.title":"Systemic risk integration","s3.desc":"We integrate risks to strengthen decisions.",
    "s4.title":"Root cause analysis of accidents and incidents","s4.desc":"We identify causes and prevent recurrences.",
    "s5.title":"FMEA / AMFE","s5.desc":"We evaluate failures and prioritize actions.",
    "s6.title":"Governance, compliance and safety culture","s6.desc":"We strengthen performance and resilience.",
    "s7.title":"Online and in-person training","s7.desc":"Practical training with organizational impact.",
    "why.eyebrow":"Why Praxys?","why.title":"Knowledge. Safety. <span>Results.</span>",
    "why.knowledge.title":"Knowledge","why.knowledge.desc":"PhD, MBA, applied research and publications.",
    "why.safety.title":"Safety","why.safety.desc":"HRO, Safety Management, Root Cause Analysis and Governance.",
    "why.results.title":"Results","why.results.desc":"Modeling, simulation, AI and optimization.",
    "cap.eyebrow":"Our capabilities","cap.title":"Proven methodologies. Systemic vision.","cap.m1":"System Dynamics","cap.m2":"Network Analysis","cap.m3":"Root Cause Analysis","cap.m4":"FMEA / AMFE","cap.m5":"Artificial Intelligence","cap.m6":"Safety Management Systems",
    "articles.eyebrow":"Research & Insights","articles.title":"Articles & Papers","articles.all":"See all articles →","articles.read":"Read article →",
    "a1.title":"System Dynamics applied to sociotechnical risk management","a1.desc":"A systemic approach to understand complex interactions and improve decisions.",
    "a2.title":"Modeling and simulation of scenarios in HRO organizations","a2.desc":"Scenario exploration to strengthen resilience and performance.",
    "a3.title":"Artificial intelligence for high-impact decisions","a3.desc":"Practical AI applications in risk and safety contexts.",
    "about.eyebrow":"About us","about.title":"+15 years addressing complexity with rigor and purpose.","about.c1":"Ph.D.<br>MBA","about.c2":"Risk management","about.c3":"Safety and reliability","about.c4":"System Dynamics","about.c5":"Artificial Intelligence",
    "contact.eyebrow":"Contact","contact.title":"How can we help you?","contact.desc":"We transform complexity into intelligent decisions and sustainable results.",
    "form.name":"Name","form.email":"Email","form.subject":"Subject","form.message":"Message","form.send":"Send message",
    "footer.services":"Services","footer.servicesList":"Optimization and Simulation<br>Analytics and AI<br>Risk Management<br>Training","footer.research":"Research","footer.researchList":"Articles & Papers<br>Publications<br>Case Studies","footer.contact":"Contact"
  }
};

let content = structuredClone(defaultContent);
try {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (stored && stored.es && stored.en) content = stored;
} catch (e) {}
let currentLang = localStorage.getItem("praxys_lang") || "es";
let editMode = false;

function applyLanguage(lang = currentLang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("praxys_lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = content[lang][key] ?? "";
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = content[lang][key] ?? "";
  });
  document.querySelectorAll("[data-i18n-svg]").forEach(el => {
    const key = el.dataset.i18nSvg;
    el.textContent = content[lang][key] ?? "";
  });
  document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  const editorLang = document.getElementById("editorLang");
  if (editorLang) editorLang.textContent = lang.toUpperCase();
  if (editMode) enableEditing(true);
}

function enableEditing(enabled) {
  editMode = enabled;
  const editable = document.querySelectorAll("[data-i18n], [data-i18n-html]");
  editable.forEach(el => {
    el.contentEditable = enabled ? "true" : "false";
    el.classList.toggle("editable", enabled);
  });
  document.body.classList.toggle("editing", enabled);
}

function saveEdits() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    content[currentLang][el.dataset.i18n] = el.textContent.trim();
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    content[currentLang][el.dataset.i18nHtml] = el.innerHTML.trim();
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  enableEditing(false);
  alert("Cambios guardados en este navegador. Para publicar cambios permanentes, exportá el JSON y actualizá main.js o conectá un CMS/back-end.");
}

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => { header.style.boxShadow = window.scrollY > 40 ? '0 10px 30px rgba(23,62,85,.08)' : 'none'; });

document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));

const modal = document.getElementById("adminModal");
document.getElementById("adminOpen").addEventListener("click", () => { modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); });
document.getElementById("adminClose").addEventListener("click", () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); });

document.getElementById("loginBtn").addEventListener("click", () => {
  const ok = document.getElementById("adminUser").value === ADMIN_USER && document.getElementById("adminPass").value === ADMIN_PASS;
  document.getElementById("loginMsg").textContent = ok ? "Acceso concedido." : "Usuario o contraseña incorrectos.";
  if (ok) {
    document.getElementById("loginBox").hidden = true;
    document.getElementById("editorBox").hidden = false;
  }
});

document.getElementById("editBtn").addEventListener("click", () => enableEditing(true));
document.getElementById("saveBtn").addEventListener("click", saveEdits);
document.getElementById("exportBtn").addEventListener("click", () => {
  document.getElementById("exportArea").value = JSON.stringify(content, null, 2);
});
document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("¿Restaurar todos los textos originales?")) {
    content = structuredClone(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
    applyLanguage(currentLang);
  }
});

applyLanguage(currentLang);
