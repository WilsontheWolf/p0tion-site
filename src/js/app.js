const header = document.querySelector('header');
// const menuButtons = document.getElementsByClassName('menu-button');
// const sections = [
//   document.querySelector('.about'),
//   document.querySelector('.download'),
//   document.querySelector('.credits'),
// ];

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

// menuButton.addEventListener('click', () => {
//   sections[menuButtons.indexOf(menuButton)].scrollIntoView();
// });

const scrollToElement = (elementSelector) => {
  console.log(elementSelector);
};
