// Student roster (single source). Edit this list to add/update/remove a student.
// Photos live in /images/people/Students/. `links` keys: web, sch (Scholar), gh, li.
// `tags` is optional (array of "av" | "rob" | "mv") and powers the page-head filter.
const STUDENTS = [
  // --- Ph.D. Candidates ---
  { g: "Ph.D. Candidates", name: "Jaehyun Lim", photo: "Jaehyun Lim.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A282", email: "jaehyunlim@yonsei.ac.kr", interest: "Control, Intelligent Systems, and Robotics", tags: ["rob"], links: { li: "https://www.linkedin.com/in/jaehyun-lim-0656b9256/", gh: "https://github.com/lim271" } },
  { g: "Ph.D. Candidates", name: "Hwanmoo Yong", photo: "Hwanmoo Yong.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A282", email: "hwanmooy@yonsei.ac.kr", interest: "Deep Learning, Deep Reinforcement Learning, Suspension Control, Service Robot", tags: ["av"], links: { sch: "https://scholar.google.co.kr/citations?user=ZsskQO4AAAAJ" } },
  { g: "Ph.D. Candidates", name: "Jinho Jeong", photo: "Jinhojeong.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A281", email: "jinhojeong@yonsei.ac.kr", interest: "Machine Learning based Automated Surgery, Signal Processing and Cognitive Science", tags: ["mv"] },
  { g: "Ph.D. Candidates", name: "Jisuk Lee", photo: "jisuk lee.jpg", dept: "Department of Mechanical Engineering", email: "jisuk.jay.lee@hyundai.com", interest: "Mars Exploration Rovers, Control", links: { li: "https://www.linkedin.com/in/jisuklee/" } },
  { g: "Ph.D. Candidates", name: "Idress Sarmad", photo: "Idress Sarmad.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A282", email: "sarmad@yonsei.ac.kr", interest: "Deep Learning, Computer Vision, and Human-robot interaction", tags: ["rob"], links: { li: "https://www.linkedin.com/in/sarmadidrees/" } },
  { g: "Ph.D. Candidates", name: "Sungjae Nah", photo: "Sungjae Nah.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A282", email: "sjnah@yonsei.ac.kr", interest: "Deep learning and Control theory for Intelligent Transportation systems, Intelligent logistics with autonomous vehicle", tags: ["av"], links: { sch: "https://scholar.google.co.kr/citations?user=Io78T94AAAAJ", li: "https://www.linkedin.com/in/sungjae-nah-b4503912a/" } },
  { g: "Ph.D. Candidates", name: "Taekwon Ga", photo: "Taekwon Ga.jpg", dept: "School of Mechanical Engineering", office: "아식설계공동연구소 204호", email: "taek111@yonsei.ac.kr", interest: "Mobile Robot Navigation, Deep Reinforcement Learning", tags: ["rob"] },
  { g: "Ph.D. Candidates", name: "Jonghak Bae", photo: "Jonghak Bae.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A281", email: "jonghakbae@yonsei.ac.kr", interest: "Control, Intelligent Systems, and Deep Learning", tags: ["av"] },
  { g: "Ph.D. Candidates", name: "Bogyeong Suh", photo: "Bogyeong Suh.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A281", email: "tjqhrud1129@naver.com", interest: "Machine learning, Medical Image Analysis, Control", tags: ["av", "mv"], links: { sch: "https://scholar.google.co.kr/citations?user=Vf1-vu4AAAAJ" } },

  // --- Ph.D. Students ---
  { g: "Ph.D. Students", name: "Soochul Yoo", photo: "Soochul Yoo.jpg", dept: "Department of Artificial Intelligence", office: "아식설계공동연구소 204호", email: "usam205@yonsei.ac.kr", interest: "Deep reinforcement learning, Control, Object manipulation", tags: ["rob"] },
  { g: "Ph.D. Students", name: "Hyeongwoo Nam", photo: "Hyeongwoo Nam.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A282", email: "namh_woo@yonsei.ac.kr", interest: "Autonomous Vehicle, Deep Learning, Control", tags: ["rob"] },
  { g: "Ph.D. Students", name: "Jaewoong Han", photo: "Jaewoong Han.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A282", email: "ku3475@naver.com", interest: "Deep learning, Deep reinforcement learning, Control", tags: ["av"] },

  // --- M.S. Candidates ---
  { g: "M.S. Candidates", name: "Sungwon Seo", photo: "Sungwon_Seo.jpg", dept: "School of Mechanical Engineering", office: "아식설계공동연구소 204호", email: "ssw9999@naver.com", interest: "To be updated soon" },
  { g: "M.S. Candidates", name: "Junwoo Chang", photo: "Junwoo Chang.jpg", dept: "School of Mechanical Engineering", office: "아식설계공동연구소 204호", email: "junwoochang@yonsei.ac.kr", interest: "Diffusion model, Equivariant machine learning, Reinforcement learning, Robotics", tags: ["rob"], links: { web: "https://pranaboy72.github.io", sch: "https://scholar.google.co.kr/citations?user=qZL7T3YAAAAJ", gh: "https://github.com/pranaboy72", li: "https://www.linkedin.com/in/junwoochang-aa1718206/" } },

  // --- M.S. Students ---
  { g: "M.S. Students", name: "Sol Choi", photo: "Sol Choi.jpg", dept: "School of Mechanical Engineering", office: "제4공학관 D613", email: "solchoi@yonsei.ac.kr", interest: "Mobile Robotics & Manipulation, Robot Learning, p-HRI (physical Human-Robot Interaction)", tags: ["av"], links: { web: "https://pineasol.notion.site/", gh: "https://github.com/S-CHOI-S" } },
  { g: "M.S. Students", name: "Yujin Kim", photo: "Yujin Kim.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A281", email: "djm06165@yonsei.ac.kr", interest: "Deep Learning, Medical AI, Multi-agent Robot Systems", tags: ["mv"] },
  { g: "M.S. Students", name: "Dongjae Kim", photo: "Dongjae_Kim.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A281", email: "kimdj98g@gmail.com", interest: "Deep Learning, Medical AI, Control", tags: ["av", "mv"] },
  { g: "M.S. Students", name: "Taehyung Kim", photo: "Taehyung_Kim.jpg", dept: "School of Mobility Systems Engineering", office: "제1공학관 A281", email: "kth8606@yonsei.ac.kr", interest: "Preference based reinforcement learning", tags: ['av', "rob"], links: { li: "https://www.linkedin.com/in/thkim-24846b316/" } },
  { g: "M.S. Students", name: "Hyunjin Park", photo: "Hyunjin_Park.jpg", dept: "School of Artificial Intelligence", office: "아식설계공동연구소 204호", email: "meat124@yonsei.ac.kr", interest: "Robot Learning, Robotic Manipulation", tags: ["rob"] },
  { g: "M.S. Students", name: "Yonghwa Seo", photo: "Yonghwa_Seo.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 A281", email: "yonghwa_seo@yonsei.ac.kr", interest: "Control, Autonomous Vehicle, and Reinforcement learning", tags: ["av"] },
  { g: "M.S. Students", name: "Woobin Lee", photo: "Woobin_Lee.jpg", dept: "School of Artificial Intelligence", office: "공학원 170ER", email: "dldnqls200@naver.com", interest: "VLM, ViT, AI in Military" },
  { g: "M.S. Students", name: "Yeongseok Choi", photo: "Yeongseok_Choi.jpg", dept: "School of Mechanical Engineering", email: "yeongseok564@yonsei.ac.kr", interest: "Drone, Control, Deep Reinforcement Learning" },
  { g: "M.S. Students", name: "Minwoo Park", photo: "Minwoo_Park.jpg", dept: "School of Artificial Intelligence", office: "아식설계공동연구소 204호", email: "minwoopark@yonsei.ac.kr", interest: "Robot learning, Robotic manipulation, Deep reinforcement learning", tags: ["rob"] },
  { g: "M.S. Students", name: "Jebeom Chae", photo: "Jebeom_Chae.jpg", dept: "School of Artificial Intelligence", office: "아식설계공동연구소 204호", email: "jebeomchae@yonsei.ac.kr", interest: "Robotics, Generative Models", tags: ["rob"] },
  { g: "M.S. Students", name: "Sehoon Kim", photo: "Sehoon_Kim.jpg", dept: "School of Artificial Intelligence", office: "아식설계공동연구소 204호", email: "sh_hiver@yonsei.com", interest: "Reinforcement Learning, Imitation Learning, Robot Manipulation", tags: ["rob"] },
  { g: "M.S. Students", name: "Seungseop Lee", photo: "Seungseop Lee.jpg", dept: "School of Mechanical Engineering", office: "제1공학관 170ER (예정)", email: "dkapqef@kist.re.kr", interest: "Imitation Learning, Deep reinforcement learning, Control" },
  { g: "M.S. Students", name: "Gwangmo Lee", photo: "Gwangmo_Lee.jpg", dept: "Department of Mobility Systems Engineering", office: "To be updated", email: "gwangmo2@yonsei.ac.kr", interest: "Control, Intelligent Vehicle System" },
];

const STUDENT_TAG_LABEL = { av: "AV", rob: "Robotics", mv: "MV" };

// Social/link icons (inline SVG, inherit color).
const STUDENT_ICONS = {
  web: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
  sch: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>',
  gh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  li: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
};

const studentLinks = (l) =>
  Object.keys(l).map((k) => `<a href="${l[k]}" target="_blank" rel="noopener" aria-label="${k}">${STUDENT_ICONS[k]}</a>`).join("");

const studentTags = (t) =>
  t.map((k) => `<span class="tag tag--${k}">${STUDENT_TAG_LABEL[k]}</span>`).join(" ");

const studentCard = (s) => `
  <article class="person">
    <img class="person__photo" src="/images/people/Students/${encodeURIComponent(s.photo)}" alt="${s.name}" />
    <div class="person__body">
      ${s.tags ? `<div class="person__tags">${studentTags(s.tags)}</div>` : ""}
      <h3>${s.name}${s.links ? `<span class="person__links">${studentLinks(s.links)}</span>` : ""}</h3>
      ${s.office ? `<p class="person__field"><span class="person__field-label">Office</span><span class="person__field-val">${s.office}</span></p>` : ""}
      <p class="person__field"><span class="person__field-label">Email</span><a class="person__field-val" href="mailto:${s.email}">${s.email}</a></p>
      <p class="person__dept">${s.dept}</p>
      <p class="person__interest-label">Research Interest</p>
      <p class="person__interest">${s.interest}</p>
    </div>
  </article>`;

const studentsBox = document.getElementById("students");
if (studentsBox) {
  const groups = [];
  STUDENTS.forEach((s) => {
    let grp = groups.find((g) => g.name === s.g);
    if (!grp) groups.push((grp = { name: s.g, list: [] }));
    grp.list.push(s);
  });
  studentsBox.innerHTML = groups
    .map((g) => `<h2 class="people__group">${g.name}</h2><div class="people">${g.list.map(studentCard).join("")}</div>`)
    .join("");
}
