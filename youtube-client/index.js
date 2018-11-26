document.addEventListener('DOMContentLoaded', () => {
  const main = document.createElement('main');
  const searchSection = document.createElement('section');
  const resultsSection = document.createElement('section');
  const carouselSection = document.createElement('section');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');
  const cache = [];

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

  function showResults(result) {
    for (let i = 0; i < 4; i += 1) {
      cache.shift();
      const clipTitle = result.items[i].snippet.title;
      const clipLink = `https://www.youtube.com/watch?v=${result.items[i].id.videoId}`;
      const clipPreview = result.items[i].snippet.thumbnails.high.url;
      const clipDescription = result.items[i].snippet.description;
      const author = result.items[i].snippet.channelTitle;
      const publicationDate = result.items[i].snippet.publishedAt;

      const resultArticle = document.createElement('article');
      resultArticle.setAttribute('class', `result res${i + 1}`);
      resultsSection.appendChild(resultArticle);
      const clipPreviewEl = document.createElement('img');
      clipPreviewEl.setAttribute('src', clipPreview);
      resultArticle.appendChild(clipPreviewEl);
      const titleEl = document.createElement('a');
      titleEl.innerText = clipTitle;
      titleEl.setAttribute('href', clipLink);
      titleEl.setAttribute('alt', clipTitle);
      resultArticle.appendChild(titleEl);
      const descriptionEl = document.createElement('p');
      descriptionEl.innerText = clipDescription;
      resultArticle.appendChild(descriptionEl);
      const channelEl = document.createElement('p');
      channelEl.innerText = author;
      resultArticle.appendChild(channelEl);
      const dateEl = document.createElement('p');
      dateEl.innerText = publicationDate;
      resultArticle.appendChild(dateEl);
    }
  }

  function makeRequest(e) {
    e.preventDefault();
    const searchValue = searchInput.value;
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
    const xhp = new XMLHttpRequest();
    xhp.open('GET', url, true);
    xhp.onreadystatechange = () => {
      if (xhp.readyState === 4 && xhp.status === 200) {
        const result = JSON.parse(xhp.responseText);
        for (let i = 0; i < 15; i += 1) {
          cache.push(result.items[i]);
        }
        resultsSection.innerHTML = '';
        showResults(result);
      }
    };
    xhp.send();
  }

  searchButton.addEventListener('click', makeRequest);
});
