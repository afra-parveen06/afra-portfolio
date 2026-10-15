const revealItems = document.querySelectorAll('.reveal');
const statNodes = document.querySelectorAll('[data-target]');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

function animateNumber(element) {
  const target = Number(element.dataset.target || 0);
  const isDecimal = Number.isInteger(target) === false;
  const duration = 1200;
  const start = performance.now();

  function update(time) {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    const formatted = isDecimal ? current.toFixed(2) : Math.round(current).toLocaleString('en-IN');
    element.textContent = formatted;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = isDecimal ? target.toFixed(2) : target.toLocaleString('en-IN');
    }
  }

  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statNodes.forEach((node) => {
  const target = Number(node.dataset.target || 0);
  node.textContent = target >= 1000 ? target.toLocaleString('en-IN') : target.toFixed(target % 1 !== 0 ? 2 : 0);
  statObserver.observe(node);
});
