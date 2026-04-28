// ===== CONFIG =====
const API_BASE = 'http://localhost:3000/api'; // Change to your backend URL

// ===== PORTFOLIO DATA (edit these) =====
const PORTFOLIO = {
  name: 'Alex Johnson',
  title: 'Full Stack Software Developer',
  intro: 'I build fast, scalable, and beautiful web applications. Passionate about clean code, great UX, and solving real problems.',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  photo: '', // Set to image path e.g. 'assets/photo.jpg', or leave empty for placeholder
  bio: `I'm a full-stack developer with 3+ years of experience building web applications from the ground up. I love working across the stack — from designing clean APIs to crafting pixel-perfect UIs. When I'm not coding, I'm exploring new technologies or contributing to open source.`,
  skills: [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
    { category: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
    { category: 'Tools & Infra', items: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MySQL'] },
  ],
  skillCards: [
    {
      icon: '🌐', title: 'Frontend',
      bars: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 75 },
      ]
    },
    {
      icon: '⚙️', title: 'Backend',
      bars: [
        { name: 'Node.js / Express', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      icon: '🗄️', title: 'Databases',
      bars: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MongoDB', level: 60 },
      ]
    },
    {
      icon: '🛠️', title: 'Tools & DevOps',
      bars: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'Linux / CLI', level: 70 },
      ]
    },
  ],
  services: [
    { icon: '🖥️', title: 'Frontend Development', desc: 'Building responsive, pixel-perfect UIs with React, HTML, CSS & JavaScript.' },
    { icon: '🔧', title: 'Backend Development', desc: 'Designing robust REST APIs and server-side logic with Node.js, Express & PHP.' },
    { icon: '🗄️', title: 'Database Design', desc: 'Structuring and optimizing databases with MySQL, PostgreSQL and MongoDB.' },
  ],
  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Passion' },
  ],
  techStack: [
    { tab: 'All', techs: [
      { name: 'HTML5', emoji: '🌐' }, { name: 'CSS3', emoji: '🎨' }, { name: 'JavaScript', emoji: '⚡' },
      { name: 'React', emoji: '⚛️' }, { name: 'Node.js', emoji: '🟢' }, { name: 'Express', emoji: '🚂' },
      { name: 'PHP', emoji: '🐘' }, { name: 'MySQL', emoji: '🐬' }, { name: 'PostgreSQL', emoji: '🐘' },
      { name: 'MongoDB', emoji: '🍃' }, { name: 'Git', emoji: '🔀' }, { name: 'Docker', emoji: '🐳' },
      { name: 'Linux', emoji: '🐧' }, { name: 'VS Code', emoji: '💻' }, { name: 'REST API', emoji: '🔗' },
    ]},
    { tab: 'Frontend', techs: [
      { name: 'HTML5', emoji: '🌐' }, { name: 'CSS3', emoji: '🎨' }, { name: 'JavaScript', emoji: '⚡' }, { name: 'React', emoji: '⚛️' },
    ]},
    { tab: 'Backend', techs: [
      { name: 'Node.js', emoji: '🟢' }, { name: 'Express', emoji: '🚂' }, { name: 'PHP', emoji: '🐘' }, { name: 'REST API', emoji: '🔗' },
    ]},
    { tab: 'Database', techs: [
      { name: 'MySQL', emoji: '🐬' }, { name: 'PostgreSQL', emoji: '🐘' }, { name: 'MongoDB', emoji: '🍃' },
    ]},
    { tab: 'Tools', techs: [
      { name: 'Git', emoji: '🔀' }, { name: 'Docker', emoji: '🐳' }, { name: 'Linux', emoji: '🐧' }, { name: 'VS Code', emoji: '💻' },
    ]},
  ],
  learning: ['TypeScript', 'Next.js', 'AWS', 'GraphQL', 'Redis', 'Kubernetes', 'Tailwind CSS', 'Prisma', 'tRPC', 'Supabase'],
  featured: {
    icon: '🏆',
    title: 'E-Commerce Platform',
    desc: 'A full-stack shopping platform with user authentication, product management, cart system, and Stripe payment integration. Built with React on the frontend and Node.js/Express on the backend.',
    techs: ['React', 'Node.js', 'MySQL', 'Stripe', 'JWT'],
    github: '#',
    demo: '#',
  },
  projectCategories: ['All', 'Frontend', 'Backend', 'Full Stack'],
  journey: [
    {
      year: '2019',
      title: 'The Spark 🔥',
      story: `It all started when I was curious about how websites worked. I opened DevTools for the first time, saw the HTML behind a webpage, and thought — "I can build this." I wrote my first Hello World in HTML that same night and couldn't sleep from excitement.`
    },
    {
      year: '2020',
      title: 'Learning the Basics 📚',
      story: `I spent months on YouTube and freeCodeCamp learning HTML, CSS, and JavaScript. I built small projects — a calculator, a to-do list, a weather app. Every bug I fixed felt like a victory. I realized programming wasn't just a skill, it was a superpower.`
    },
    {
      year: '2021',
      title: 'Going Deeper 🚀',
      story: `I discovered Node.js and backend development. Suddenly I could build full applications — not just pretty pages. I learned about databases, REST APIs, and how the internet actually works under the hood. This year changed everything for me.`
    },
    {
      year: '2022',
      title: 'First Real Projects 💼',
      story: `I started building real projects for real people. My first freelance client, my first deployed app, my first time seeing someone use something I built. The feeling was indescribable. I knew this was my path.`
    },
    {
      year: '2023',
      title: 'Growing as a Developer 🌱',
      story: `I dove into React, TypeScript, Docker, and cloud services. I started contributing to open source and collaborating with other developers. I learned that writing code is only half the job — communication, planning, and teamwork matter just as much.`
    },
    {
      year: 'Now',
      title: 'Building the Future ✨',
      story: `Today I'm building scalable full-stack applications and constantly learning. My goal is to create software that makes a real difference in people's lives. The journey is far from over — it's just getting started.`
    },
  ]
};

// ===== THEME =====
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== MOBILE NAV =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ===== FADE-IN ANIMATION =====
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); } });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ===== RENDER HERO =====
function renderHero() {
  document.getElementById('hero-name').innerHTML = `Hi, I'm <span class="highlight">${PORTFOLIO.name}</span>`;
  document.getElementById('hero-title').textContent = PORTFOLIO.title;
  document.getElementById('hero-desc').textContent = PORTFOLIO.intro;
}

// ===== RENDER ABOUT =====
function renderAbout() {
  document.getElementById('about-bio').textContent = PORTFOLIO.bio;

  const photoWrap = document.getElementById('photo-wrap');
  if (PORTFOLIO.photo) {
    photoWrap.innerHTML = `<img src="${PORTFOLIO.photo}" alt="${PORTFOLIO.name}" />`;
  } else {
    photoWrap.innerHTML = `<div class="photo-placeholder">📸<p>Upload your photo</p></div>`;
  }

  const skillsContainer = document.getElementById('skills-container');
  skillsContainer.innerHTML = PORTFOLIO.skills.map(cat => `
    <div class="skill-category">
      <h4>${cat.category}</h4>
      <div class="skill-tags">
        ${cat.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===== RENDER SKILLS SECTION =====
function renderSkills() {
  // Services
  document.getElementById('skills-services').innerHTML = PORTFOLIO.services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
    </div>`).join('');

  // Stats
  document.getElementById('skills-stats').innerHTML = PORTFOLIO.stats.map(s => `
    <div class="stat-item">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('');

  // Progress bar cards
  const container = document.getElementById('skills-section-container');
  container.innerHTML = `<div class="skills-section-grid">${PORTFOLIO.skillCards.map(card => `
    <div class="skill-card fade-in">
      <div class="skill-card-header">
        <span class="skill-card-icon">${card.icon}</span>
        <h3 class="skill-card-title">${card.title}</h3>
      </div>
      <div class="skill-bar-list">
        ${card.bars.map(b => `
          <div class="skill-bar-item">
            <div class="skill-bar-label"><span>${b.name}</span><span>${b.level}%</span></div>
            <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${b.level}"></div></div>
          </div>`).join('')}
      </div>
    </div>`).join('')}</div>`;

  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => { bar.style.width = bar.dataset.level + '%'; });
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  container.querySelectorAll('.skill-card').forEach(card => { fadeObserver.observe(card); barObserver.observe(card); });

  // Tech stack tabs
  const tabsEl = document.getElementById('skills-tech-tabs');
  const gridEl = document.getElementById('skills-tech-grid');

  function renderTechTab(tabName) {
    tabsEl.querySelectorAll('.tech-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
    const found = PORTFOLIO.techStack.find(t => t.tab === tabName);
    gridEl.innerHTML = (found ? found.techs : []).map(t => `
      <div class="tech-pill">${t.emoji} <span>${t.name}</span></div>`).join('');
  }

  tabsEl.innerHTML = PORTFOLIO.techStack.map(t =>
    `<button class="tech-tab" data-tab="${t.tab}">${t.tab}</button>`).join('');
  tabsEl.addEventListener('click', e => { if (e.target.classList.contains('tech-tab')) renderTechTab(e.target.dataset.tab); });
  renderTechTab('All');

  // Currently Learning ticker
  const items = [...PORTFOLIO.learning, ...PORTFOLIO.learning]; // duplicate for seamless loop
  document.getElementById('learning-inner').innerHTML = items.map(t =>
    `<span class="learning-item">${t}</span>`).join('');
}

// ===== RENDER JOURNEY =====
function renderJourney() {
  const container = document.getElementById('journey-container');
  container.innerHTML = PORTFOLIO.journey.map((item, i) => `
    <div class="journey-item fade-in" style="transition-delay: ${i * 0.1}s">
      <div class="journey-line">
        <div class="journey-dot"></div>
        ${i < PORTFOLIO.journey.length - 1 ? '<div class="journey-connector"></div>' : ''}
      </div>
      <div class="journey-card">
        <span class="journey-year">${item.year}</span>
        <h4 class="journey-title">${item.title}</h4>
        <p class="journey-story">${item.story}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

// ===== RENDER PROJECTS =====
function renderProjectFilters(projects, activeFilter) {
  const filtersEl = document.getElementById('project-filters');
  filtersEl.innerHTML = PORTFOLIO.projectCategories.map(cat =>
    `<button class="proj-filter-btn${cat === activeFilter ? ' active' : ''}" data-cat="${cat}">${cat}</button>`
  ).join('');
}

async function renderProjects() {
  // Featured project
  const f = PORTFOLIO.featured;
  document.getElementById('featured-project').innerHTML = `
    <div class="featured-badge">⭐ Featured Project</div>
    <div class="featured-body">
      <div class="featured-left">
        <div class="featured-icon">${f.icon}</div>
        <h3 class="featured-title">${f.title}</h3>
        <p class="featured-desc">${f.desc}</p>
        <div class="featured-techs">${f.techs.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
        <div class="featured-links">
          ${f.github ? `<a href="${f.github}" target="_blank" class="btn btn-primary" style="font-size:0.85rem;padding:0.5rem 1.2rem">⭐ GitHub</a>` : ''}
          ${f.demo ? `<a href="${f.demo}" target="_blank" class="btn btn-outline" style="font-size:0.85rem;padding:0.5rem 1.2rem">🔗 Live Demo</a>` : ''}
        </div>
      </div>
    </div>`;

  // Filter tabs
  const filtersEl = document.getElementById('project-filters');
  renderProjectFilters([], 'All');
  filtersEl.addEventListener('click', e => {
    if (!e.target.classList.contains('proj-filter-btn')) return;
    const cat = e.target.dataset.cat;
    renderProjectFilters([], cat);
    filterAndRenderCards(cat);
  });

  const container = document.getElementById('projects-container');
  container.innerHTML = `<div class="loading-wrap"><div class="spinner"></div></div>`;

  let allProjects = [];
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error();
    allProjects = await res.json();
  } catch {
    allProjects = getDemoProjects();
  }

  function filterAndRenderCards(cat) {
    const filtered = cat === 'All' ? allProjects : allProjects.filter(p => p.category === cat);
    const list = filtered.length ? filtered : allProjects;
    container.innerHTML = `<div class="projects-grid">${list.map(projectCard).join('')}</div>`;
    container.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
  }

  filterAndRenderCards('All');
}

function projectCard(p) {
  const icons = ['🚀', '💡', '🛠️', '🌐', '⚡', '🎯'];
  const icon = icons[Math.floor(Math.random() * icons.length)];
  const techs = Array.isArray(p.technologies) ? p.technologies : (p.technologies || '').split(',').map(t => t.trim()).filter(Boolean);

  return `
    <div class="project-card fade-in">
      <div class="project-card-top">
        <span class="project-icon">${icon}</span>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" class="project-link">⭐ GitHub</a>` : ''}
          ${p.demo || p.live ? `<a href="${p.demo || p.live}" target="_blank" class="project-link">🔗 Demo</a>` : ''}
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-techs">${techs.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
    </div>`;
}

function getDemoProjects() {
  return [
    { title: 'E-Commerce Platform', description: 'Full-stack shopping app with cart, auth, and payments.', technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'], category: 'Full Stack', github: '#', demo: '#' },
    { title: 'Task Manager API', description: 'RESTful API with JWT auth, CRUD operations, and role-based access.', technologies: ['Express', 'MySQL', 'JWT', 'Sequelize'], category: 'Backend', github: '#' },
    { title: 'Portfolio CMS', description: 'Content management system to manage portfolio projects dynamically.', technologies: ['Node.js', 'Express', 'React', 'Docker'], category: 'Full Stack', github: '#', demo: '#' },
    { title: 'Weather Dashboard', description: 'Real-time weather app using OpenWeather API with location search.', technologies: ['HTML', 'CSS', 'JavaScript'], category: 'Frontend', github: '#', demo: '#' },
    { title: 'Blog Platform', description: 'A markdown-based blog with admin panel and comment system.', technologies: ['PHP', 'MySQL', 'CSS'], category: 'Full Stack', github: '#' },
  ];
}

// ===== CONTACT FORM =====
function initContactForm() {
  document.getElementById('contact-email').textContent = PORTFOLIO.email;
  document.getElementById('contact-location').textContent = PORTFOLIO.location;

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    btn.disabled = true;
    btn.textContent = 'Sending...';
    status.className = 'form-status';
    status.style.display = 'none';

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      status.textContent = '✅ Message sent! I\'ll get back to you soon.';
      status.className = 'form-status success';
      form.reset();
    } catch {
      status.textContent = '❌ Failed to send. Please email me directly.';
      status.className = 'form-status error';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }
  });
}

// ===== FOOTER =====
function renderFooter() {
  document.getElementById('footer-github').href = PORTFOLIO.github;
  document.getElementById('footer-linkedin').href = PORTFOLIO.linkedin;
  document.getElementById('footer-name').textContent = PORTFOLIO.name;
}

// ===== INIT =====
renderHero();
renderAbout();
renderSkills();
renderJourney();
renderProjects();
initContactForm();
renderFooter();

// Trigger fade-in for static elements
setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}, 100);
