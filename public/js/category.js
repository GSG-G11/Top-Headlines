const categorySelect = document.querySelector('.category');
const getCategoryData = (category) => fetch(`../../../category/${category}`)
  .then((res) => res.json());

categorySelect.addEventListener('change', () => {
  main.innerHTML = '';
  getCategoryData(categorySelect.value)
    .then(handleFirstSixItems);
});

getCategoryData(categorySelect.value)
  .then(handleFirstSixItems);
