// Research areas (single source). Edit here → both /research/ and the home page update.
// group: "av" | "rob" (drives the tag + which group on the Research page).
const RESEARCH = [
  { group: "av", title: "Perception", desc: "Sensor fusion and scene understanding from camera, LiDAR, and radar." },
  { group: "av", title: "Planning & Decision", desc: "Motion planning and behavior prediction in dynamic, uncertain traffic." },
  { group: "av", title: "Learning-based Control", desc: "Reinforcement learning and data-driven control for robust vehicle dynamics." },
  { group: "av", title: "Simulation & Safety", desc: "High-fidelity simulation, verification, and safe deployment of driving policies." },
  { group: "rob", title: "Data-efficient Robot Learning", desc: "We exploit the geometric structure of robotics tasks — symmetry and equivariance (e.g. SE(3)) — so that models learn far more data-efficiently and generalize from only a handful of demonstrations." },
  { group: "rob", title: "Robot Foundation Models", desc: "We leverage foundation models pre-trained on large-scale vision, language, and video data to build Vision-Language-Action (VLA) and World-Action Models (WAM) for robots." },
  { group: "rob", title: "Task Planning with Prior Knowledge", desc: "We make robot task planning more efficient by injecting prior knowledge (e.g. commonsense knowledge) represented with structures such as ontologies — so robots reason with far less search and supervision." },
];

const RESEARCH_TAG_LABEL = { av: "AV", rob: "Robotics", mv: "MV" };

// Research page: plain area in a group list.
const researchItem = (r) => `<article class="ritem"><h3>${r.title}</h3><p>${r.desc}</p></article>`;
// Home page: card with a group tag, linking to the Research page.
const researchCard = (r) =>
  `<a class="card" href="/research/"><span class="tag tag--${r.group}">${RESEARCH_TAG_LABEL[r.group]}</span><h3>${r.title}</h3><p>${r.desc}</p></a>`;

const fillResearch = (id, list, render) => {
  const box = document.getElementById(id);
  if (box) box.innerHTML = list.map(render).join("");
};

fillResearch("research-av", RESEARCH.filter((r) => r.group === "av"), researchItem);
fillResearch("research-rob", RESEARCH.filter((r) => r.group === "rob"), researchItem);
fillResearch("home-research", RESEARCH, researchCard);
