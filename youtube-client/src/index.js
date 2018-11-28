import { setPageSize } from './setPageSize';
import { showResults } from './showResults';
import { showPrev } from './showPrev';
import { showNext } from './showNext';
import { addButtons } from './addButtons';
import { clearResults } from './clear-functions/clearResults';
import { firstRequest } from './request-functions/firstRequest';

export let resultsSection;
export let navSection;
export let storage;
export let buttons;
export let count;
export let pageSize;
export let currentPage;
export let nextPageTok;

document.addEventListener('DOMContentLoaded', () => {
  const main = document.createElement('main');
  const searchSection = document.createElement('section');
  resultsSection = document.createElement('section');
  navSection = document.createElement('section');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  storage = [];
  buttons = [];
  count = 0;
  currentPage = 1;

  document.body.appendChild(main);
  main.appendChild(searchSection);
  main.appendChild(resultsSection);
  main.appendChild(navSection);
  searchSection.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchInput.setAttribute('type', 'text');

  navSection.style.position = 'fixed';
  navSection.style.top = '600px';

  setPageSize();

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
      default: break;
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
