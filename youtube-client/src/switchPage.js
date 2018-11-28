import { count, pageSize, currentPage, buttons } from './index';

export function switchPage() {
  currentPage = parseInt(count / pageSize + 1, 10);
  if (currentPage === 1) {
    buttons[0].textContent = '1';
    buttons[0].setAttribute('disabled', '');
    buttons[1].removeAttribute('disabled', '');
    buttons[2].removeAttribute('disabled', '');
  }
  if (currentPage === 2) {
    buttons[1].textContent = '2';
    buttons[0].removeAttribute('disabled', '');
    buttons[1].setAttribute('disabled', '');
    buttons[2].removeAttribute('disabled', '');
  }
  if (currentPage > 2) {
    buttons[2].textContent = `${currentPage}`;
    buttons[0].removeAttribute('disabled', '');
    buttons[1].removeAttribute('disabled', '');
    buttons[2].setAttribute('disabled', '');
  }
}
