const categorySelect = document.querySelector('.category');
const main = document.querySelector('.main');
const getCategoryData = (category) => fetch(`../../../category/${category}`)
  .then((res) => res.json());

const handleFirstSixItems = (data) => {
  console.log(data);
  let element;
  for (let i = 0; i < Math.min(data.articles.length, 6); i += 1) {
    element = data.articles[i];
    // eslint-disable-next-line no-undef
    main.appendChild(createCard(element));
  }
};

categorySelect.addEventListener('change', () => {
  main.innerHTML = '';
  getCategoryData(categorySelect.value)
    .then(handleFirstSixItems);
});

getCategoryData(categorySelect.value)
  .then(handleFirstSixItems);
