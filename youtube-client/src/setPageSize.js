import { pageSize } from './index';

export function setPageSize() {
  pageSize = parseInt(window.innerWidth / 310, 10);
  if (pageSize > 4) {
    pageSize = 4;
  }
}
