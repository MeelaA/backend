/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// ===========================menu burger =============\r\n\r\nconst menuBody = document.querySelector('.headertop__menu')\r\nconst menuBtn = document.querySelector('.icon-menu')\r\nconst body = document.body;\r\n\r\nif (menuBody && menuBtn) {\r\nmenuBtn.addEventListener('click', () => {\r\n\t\tmenuBody.classList.toggle('active')\r\n\t\tmenuBtn.classList.toggle('active')\r\n\t\tbody.classList.toggle('lock')\r\n})\r\n}\r\n\r\n\r\nconst scrollPage = document.querySelectorAll('.scroll')\r\nscrollPage.forEach((item) => {\r\n\titem.addEventListener('click', () => {\r\n\t\tmenuBody.classList.remove('active')\r\n\t\tmenuBtn.classList.remove('active')\r\n\t\tbody.classList.remove('lock')\r\n\t})\r\n})\r\n\r\n\r\n\r\n\r\n\r\n//  str================\r\n\r\nvar string = \"Я бэкэнд разработчик. Занимаюсь разработкой сайтов с использованием современных веб технологий\";\r\nvar str = string.split(\"\");\r\nvar el = document.getElementById('str');\r\n(function animate() {\r\nstr.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);\r\nvar running = setTimeout(animate, 50);\r\n})();\r\n\r\n\r\n\r\n// =============anchors===========\r\nconst anchors = document.querySelectorAll('a[href*=\"#\"]')\r\nanchors.forEach(anchor => {\r\n\tanchor.addEventListener('click', event => {\r\n    event.preventDefault();\r\n\r\n\t const blockId = anchor.getAttribute('href').substring(1);\r\n\r\n\t document.getElementById(blockId).scrollIntoView({\r\n       behavior: 'smooth',\r\n\t\t block: 'start'\r\n\t })\r\n\t})\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack://MeelaArt/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("const swiper = new Swiper('.skills__slider', {\r\n\r\n\t// Optional parameters\r\n\r\n\t// Горизонтальный слайдер\r\n\tdirection: 'horizontal',\r\n\t// // Вертикальный слайдер\r\n   // direction: 'vertical',\r\n   // Бесконечная прокрутка\r\n\tloop: true,\r\n\t// скорость перелистования\r\n\tspeed: 600,\r\n\t// // эффекты перелистывания\r\n\t// // cards. coverflow, flip, cube, slider\r\n\t// effect: 'fade',\r\n\t// Количество слайдов для показа\r\n\tslidesPerView: 1,\r\n\t// //\r\n\tcenteredSlides: true,\r\n   // Отключение функционала,если слайдов меньше, чем нужно\r\n\t watchOverflow: true,\r\n   // Стартовый слайд\r\n\tinitialSlide: 0,\r\n   // Отступы\r\n\tspaceBetween: 30,\r\n   // //  Кол-во дублирующих слайдов\r\n   // loopedSlides: 3,\r\n   // //  Свободный режим прокрутки,\r\n   // // Можно перетаскивать как ленту\r\n\t// freeMode: true,\r\n   // // Автовысота слайдов\r\n   // autoheight: true,\r\n\r\n\r\n\t// If we need pagination\r\n\tpagination: {\r\n\t  el: '.swiper-pagination',\r\n\t//   // буллеты\r\n\t//   clickable: true,\r\n   // динамические булеты\r\n\t  dynamicBullets: true,\r\n\t},\r\n\r\n\t// // Navigation arrows\r\n\t// navigation: {\r\n\t//   nextEl: '.swiper-button-next',\r\n\t//   prevEl: '.swiper-button-prev',\r\n\t// },\r\n\r\n\t// // And if we need scrollbar\r\n\t// scrollbar: {\r\n\t//   el: '.swiper-scrollbar',\r\n\t// },\r\n   //  // Управление клавиатурой\r\n\t//  keyboard: {\r\n\t// \t// включить, выключить\r\n\t// \tenabled: true,\r\n\t// \t// только,когда слайдер в пределах высоты\r\n\t// \tonlyInViewport: true,\r\n\t// \t// управление клавишами\r\n\t// \tpageUpDown: true,\r\n\t//  },\r\n// // Управление колесом мыши\r\n// \t mousewheel: {\r\n// \t\tsensitivity: 1,\r\n//       eventsTarget: \".swiper-image\",\r\n// \t\tinvert: true,\r\n// \t },\r\n// // курсор захват рукой\r\n// \t grabCursor: true,\r\n\r\n\tautoplay: {\r\n\t\tdelay: 1000,\r\n\t },\r\n\r\n\r\n\tbreakpoints:\r\n\t{\r\n\t\t318: {\r\n\t\t\tslidesPerView: 2,\r\n\t\t},\r\n\t\t480: {\r\n\t\t\tslidesPerView: 3,\r\n\t\t},\r\n\t\t992: {\r\n\t\t\tslidesPerView: 3,\r\n\t\t\tspaceBetween: 20,\r\n\t\t},\r\n\t\t1024: {\r\n\t\t\tslidesPerView: 4,\r\n\t\t\tspaceBetween: 30,\r\n\t\t}\r\n\t}\r\n });\r\n\r\n\r\n\r\n// ===============works slider============\r\n\r\nconst swiperWorks = new Swiper('.works__slider', {\r\n\r\n\t// Optional parameters\r\n\r\n\t// Горизонтальный слайдер\r\n\tdirection: 'horizontal',\r\n\t// // Вертикальный слайдер\r\n   // direction: 'vertical',\r\n   // Бесконечная прокрутка\r\n\tloop: true,\r\n\t// // скорость перелистования\r\n\t// speed: 600,\r\n\t// // эффекты перелистывания\r\n\t// // cards. coverflow, flip, cube, slider\r\n\t// effect: 'fade',\r\n\t// Количество слайдов для показа\r\n\tslidesPerView: 1,\r\n\t// //\r\n\tcenteredSlides: true,\r\n   // Отключение функционала,если слайдов меньше, чем нужно\r\n\t watchOverflow: true,\r\n   // Стартовый слайд\r\n\tinitialSlide: 0,\r\n   // Отступы\r\n\tspaceBetween: 300,\r\n   // //  Кол-во дублирующих слайдов\r\n   // loopedSlides: 3,\r\n   // //  Свободный режим прокрутки,\r\n   // // Можно перетаскивать как ленту\r\n\t// freeMode: true,\r\n   // // Автовысота слайдов\r\n   // autoheight: true,\r\n\r\n\r\n\t// If we need pagination\r\n\t// pagination: {\r\n\t//   el: '.swiper-pagination',\r\n\t// //   // буллеты\r\n\t// //   clickable: true,\r\n   // // динамические булеты\r\n\t//   dynamicBullets: true,\r\n\t// },\r\n\r\n\t// Navigation arrows\r\n\tnavigation: {\r\n\t  nextEl: '.swiper-button-next',\r\n\t//   prevEl: '.swiper-button-prev',\r\n\t},\r\n\r\n\t// // And if we need scrollbar\r\n\t// scrollbar: {\r\n\t//   el: '.swiper-scrollbar',\r\n\t// },\r\n   //  // Управление клавиатурой\r\n\t//  keyboard: {\r\n\t// \t// включить, выключить\r\n\t// \tenabled: true,\r\n\t// \t// только,когда слайдер в пределах высоты\r\n\t// \tonlyInViewport: true,\r\n\t// \t// управление клавишами\r\n\t// \tpageUpDown: true,\r\n\t//  },\r\n// // Управление колесом мыши\r\n// \t mousewheel: {\r\n// \t\tsensitivity: 1,\r\n//       eventsTarget: \".swiper-image\",\r\n// \t\tinvert: true,\r\n// \t },\r\n// // курсор захват рукой\r\n// \t grabCursor: true,\r\n\r\n\t// autoplay: {\r\n\t// \tdelay: 1000,\r\n\t//  },\r\n\r\n\r\n\t// breakpoints:\r\n\t// {\r\n\t// \t318: {\r\n\t// \t\tslidesPerView: 2,\r\n\t// \t},\r\n\t// \t480: {\r\n\t// \t\tslidesPerView: 3,\r\n\t// \t},\r\n\t// \t992: {\r\n\t// \t\tslidesPerView: 3,\r\n\t// \t\tspaceBetween: 20,\r\n\t// \t},\r\n\t// \t1024: {\r\n\t// \t\tslidesPerView: 4,\r\n\t// \t\tspaceBetween: 30,\r\n\t// \t}\r\n\t// }\r\n });\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://MeelaArt/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;