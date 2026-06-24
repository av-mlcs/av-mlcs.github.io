// ============================================================
//  Lab News — single source of truth.
//  Add or edit an entry here; the home page (latest 4) and
//  /news/ (all) update automatically. Newest goes on top.
//
//    date : displayed date string, e.g. "2023"
//    text : the content. May contain inline <a> links (rendered as HTML).
// ============================================================
const NEWS = [
  { date: "2026", text: 'MLCS Lab is now recruiting student interns for the <a href="https://robotics-mlcs.github.io/" target="_blank" rel="noopener">robotics team</a> and the autonomous vehicle team. <a href="/join/">View details</a>' },
  { date: "2025", text: 'Professor Choi serves as the General Chair of <a href="https://www.ieeecss.org/conferences" target="_blank" rel="noopener">the IEEE Conference on Control Technology and Applications (CCTA) 2029</a>, which will be held in Seoul, South Korea. CCTA is one of the two flagship conferences of the IEEE Control Systems Society (CSS), alongside the Conference on Decision and Control (CDC), with a particular emphasis on control technologies and real-world applications.' },
  { date: "2023", text: 'Professor Choi serves as a Senior Editor of <a href="https://www.springer.com/journal/12555/" target="_blank" rel="noopener">the International Journal of Control, Automation, and Systems (IJCAS)</a> from 2023.' },
  { date: "2025", text: 'Professor Choi serves as a Guest Editor of <a href="https://link.springer.com/collections/ccbbgcaige/" target="_blank" rel="noopener">the Special Issue on Humanoid Robots and Physical AI for Manufacturing</a> in <a href="https://link.springer.com/journal/12541" target="_blank" rel="noopener">International Journal of Precision Engineering and Manufacturing</a> from 2025-2026.' },
  { date: "2023", text: 'Professor Choi served as the chair of the International Program Committee at <a href="http://mecc2023.a2c2.org/index.html" target="_blank" rel="noopener">The 3rd Modeling, Estimation and Control Conference (MECC 2023).</a>' },
  { date: "2022", text: 'Professor Choi served as a Guest Editor with a two-year term (2021 and 2022) for <a href="http://www.ieee-asme-mechatronics.org" target="_blank" rel="noopener">IEEE/ASME TMECH/AIM Focused Section on Emerging Topics.</a>' },
  { date: "2018", text: 'Professor Choi served as an Associate Editor for <a href="https://www.springer.com/journal/12555/" target="_blank" rel="noopener">The International Journal of Control, Automation, and Systems (IJCAS)</a>.' },
  { date: "2018", text: 'Professor Choi served as an Associate Editor for <a href="http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7083369" target="_blank" rel="noopener">IEEE Robotics and Automation Letters</a>.' },
  { date: "2018", text: 'Professor Choi served as an Associate Editor for <a href="http://icra2021.org" target="_blank" rel="noopener">2021 IEEE International Conference on Robotics and Automation.</a>' },
  { date: "2018", text: 'Professor Choi served as an Associate Editor for <a href="https://journaltool.asme.org/home/JournalDescriptions.cfm?JournalID=4&Journal=DS#" target="_blank" rel="noopener">ASME Journal of Dynamic Systems, Measurement and Control</a>.' },
  { date: "2018", text: 'Professor Choi served as an Associate Editor for <a href="http://www.springer.com/engineering/industrial+management/journal/12541" target="_blank" rel="noopener">International Journal of Precision Engineering and Manufacturing</a>.' },
  { date: "2017", text: 'We are always seeking for talented and highly motivated researchers (graduate students, postdocs, and undergradate interns). If you are interested in participating in research and collaboration, please feel free to contact <a href="/people/">Professor Choi</a>.' },
  { date: "2016", text: 'Professor Choi now teaching in <a href="https://me.yonsei.ac.kr/me/index.do" target="_blank" rel="noopener">School of Mechanical Engineering</a> at <a href="https://www.yonsei.ac.kr/sc/index.jsp" target="_blank" rel="noopener">Yonsei University</a> from Fall 2016.' },
  { date: "2017", text: "Five graduate students joined us from 2017!" },
];
