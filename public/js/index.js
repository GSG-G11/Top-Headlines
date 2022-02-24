const darkModeBtn = document.querySelector('.dark-mode-btn');
const homeBtn = document.querySelector('.home-btn');
const header = document.querySelector('#header');
const body = document.querySelector('body');
darkModeBtn.addEventListener('click', () => {
  darkModeBtn.querySelector('i').classList.toggle('fa-moon');
  darkModeBtn.querySelector('i').classList.toggle('fa-sun');
  body.classList.toggle('dark-mode-body');

  header.classList.toggle('dark-mode-header');
  darkModeBtn.classList.toggle('dark-mode-header');
  homeBtn.classList.toggle('dark-mode-header');
});
homeBtn.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.href = `${location.origin}/`;
});

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

const main = document.querySelector('.main');
const handleFirstSixItems = (data) => {
  if (data.status === 'ok') {
    if (data.articles.length === 0) {
      const notResultContainer = document.createElement('div');
      notResultContainer.style.width = '100vw';
      notResultContainer.style.display = 'flex';
      notResultContainer.style.justifyContent = 'center';
      const notResult = document.createElement('img');
      notResult.src = '../images/no-result.jpg';
      notResultContainer.appendChild(notResult);
      return main.appendChild(notResultContainer);
    }
    let element;
    for (let i = 0; i < Math.min(data.articles.length, 6); i += 1) {
      element = data.articles[i];
      main.appendChild(createCard(element));
    }
  } else {
    const notResultContainer = document.createElement('div');
    notResultContainer.style.width = '100vw';
    notResultContainer.style.display = 'flex';
    notResultContainer.style.justifyContent = 'center';
    const notResult = document.createElement('img');
    notResult.src = '../images/503.jpg';
    notResultContainer.appendChild(notResult);
    return main.appendChild(notResultContainer);
  }
};
