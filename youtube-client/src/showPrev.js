import { count, pageSize } from './index';
import { clearPageNumbers } from './clear-functions/clearPageNumber';
import { showResults } from './showResults';

export function showPrev(k) {
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
