const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    }
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const track = document.querySelector('.screens-track');
const galleryButtons = [...document.querySelectorAll('[data-gallery-dir]')];
if (track) {
  const updateGallery = () => {
    galleryButtons.forEach((button) => {
      button.disabled = Number(button.dataset.galleryDir) < 0
        ? track.scrollLeft <= 2
        : track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    });
  };
  galleryButtons.forEach((button) => button.addEventListener('click', () => {
    track.scrollBy({ left: Number(button.dataset.galleryDir) * track.clientWidth * 0.85,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }));
  track.addEventListener('scroll', updateGallery, { passive: true });
  window.addEventListener('resize', updateGallery);
  updateGallery();
}

const preview = document.querySelector('.preview-dialog');
if (preview) {
  const picture = preview.querySelector('.preview-image');
  document.querySelectorAll('.screen-open').forEach((button) => {
    button.addEventListener('click', () => {
      picture.src = button.dataset.preview;
      picture.alt = button.querySelector('img').alt;
      preview.querySelector('#preview-title').textContent = button.dataset.caption;
      preview.showModal();
    });
  });
  preview.querySelector('.preview-close').addEventListener('click', () => preview.close());
  preview.addEventListener('click', (event) => {
    const bounds = preview.getBoundingClientRect();
    if (event.target === preview && (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom)) preview.close();
  });
}
