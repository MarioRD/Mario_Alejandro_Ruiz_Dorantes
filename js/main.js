// JS sencillo de ejemplo
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('¡Hola! Has hecho clic en el botón.');
    });
  }
});