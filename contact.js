const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const blogButtons = document.querySelectorAll('.article-toggle');
const articlePanel = document.querySelector('.article-panel');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const subject = String(formData.get('subject') || '').trim();
  const message = String(formData.get('message') || '').trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message) {
    formStatus.textContent = 'Please fill out all fields before sending your message.';
    formStatus.className = 'form-status error';
    return;
  }

  if (!emailPattern.test(email)) {
    formStatus.textContent = 'Please enter a valid email address.';
    formStatus.className = 'form-status error';
    return;
  }

  const mailtoLink = `mailto:afra120908@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  formStatus.textContent = 'Your message is ready to send in your email app.';
  formStatus.className = 'form-status success';
  window.location.href = mailtoLink;

  form.reset();
});

blogButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));

    if (!expanded) {
      button.textContent = 'Read Article';
      articlePanel.innerHTML = '<h3>Article preview</h3><p>Draft concept: this article will be added as real post content when it is published. The idea is currently reserved for future technical writing.</p>';
    } else {
      button.textContent = 'Coming Soon';
      articlePanel.innerHTML = '<h3>Article preview</h3><p>Selected article ideas will appear here as real content is added later.</p>';
    }
  });
});
