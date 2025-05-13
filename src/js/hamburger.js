const hamburger = document.querySelector('.hamburger');

if(!hamburger) {
  return;
}

hamburger.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});