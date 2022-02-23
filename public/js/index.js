const darkModeBtn = document.querySelector('.dark-mode-btn');
const homeBtn = document.querySelector('.home-btn');
darkModeBtn.addEventListener('click', () => {
  darkModeBtn.querySelector('i').classList.toggle('fa-moon');
  darkModeBtn.querySelector('i').classList.toggle('fa-sun');
});
homeBtn.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.href = `${location.origin}public`;
});
