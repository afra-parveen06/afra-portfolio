const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const yearLabel = document.getElementById('year');

if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}

function setActiveNav(id) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('is-active', isActive);
  });
}

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveNav(visibleEntry.target.id);
      }
    },
    {
      rootMargin: '-25% 0px -45% 0px',
      threshold: [0.2, 0.5]
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('is-open');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
