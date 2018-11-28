import { storage, buttons, resultsSection, navSection} from '../index';

export function clearResults() {
  storage.length = 0;
  buttons.length = 0;
  resultsSection.innerHTML = '';
  navSection.innerHTML = '';
}
