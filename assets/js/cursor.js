const snorlaxCursor = document.getElementById('snorlax-cursor');

document.addEventListener('pointermove', (event) => {
  if (event.pointerType !== 'mouse') return;
  snorlaxCursor.style.transform = `translate(${event.clientX - 24}px, ${event.clientY - 58}px)`;
  snorlaxCursor.style.visibility = 'visible';
});

function hideSnorlax() {
  snorlaxCursor.style.visibility = 'hidden';
}

document.documentElement.addEventListener('pointerleave', hideSnorlax);
window.addEventListener('blur', hideSnorlax);
