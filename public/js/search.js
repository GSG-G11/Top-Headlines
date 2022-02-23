const form = document.querySelector('form');
const searchInput = document.querySelector('.search-input');

const getSearchData = (keyword) => fetch('../../../search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ keyword }),
})
  .then((res) => res.json());

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const keyword = searchInput.value.trim();
  if (keyword) {
    main.innerHTML = '';
    getSearchData(keyword)
      .then(handleFirstSixItems);
  } else {
    searchInput.value = '';
    form.submit();
  }
});
