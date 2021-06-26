import React from 'react'
import { useState } from 'react'

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  let [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);  //Стэйт профиля
  let [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);  //Стэйт карточки
  let [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);  //Стэйт аватара
  let [selectedCard, setSelectedCard] = useState('');  //Стэйт кликнутой карточки

  //Обработчик клика по карточке
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  //Обработчик открытия попапа изменения аватара
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  //Обработчик открытия попапа редактирования профиля
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  //Обработчик открытия попапа добавления карточки
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  //Обработчик закрытия всех попапов
  function closeAllPopups() {
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setSelectedCard('')
  }

  return (
    <div>
    <Header />

    <Main 
    onEditProfile={handleEditProfileClick} 
    onAddPlace={handleAddPlaceClick} 
    onEditAvatar={handleEditAvatarClick} 
    cardImageClick={handleCardClick}/>

    <Footer />

    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <div className="popup__section">
        <input type="text" required className="popup__input popup__input_type_name" defaultValue name="name" placeholder="Введите ваше имя" minLength="2" maxLength="40" />
        <span className="popup__input-error popup__input-error_position_up" />
      </div>
      <div className="popup__section">
        <input type="text" required className="popup__input popup__input_type_job" defaultValue name="about" placeholder="Введите вашу профессию" minLength="2" maxLength="200" />
        <span className="popup__input-error popup__input-error_position_dawn" />
      </div>
    </PopupWithForm>

    <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
      <div className="popup__section">
        <input type="text" required className="popup__input popup__input_type_title" defaultValue name="name" placeholder="Название" minLength='2' maxLength='30' />
        <span className="popup__input-error popup__input-error_position_up" />
      </div>
      <div className="popup__section">
        <input type="url" required className="popup__input popup__input_type_link" defaultValue name="link" placeholder="Ссылка на картинку" />
        <span className="popup__input-error popup__input-error_position_dawn" />
      </div>
    </PopupWithForm>

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
      <div className="popup__section">
        <input type="url" required className="popup__input popup__input_type_update-link" defaultValue name="link" placeholder="Ссылка на картинку" />
        <span className="popup__input-error popup__input-error_position_up" />
      </div>
    </PopupWithForm>

    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </div>
  )
}

export default App