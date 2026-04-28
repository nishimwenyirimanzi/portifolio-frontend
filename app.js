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
async function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = `<div class="loading-wrap"><div class="spinner"></div></div>`;

  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('Failed to fetch');
    const projects = await res.json();

    if (!projects.length) {
      container.innerHTML = `<div class="error-msg"><span>📂</span>No projects found.</div>`;
      return;
    }

    container.innerHTML = `<div class="projects-grid">${projects.map(projectCard).join('')}</div>`;
  } catch {
    container.innerHTML = `
      <div class="error-msg">
        <span>⚠️</span>
        <p>Could not load projects. Showing demo data.</p>
      </div>
      <div class="projects-grid" style="margin-top:1.5rem">${getDemoProjects().map(projectCard).join('')}</div>`;
  }

  // Re-observe new fade-in elements
  container.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
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
    { title: 'E-Commerce Platform', description: 'Full-stack shopping app with cart, auth, and payments.', technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'], github: '#', demo: '#' },
    { title: 'Task Manager API', description: 'RESTful API with JWT auth, CRUD operations, and role-based access.', technologies: ['Express', 'MySQL', 'JWT', 'Sequelize'], github: '#' },
    { title: 'Portfolio CMS', description: 'Content management system to manage portfolio projects dynamically.', technologies: ['Node.js', 'Express', 'React', 'Docker'], github: '#', demo: '#' },
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
renderJourney();
renderProjects();
initContactForm();
renderFooter();

// Trigger fade-in for static elements
setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}, 100);
