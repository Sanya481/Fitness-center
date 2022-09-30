const subscriptionTabSection = document.querySelector('[data-tab-section]');

// Кнопки для переключения табов
const subscriptionTabButtons = document.querySelectorAll('[data-tab-button]');
// Контент табов
const subscriptionTabContents = document.querySelectorAll('[data-tab-content]');
// Название активного таба
let tabName;

const changeSubscriptionTab = () => {
  // Добавляем слушатель на клик по кнопкам
  const onTabButtonClick = (evt) => {
    if (evt.target.matches('[data-tab-button]')) {

      if (!evt.target.classList.contains('is-active')) {
        subscriptionTabButtons.forEach((button) => {
          button.classList.remove('is-active');
        });

        evt.target.classList.add('is-active');
        tabName = evt.target.dataset.tabButton;

        selectTabContent(tabName);
      }
    }
  };

  // Выбор контента в зависимсоти от нажатой кнопки
  function selectTabContent(tab) {
    subscriptionTabContents.forEach((content) => {
      if (content.dataset.tabContent === tab) {
        content.classList.add('is-active');
      } else {
        content.classList.remove('is-active');
      }
    });
  }

  subscriptionTabSection.addEventListener('click', onTabButtonClick);
};

export {changeSubscriptionTab};


