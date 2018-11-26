document.addEventListener('DOMContentLoaded', () => {
  const main = document.createElement('main');
  const searchSection = document.createElement('section');
  const resultsSection = document.createElement('section');
  const carouselSection = document.createElement('section');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');

  document.body.appendChild(main);
  main.appendChild(searchSection);
  main.appendChild(resultsSection);
  main.appendChild(carouselSection);
  searchSection.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);
  searchInput.setAttribute('type', 'text');
  searchButton.setAttribute('type', 'submit');
  searchButton.innerText = 'Submit';
});
