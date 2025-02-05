/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n// import $ from 'jquery';\n\n// Імпортуємо Slick та його стилі\n// import 'slick-carousel/slick/slick.min.js';\n// import 'slick-carousel/slick/slick.js';\n\n\n$(document).ready(function () {\n  // $(window).scroll(function () {\n  //     var scroll = $(window).scrollTop(); // Поточна позиція прокрутки\n  //     var triggerOffset = $('#header').offset().top + ($('#header').outerHeight() / 2); // Відстань до середини блоку\n\n  //     // Перевіряємо, чи прокрутили до середини блоку #about\n  //     if (scroll >= triggerOffset) {\n  //         $('.bottom-nav').addClass('fixed-nav'); // Додаємо клас для фіксації\n  //     } else {\n  //         $('.bottom-nav').removeClass('fixed-nav'); // Видаляємо клас, якщо не прокрутили до цієї точки\n  //     }\n  // });\n  $(window).scroll(function () {\n    var scroll = $(window).scrollTop(); // Поточна позиція прокрутки\n    var triggerOffset;\n\n    // Перевіряємо, чи ширина екрану більше або менше 720px\n    if ($(window).width() > 720) {\n      // Для великого екрану, використовуємо старі умови\n      triggerOffset = $('#header').offset().top + $('#header').outerHeight() / 2; // Відстань до середини блоку #header\n      if (scroll >= triggerOffset) {\n        $('.bottom-nav').addClass('fixed-nav'); // Додаємо клас для фіксації\n      } else {\n        $('.bottom-nav').removeClass('fixed-nav'); // Видаляємо клас, якщо не прокрутили до цієї точки\n      }\n    } else {\n      // Для екрану шириною 720px або менше\n      triggerOffset = $('#header').offset().top + $('#header').outerHeight() / 2; // Відстань до середини іншого блоку #other-block\n      if (scroll >= triggerOffset) {\n        $('.top-nav').addClass('fixed-nav'); // Додаємо клас для фіксації\n      } else {\n        $('.top-nav').removeClass('fixed-nav'); // Видаляємо клас, якщо не прокрутили до цієї точки\n      }\n    }\n  });\n  $('.header-slider').slick({\n    prevArrow: '<img src=\"images/arrow-prev.svg\" class=\"slick-slider prev-arrow\" alt=\"\"></img>',\n    nextArrow: '<img src=\"images/arrow-next.svg\" class=\"slick-slider next-arrow\" alt=\"\"></img>',\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    autoplay: true,\n    autoplaySpeed: 4000,\n    asNavFor: '.header-slider__dots'\n  });\n  $('.header-slider__dots').slick({\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    asNavFor: '.header-slider',\n    // Вимикаємо стрілки в слайдері точок\n    // Якщо ваші слайди мають змінну ширину\n    arrows: false\n  });\n  $('.about-slider').slick({\n    prevArrow: '<img src=\"images/arrow-prev.svg\" class=\"slick-slider prev-arrow\" alt=\"\"></img>',\n    nextArrow: '<img src=\"images/arrow-next.svg\" class=\"slick-slider next-arrow\" alt=\"\"></img>',\n    slidesToShow: 2,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 2000,\n    infinite: true,\n    responsive: [{\n      breakpoint: 720,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 520,\n      settings: {\n        slidesToShow: 1\n      }\n    }\n\n    // You can unslick at a given breakpoint now by adding:\n    // settings: \"unslick\"\n    // instead of a settings object\n    ]\n  });\n  $('.menu-nav').slick({\n    slidesToShow: 8,\n    asNavFor: '.menu-slider',\n    focusOnSelect: true,\n    // Дозволяє вибирати слайд через кліки\n    arrows: false,\n    // Вимикає стрілки навігації\n    infinite: true,\n    // Вимикає безкінечний цикл\n    centerMode: false,\n    // Вимикає центровані слайди\n    variableWidth: true,\n    // Змінна ширина для слайдів\n    useTransform: false,\n    // Вимикає трансформації\n    responsive: [{\n      breakpoint: 1020,\n      settings: {\n        slidesToShow: 6,\n        slidesToScroll: 1,\n        prevArrow: '<img src=\"images/arrow-prev.svg\" class=\"slick-slider prev-arrow\" alt=\"\"></img>',\n        nextArrow: '<img src=\"images/arrow-next.svg\" class=\"slick-slider next-arrow\" alt=\"\"></img>',\n        arrows: true\n      }\n    }, {\n      breakpoint: 720,\n      settings: {\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        prevArrow: '<img src=\"images/arrow-prev.svg\" class=\"slick-slider prev-arrow\" alt=\"\"></img>',\n        nextArrow: '<img src=\"images/arrow-next.svg\" class=\"slick-slider next-arrow\" alt=\"\"></img>',\n        arrows: true\n      }\n    }]\n  });\n  $('.menu-slider').slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    arrows: false,\n    // Вимикає стрілки навігації\n    asNavFor: '.menu-nav',\n    // Прив'язує до меню-навгації\n    infinite: false,\n    // Вимикає безкінечний цикл\n    fade: true // Додає ефект плавного переходу\n  });\n\n  // Перемикання слайдів при кліку на елемент меню\n  $('.menu-nav div').on('click', function () {\n    var index = $(this).index(); // Отримуємо індекс натиснутого елемента\n    $('.menu-slider').slick('slickGoTo', index); // Перемикаємо на відповідний слайд\n  });\n  $('.header-menu__link-about').on('click', function (e) {\n    e.preventDefault(); // Запобігаємо стандартній поведінці посилання (якщо це <a>)\n\n    // Знаходимо елемент з ID \"about\"\n    var about = $('#about')[0]; // Використовуємо jQuery, але потім отримуємо перший елемент за допомогою [0]\n\n    if (about) {\n      about.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  });\n  $('.header-menu__link-menu').on('click', function (e) {\n    e.preventDefault();\n    var menu = $('#menu')[0];\n    if (menu) {\n      menu.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  });\n  $('.header-menu__link-rezervation').on('click', function (e) {\n    e.preventDefault();\n    var rezervation = $('#rezervation')[0];\n    if (rezervation) {\n      rezervation.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  });\n  $('.header-menu__link-contact ,.location').on('click', function (e) {\n    e.preventDefault();\n    var contact = $('#contact')[0];\n    if (contact) {\n      contact.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  });\n  document.querySelector('.hotel-slider__item').style.backgroundImage = \"url('images/hotel-slider1.jpg')\";\n  $('.hotel-slider').slick({\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    prevArrow: '<img src=\"images/arrow-prev.svg\" class=\"slick-slider prev-arrow\" alt=\"\"></img>',\n    nextArrow: '<img src=\"images/arrow-next.svg\" class=\"slick-slider next-arrow\" alt=\"\"></img>',\n    infinite: true,\n    // Вимикає безкінечний цикл\n    centerMode: true,\n    arrows: true,\n    responsive: [{\n      breakpoint: 720,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        infinite: true,\n        variableWidth: false,\n        centerMode: false\n      }\n    }]\n  });\n  $('.burger').on('click', function () {\n    $('.bottom-nav').toggleClass('hidden');\n    if ($('.bottom-nav').hasClass('hidden')) {\n      // Якщо меню приховане\n      $('.burger').addClass('open'); // Прибираємо клас 'open'\n      // Додати інші стилі, якщо потрібно\n    } else {\n      // Якщо меню відкрите\n      $('.burger').removeClass('open'); // Додаємо клас 'open'\n      // Додати інші стилі, якщо потрібно\n    }\n  });\n  $('.burger').on('click', function () {\n    // Додаємо або прибираємо клас 'active' у bottom-nav\n\n    // Показуємо або ховаємо overlay\n    $('.overlay').toggle();\n  });\n});\n\n//# sourceURL=webpack://two-numbers/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://two-numbers/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;