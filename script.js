// ===== Configuración =====
const CONFIG = {
  price: "US$27",          // cambia por tu precio real
  ctaUrl: "#comprar",      // cambia por el enlace de tu pasarela de pago (Gumroad, Hotmart, Stripe…)
  stickyBar: true,
};

// ===== Datos =====
const LEARN = [
  ["I", "MINDSET", "Cambiar la forma de trabajar", "AI literacy, pensamiento sistémico y cómo definir problemas medibles."],
  ["II", "LLMs", "Dominar los LLMs", "Tokens, contexto, alucinaciones, ChatGPT vs. Claude y prompt engineering profesional."],
  ["III", "NO-CODE", "Construir sin ser programador", "Chatbots, RAG explicado sin humo, APIs y automatización no-code."],
  ["IV", "PYTHON", "Python sin sufrir", "Automatización y análisis con Pandas, usando la IA como copiloto y profesor."],
  ["V", "SQL", "SQL para IA y data", "De SELECT a CTEs, y cómo traducir preguntas de negocio a consultas verificadas."],
  ["VI", "EXCEL", "Excel + IA", "XLOOKUP, SUMIFS, tablas dinámicas, Power Query y fórmulas asistidas."],
  ["VII", "DATA", "Pensamiento analítico", "KPIs, sesgos, storytelling y del dato a la decisión."],
  ["VIII", "AUTOMATION", "AI workflows y agentes", "Triggers, webhooks, guardrails y cuándo un agente hace falta de verdad."],
  ["IX", "PORTFOLIO", "Portafolio", "8 proyectos guiados + The AI Builder Project con case study."],
  ["X", "CAREER", "Empleo remoto", "Roles, CV, LinkedIn, GitHub y entrevistas con respuestas modelo."],
];

const PROJECTS = [
  ["P01", "Chatbot especializado", "Base de conocimiento, límites y escalamiento a humano"],
  ["P02", "Analizador inteligente de documentos", "Extracción estructurada con citas y verificación"],
  ["P03", "Dashboard de ventas", "SQL/Pandas, KPIs y storytelling"],
  ["P04", "Sistema de clasificación automática", "Automatización con salida JSON y evaluación"],
  ["P05", "Automatización de reportes", "Python + resumen con IA en segundos"],
  ["P06", "Asistente de análisis de datos", "Pregunta de negocio → SQL verificado"],
  ["P07", "Sistema de extracción de información", "De texto libre a dataset estructurado"],
  ["P08", "AI workflow empresarial completo", "Trigger → LLM → BD → dashboard → aviso"],
];

const ROLES = [
  ["AI Automation Specialist", "Diseña y mantiene flujos automatizados con IA.", ["No-code", "APIs", "LLMs"]],
  ["AI Operations", "Supervisa la calidad de sistemas de IA en uso.", ["Evals", "Procesos", "Datos"]],
  ["AI Content Specialist", "Produce contenido asistido por IA con estándares.", ["Prompting", "Verificación"]],
  ["Junior Data Analyst", "Prepara datos, calcula métricas y comunica hallazgos.", ["SQL", "Excel", "Pandas"]],
  ["AI Trainer", "Evalúa y mejora respuestas de modelos.", ["Rúbricas", "Escritura"]],
  ["AI Implementation Specialist", "Lleva herramientas de IA a equipos reales.", ["Adopción", "Configuración"]],
  ["Automation Specialist", "Automatiza procesos de negocio.", ["Integraciones", "Sheets"]],
  ["AI Solutions Specialist", "Traduce necesidades en soluciones con IA.", ["Arquitectura", "Demos"]],
  ["Junior Python / Data", "Scripts, pipelines simples y análisis.", ["Python", "Git", "APIs"]],
  ["Prompt / AI Specialist", "Diseña prompts, plantillas y evaluaciones.", ["Context eng.", "Evals"]],
];

const PHASES = [
  ["1–5", "AI Foundations", "Problema definido"],
  ["6–10", "LLM Power User", "Chatbot evaluado"],
  ["11–15", "No-code / Automation", "1ª automatización"],
  ["16–20", "Python", "Scripts en GitHub"],
  ["21–24", "SQL + Data", "15 consultas"],
  ["25–27", "AI + Data", "Análisis completo"],
  ["28–30", "Portfolio", "Case study"],
  ["31–33", "Remote Job Launch", "Perfil + estrategia"],
];

const FAQS = [
  ["¿Necesito saber programar?", "No. El libro sigue la filosofía no-code first: empiezas con ChatGPT, Claude y herramientas visuales, y llegas a Python y SQL solo cuando te dan palanca — con la IA explicándote cada línea."],
  ["¿Sirve si ya uso ChatGPT a diario?", "Sobre todo en ese caso. El libro empieza donde termina el uso casual: contexto, evaluación, workflows, datos y automatización."],
  ["¿Garantiza conseguir empleo?", "No, y desconfía de quien lo prometa. Lo que obtienes es un método, proyectos con evidencia real y un plan concreto de CV, LinkedIn, GitHub y entrevistas."],
  ["¿Qué pasa cuando cambien las herramientas?", "El libro enseña sistemas, no botones. Los datos más volátiles (planes, versiones, modelos) están marcados para verificar en la documentación oficial."],
  ["¿Tengo que pagar herramientas?", "No para empezar: todas tienen plan gratuito o free tier. Solo los ejercicios opcionales con API de modelos tienen un coste por uso."],
  ["¿En qué formato llega?", "PDF tamaño Carta de 194 páginas, listo para leer en pantalla o imprimir los worksheets las veces que necesites."],
];

// ===== Helpers =====
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

// ===== Config: precio y enlaces =====
$$(".js-price").forEach(n => (n.textContent = `${CONFIG.price} →`));
$$(".js-price-plain").forEach(n => (n.textContent = CONFIG.price));
$$(".js-cta").forEach(a => (a.href = CONFIG.ctaUrl));

// ===== Portada: puntos =====
const dots = $("#dots");
for (let k = 0; k < 90; k++) {
  const r = Math.sin(k * 12.9898) * 43758.5453;
  const f = r - Math.floor(r);
  const d = el("div");
  d.style.background = f > 0.9 ? "#C8F542" : f > 0.6 ? "#2A2D32" : "#16181B";
  dots.appendChild(d);
}

// ===== Render de listas =====
const learn = $("#learn");
LEARN.forEach(([n, tag, t, d]) => {
  learn.appendChild(el("div", "learn reveal", `
    <div class="learn__top"><span class="learn__n">PARTE ${n}</span><span class="learn__tag">${tag}</span></div>
    <div class="learn__t">${t}</div>
    <div class="learn__d">${d}</div>`));
});

const projects = $("#projects");
PROJECTS.forEach(([n, t, s]) => {
  projects.appendChild(el("div", "proj reveal", `
    <span class="proj__n">${n}</span><span class="proj__t">${t}</span><span class="proj__s">${s}</span>`));
});

const roles = $("#roles");
ROLES.forEach(([t, d, skills]) => {
  roles.appendChild(el("div", "role reveal", `
    <span class="role__t">${t}</span>
    <span class="role__d">${d}</span>
    <div class="role__s">${skills.map(s => `<span>${s}</span>`).join("")}</div>`));
});

const phases = $("#phases");
PHASES.forEach(([d, t, o], i) => {
  const row = el("div", "phase", `
    <span class="phase__d">DÍA ${d}</span>
    <div class="phase__bar">
      <div class="phase__fill" data-w="${Math.round(((i + 1) / PHASES.length) * 100)}%"></div>
      <div class="phase__txt"><span class="phase__t">${t}</span><span class="phase__o">${o}</span></div>
    </div>`);
  phases.appendChild(row);
});

// ===== FAQ (acordeón accesible) =====
const faq = $("#faq");
FAQS.forEach(([q, a], i) => {
  const item = el("div", "faq__item");
  const id = `faq-a-${i}`;
  item.innerHTML = `
    <button class="faq__q" aria-expanded="false" aria-controls="${id}">
      <span>${q}</span><span class="faq__icon">+</span>
    </button>
    <div class="faq__a" id="${id}" hidden>${a}</div>`;
  faq.appendChild(item);
});
const setFaq = (openIndex) => {
  $$(".faq__item", faq).forEach((item, i) => {
    const open = i === openIndex;
    $(".faq__q", item).setAttribute("aria-expanded", String(open));
    $(".faq__a", item).hidden = !open;
    $(".faq__icon", item).textContent = open ? "−" : "+";
  });
};
let openFaq = 0;
setFaq(openFaq);
faq.addEventListener("click", (e) => {
  const btn = e.target.closest(".faq__q");
  if (!btn) return;
  const i = $$(".faq__q", faq).indexOf(btn);
  openFaq = openFaq === i ? -1 : i;
  setFaq(openFaq);
});

// ===== Animaciones al hacer scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-in");
    io.unobserve(en.target);
  });
}, { threshold: 0.12 });
$$(".reveal").forEach((n) => io.observe(n));

const phaseIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    $$(".phase__fill", en.target).forEach((f, i) => {
      setTimeout(() => (f.style.width = f.dataset.w), i * 90);
    });
    phaseIO.unobserve(en.target);
  });
}, { threshold: 0.2 });
phaseIO.observe(phases);

// ===== Barra fija inferior =====
const sticky = $("#sticky");
if (!CONFIG.stickyBar) {
  sticky.remove();
  document.body.style.paddingBottom = "0";
} else {
  // se oculta cuando la sección de compra está visible
  const buy = $("#comprar");
  new IntersectionObserver(([en]) => {
    sticky.classList.toggle("is-hidden", en.isIntersecting);
  }, { threshold: 0.25 }).observe(buy);
}
