// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close the mobile menu after tapping a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Theme toggle =====
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);
toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}); 

// ===== Language toggle =====
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'ar';

function applyLanguage(lang) {
  currentLang = lang;
  if (lang === 'en') {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
    langToggle.textContent = 'AR';
  } else {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');
    langToggle.textContent = 'EN';
  }
  document.querySelectorAll('[data-ar][data-en]').forEach(el => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ar;
  });
  localStorage.setItem('lang', lang);

  // Re-render dynamic content with new language
  renderCerts();
  renderProjects();
  renderCourses();
  updateAboutToggleText();
}

langToggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
});


// ===== About Me expandable bio =====
const aboutFull = document.getElementById('aboutFull');
const aboutToggleBtn = document.getElementById('aboutToggleBtn');
let aboutExpanded = false;

function updateAboutToggleText() {
  const isEn = currentLang === 'en';
  if (isEn) {
    aboutToggleBtn.textContent = aboutExpanded ? 'Show less' : 'Read more';
  } else {
    aboutToggleBtn.textContent = aboutExpanded ? 'عرض أقل' : 'اقرأ المزيد';
  }
}

aboutToggleBtn.addEventListener('click', () => {
  aboutExpanded = !aboutExpanded;
  aboutFull.classList.toggle('open', aboutExpanded);
  updateAboutToggleText();
});

// ===== Data =====
const skills = ["HTML","CSS","JavaScript","Python","Java","C++","SQL","Power BI","Git",
  "GitHub","Artificial Intelligence","Machine Learning","Data Analytics","Data Visualization",
  "Networking","Subnetting","VLANs","Database Design","Problem Solving","Algorithmic Thinking"
];

const certs = [
  {
    id: 'cert-1',
    title:        "أساسيات تطوير الويب ",
    titleEn:      "Web Development Fundamentals ",
    issuer:       "IBM",
    issuerEn:     "IBM",
    date:         "يونيو ٢٠٢٦",
    dateEn:       "June 2026",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
  <polyline points="16 18 22 12 16 6"/>
  <polyline points="8 6 2 12 8 18"/>
  <line x1="12" y1="2" x2="12" y2="22" opacity="0.4"/></svg>`,
    description:  "دورة شاملة حول أساسيات تطوير الويب باستخدام HTML وCSS وJavaScript، مع التركيز على بناء صفحات ويب تفاعلية.",
    descriptionEn:"A comprehensive course on web development fundamentals using HTML, CSS, and JavaScript, focusing on building interactive web pages.",
    certificateUrl: "https://www.credly.com/badges/6e619c48-cedb-49ff-ae56-73eb062b7afd"
  },
  {
    id: 'cert-2',
    title:        "قواعد البيانات SQL & Relational",
    titleEn:      "Databases SQL & Relational",
    issuer:       "IBM",
    issuerEn:     "IBM",
    date:         "يناير ٢٠٢٦",
    dateEn:       "January 2026",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>`,
    description:  "دورة شاملة حول قواعد البيانات العلائقية، استعلامات SQL، إدارة البيانات، وتصميم قواعد البيانات.",
    descriptionEn:"A comprehensive course on relational databases, SQL queries, data management, and database design.",
    certificateUrl: "https://courses.cognitiveclass.ai/certificates/675a181928ea402586307386594819d6"
  },
  {
    id: 'cert-3',
    title:        "مبادئ الذكاء الاصطناعي",
    titleEn:      "Principles of Artificial Intelligence",
    issuer:       "سدايا",
    issuerEn:     "SDAIA",
    date:         "أغسطس ٢٠٢٥",
    dateEn:       "August 2025",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <rect x="2" y="3" rx="2" width="20" height="14"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8h2l1 3 2-6 1 3h3"/></svg>`,
    description:  "مقدمة شاملة لمبادئ الذكاء الاصطناعي والخوارزميات الأساسية وتطبيقاتها العملية.",
    descriptionEn:"A comprehensive introduction to AI principles, core algorithms, and their practical applications.",
    certificateUrl: "https://learn.samai.futurex.sa/mod/customcert/verify_certificate.php?code=hsvpVOZ32n&qrcode=1"
  },
{
    id: 'cert-4',
    title:        "مفاهيم الذكاء الاصطناعي والتطبيقات المتقدمة",
    titleEn:      "AI Concepts & Advanced Applications",
    issuer:       "سدايا",
    issuerEn:     "SDAIA",
    date:         "يناير ٢٠٢٥",
    dateEn:       "January 2025",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 12 2z"/>
      <path d="M8 12H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1l1 3h6l1-3h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3"/>
      <circle cx="9" cy="17" r="0.5" fill="currentColor"/>
      <circle cx="15" cy="17" r="0.5" fill="currentColor"/></svg>`,
    description:  "دورة متقدمة تغطي أحدث تطبيقات الذكاء الاصطناعي والشبكات العصبية العميقة وتعلم الآلة المتقدم.",
    descriptionEn:"An advanced course covering the latest AI applications, deep neural networks, and advanced machine learning techniques.",
    certificateUrl: "https://learn.samai.futurex.sa/mod/customcert/verify_certificate.php?code=SMJ25BXhxM&qrcode=1"
  
},
{
    id: 'cert-5',
    title:        "Power BI للمبتدئين (عبر Simplilearn، محتوى من Microsoft)",
    titleEn:      "Power BI for Beginners (via Simplilearn, Microsoft course content)",
    issuer:       "Simplilearn SkillUp",
    issuerEn:     "Simplilearn SkillUp",
    date:         "يوليو ٢٠٢٦",
    dateEn:       "July 2026",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M7 15v-4M12 15V7M17 15v-8"/></svg>`,
    description:  "إتمام كورس Power BI for Beginners، وهو كورس بمحتوى من Microsoft يُقدَّم عبر منصة Simplilearn. ملاحظة: هذه شهادة إتمام (Completion Certificate) من Simplilearn، وليست شهادة اعتماد رسمية من Microsoft.",
    descriptionEn:"Completed the Power BI for Beginners course, featuring Microsoft-authored content delivered via the Simplilearn platform. Note: this is a completion certificate from Simplilearn, not an official Microsoft certification.",
    certificateUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTA0OTI1MTFfMTA3NDQ4MTlfMTc4NDU5MzUzNTc3OS5wbmciLCJ1c2VybmFtZSI6IkFzZWVsIE11bmlmIEFsYW5hemkgIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F10492511_10744819_1784593535779.png&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1q%2FyM0wpNQmPcDNNsq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwALMm0UPwAAAA%3D%3D&_branch_match_id=1617857320959233990"
  }

];
const projects = [
  {
    id: 'proj-1',
    title:    "نظام إدارة المكتبة",
    titleEn:  "Library Management System",
    period:   "أكتوبر — نوفمبر ٢٠٢٥",
    periodEn: "October — November 2025",
    desc:     "نظام قاعدة بيانات لإدارة الكتب والمستعيرين وعمليات الإعارة والإرجاع وحالة الكتب، مع البحث السريع.",
    descEn:   "A database system for managing books, borrowers, lending and return operations, book status, and fast search functionality.",
    tags: ["Access","Data Structures","Database Design"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      <path d="M8 7h8M8 11h6"/></svg>`,
    fullDesc:   "مشروع شامل لنظام إدارة مكتبة يتضمن:\n• تصميم قاعدة بيانات متقدمة\n• واجهة للبحث والفرز السريع\n• إدارة عمليات الإعارة والإرجاع\n• تتبع حالة الكتب والمستعيرين\n• تقارير شاملة للمكتبة",
    fullDescEn: "A comprehensive library management system project including:\n• Advanced database design\n• Fast search and sorting interface\n• Lending and return operations management\n• Book and borrower status tracking\n• Comprehensive library reports",
    liveUrl: "",
    codeUrl: "https://github.com/Aaseel11/Library-Management-System"
  },
 {
    id: 'proj-2',
    title:    "شبكة الحاسب — أقسام علوم الحاسب وعلوم البيانات",
    titleEn:  "Computer Network — CS & DS Departments",
    period:   "نوفمبر ٢٠٢٥",
    periodEn: "November 2025",
    desc:     "تصميم وربط شبكتين لقسمي علوم البيانات وعلوم الحاسب باستخدام Cisco Packet Tracer، مع توزيع IP، توجيه ثابت، وخوادم DNS.",
    descEn:   "Design and connection of two departmental networks (Data Science and Computer Science) using Cisco Packet Tracer, with IP addressing, static routing, and DNS servers.",
    tags: ["Cisco Packet Tracer","Static Routing","DNS","Subnetting"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    fullDesc:   "مشروع تصميم شبكة يشمل:\n• شبكتين منفصلتين (Class C) لكل قسم، 7 أجهزة لكل شبكة\n• ربط الشبكتين عبر راوترين باتصال Serial\n• توجيه ثابت (Static Routing) بالاتجاهين\n• خوادم DNS بكل شبكة لربط أسماء الأجهزة بعناوينها\n• اختبار ping ناجح داخل نفس الشبكة (بالاسم) وبين الشبكتين (بالـIP)",
    fullDescEn: "A network design project including:\n• Two separate Class C networks (7 devices each)\n• Router-to-router connection via a Serial link\n• Bidirectional static routing\n• DNS servers in each network resolving device names to IPs\n• Successful ping tests within the same network (by name) and across networks (by IP)",
    liveUrl: "",
    codeUrl: "https://github.com/Aaseel11/College-Network-CS-DS-Departments"
  },
  {
    id: 'proj-3',
    title:    "لوحة رسم تفاعلي",
    titleEn:  "Hidden Canvas",
    period:   "نوفمبر ٢٠٢٥ — يوليو ٢٠٢٦",
    periodEn: "November 2025 — July 2026",
    desc:     "لوحة رسم تفاعلي تتيح للمستخدمين إنشاء وتحرير ومشاركة الرسوم التوضيحية بشكل تفاعلي. أُعيد بناؤه وتطويره بالكامل كمشروع شخصي مستقل في يونيو–يوليو 2026.",
    descEn:   "An interactive drawing board that allows users to create, edit, and share illustrations interactively. Fully rebuilt and developed as an independent personal project in June–July 2026.",
    tags: ["JavaScript","HTML5","CSS3"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    fullDesc:   "لوحة رسم تفاعلية متقدمة تشمل:\n• أدوات رسم متعددة (فرشاة، قلم، أشكال)\n• دعم الطبقات والتراجع\n• حفظ ومشاركة الرسوم التوضيحية\n• واجهة مستخدم سهلة الاستخدام",
    fullDescEn: "An advanced interactive drawing board including:\n• Multiple drawing tools (brush, pen, shapes)\n• Layer support and undo functionality\n• Save and share illustrations\n• User-friendly interface",
    liveUrl: "https://aaseel11.github.io/Hidden-Canvas/"
  },
  {
    id: 'proj-4',
    title:    "برنامج إدارة المشاريع للتعليم",
    titleEn:  "Project Management Software for Education",
    period:   "نوفمبر ٢٠٢٥",
    periodEn: "November 2025",
    desc:     "تصميم أولي (Prototype) لبرنامج إدارة مشاريع تعليمي، مبني وموزّع عبر Figma Sites.",
    descEn:   "A UI/UX prototype for an educational project management tool, designed and published with Figma Sites.",
    tags: ["Figma","UI/UX Design","Prototyping"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <rect x="3" y="3" rx="2" width="10" height="10"/>
      <path d="M9 3v18M3 9h6M3 15h6"/>
      <path d="M13 8h5M13 12h5M13 16h3"/></svg>`,
    fullDesc:   "تصميم واجهات لبرنامج إدارة مشاريع تعليمي، يشمل:\n• تصميم تجربة المستخدم (UX) للتدفقات الأساسية\n• واجهات (UI) لإدارة المهام والمشاريع الأكاديمية\n• نشر تفاعلي عبر Figma Sites للمعاينة المباشرة",
    fullDescEn: "A UI/UX design for an educational project management tool, including:\n• UX design for core user flows\n• UI screens for managing academic tasks and projects\n• Interactive publishing via Figma Sites for live preview",
    liveUrl: "https://glossy-boar-47337945.figma.site/"
  },
{
      id: 'proj-5',
    title:    "نظام تسجيل المقررات الجامعية",
    titleEn:  "University Course Registration System",
    period:   "١٣ — ٢٣ يناير ٢٠٢٥",
    periodEn: "January 13 — 23, 2025",
    desc:     "نظام قاعدة بيانات لإدارة المقررات الجامعية والطلاب، مع إمكانية التسجيل والبحث السريع.",
    descEn:   "A database system for managing university courses and students, with registration and fast search capabilities.",
    tags: ["Oracle SQL", "Database Design", "SQL Queries"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
      <path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M2 8v6M22 8v6"/><path d="M6 10.5v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"/></svg>`,
    fullDesc:   "مشروع قاعدة بيانات شامل لنظام تسجيل المقررات الجامعية باستخدام Oracle SQL، يتضمن:\n• تصميم قاعدة بيانات علائقية للطلاب والمقررات والتسجيل\n• جدول ربط (Enrollments) لإدارة علاقة متعدد إلى متعدد بين الطلاب والمقررات\n• استعلامات لعرض تسجيلات الطلاب ودرجاتهم\n• استعلام لحساب عدد الطلاب المسجلين في كل مقرر\n• View جاهز (Student_Report) لتقارير موحّدة\n• فهارس (Indexes) لتحسين أداء الاستعلامات",
    fullDescEn: "A comprehensive database project for a University Course Registration System built with Oracle SQL, including:\n• Relational database design for students, courses, and enrollments\n• A junction table (Enrollments) modeling a many-to-many relationship between students and courses\n• Queries to display student registrations and grades\n• A query to count enrolled students per course\n• A ready-made view (Student_Report) for unified reporting\n• Indexes for improved query performance",
    liveUrl: "",
    codeUrl: "https://github.com/Aaseel11/University-Course-Registration-System"
},
];
const courses = [
  { ar: "الذكاء العاطفي ",           en: "Emotional Intelligence" },
  { ar: "إدارة الضغوط",           en: "Stress Management" },
  { ar: "أساسيات الإسعافات الأولية", en: "First Aid Basics" },
  { ar: "مهارات إلقاء و الحوار ", en:"Presentation and dialogue skills"},
  { ar: "إدارة المشاريع ",           en: "Project Management" },
  { ar:  "الذكاء الأصطناعي و تطبيقاته في حياتنا اليومية",en: "AI Applications in Daily Life" },
  { ar: "التفكير الخورازميات ",   en: "Algorithmic Thinking" },
  { ar: "هيكل و قواعد بيانات النظام "       , en: " Structures & Database system" },
  { ar: "شبكات الحاسب ",       en: "Computer Networks" },
  { ar: "تطوير المواقع",         en: "Web Development" },
  { ar: "هندسة البرمجيات ",    en: "Software Engineering" },
  { ar: "تحليل البيانات ",          en: "Data Analysis" },
];

// ===== Modal System =====
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function openModal(content) {
  modalBody.innerHTML = content;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Cert modal
function showCertModal(cert) {
  const isEn = currentLang === 'en';
  const urlButton = cert.certificateUrl
    ? `<a href="${cert.certificateUrl}" target="_blank" rel="noopener noreferrer" class="cert-link-btn">
        ${isEn ? 'View Certificate' : 'عرض الشهادة'}
    </a>`
    : '';

  const content = `
    <h2>${isEn ? cert.titleEn : cert.title}</h2>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isEn ? 'Issuer:' : 'الجهة المُصدِّرة:'}</span>
        <span>${isEn ? cert.issuerEn : cert.issuer}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isEn ? 'Date:' : 'التاريخ:'}</span>
        <span>${isEn ? cert.dateEn : cert.date}</span>
      </div>
    </div>
    <p>${isEn ? cert.descriptionEn : cert.description}</p>
    ${urlButton}
  `;
  openModal(content);
}

// Project modal
function showProjectModal(proj) {
  const isEn = currentLang === 'en';
  const tagsHTML = proj.tags.map(t => `<div class="modal-tag">${t}</div>`).join('');
  const liveButton = proj.liveUrl
    ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="cert-link-btn">
        ${isEn ? 'View Live' : 'عرض المشروع'}
      </a>`
    : '';
  const codeButton = proj.codeUrl
    ? `<a href="${proj.codeUrl}" target="_blank" rel="noopener noreferrer" class="cert-link-btn code-btn">
        ${isEn ? 'View Code' : 'عرض الكود'}
      </a>`
    : '';
  const content = `
    <h2>${isEn ? proj.titleEn : proj.title}</h2>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isEn ? 'Period:' : 'الفترة الزمنية:'}</span>
        <span>${isEn ? proj.periodEn : proj.period}</span>
      </div>
    </div>
    <p><strong>${isEn ? 'Description:' : 'الوصف:'}</strong><br/>${isEn ? proj.descEn : proj.desc}</p>
    <p style="white-space: pre-wrap;"><strong>${isEn ? 'Details:' : 'التفاصيل:'}</strong><br/>${isEn ? proj.fullDescEn : proj.fullDesc}</p>
    <div class="modal-meta">
      <span class="modal-meta-label">${isEn ? 'Technologies:' : 'التقنيات المستخدمة:'}</span>
      <div class="modal-tags">${tagsHTML}</div>
    </div>
    <div style="display:flex; gap:10px; flex-wrap:wrap;">${liveButton}${codeButton}</div>
  `;
  openModal(content);
}

// Course modal
function showCourseModal(course) {
  const isEn = currentLang === 'en';
  const name = isEn ? course.en : course.ar;
  const content = `
    <h2>${name}</h2>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">${isEn ? 'Type:' : 'النوع:'}</span>
        <span>${isEn ? 'Academic Course' : 'دورة دراسية'}</span>
      </div>
    </div>
    <p>${isEn
      ? 'Studied as part of my academic program at the University of Hail, gaining valuable practical experience.'
      : 'درسته كجزء من برنامجي الدراسي في جامعة حائل وكسبت منه خبرة عملية قيّمة.'
    }</p>
  `;
  openModal(content);
}

// ===== Render Skills =====
document.getElementById('skills-list').innerHTML =
  skills.map(s => `<span>${s}</span>`).join('');

// ===== Render Certs =====
function renderCerts() {
  const isEn = currentLang === 'en';
  document.getElementById('certs').innerHTML = certs.map(c => `
    <div class="card cert reveal" data-cert-id="${c.id}">
      <div class="icon">${c.icon}</div>
      <h3>${isEn ? c.titleEn : c.title}</h3>
      <div class="cert-meta">
        <span class="issuer">${isEn ? c.issuerEn : c.issuer}</span>
        <span class="date">${isEn ? c.dateEn : c.date}</span>
      </div>
    </div>`).join('');

  document.querySelectorAll('.cert').forEach(el => {
    el.addEventListener('click', function() {
      const cert = certs.find(c => c.id === this.dataset.certId);
      if (cert) showCertModal(cert);
    });
  });

  document.querySelectorAll('.reveal, .card').forEach(el => obs.observe(el));
}

// ===== Render Projects =====
function renderProjects() {
  const isEn = currentLang === 'en';
  document.getElementById('projects-list').innerHTML = projects.map(p => `
    <div class="card proj reveal" data-proj-id="${p.id}">
      <div class="icon">${p.icon}</div>
      <h3>${isEn ? p.titleEn : p.title}</h3>
      <div class="period">${isEn ? p.periodEn : p.period}</div>
      <p>${isEn ? p.descEn : p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>`).join('');

  document.querySelectorAll('.proj').forEach(el => {
    el.addEventListener('click', function() {
      const proj = projects.find(p => p.id === this.dataset.projId);
      if (proj) showProjectModal(proj);
    });
  });

  document.querySelectorAll('.reveal, .card').forEach(el => obs.observe(el));
}

// ===== Render Courses =====
function renderCourses() {
  const isEn = currentLang === 'en';
  document.getElementById('courses').innerHTML = courses.map((c, i) => `
    <div class="item reveal" data-course-index="${i}">
      <span class="bullet"></span><span>${isEn ? c.en : c.ar}</span>
    </div>`).join('');

  document.querySelectorAll('.courses .item').forEach(el => {
    el.addEventListener('click', function() {
      const idx = parseInt(this.dataset.courseIndex);
      showCourseModal(courses[idx]);
    });
  });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ===== Scroll Reveal =====
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      const langs = e.target.querySelectorAll('.lang');
      langs.forEach(l => {
        const fill = l.querySelector('.bar i');
        if (fill) fill.style.width = l.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.12 });



// ===== Backdrop animations =====
const chars = "01<>{}/=();*&%$#ABCDEF01";
const mat = document.getElementById('matrix');
const colCount = window.innerWidth < 600 ? 6 : 12;
for (let i = 0; i < colCount; i++) {
  const col = document.createElement('div');
  col.className = 'col';
  col.style.left = (i * (100 / colCount)) + '%';
  col.style.animationDuration = (8 + (i % 5) * 2) + 's';
  col.style.animationDelay = ((i * 0.7) % 6) + 's';
  let txt = '';
  for (let j = 0; j < 24; j++) txt += chars[Math.floor(Math.random() * chars.length)] + ' ';
  col.textContent = txt;
  mat.appendChild(col);
}

const nodes = [
  {x:15,y:20},{x:50,y:12},{x:85,y:22},
  {x:25,y:55},{x:60,y:50},{x:88,y:60},
  {x:18,y:85},{x:50,y:90},{x:80,y:85},
];
const edges = [[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[3,6],[4,7],[5,8],[6,7],[7,8],[1,7],[4,8]];
const ns = "http://www.w3.org/2000/svg";
const eG = document.getElementById('net-edges');
const pG = document.getElementById('net-packets');
const nG = document.getElementById('net-nodes');

edges.forEach(([a,b], i) => {
  const A = nodes[a], B = nodes[b];
  const ln = document.createElementNS(ns, 'line');
  ln.setAttribute('x1', A.x); ln.setAttribute('y1', A.y);
  ln.setAttribute('x2', B.x); ln.setAttribute('y2', B.y);
  eG.appendChild(ln);

  const pk = document.createElementNS(ns, 'circle');
  pk.setAttribute('r', '0.8');
  pk.setAttribute('cx', A.x); pk.setAttribute('cy', A.y);
  const anim1 = document.createElementNS(ns, 'animate');
  anim1.setAttribute('attributeName', 'cx');
  anim1.setAttribute('values', `${A.x};${B.x};${A.x}`);
  anim1.setAttribute('dur', (4 + (i % 4)) + 's');
  anim1.setAttribute('repeatCount', 'indefinite');
  const anim2 = document.createElementNS(ns, 'animate');
  anim2.setAttribute('attributeName', 'cy');
  anim2.setAttribute('values', `${A.y};${B.y};${A.y}`);
  anim2.setAttribute('dur', (4 + (i % 4)) + 's');
  anim2.setAttribute('repeatCount', 'indefinite');
  pk.appendChild(anim1); pk.appendChild(anim2);
  pG.appendChild(pk);
});

nodes.forEach((n, i) => {
  const c = document.createElementNS(ns, 'circle');
  c.setAttribute('cx', n.x); c.setAttribute('cy', n.y);
  c.setAttribute('r', '1.6');
  c.setAttribute('class', 'packet');
  c.style.animationDelay = (i * 0.2) + 's';
  nG.appendChild(c);
});

const bars = document.getElementById('bars');
[30,18,42,25,50,35,45,28].forEach((h, i) => {
  const r = document.createElementNS(ns, 'rect');
  r.setAttribute('x', 10 + i * 11);
  r.setAttribute('y', 55 - h);
  r.setAttribute('width', 7);
  r.setAttribute('height', h);
  r.setAttribute('class', 'bar-anim');
  r.style.animationDelay = (i * 0.2) + 's';
  bars.appendChild(r);
});

const terminal = [
  "$ aseel ~/portfolio",
  "> npm run dream",
  "✓ compiling ideas...",
  "✓ training neural net",
  "✓ subnet 192.168.1.0/24",
  "$ deploy --to=future",
];
const tBody = document.getElementById('terminal-body');
terminal.forEach((line, i) => {
  const d = document.createElement('div');
  d.className = 'line';
  d.textContent = line;
  d.style.animationDelay = (i * 1.2) + 's';
  tBody.appendChild(d);
});

/* ========================================
SCROLL TO TOP
======================================== */

const btn = document.createElement("button");
btn.id = "scroll-top";
btn.textContent = "↑";
btn.title = "العودة للأعلى";

btn.style.cssText = [
    "position:fixed",
    "bottom:20px",
    "right:20px",
    "color:white",
    "border:none",
    "border-radius:50%",
    "width:44px",
    "height:44px",
    "font-size:20px",
    "cursor:pointer",
    "display:none",
    "z-index:999",
    "transition:background-color 0.3s ease"
].join(";");

document.body.appendChild(btn);

// ===== Theme-based styling for scroll button =====
const style = document.createElement("style");
style.textContent = `
    /* Light Mode */
    :root[data-theme="light"] #scroll-top {
        background-color: #3b82f6;
    }

    /* Dark Mode */
    :root[data-theme="dark"] #scroll-top {
        background-color: #0b1428; 
    }
`;

document.head.appendChild(style);

window.addEventListener("scroll", function () {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Initial render + language apply =====
applyLanguage(currentLang);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

