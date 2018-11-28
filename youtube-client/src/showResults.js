import { storage, count, pageSize, resultsSection} from './index';
import { switchPage } from './switchPage';
import { clearPageNumbers } from './clear-functions/clearPageNumber';
import { setArticleStyle } from './setArticleStyle';

export function showResults() {
  resultsSection.innerHTML = '';
  clearPageNumbers();
  switchPage();
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
