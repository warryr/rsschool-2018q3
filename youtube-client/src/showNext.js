import { storage, count, pageSize } from './index';
import { showResults } from './showResults';
import { nextPagesRequest } from './request-functions/nextPagesRequest';
import { clearPageNumbers } from './clear-functions/clearPageNumber';

export function showNext(k) {
  const searchValue = searchInput.value;
  clearPageNumbers();
  count += pageSize * k;
  if (storage.length < pageSize * k + count) {
    nextPagesRequest(searchValue);
  } else {
    showResults();
  }
}
