const projectButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalFeatures = document.getElementById('modal-features');
const modalTags = document.getElementById('modal-tags');
const modalCloseButton = document.querySelector('.modal-close');

const projectDetails = {
  'medical-symptom-assessment': {
    category: 'AI / Healthcare Support',
    title: 'AI-Powered Medical Symptom Assessment Web Application',
    description:
      'Built an AI-driven medical support application that analyzes user-entered symptoms to provide probable condition insights, precautions, and guidance on seeking medical care. The experience emphasizes responsible AI design and ethical handling of user health information.',
    features: [
      'Symptom-based informational support',
      'Responsible AI design and safety guidance',
      'Emphasis on ethical data handling and responsible output framing',
      'Informational output that does not replace professional medical evaluation.'
    ],
    tags: ['React', 'Node.js', 'AI APIs', 'JavaScript'],
    github: '',
    demo: ''
  },
  'blood-donation-management': {
    category: 'Social Impact / Full-Stack Development',
    title: 'Blood Donation Management System',
    description:
      'Developed a donor registration and blood matching system to support efficient blood request management and coordination, with 500+ blood donors referenced in the project. The platform supports donor onboarding and helps streamline social-impact coordination.',
    features: [
      'Donor registration',
      'Blood matching workflow',
      'Blood request management',
      'Social-impact-oriented problem solving',
      'Shortlisted as a finalist in a college-level technology and app development competition.'
    ],
    tags: ['React', 'Node.js', 'Supabase', 'SQL', 'REST APIs'],
    github: '',
    demo: ''
  },
  'garage-management': {
    category: 'Business Operations / Full-Stack Development',
    title: 'Auto Care Garage Management System',
    description:
      'Created a full-stack garage management platform covering vehicle registration, service tracking, inventory, billing, and service history for cars and bikes. The interface is designed to streamline everyday repair operations and business workflows.',
    features: [
      'Vehicle registration',
      'Service tracking',
      'Inventory management',
      'Billing workflows',
      'Service history records'
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Supabase'],
    github: '',
    demo: ''
  }
};

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    projectButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

    projectCards.forEach((card) => {
      const categories = card.dataset.category || '';
      const shouldShow = filter === 'all' || categories.includes(filter);
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

function openProjectModal(projectKey) {
  const data = projectDetails[projectKey];
  if (!data || !modal) return;

  modalTitle.textContent = data.title;
  modalCategory.textContent = data.category;
  modalDescription.textContent = data.description;
  modalFeatures.innerHTML = data.features.map((feature) => `<li>${feature}</li>`).join('');
  modalTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');

  const github = document.getElementById('modal-github');
  const demo = document.getElementById('modal-demo');

  if (github) {
    github.classList.toggle('hidden', !data.github);
    if (data.github) github.href = data.github;
  }

  if (demo) {
    demo.classList.toggle('hidden', !data.demo);
    if (data.demo) demo.href = data.demo;
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalCloseButton?.focus();
}

function closeProjectModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-detail-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    const key = card?.dataset.project;
    if (key) {
      openProjectModal(key);
    }
  });
});

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.close === 'true') {
      closeProjectModal();
    }
  });
}

modalCloseButton?.addEventListener('click', closeProjectModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && modal.classList.contains('is-open')) {
    closeProjectModal();
  }
});
