const header = document.querySelector('header');

const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

window.addEventListener('scroll', () => {
  if (window.scrollY > convertRemToPixels(5)) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
