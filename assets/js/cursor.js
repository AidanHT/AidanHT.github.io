const snorlaxCursor = document.getElementById('snorlax-cursor');
const cursorImage = snorlaxCursor.querySelector('img');
const cursorEnabled = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
let lastX;
let idleTimer;

function hideSnorlax() {
  document.documentElement.classList.remove('snorlax-active');
  snorlaxCursor.style.visibility = 'hidden';
  snorlaxCursor.className = '';
  clearTimeout(idleTimer);
  lastX = undefined;
}

document.addEventListener('pointermove', (event) => {
  if (event.pointerType !== 'mouse' || !cursorEnabled.matches ||
      !cursorImage.complete || !cursorImage.naturalWidth || event.target.closest('iframe')) {
    hideSnorlax();
    return;
  }
  const tilt = lastX === undefined ? 0 : Math.max(-16, Math.min(16, (event.clientX - lastX) * 2));
  lastX = event.clientX;
  snorlaxCursor.style.transform = `translate(${event.clientX - 24}px, ${event.clientY - 24}px)`;
  snorlaxCursor.style.setProperty('--tilt', `${tilt}deg`);
  snorlaxCursor.style.visibility = 'visible';
  document.documentElement.classList.add('snorlax-active');
  snorlaxCursor.classList.add('moving');
  snorlaxCursor.classList.toggle('interactive', Boolean(event.target.closest('a, button, input, select, textarea, [role="button"]')));
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    snorlaxCursor.classList.remove('moving');
    snorlaxCursor.style.setProperty('--tilt', '0deg');
  }, 120);
});

document.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse') snorlaxCursor.classList.add('pressed');
});
document.addEventListener('pointerup', () => snorlaxCursor.classList.remove('pressed'));
document.documentElement.addEventListener('pointerleave', hideSnorlax);
window.addEventListener('blur', hideSnorlax);
cursorEnabled.addEventListener('change', hideSnorlax);
