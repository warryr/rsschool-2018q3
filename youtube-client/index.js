document.addEventListener('DOMContentLoaded', () => {
  const main = document.createElement('main');
  const searchSection = document.createElement('section');
  const resultsSection = document.createElement('section');
  const navSection = document.createElement('section');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const storage = [];
  const buttons = [];
  let count = 0;
  let pageSize;
  let nextPageTok;

  const setPageSize = () => {
    pageSize = parseInt(window.innerWidth / 310, 10);
    if (pageSize > 4) {
      pageSize = 4;
    }
  };
  setPageSize();

  document.body.appendChild(main);
  main.appendChild(searchSection);
  main.appendChild(resultsSection);
  main.appendChild(navSection);
  searchSection.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchInput.setAttribute('type', 'text');

  navSection.style.position = 'fixed';
  navSection.style.top = '600px';

  function setArticleStyle(article) {
    article.style.display = 'inline-block';
    article.style.width = '300px';
    article.style.height = '500px';
    article.style.boxSizing = 'border-box';
    article.style.padding = '20px';
  }

  function clearPageNumbers() {
    for (let i = 0; i < 5; i += 1) {
      buttons[i].textContent = '';
    }
  }

  function showResults() {
    resultsSection.innerHTML = '';
    clearPageNumbers();
    for (let i = count; i < count + pageSize; i += 1) {
      console.log(`count = ${count}`);
      const clipTitle = storage[i].snippet.title;
      const clipLink = `https://www.youtube.com/watch?v=${storage[i].id.videoId}`;
      const clipPreview = storage[i].snippet.thumbnails.high.url;
      const clipDescription = storage[i].snippet.description;
      const author = storage[i].snippet.channelTitle;
      const publicationDate = storage[i].snippet.publishedAt;

      const resultArticle = document.createElement('article');
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

  function showNext(k) {
    const searchValue = searchInput.value;
    clearPageNumbers();
    count += pageSize * k;
    if (storage.length < pageSize * k + count) {
      nextPagesRequest(searchValue);
    } else {
      showResults();
    }
  }

  function showPrev(k) {
    if (count !== 0) {
      clearPageNumbers();
      if (count < pageSize * k) {
        count = 0;
      } else {
        count -= pageSize * k;
      }
      showResults();
    }
  }

  function clearResults() {
    storage.length = 0;
    buttons.length = 0;
    resultsSection.innerHTML = '';
    navSection.innerHTML = '';
  }

  function addButtons() {
    for (let i = 0; i < 5; i += 1) {
      const navButton = document.createElement('button');
      navButton.style.borderRadius = '50%';
      navButton.style.width = '30px';
      navButton.style.height = '30px';
      navButton.style.margin = '10px';
      navSection.appendChild(navButton);
      buttons.push(navButton);
    }
  }

  window.addEventListener('resize', () => {
    setPageSize();
    showResults();
  });

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight': {
        showNext(1);
        break;
      }
      case 'ArrowLeft': {
        showPrev(1);
        break;
      }
      default:
        break;
    }
  });

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value;
    clearResults();
    if (searchValue !== '') {
      addButtons();
      firstRequest(searchValue);
    }
  });
});
