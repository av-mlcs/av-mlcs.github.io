// ============================================================
//  Shared site chrome (nav + footer) and dynamic bits.
//  nav/footer are injected here so they live in ONE place
//  instead of being copy-pasted into every page.
//  Paths are root-absolute ("/...") so they work from any folder
//  depth (e.g. /people/students.html). Preview via a local server.
// ============================================================

// --- nav items: edit here to change the menu on every page ---
const PAGES = [
  { href: "/", label: "Home" },
  { href: "/research/", label: "Research" },
  { href: "/projects/", label: "Projects" },
  { href: "/publications/", label: "Publications" },
  { href: "/people/", label: "People", children: [
    { href: "/people/", label: "Faculty" },
    { href: "/people/students.html", label: "Students" },
    { href: "/people/alumni.html", label: "Alumni" },
  ] },
  { href: "/platforms/", label: "Platforms" },
  { href: "/join/", label: "Join Us", cta: true },
];
const EMAIL = "jongeunchoi@yonsei.ac.kr";

// Highlight the current tab. Home matches only the root; others match their folder prefix.
const path = location.pathname;
const isActive = (p) =>
  p.href === "/" ? (path === "/" || path === "/index.html") : path.startsWith(p.href);

// --- build the nav (items with `children` render a dropdown) ---
const navHtml = PAGES.map((p) => {
  const cls = [p.cta ? "nav__cta" : "", isActive(p) ? "is-active" : ""].join(" ").trim();
  const link = `<a href="${p.href}"${cls ? ` class="${cls}"` : ""}>${p.label}</a>`;
  if (!p.children) return link;
  const sub = p.children.map((c) => `<a href="${c.href}">${c.label}</a>`).join("");
  return `<div class="nav__item">${link}<div class="nav__drop">${sub}</div></div>`;
}).join("");

document.getElementById("nav").innerHTML = `
  <div class="nav__inner">
    <a href="/" class="brand">
      <span class="brand__text">MLCS <em>Yonsei University</em></span>
    </a>
    <nav class="nav__links" id="navLinks">${navHtml}</nav>
    <button class="nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>`;

// --- build the footer ---
document.getElementById("contact").innerHTML = `
  <div class="footer__inner">
    <div class="footer__col footer__brand">
      <span class="brand brand--footer">
        <span class="brand__text">MLCS <em>Yonsei University</em></span>
      </span>
      <p class="footer__addr">Machine Learning &amp; Control Systems Lab<br />School of Mechanical Engineering, Yonsei University<br /> 50 Yonsei Ro, Seodaemun Gu, Seoul 03722, Republic of Korea</p>
    </div>
    <div class="footer__col">
      <h4>Contact</h4>
      <a href="mailto:${EMAIL}">${EMAIL}</a>
      <span class="footer__plain">Tel: +(82) 02-2123-2813</span>
      <h4 style="margin-top: 18px">Intern inquiry</h4>
      <a href="mailto:hanjw2496@yonsei.ac.kr">hanjw2496@yonsei.ac.kr</a>
    </div>
    <div class="footer__col">
      <h4>Links</h4>
      <a href="https://scholar.google.com/citations?user=Z-UlU3MAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
      <a href="https://me.yonsei.ac.kr/faculty/name_search.do?mode=view&userId=i8y28rIy7%2Fvf1sq15evoBw%3D%3D&sosokcd=0000405" target="_blank" rel="noopener">Faculty profile</a>
    </div>
  </div>
  <div class="footer__bar"><span>&copy; ${new Date().getFullYear()} MLCS Lab, Yonsei University.</span></div>`;

// --- mobile nav toggle (elements exist now that nav is injected) ---
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }
});

// --- news: render from NEWS (/js/news.js) where a container exists ---
const newsItem = (n) => `<div class="news-item"><time>${n.date}</time><p>${n.text}</p></div>`;
const latest = document.getElementById("news-latest");
if (latest) latest.innerHTML = NEWS.slice(0, 4).map(newsItem).join("");
const all = document.getElementById("news-all");
if (all) all.innerHTML = NEWS.map(newsItem).join("");

// --- publications: build "Recent" section. Most recent papers, added by whole
//     years (newest first) until at least TARGET are shown — never cut mid-year. ---
const recentBox = document.getElementById("recent-pubs");
if (recentBox) {
  const TARGET = 10;
  const yearOf = (el) => {
    const ys = (el.textContent.match(/(?:19|20)\d{2}/g) || []).map(Number).filter((y) => y >= 1990 && y <= 2026);
    return ys.length ? ys[ys.length - 1] : 0;
  };
  const byYear = {};
  ["pl-journal", "pl-conference", "pl-preprints"].forEach((id) => {
    [...document.getElementById(id).children].forEach((el) => {
      if (!el.classList.contains("pub2")) return;
      const y = yearOf(el);
      if (!byYear[y]) byYear[y] = [];
      byYear[y].push(el);
    });
  });
  let cum = 0;
  Object.keys(byYear).map(Number).sort((a, b) => b - a).every((y) => {
    byYear[y].forEach((el) => recentBox.appendChild(el.cloneNode(true)));
    cum += byYear[y].length;
    return cum < TARGET; // stop once we have at least TARGET
  });
}

// --- featured carousel: arrows + generated dots (called once slides exist) ---
const initCarousels = () =>
  document.querySelectorAll(".carousel").forEach((c) => {
  const track = c.querySelector(".carousel__track");
  const slides = [...track.children];
  const dotsWrap = c.querySelector(".carousel__dots");
  const cap = c.querySelector(".carousel__cap");
  let i = 0;

  const go = (n) => {
    i = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${i * 100}%)`;
    [...dotsWrap.children].forEach((d, k) => d.classList.toggle("is-active", k === i));
    if (cap) cap.textContent = slides[i].dataset.cap || "";
  };

  slides.forEach((_, n) => {
    const dot = document.createElement("button");
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", `Go to slide ${n + 1}`);
    dot.addEventListener("click", () => go(n));
    dotsWrap.appendChild(dot);
  });

  c.querySelector(".carousel__arrow--prev").addEventListener("click", () => go(i - 1));
  c.querySelector(".carousel__arrow--next").addEventListener("click", () => go(i + 1));
  go(0);
  // hide arrows when there's nothing to page; featured shows them only for 3+
  const minForArrows = c.id === "featured" ? 3 : 2;
  if (slides.length < minForArrows) {
    c.querySelector(".carousel__arrow--prev").style.display = "none";
    c.querySelector(".carousel__arrow--next").style.display = "none";
  }
  if (slides.length <= 1) dotsWrap.style.display = "none";
  });

// --- homepage "Featured papers": rendered from FEATURED (/js/featured.js).
//     Title links to the paper; full abstract shown (no truncation). ---
const featuredSlide = (f) => {
  const a = f.link.startsWith("http") ? ` target="_blank" rel="noopener"` : "";
  const venue = f.venue ? `, <span class="slide__venue">${f.venue}</span>` : "";
  return `<article class="slide"><img class="slide__media" src="${f.img}" alt="" /><h2><a href="${f.link}"${a}><strong>${f.title}</strong>${venue}</a></h2><p>${f.desc}</p></article>`;
};

const featTrack = document.getElementById("featured-track");
if (featTrack) featTrack.innerHTML = FEATURED.map(featuredSlide).join("");
initCarousels();

// --- tag filter: clicking a page-head tag shows only items with that tag plus
//     untagged items. Click again to clear. Runs after Recent clones exist. ---
document.querySelectorAll(".page-head__tags[data-filter-target]").forEach((bar) => {
  const items = [...document.querySelectorAll(bar.dataset.filterTarget)];
  const keyOf = (el) => (el.className.match(/tag--(\w+)/) || [])[1];
  const tagsOf = (it) => [...it.querySelectorAll(".tag")].map(keyOf).filter(Boolean);
  const btns = [...bar.querySelectorAll("[data-filter]")];
  let active = null; // null = "All"
  const apply = () => {
    bar.classList.toggle("has-active", !!active);
    btns.forEach((b) => b.classList.toggle("is-active", b.dataset.filter === (active || "all")));
    items.forEach((it) => {
      const tg = tagsOf(it);
      it.classList.toggle("is-filtered", !!active && tg.length > 0 && !tg.includes(active));
    });
  };
  btns.forEach((btn) =>
    btn.addEventListener("click", () => {
      active = btn.dataset.filter === "all" || active === btn.dataset.filter ? null : btn.dataset.filter;
      apply();
    })
  );
  // deep link: /research/?team=rob (or av/mv) pre-selects that filter
  const team = new URLSearchParams(location.search).get("team");
  if (team && btns.some((b) => b.dataset.filter === team)) active = team;
  apply();
});
