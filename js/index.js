// Your code goes here
// load
window.addEventListener('load', () => {
  TweenMax.to('.main-navigation', 1.5, { opacity: 1 });
  TweenMax.to('.intro', 1.5, { opacity: 1, delay: 1.5 });
  TweenMax.to('.content-section', 1.5, { opacity: 1, delay: 3 });
  TweenMax.to('.content-destination', 1.5, { opacity: 1, delay: 4.5 });
  TweenMax.to('.content-pick', 1.5, { opacity: 1, delay: 5.5 });
  TweenMax.to('.footer', 1.5, { opacity: 3, delay: 6.5 });
});

// mouseover
const headerImage = document.querySelector('.intro img');
headerImage.addEventListener('mouseover', () => {
  TweenMax.from('.intro img', 2, { rotationY: -180, ease: Back.easeOut });
});

// dblclick 
const contentImages = document.querySelectorAll('.content-section img');
contentImages.forEach(imag => imag.addEventListener('dblclick', () => {
  imag.classList.toggle('hide');
}))

// keydown
const pTags = document.querySelectorAll('p');
document.addEventListener('keydown', () => {
  pTags.forEach(pTag => pTag.classList.toggle('hide'));
});

// select
// wheel`
// drag / drop`
// focus`
// resize`
// scroll`

// stop navigation from refreshing the page
const nav = document.querySelectorAll('nav');
nav.forEach(link => link.addEventListener('click', (event) => {
  event.preventDefault();
}))