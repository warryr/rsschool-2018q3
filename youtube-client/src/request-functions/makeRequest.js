import { storage, nextPageTok } from '../index';
import { showResults } from '../showResults';

export function makeRequest(searchValue, url) {
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
