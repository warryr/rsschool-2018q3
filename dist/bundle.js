/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultsSection", function() { return resultsSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navSection", function() { return navSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageSize", function() { return pageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentPage", function() { return currentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPageTok", function() { return nextPageTok; });
/* harmony import */ var _setPageSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _showResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _showPrev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _showNext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _addButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _clear_functions_clearResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _request_functions_firstRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);








let resultsSection;
let navSection;
let storage;
let buttons;
let count;
let pageSize;
let currentPage;
let nextPageTok;

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
  pageSize = 4;
  nextPageTok = 0;

  document.body.appendChild(main);
  main.appendChild(searchSection);
  main.appendChild(resultsSection);
  main.appendChild(navSection);
  searchSection.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchInput.setAttribute('type', 'text');

  navSection.style.position = 'fixed';
  navSection.style.top = '600px';

  Object(_setPageSize__WEBPACK_IMPORTED_MODULE_0__["setPageSize"])();

  window.addEventListener('resize', () => {
    Object(_setPageSize__WEBPACK_IMPORTED_MODULE_0__["setPageSize"])();
    Object(_showResults__WEBPACK_IMPORTED_MODULE_1__["showResults"])();
  });

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight': {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_3__["showNext"])(1);
        break;
      }
      case 'ArrowLeft': {
        Object(_showPrev__WEBPACK_IMPORTED_MODULE_2__["showPrev"])(1);
        break;
      }
      default: break;
    }
  });

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value;
    Object(_clear_functions_clearResults__WEBPACK_IMPORTED_MODULE_5__["clearResults"])();
    if (searchValue !== '') {
      Object(_addButtons__WEBPACK_IMPORTED_MODULE_4__["addButtons"])();
      Object(_request_functions_firstRequest__WEBPACK_IMPORTED_MODULE_6__["firstRequest"])(searchValue);
    }
  });
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPageSize", function() { return setPageSize; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function setPageSize() {
  pageSize = parseInt(window.innerWidth / 310, 10);
  if (pageSize > 4) {
    pageSize = 4;
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showResults", function() { return showResults; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _switchPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _clear_functions_clearPageNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _setArticleStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);





function showResults() {
  _index__WEBPACK_IMPORTED_MODULE_0__["resultsSection"].innerHTML = '';
  Object(_clear_functions_clearPageNumber__WEBPACK_IMPORTED_MODULE_2__["clearPageNumbers"])();
  Object(_switchPage__WEBPACK_IMPORTED_MODULE_1__["switchPage"])();
  for (let i = _index__WEBPACK_IMPORTED_MODULE_0__["count"]; i < _index__WEBPACK_IMPORTED_MODULE_0__["count"] + _index__WEBPACK_IMPORTED_MODULE_0__["pageSize"]; i += 1) {
    console.log(`count = ${_index__WEBPACK_IMPORTED_MODULE_0__["count"]}`);
    const clipTitle = _index__WEBPACK_IMPORTED_MODULE_0__["storage"][i].snippet.title;
    const clipLink = `https://www.youtube.com/watch?v=${_index__WEBPACK_IMPORTED_MODULE_0__["storage"][i].id.videoId}`;
    const clipPreview = _index__WEBPACK_IMPORTED_MODULE_0__["storage"][i].snippet.thumbnails.high.url;
    const clipDescription = _index__WEBPACK_IMPORTED_MODULE_0__["storage"][i].snippet.description;
    const author = _index__WEBPACK_IMPORTED_MODULE_0__["storage"][i].snippet.channelTitle;
    const publicationDate = _index__WEBPACK_IMPORTED_MODULE_0__["storage"][i].snippet.publishedAt;

    const resultArticle = document.createElement('article');
    _index__WEBPACK_IMPORTED_MODULE_0__["resultsSection"].appendChild(resultArticle);
    Object(_setArticleStyle__WEBPACK_IMPORTED_MODULE_3__["setArticleStyle"])(resultArticle);
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchPage", function() { return switchPage; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function switchPage() {
  currentPage = parseInt(_index__WEBPACK_IMPORTED_MODULE_0__["count"] / _index__WEBPACK_IMPORTED_MODULE_0__["pageSize"] + 1, 10);
  if (currentPage === 1) {
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].textContent = '1';
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].setAttribute('disabled', '');
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].removeAttribute('disabled', '');
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].removeAttribute('disabled', '');
  }
  if (currentPage === 2) {
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].textContent = '2';
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].removeAttribute('disabled', '');
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].setAttribute('disabled', '');
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].removeAttribute('disabled', '');
  }
  if (currentPage > 2) {
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].textContent = `${currentPage}`;
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].removeAttribute('disabled', '');
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].removeAttribute('disabled', '');
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].setAttribute('disabled', '');
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPageNumbers", function() { return clearPageNumbers; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function clearPageNumbers() {
  for (let i = 0; i < 5; i += 1) {
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][i].textContent = '';
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setArticleStyle", function() { return setArticleStyle; });
function setArticleStyle(article) {
  article.style.display = 'inline-block';
  article.style.width = '300px';
  article.style.height = '500px';
  article.style.boxSizing = 'border-box';
  article.style.padding = '20px';
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPrev", function() { return showPrev; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _clear_functions_clearPageNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _showResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);




function showPrev(k) {
  if (_index__WEBPACK_IMPORTED_MODULE_0__["count"] !== 0) {
    Object(_clear_functions_clearPageNumber__WEBPACK_IMPORTED_MODULE_1__["clearPageNumbers"])();
    if (_index__WEBPACK_IMPORTED_MODULE_0__["count"] < _index__WEBPACK_IMPORTED_MODULE_0__["pageSize"] * k) {
      count = 0;
    } else {
      count -= _index__WEBPACK_IMPORTED_MODULE_0__["pageSize"] * k;
    }
    Object(_showResults__WEBPACK_IMPORTED_MODULE_2__["showResults"])();
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNext", function() { return showNext; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _showResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _request_functions_nextPagesRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _clear_functions_clearPageNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





function showNext(k) {
  const searchValue = searchInput.value;
  Object(_clear_functions_clearPageNumber__WEBPACK_IMPORTED_MODULE_3__["clearPageNumbers"])();
  count += _index__WEBPACK_IMPORTED_MODULE_0__["pageSize"] * k;
  if (_index__WEBPACK_IMPORTED_MODULE_0__["storage"].length < _index__WEBPACK_IMPORTED_MODULE_0__["pageSize"] * k + count) {
    Object(_request_functions_nextPagesRequest__WEBPACK_IMPORTED_MODULE_2__["nextPagesRequest"])(searchValue);
  } else {
    Object(_showResults__WEBPACK_IMPORTED_MODULE_1__["showResults"])();
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPagesRequest", function() { return nextPagesRequest; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _makeRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



function nextPagesRequest(searchValue) {
  const url = `https://www.googleapis.com/youtube/v3/search?pageToken=${_index__WEBPACK_IMPORTED_MODULE_0__["nextPageTok"]}&type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
  Object(_makeRequest__WEBPACK_IMPORTED_MODULE_1__["makeRequest"])(searchValue, url);
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRequest", function() { return makeRequest; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _showResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



function makeRequest(searchValue, url) {
  const xhp = new XMLHttpRequest();
  xhp.open('GET', url, true);
  xhp.onreadystatechange = () => {
    if (xhp.readyState === 4 && xhp.status === 200) {
      const result = JSON.parse(xhp.responseText);
      nextPageTok = result.nextPageToken;
      for (let i = 0; i < 15; i += 1) {
        _index__WEBPACK_IMPORTED_MODULE_0__["storage"].push(result.items[i]);
      }
      Object(_showResults__WEBPACK_IMPORTED_MODULE_1__["showResults"])();
    }
  };
  xhp.send();
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addButtons", function() { return addButtons; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _showPrev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _showNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);






function addButtons() {
  for (let i = 0; i < 5; i += 1) {
    const navButton = document.createElement('button');
    navButton.style.borderRadius = '50%';
    navButton.style.width = '30px';
    navButton.style.height = '30px';
    navButton.style.margin = '10px';
    _index__WEBPACK_IMPORTED_MODULE_0__["navSection"].appendChild(navButton);
    _index__WEBPACK_IMPORTED_MODULE_0__["buttons"].push(navButton);
  }

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].addEventListener('mouseup', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 2: {
        Object(_showPrev__WEBPACK_IMPORTED_MODULE_1__["showPrev"])(1);
        break;
      }
      default: {
        Object(_showPrev__WEBPACK_IMPORTED_MODULE_1__["showPrev"])(2);
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].addEventListener('mousedown', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 2: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] - 1}`;
        break;
      }
      default: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][0].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] - 2}`;
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].addEventListener('mouseup', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(1);
        break;
      }
      default: {
        Object(_showPrev__WEBPACK_IMPORTED_MODULE_1__["showPrev"])(1);
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].addEventListener('mousedown', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 1}`;
        break;
      }
      default: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][1].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] - 1}`;
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].addEventListener('mouseup', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(2);
        break;
      }
      case 2: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(1);
        break;
      }
      default: {
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].addEventListener('mousedown', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 2}`;
        break;
      }
      case 2: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][2].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 1}`;
        break;
      }
      default: {
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][3].addEventListener('mouseup', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(3);
        break;
      }
      case 2: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(2);
        break;
      }
      default: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(1);
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][3].addEventListener('mousedown', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][3].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 3}`;
        break;
      }
      case 2: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][3].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 2}`;
        break;
      }
      default: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][3].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 1}`;
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][4].addEventListener('mouseup', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(4);
        break;
      }
      default: {
        Object(_showNext__WEBPACK_IMPORTED_MODULE_2__["showNext"])(2);
        break;
      }
    }
  });

  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][4].addEventListener('mousedown', () => {
    switch (_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"]) {
      case 1: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][4].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 4}`;
        break;
      }
      default: {
        _index__WEBPACK_IMPORTED_MODULE_0__["buttons"][4].textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__["currentPage"] + 2}`;
        break;
      }
    }
  });
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearResults", function() { return clearResults; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function clearResults() {
  _index__WEBPACK_IMPORTED_MODULE_0__["storage"].length = 0;
  _index__WEBPACK_IMPORTED_MODULE_0__["buttons"].length = 0;
  _index__WEBPACK_IMPORTED_MODULE_0__["resultsSection"].innerHTML = '';
  _index__WEBPACK_IMPORTED_MODULE_0__["navSection"].innerHTML = '';
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstRequest", function() { return firstRequest; });
/* harmony import */ var _makeRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


function firstRequest(searchValue) {
  const url = `https://www.googleapis.com/youtube/v3/search?type=video&q=${searchValue}&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM`;
  Object(_makeRequest__WEBPACK_IMPORTED_MODULE_0__["makeRequest"])(searchValue, url);
}


/***/ })
/******/ ]);