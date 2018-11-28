document.addEventListener('DOMContentLoaded', () => {
  const main = document.createElement('main');
  const searchSection = document.createElement('section');
  const resultsSection = document.createElement('section');
  const carouselSection = document.createElement('section');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const storage = [];
  let count = 0;
  let pageSize = 4;
  let nextPageTok;

  document.body.appendChild(main);
  main.appendChild(searchSection);
  main.appendChild(resultsSection);
  main.appendChild(carouselSection);
  searchSection.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchInput.setAttribute('type', 'text');

  function setArticleStyle(article) {
    article.style.display = 'inline-block';
    article.style.width = '300px';
    article.style.height = '500px';
    article.style.boxSizing = 'border-box';
    article.style.padding = '20px';
  }

  function showResults() {
    resultsSection.innerHTML = '';
    for (let i = count; i < count + pageSize; i += 1) {
      const clipTitle = storage[i].snippet.title;
      const clipLink = `https://www.youtube.com/watch?v=${storage[i].id.videoId}`;
      const clipPreview = storage[i].snippet.thumbnails.high.url;
      const clipDescription = storage[i].snippet.description;
      const author = storage[i].snippet.channelTitle;
      const publicationDate = storage[i].snippet.publishedAt;

      const resultArticle = document.createElement('article');
      resultArticle.classList.add('result');
      resultsSection.appendChild(resultArticle);
      setArticleStyle(resultArticle);
      const clipPreviewEl = document.createElement('img');
      clipPreviewEl.setAttribute('src', clipPreview);
      clipPreviewEl.style.width = '80px';
      clipPreviewEl.style.height = '80px';
      resultArticle.appendChild(clipPreviewEl);
      const titleEl = document.createElement('a');
      titleEl.textContent = clipTitle;
      titleEl.setAttribute('href', clipLink);
      titleEl.setAttribute('alt', clipTitle);
      resultArticle.appendChild(titleEl);
      const descriptionEl = document.createElement('p');
      descriptionEl.textContent = clipDescription;
      resultArticle.appendChild(descriptionEl);
      const channelEl = document.createElement('p');
      channelEl.textContent = author;
      resultArticle.appendChild(channelEl);
      const dateEl = document.createElement('p');
      dateEl.textContent = publicationDate;
      resultArticle.appendChild(dateEl);
    }
  }

  function makeRequest(searchValue, url) {
    const xhp = new XMLHttpRequest();
    xhp.open('GET', url, true);
    xhp.onreadystatechange = () => {
      if (xhp.readyState === 4 && xhp.status === 200) {
        const result = JSON.parse(xhp.responseText);
        nextPageTok = result.nextPageToken;
        for (let i = 0; i < 15; i += 1) {
          storage.push(result.items[i]);
        }
        showResults();
      }
    };
    xhp.send();
  }

  function firstRequest(searchValue) {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
    makeRequest(searchValue, url);
  }

  function nextPagesRequest(searchValue) {
    const url = `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPageTok}&type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
    makeRequest(searchValue, url);
  }

  function showNext() {
    const searchValue = searchInput.value;
    count += pageSize;
    if (storage.length < pageSize + count) {
      nextPagesRequest(searchValue);
    } else {
      showResults();
    }
  }

  function showPrev() {
    if (count !== 0) {
      if (count < pageSize) {
        count = 0;
      } else {
        count -= pageSize;
      }
      showResults();
    }
  }

  function clearResults() {
    storage.length = 0;
    resultsSection.innerHTML = '';
  }

  window.addEventListener('resize', () => {
    pageSize = parseInt(window.innerWidth / 310, 10);
    if (pageSize > 4) {
      pageSize = 4;
    }
    showResults();
  });

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight': {
        showNext();
        break;
      }
      case 'ArrowLeft': {
        showPrev();
        break;
      }
      default: break;
    }
  });

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value;
    clearResults();
    if (searchValue !== '') {
      firstRequest(searchValue);
    }
  });
});
