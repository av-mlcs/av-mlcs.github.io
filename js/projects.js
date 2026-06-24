// Projects (single source). Edit here → both /projects/ and the home page update.
// status: "ongoing" | "completed". tag: "av" | "rob" | "mv". img: path or null.
const PROJECTS = [
  { status: "ongoing", title: "Data-efficient Learning Framework for Vision-based Robot Manipulation Control", desc: "Building learning frameworks that achieve robust vision-based manipulation control from limited real-world data.", keys: "NRF · Vision-based manipulation", tag: "rob", img: null },
  { status: "ongoing", title: "Spatial Intelligence for Robotic Autonomy: From World Reasoning to Precision Control", desc: "Developing a robot learning framework that spans the full pipeline — from high-level planning to low-level control.", keys: "NRF · Planning · Control", tag: "rob", img: null },
  { status: "ongoing", title: "XR Copilot for Quality and Safety in Construction Component Fabrication and Installation", desc: "Developing XR copilot technology that uses non-verbal behavior to ensure quality and safety when fabricating and installing construction components.", keys: "IITP · XR · LLM", tag: "rob", img: "/images/projects/llm-rag-mcp.png" },
];

const PROJECT_TAG_LABEL = { av: "AV", rob: "Robotics", mv: "MV" };

// Full row used on the Projects page.
const projectRow = (p) => `
  <article class="prow">
    ${p.img ? `<img class="prow__media" src="${p.img}" alt="${p.title}" />` : `<div class="prow__media" data-label="project image"></div>`}
    <div class="prow__body">
      <div class="prow__tags"><span class="tag tag--${p.tag}">${PROJECT_TAG_LABEL[p.tag]}</span></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p class="prow__keys">${p.keys}</p>
    </div>
  </article>`;

// Compact item used on the home page (links to the Projects page). Tag sits in the status column.
const projectHomeItem = (p) => `
  <a class="project" href="/projects/"><p class="project__status"><span class="tag tag--${p.tag}">${PROJECT_TAG_LABEL[p.tag]}</span></p><h3>${p.title}</h3><p class="project__desc">${p.desc}</p><p class="project__keys">${p.keys}</p></a>`;

const fillProjects = (id, list, render) => {
  const box = document.getElementById(id);
  if (box) box.innerHTML = list.map(render).join("");
};

fillProjects("proj-ongoing", PROJECTS.filter((p) => p.status === "ongoing"), projectRow);
fillProjects("proj-completed", PROJECTS.filter((p) => p.status === "completed"), projectRow);
fillProjects("home-projects", PROJECTS.filter((p) => p.status === "ongoing"), projectHomeItem);
