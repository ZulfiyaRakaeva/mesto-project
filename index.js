// popup "Редактировать профиль"
let openButtonEdit = document.querySelector('.profile__edit-button');
let closeButtonEdit = document.querySelector('#popupCloseEdit');
let popup = document.querySelector('#popupEdit');

// Открытие popup "Редактировать профиль"
openButtonEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

// Закрытие popup "Редактировать профиль"
closeButtonEdit.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

// popup "Новое место"
let openButtonAdd = document.querySelector('.profile__add-button');
let popupNewCard = document.querySelector('#popupAdd');
let closeButtonAdd = document.querySelector('#popupCloseAdd');

// Открытие popup "Новое место"
openButtonAdd.addEventListener('click', function () {
  popupNewCard.classList.add('popup_opened');
});

// Закрытие popup "Новое место"
closeButtonAdd.addEventListener('click', function () {
  popupNewCard.classList.remove('popup_opened');
});


// Добавление карточки






// // Кнапка subit

// // Находим форму в DOM

// const formElement =
// // Воспользуйтесь методом querySelector()

// // Находим поля формы в DOM

// // const nameInput =
// // Воспользуйтесь инструментом .querySelector()

// // const jobInput =
// // Воспользуйтесь инструментом .querySelector()


// // Обработчик «отправки» формы, хотя пока

// // она никуда отправляться не будет

// function formSubmitHandler (evt) {
//   evt.preventDefault();
// // Эта строчка отменяет стандартную отправку формы.


// // Так мы можем определить свою логику отправки.


// // О том, как это делать, расскажем позже.



// // Получите значение полей jobInput и nameInput из свойства value



// // Выберите элементы, куда должны быть вставлены значения полей



// // Вставьте новые значения с помощью textContent

// }

// // Прикрепляем обработчик к форме:

// // он будет следить за событием “submit” - «отправка»

// formElement.addEventListener('submit', formSubmitHandler);
