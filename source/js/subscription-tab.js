// Секция с кнопками
const subscriptionTabSection = document.querySelector('[data-tab-section]');
// Кнопки для переключения табов
const subscriptionTabButtons = Array.from(document.querySelectorAll('[data-tab-button]'));
// Контент табов
const subscriptionTabContents = Array.from(document.querySelectorAll('[data-tab-content]'));

// Вариант 1

// Название активного таба
// let tabName;

// /**
//  * Добавление нумерации кнопок переключения табов
//  * @param {Object} button - одна из кнопкок табов
//  * @param {number} index - индекс элемента
//  */
// const setTubButtonNumber = (button, index) => {
//   button.dataset.tabButton = `tab-${index}`;
// };

// /**
//  * Добавление нумерации контента
//  * @param {Object} content - один блок контента
//  * @param {number} index - индекс элемента
//  */
// const setTubContentNumber = (content, index) => {
//   content.dataset.tabContent = `tab-${index}`;
// };

// subscriptionTabButtons.forEach(setTubButtonNumber);
// subscriptionTabContents.forEach(setTubContentNumber);

// const changeSubscriptionTab = () => {
//   if (subscriptionTabSection) {

//     // Добавляем слушатель на клик по кнопкам
//     const onTabButtonClick = (evt) => {
//       if (evt.target.matches('[data-tab-button]')) {

//         if (!evt.target.classList.contains('is-active')) {
//           subscriptionTabButtons.forEach((button) => {
//             button.classList.remove('is-active');
//           });

//           evt.target.classList.add('is-active');
//           tabName = evt.target.dataset.tabButton;

//           selectTabContent(tabName);
//         }
//       }
//     };

//     // Выбор контента в зависимсоти от нажатой кнопки
//     function selectTabContent(tab) {
//       subscriptionTabContents.forEach((content) => {
//         if (content.dataset.tabContent === tab) {
//           content.classList.add('is-active');
//         } else {
//           content.classList.remove('is-active');
//         }
//       });
//     }

//     subscriptionTabSection.addEventListener('click', onTabButtonClick);
//   }
// };

// export {changeSubscriptionTab};


// Вариант 2

// Инициализируем активный таб
subscriptionTabButtons[0].classList.add('is-active');
subscriptionTabContents[0].classList.add('is-active');

// Активная кнопка
let activeBtn = subscriptionTabButtons[0];
// Активный контент
let activeContent = subscriptionTabContents[0];

const onTabButtonClick = (evt) => {
  evt.preventDefault();
  if (evt.target.matches('[data-tab-button]')) {
    const btn = evt.target;
    changeBtn(btn);
  }
};

const changeBtn = (btn) => {
  if (btn.classList.contains('is-active')) {
    return;
  }
  activeBtn.classList.remove('is-active');
  btn.classList.add('is-active');
  const indexBtn = subscriptionTabButtons.indexOf(btn);
  activeBtn = btn;
  changeContent(indexBtn);
};

const changeContent = (index) => {
  activeContent.classList.remove('is-active');
  subscriptionTabContents[index].classList.add('is-active');
  activeContent = subscriptionTabContents[index];
};

subscriptionTabSection.addEventListener('click', onTabButtonClick);
