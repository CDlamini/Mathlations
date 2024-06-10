// Simple animation example (unchanged)
const element = document.querySelector('body');

element.addEventListener('mouseover', () => {
  element.classList.add('animate');
});

element.addEventListener('mouseout', () => {
  element.classList.remove('animate');
});

// Add the animation class (unchanged)
element.classList.add('animate');

// Remove the animation class after a short delay (unchanged)
setTimeout(() => {
  element.classList.remove('animate');
}, 1000);
