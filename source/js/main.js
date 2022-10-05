import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {onEventCalllback} from './phone-input-mask.js';
import {checkReviewsSwiper, checkCoachSwiper} from './vendor.js';
import {changeSubscriptionTab} from './subscription-tab.js';

// Кнопки для переключения табов
const subscriptionTabButtons = document.querySelectorAll('[data-tab-button]');
// Находим все поля ввода телефона и вешаем обработчик
const phoneInputs = document.querySelectorAll('[data-phone-pattern]');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  checkReviewsSwiper();
  checkCoachSwiper();

  // Если таких кнопок нет - то ничего не происходит
  if (subscriptionTabButtons) {
    changeSubscriptionTab();
  }

  // Если нет ни одного поля ввода номера телефона - то ничего не происходит
  if (phoneInputs) {
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, onEventCalllback);
      }
    }
  }

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
