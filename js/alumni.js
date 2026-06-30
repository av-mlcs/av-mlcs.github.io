// Alumni roster (single source). Edit this list to add/update/remove an alum.
// Photos live in /images/people/Alumni/. `now` (current position) and `photo` are optional.
// `inst` + `deg` drive the two-level grouping; `grad` (YYYYMM) sorts newest-first within a degree.
const ALUMNI = [
  // ===== Yonsei University · Ph.D. =====
  { inst: "Yonsei University", deg: "Ph.D.", grad: 202408, name: "Seungwoo Jeong", photo: "Seungwoo Jeong.jpg", edu: ["Ph.D., Mechanical Engineering (2019.03–2024.08)"], now: "Senior Research Engineer, Korea Railroad Research Institute (2024.09–)" },
  { inst: "Yonsei University", deg: "Ph.D.", grad: 202308, name: "Heejin Yu", photo: "Heejin Yu.jpg", edu: ["Ph.D., Mechanical Engineering (2017.03–2023.08)", "Postdoc, Yonsei University (2023.09–2024.02)"], now: "Machine Learning Modeler, Toss Bank (2024.03–)" },
  { inst: "Yonsei University", deg: "Ph.D.", grad: 202308, name: "Myounghoe Kim", photo: "Myounghoe Kim.jpeg", edu: ["Ph.D., Mechanical Engineering (2017.03–2023.08)", "Postdoc, Yonsei University (2023.09–2024.02)"], now: "Senior Research Engineer, Hyundai Motor Company IATD (2024.04–)" },
  { inst: "Yonsei University", deg: "Ph.D.", grad: 202302, name: "Jongin Han", photo: "Jongin Han.jpg", edu: ["Ph.D., Mechanical Engineering (2015.03–2023.02)"], now: "Postdoctoral Researcher, KIST (2023.01–)" },
  { inst: "Yonsei University", deg: "Ph.D.", grad: 202302, name: "Jehyun Park", photo: "Jehyun Park.jpg", edu: ["Ph.D., Mechanical Engineering (2018.03–2023.02)", "Postdoc, Yonsei University (2023.03–2024.02)"], now: "Senior Research Engineer, Hyundai Motor Company (2024.08–)" },
  { inst: "Yonsei University", deg: "Ph.D.", grad: 202302, name: "Kyubaek Yoon", photo: "yoon kyebaek.jpg", edu: ["Ph.D., Mechanical Engineering (2018.03–2023.02)", "Postdoc, Yonsei University (2023.03–2024.02)"], now: "Research Professor, Ewha Womans University, AI (2024.03–)" },
  { inst: "Yonsei University", deg: "Ph.D.", grad: 0, name: "Sungweon Kim", photo: "Sungweon Kim.jpg", edu: ["Ph.D., Mechanical Engineering"] },

  // ===== Yonsei University · M.S. =====
  { inst: "Yonsei University", deg: "M.S.", grad: 202511, name: "Woosuk Byun", photo: "Woosuk Byun.jpg", edu: ["M.S., Mechanical Engineering (2021.09–)"], now: "Patent Attorney (2025.11–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202502, name: "Minwoo Kim", photo: "Minwoo Kim.jpg", edu: ["M.S., Vehicle Convergence Engineering (2023.03–2025.02)"], now: "Research Engineer, Hyundai Motor Company (2025.02–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202502, name: "Jinwon Lee", photo: "Jinwon Lee.jpg", edu: ["M.S., Vehicle Convergence Engineering (2023.03–2025.02)"], now: "Research Engineer, Hyundai Mobis (2025.02–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202402, name: "Taekhyung Cho", photo: "Taekhyung Cho.jpg", edu: ["M.S., Vehicle Convergence Engineering (2022.03–2024.02)"], now: "Research Engineer, Hyundai Motor Company (2024.02–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202402, name: "Hyunwoo Ryu", photo: "Hyunwoo Ryu.jpg", edu: ["M.S., Artificial Intelligence (2022.03–2024.02)"], now: "Ph.D. Student, MIT, EECS (2024.08–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202208, name: "Hyeonwoo Lee", photo: "Hyeonwoo Lee.jpg", edu: ["M.S., Mechanical Engineering (2020.03–2022.08)"], now: "Ph.D. Candidate, KAIST, Urban Robotics Lab (2022.09–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202202, name: "Byounghyun Choi", photo: "Byounghyun Choi.jpg", edu: ["M.S., Vehicle Convergence Engineering (2020.03–2022.02)"], now: "Research Engineer, Hyundai Mobis (2022.02–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202108, name: "Jeonghoon Lee", photo: "Jeonghoon Lee.jpg", edu: ["M.S., Mechanical Engineering (2019.03–2021.08)"], now: "ML Researcher, Samsung Research (2022.08–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202108, name: "Seungchul Ha", photo: "seungchul ha.jpg", edu: ["M.S., Mechanical Engineering (2017.03–2021.08)"], now: "Research Engineer, Hanwha Robotics (2022.08–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202102, name: "Joohwan Seo", photo: "Joohwan Seo.jpg", edu: ["M.S., Mechanical Engineering (2019.03–2021.02)"], now: "Ph.D. Candidate, UC Berkeley, Computer Mechanics Lab (2021.08–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202102, name: "Daewoong Hwang", photo: "Daewoong Hwang.jpg", edu: ["M.S., Vehicle Convergence Engineering (2019.03–2021.02)"], now: "Research Engineer, Hyundai Motor Company (2021.02–)" },
  { inst: "Yonsei University", deg: "M.S.", grad: 202002, name: "Sunje Lee", photo: "Sunje Lee.jpg", edu: ["M.S., Mechanical Engineering (2017.03–2020.02)"] },

  // ===== Yonsei University · B.S. =====
  { inst: "Yonsei University", deg: "B.S.", grad: 202402, name: "Jiwoo Kim", photo: "Jiwoo Kim.jpg", edu: ["B.S., Electrical and Electronic Engineering (2019.03–2024.02)"], now: "Ph.D. Student, Duke University, ECE (2024.08–)" },
  { inst: "Yonsei University", deg: "B.S.", grad: 202308, name: "Seoyeon Choi", photo: "Seoyeon Choi.jpg", edu: ["B.S., Mechanical Engineering (2019.03–2023.08)"], now: "M.S./Ph.D. Student, UC Berkeley, Mechanical Engineering (2024.08–)" },
  { inst: "Yonsei University", deg: "B.S.", grad: 202102, name: "Seongwon Lee", photo: "Seongwon Lee.png", edu: ["B.S., Mechanical Engineering (2021.02)"], now: "Ph.D. Student, University of Illinois Urbana-Champaign (2021.08–)" },

  // ===== Michigan State University · Ph.D. =====
  { inst: "Michigan State University", deg: "Ph.D.", grad: 202100, name: "Connor Boss", photo: "Connor Boss.jpg", edu: ["B.S. (2015), Ph.D. (2021), Electrical Engineering"], now: "Senior Professional Staff, Johns Hopkins University APL" },
  { inst: "Michigan State University", deg: "Ph.D.", grad: 201800, name: "Ahmed Ramadan", photo: "Ahmed Ramadan.jpg", edu: ["Ph.D., Mechanical Engineering (2014–2018)"] },
  { inst: "Michigan State University", deg: "Ph.D.", grad: 201700, name: "Huan N. Do", photo: "Huan Do.jpg", edu: ["Ph.D., Mechanical Engineering (2013–2017)", "B.S., KAIST (2012)"] },
  { inst: "Michigan State University", deg: "Ph.D.", grad: 201500, name: "Joonho Lee", photo: "Joonho Lee.png", edu: ["Ph.D., Michigan State University (2015)", "M.S., Yonsei University (2006); B.S., Dong-a University (2004)"], now: "Senior Engineer, Boeing Research and Technology" },
  { inst: "Michigan State University", deg: "Ph.D.", grad: 201300, name: "M. Cody Priess", photo: "Cody Priess.jpg", edu: ["Ph.D., Mechanical Engineering (2010–2013)", "M.S., Mechanical Engineering (2008–2010)"] },
  { inst: "Michigan State University", deg: "Ph.D.", grad: 201300, name: "Mahdi Jadaliha", photo: "Mahdi Jadaliha.jpg", edu: ["Ph.D., Mechanical Engineering (2010–2013)"], now: "Director of Product Development, Mastercard" },
  { inst: "Michigan State University", deg: "Ph.D.", grad: 201200, name: "Andrew White", photo: "Andrew White.png", edu: ["Ph.D. (2012), M.S. (2008), B.S. (2006), Mechanical Engineering"], now: "Advanced Powertrain Controls Engineer, FCA Fiat Chrysler" },
  { inst: "Michigan State University", deg: "Ph.D.", grad: 201100, name: "Yunfei Xu", photo: "Yunfei Xu.jpg", edu: ["Ph.D., Michigan State University (2011)", "M.S./B.S., Tsinghua University (2007, 2004)"], now: "Software Researcher, Denso International America" },

  // ===== Michigan State University · M.S. =====
  { inst: "Michigan State University", deg: "M.S.", grad: 201300, name: "Ahsan Ijaz", photo: "Ahsan Ijaz.jpg", edu: ["M.S., Electrical and Computer Engineering (2011–2013)"] },
  { inst: "Michigan State University", deg: "M.S.", grad: 201300, name: "Andrey Maslennikov", photo: "Andrey Maslennikov.jpg", edu: ["M.S., Mechanical Engineering (2011–2013)"] },
  { inst: "Michigan State University", deg: "M.S.", grad: 201000, name: "Azizah Muhammad", photo: "MSU.jpg", edu: ["M.S., Mechanical Engineering (2008–2010)"] },
  { inst: "Michigan State University", deg: "M.S.", grad: 200900, name: "William Lee Smits", photo: "MSU.jpg", edu: ["M.S., Mechanical Engineering (2007–2009)"] },

  // ===== Michigan State University · Exchange =====
  { inst: "Michigan State University", deg: "Exchange", grad: 201500, name: "Charles Carvalho de Agular", photo: "Charles Carvalho de Agular.jpg", edu: ["Exchange Student, Brazil Scientific Mobility Program (Summer 2015)"] },
];

const INST_ORDER = ["Yonsei University", "Michigan State University"];
const DEG_ORDER = ["Ph.D.", "M.S.", "B.S.", "Exchange"];

const alumInitials = (n) => n.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

const alumCard = (a) => `
  <article class="person">
    ${a.photo
      ? `<img class="person__photo" src="/images/people/Alumni/${encodeURIComponent(a.photo)}" alt="${a.name}" />`
      : `<div class="person__photo" data-initials="${alumInitials(a.name)}"></div>`}
    <div class="person__body">
      <h3>${a.name}</h3>
      ${a.edu.map((e) => `<p class="alum__edu">${e}</p>`).join("")}
      ${a.now ? `<p class="alum__now">${a.now}</p>` : ""}
    </div>
  </article>`;

const alumniBox = document.getElementById("alumni");
if (alumniBox) {
  alumniBox.innerHTML = INST_ORDER.map((inst) => {
    const blocks = DEG_ORDER.map((deg) => {
      const list = ALUMNI.filter((a) => a.inst === inst && a.deg === deg).sort((x, y) => y.grad - x.grad);
      if (!list.length) return "";
      return `<h3 class="alum-deg">${deg}</h3><div class="people">${list.map(alumCard).join("")}</div>`;
    }).join("");
    return `<section class="alum-inst"><h2 class="alum-inst__title">${inst}</h2>${blocks}</section>`;
  }).join("");
}
