import { buttons } from '../index';

export function clearPageNumbers() {
  for (let i = 0; i < 5; i += 1) {
    buttons[i].textContent = '';
  }
}
