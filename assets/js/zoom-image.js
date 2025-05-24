document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.post-content img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {

      // Construir el modal
      const modal = document.createElement('div');
      modal.className = 'zoom-modal';
      modal.innerHTML = `
        <span class="zoom-modal-close">&times;</span>
        <img src="${img.src}" alt="${img.alt || ''}">
      `;
      document.body.appendChild(modal);

      modal.addEventListener('click', e => {
        if (e.target === modal || e.target.classList.contains('zoom-modal-close')) {
          document.body.removeChild(modal);
        }
      });
    });
  });
});
