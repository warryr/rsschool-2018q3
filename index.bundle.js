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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttons = exports.storage = exports.searchInput = exports.navSection = exports.resultsSection = undefined;

var _setPageSize = __webpack_require__(1);

var _showResults = __webpack_require__(2);

var _showOtherPage = __webpack_require__(4);

var _addButtons = __webpack_require__(9);

var _clearResults = __webpack_require__(10);

var _firstRequest = __webpack_require__(11);

var resultsSection = exports.resultsSection = document.createElement('section');
var navSection = exports.navSection = document.createElement('section');
var searchInput = exports.searchInput = document.createElement('input');
var storage = exports.storage = [];
var buttons = exports.buttons = [];

document.addEventListener('DOMContentLoaded', function () {
  var main = document.createElement('main');
  var searchSection = document.createElement('section');
  var searchForm = document.createElement('form');

  document.body.appendChild(main);
  main.appendChild(searchSection);
  main.appendChild(resultsSection);
  main.appendChild(navSection);
  searchSection.appendChild(searchForm);
  searchForm.appendChild(searchInput);
  searchInput.setAttribute('type', 'text');

  navSection.style.position = 'fixed';
  navSection.style.top = '600px';

  (0, _setPageSize.setPageSize)();

  window.addEventListener('resize', function () {
    (0, _setPageSize.setPageSize)();
    (0, _showResults.showResults)();
  });

  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowRight':
        {
          (0, _showOtherPage.showNext)(1);
          break;
        }
      case 'ArrowLeft':
        {
          (0, _showOtherPage.showPrev)(1);
          break;
        }
      default:
        break;
    }
  });

  searchInput.addEventListener('input', function () {
    var searchValue = searchInput.value;
    (0, _clearResults.clearResults)();
    if (searchValue !== '') {
      (0, _addButtons.addButtons)();
      (0, _firstRequest.firstRequest)(searchValue);
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPageSize = setPageSize;
var pageSize = exports.pageSize = 0;

function setPageSize() {
  exports.pageSize = pageSize = parseInt(window.innerWidth / 310, 10);
  if (pageSize > 4) {
    exports.pageSize = pageSize = 4;
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showResults = showResults;

var _switchPage = __webpack_require__(3);

var _clearPageNumber = __webpack_require__(5);

var _setArticleStyle = __webpack_require__(8);

var _showOtherPage = __webpack_require__(4);

var _setPageSize = __webpack_require__(1);

var _index = __webpack_require__(0);

function showResults() {
  _index.resultsSection.innerHTML = '';
  (0, _clearPageNumber.clearPageNumbers)();
  (0, _switchPage.switchPage)();
  for (var i = _showOtherPage.count; i < _showOtherPage.count + _setPageSize.pageSize; i += 1) {
    console.log('count = ' + _showOtherPage.count);
    var clipTitle = _index.storage[i].snippet.title;
    var clipLink = 'https://www.youtube.com/watch?v=' + _index.storage[i].id.videoId;
    var clipPreview = _index.storage[i].snippet.thumbnails.high.url;
    var clipDescription = _index.storage[i].snippet.description;
    var author = _index.storage[i].snippet.channelTitle;
    var publicationDate = _index.storage[i].snippet.publishedAt;

    var resultArticle = document.createElement('article');
    _index.resultsSection.appendChild(resultArticle);
    (0, _setArticleStyle.setArticleStyle)(resultArticle);
    var clipPreviewEl = document.createElement('img');
    clipPreviewEl.setAttribute('src', clipPreview);
    clipPreviewEl.style.width = '80px';
    clipPreviewEl.style.height = '80px';
    resultArticle.appendChild(clipPreviewEl);
    var titleEl = document.createElement('a');
    titleEl.textContent = clipTitle;
    titleEl.setAttribute('href', clipLink);
    titleEl.setAttribute('alt', clipTitle);
    resultArticle.appendChild(titleEl);
    var descriptionEl = document.createElement('p');
    descriptionEl.textContent = clipDescription;
    resultArticle.appendChild(descriptionEl);
    var channelEl = document.createElement('p');
    channelEl.textContent = author;
    resultArticle.appendChild(channelEl);
    var dateEl = document.createElement('p');
    dateEl.textContent = publicationDate;
    resultArticle.appendChild(dateEl);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentPage = undefined;
exports.switchPage = switchPage;

var _showOtherPage = __webpack_require__(4);

var _setPageSize = __webpack_require__(1);

var _index = __webpack_require__(0);

var currentPage = exports.currentPage = 1;

function switchPage() {
  exports.currentPage = currentPage = parseInt(_showOtherPage.count / _setPageSize.pageSize + 1, 10);
  if (currentPage === 1) {
    _index.buttons[0].textContent = '1';
    _index.buttons[0].setAttribute('disabled', '');
    _index.buttons[1].removeAttribute('disabled', '');
    _index.buttons[2].removeAttribute('disabled', '');
  }
  if (currentPage === 2) {
    _index.buttons[1].textContent = '2';
    _index.buttons[0].removeAttribute('disabled', '');
    _index.buttons[1].setAttribute('disabled', '');
    _index.buttons[2].removeAttribute('disabled', '');
  }
  if (currentPage > 2) {
    _index.buttons[2].textContent = '' + currentPage;
    _index.buttons[0].removeAttribute('disabled', '');
    _index.buttons[1].removeAttribute('disabled', '');
    _index.buttons[2].setAttribute('disabled', '');
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = undefined;
exports.showNext = showNext;
exports.showPrev = showPrev;

var _index = __webpack_require__(0);

var _setPageSize = __webpack_require__(1);

var _clearPageNumber = __webpack_require__(5);

var _showResults = __webpack_require__(2);

var _nextPagesRequest = __webpack_require__(6);

var count = exports.count = 0;

function showNext(k) {
  var searchValue = _index.searchInput.value;
  (0, _clearPageNumber.clearPageNumbers)();
  exports.count = count += _setPageSize.pageSize * k;
  if (_index.storage.length < _setPageSize.pageSize * k + count) {
    (0, _nextPagesRequest.nextPagesRequest)(searchValue);
  } else {
    (0, _showResults.showResults)();
  }
}

function showPrev(k) {
  if (count !== 0) {
    (0, _clearPageNumber.clearPageNumbers)();
    if (count < _setPageSize.pageSize * k) {
      exports.count = count = 0;
    } else {
      exports.count = count -= _setPageSize.pageSize * k;
    }
    (0, _showResults.showResults)();
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearPageNumbers = clearPageNumbers;

var _index = __webpack_require__(0);

function clearPageNumbers() {
  for (var i = 0; i < 5; i += 1) {
    _index.buttons[i].textContent = '';
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextPagesRequest = nextPagesRequest;

var _makeRequest = __webpack_require__(7);

function nextPagesRequest(searchValue) {
  var url = 'https://www.googleapis.com/youtube/v3/search?pageToken=' + _makeRequest.nextPageTok + '&type=video&q=' + searchValue + '&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM';
  (0, _makeRequest.makeRequest)(searchValue, url);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextPageTok = undefined;
exports.makeRequest = makeRequest;

var _index = __webpack_require__(0);

var _showResults = __webpack_require__(2);

var nextPageTok = exports.nextPageTok = void 0;

function makeRequest(searchValue, url) {
  var xhp = new XMLHttpRequest();
  xhp.open('GET', url, true);
  xhp.onreadystatechange = function () {
    if (xhp.readyState === 4 && xhp.status === 200) {
      var result = JSON.parse(xhp.responseText);
      exports.nextPageTok = nextPageTok = result.nextPageToken;
      for (var i = 0; i < 15; i += 1) {
        _index.storage.push(result.items[i]);
      }
      (0, _showResults.showResults)();
    }
  };
  xhp.send();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setArticleStyle = setArticleStyle;
function setArticleStyle(article) {
  article.style.display = 'inline-block';
  article.style.width = '300px';
  article.style.height = '500px';
  article.style.boxSizing = 'border-box';
  article.style.padding = '20px';
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addButtons = addButtons;

var _index = __webpack_require__(0);

var _showOtherPage = __webpack_require__(4);

var _switchPage = __webpack_require__(3);

function addButtons() {
  for (var i = 0; i < 5; i += 1) {
    var navButton = document.createElement('button');
    navButton.style.borderRadius = '50%';
    navButton.style.width = '30px';
    navButton.style.height = '30px';
    navButton.style.margin = '10px';
    _index.navSection.appendChild(navButton);
    _index.buttons.push(navButton);
  }

  _index.buttons[0].addEventListener('mouseup', function () {
    switch (_switchPage.currentPage) {
      case 2:
        {
          (0, _showOtherPage.showPrev)(1);
          break;
        }
      default:
        {
          (0, _showOtherPage.showPrev)(2);
          break;
        }
    }
  });

  _index.buttons[0].addEventListener('mousedown', function () {
    switch (_switchPage.currentPage) {
      case 2:
        {
          _index.buttons[0].textContent = '' + (_switchPage.currentPage - 1);
          break;
        }
      default:
        {
          _index.buttons[0].textContent = '' + (_switchPage.currentPage - 2);
          break;
        }
    }
  });

  _index.buttons[1].addEventListener('mouseup', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          (0, _showOtherPage.showNext)(1);
          break;
        }
      default:
        {
          (0, _showOtherPage.showPrev)(1);
          break;
        }
    }
  });

  _index.buttons[1].addEventListener('mousedown', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          _index.buttons[1].textContent = '' + (_switchPage.currentPage + 1);
          break;
        }
      default:
        {
          _index.buttons[1].textContent = '' + (_switchPage.currentPage - 1);
          break;
        }
    }
  });

  _index.buttons[2].addEventListener('mouseup', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          (0, _showOtherPage.showNext)(2);
          break;
        }
      case 2:
        {
          (0, _showOtherPage.showNext)(1);
          break;
        }
      default:
        {
          break;
        }
    }
  });

  _index.buttons[2].addEventListener('mousedown', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          _index.buttons[2].textContent = '' + (_switchPage.currentPage + 2);
          break;
        }
      case 2:
        {
          _index.buttons[2].textContent = '' + (_switchPage.currentPage + 1);
          break;
        }
      default:
        {
          break;
        }
    }
  });

  _index.buttons[3].addEventListener('mouseup', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          (0, _showOtherPage.showNext)(3);
          break;
        }
      case 2:
        {
          (0, _showOtherPage.showNext)(2);
          break;
        }
      default:
        {
          (0, _showOtherPage.showNext)(1);
          break;
        }
    }
  });

  _index.buttons[3].addEventListener('mousedown', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          _index.buttons[3].textContent = '' + (_switchPage.currentPage + 3);
          break;
        }
      case 2:
        {
          _index.buttons[3].textContent = '' + (_switchPage.currentPage + 2);
          break;
        }
      default:
        {
          _index.buttons[3].textContent = '' + (_switchPage.currentPage + 1);
          break;
        }
    }
  });

  _index.buttons[4].addEventListener('mouseup', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          (0, _showOtherPage.showNext)(4);
          break;
        }
      default:
        {
          (0, _showOtherPage.showNext)(2);
          break;
        }
    }
  });

  _index.buttons[4].addEventListener('mousedown', function () {
    switch (_switchPage.currentPage) {
      case 1:
        {
          _index.buttons[4].textContent = '' + (_switchPage.currentPage + 4);
          break;
        }
      default:
        {
          _index.buttons[4].textContent = '' + (_switchPage.currentPage + 2);
          break;
        }
    }
  });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearResults = clearResults;

var _index = __webpack_require__(0);

function clearResults() {
  _index.storage.length = 0;
  _index.buttons.length = 0;
  _index.resultsSection.innerHTML = '';
  _index.navSection.innerHTML = '';
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstRequest = firstRequest;

var _makeRequest = __webpack_require__(7);

function firstRequest(searchValue) {
  var url = 'https://www.googleapis.com/youtube/v3/search?type=video&q=' + searchValue + '&part=snippet&maxResults=15&key=AIzaSyCmcP7pWB1HDWy2Z5PqmF4bWj4FmkSsPQM';
  (0, _makeRequest.makeRequest)(searchValue, url);
}

/***/ })
/******/ ]);