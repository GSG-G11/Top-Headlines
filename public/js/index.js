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

// eslint-disable-next-line no-unused-vars
const createCard = ({
  source, title, url, urlToImage,
}) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img');
  const img = document.createElement('img');
  imgContainer.appendChild(img);
  img.src = urlToImage || '../images/news-img.jpg';// fallback img
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info');
  const sourceP = document.createElement('p');
  sourceP.style.fontWeight = 'bold';
  sourceP.textContent = source.name;
  infoContainer.appendChild(sourceP);
  const titleP = document.createElement('p');
  titleP.textContent = title;
  infoContainer.appendChild(titleP);
  const urlAnchContainer = document.createElement('p');
  const anch = document.createElement('a');
  anch.href = url;
  anch.textContent = 'More details';
  anch.target = '_blank';
  urlAnchContainer.appendChild(anch);
  infoContainer.appendChild(urlAnchContainer);
  card.appendChild(imgContainer);
  card.appendChild(infoContainer);
  return card;
};
