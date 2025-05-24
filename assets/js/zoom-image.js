document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.post-content img, .page-content img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {

      const overlay = document.createElement('div');
      overlay.id = 'img-zoom-overlay';
      Object.assign(overlay.style, {
        position:   'fixed',
        top:        0,
        left:       0,
        width:      '100vw',
        height:     '100vh',
        background: 'rgba(0,0,0,0.8)',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:     9999,
        cursor:     'zoom-out'
      });
      // Imagen grande
      const modalImg = document.createElement('img');
      modalImg.src = img.src;
      Object.assign(modalImg.style, {
        maxWidth:  '80%',
        maxHeight: '80%',
        boxShadow: '0 0 20px rgba(255,255,255,0.3)'
      });
      overlay.appendChild(modalImg);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    });
  });
});
