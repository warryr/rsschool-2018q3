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

  function makeRequest(e) {
    e.preventDefault();
    const searchValue = searchInput.value;
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
    const xhp = new XMLHttpRequest();
    xhp.open('GET', url, true);
    xhp.onreadystatechange = () => {
      if (xhp.readyState === 4 && xhp.status === 200) {
        const info = JSON.parse(xhp.responseText);
        resultsSection.innerHTML = '';
      }
    };
    xhp.send();
  }

  searchButton.addEventListener('click', makeRequest);
});
