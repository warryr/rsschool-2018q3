import { buttons } from './index';
import { currentPage } from './index';
import { navSection } from './index';
import {showPrev} from './showPrev';
import {showNext} from './showNext';

export function addButtons() {
  for (let i = 0; i < 5; i += 1) {
    const navButton = document.createElement('button');
    navButton.style.borderRadius = '50%';
    navButton.style.width = '30px';
    navButton.style.height = '30px';
    navButton.style.margin = '10px';
    navSection.appendChild(navButton);
    buttons.push(navButton);
  }

  buttons[0].addEventListener('mouseup', () => {
    switch (currentPage) {
      case 2: {
        showPrev(1);
        break;
      }
      default: {
        showPrev(2);
        break;
      }
    }
  });

  buttons[0].addEventListener('mousedown', () => {
    switch (currentPage) {
      case 2: {
        buttons[0].textContent = `${currentPage - 1}`;
        break;
      }
      default: {
        buttons[0].textContent = `${currentPage - 2}`;
        break;
      }
    }
  });

  buttons[1].addEventListener('mouseup', () => {
    switch (currentPage) {
      case 1: {
        showNext(1);
        break;
      }
      default: {
        showPrev(1);
        break;
      }
    }
  });

  buttons[1].addEventListener('mousedown', () => {
    switch (currentPage) {
      case 1: {
        buttons[1].textContent = `${currentPage + 1}`;
        break;
      }
      default: {
        buttons[1].textContent = `${currentPage - 1}`;
        break;
      }
    }
  });

  buttons[2].addEventListener('mouseup', () => {
    switch (currentPage) {
      case 1: {
        showNext(2);
        break;
      }
      case 2: {
        showNext(1);
        break;
      }
      default: {
        break;
      }
    }
  });

  buttons[2].addEventListener('mousedown', () => {
    switch (currentPage) {
      case 1: {
        buttons[2].textContent = `${currentPage + 2}`;
        break;
      }
      case 2: {
        buttons[2].textContent = `${currentPage + 1}`;
        break;
      }
      default: {
        break;
      }
    }
  });

  buttons[3].addEventListener('mouseup', () => {
    switch (currentPage) {
      case 1: {
        showNext(3);
        break;
      }
      case 2: {
        showNext(2);
        break;
      }
      default: {
        showNext(1);
        break;
      }
    }
  });

  buttons[3].addEventListener('mousedown', () => {
    switch (currentPage) {
      case 1: {
        buttons[3].textContent = `${currentPage + 3}`;
        break;
      }
      case 2: {
        buttons[3].textContent = `${currentPage + 2}`;
        break;
      }
      default: {
        buttons[3].textContent = `${currentPage + 1}`;
        break;
      }
    }
  });

  buttons[4].addEventListener('mouseup', () => {
    switch (currentPage) {
      case 1: {
        showNext(4);
        break;
      }
      default: {
        showNext(2);
        break;
      }
    }
  });

  buttons[4].addEventListener('mousedown', () => {
    switch (currentPage) {
      case 1: {
        buttons[4].textContent = `${currentPage + 4}`;
        break;
      }
      default: {
        buttons[4].textContent = `${currentPage + 2}`;
        break;
      }
    }
  });
}
