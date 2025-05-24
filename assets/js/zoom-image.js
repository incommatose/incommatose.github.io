document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.post__content img').forEach(img => {
    img.style.cursor = 'zoom-in';

    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'zoom-modal';
      modal.innerHTML = `
        <span class="zoom-modal-close">&times;</span>
        <img src="${img.src}" alt="${img.alt || ''}">
      `;
      document.body.appendChild(modal);

      // Cerrar al hacer clic en fondo, imagen o X
      modal.addEventListener('click', e => {
        if (
          e.target === modal ||
          e.target.classList.contains('zoom-modal-close') ||
          e.target.tagName === 'IMG'
        ) {
          document.body.removeChild(modal);
        }
      });

      // Cerrar con tecla Escape
      document.addEventListener('keydown', function escListener(e) {
        if (e.key === 'Escape') {
          if (document.body.contains(modal)) {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', escListener);
          }
        }
      });
    });
  });
});
