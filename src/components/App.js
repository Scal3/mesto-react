import React from 'react'
import { useState } from 'react'

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);  //Стэйт профиля
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);  //Стэйт карточки
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);  //Стэйт аватара
  // const [selectedCard, setSelectedCard] = useState('');  //Стэйт кликнутой карточки
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

  //Обработчик клика по карточке
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  //Обработчик открытия попапа изменения аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  //Обработчик открытия попапа редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  //Обработчик открытия попапа добавления карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  //Обработчик закрытия всех попапов
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({name: '', link: ''})
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

    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
      <div className="popup__section">
        <input type="text" required className="popup__input popup__input_type_name" defaultValue name="name" placeholder="Введите ваше имя" minLength="2" maxLength="40" />
        <span className="popup__input-error popup__input-error_position_up" />
      </div>
      <div className="popup__section">
        <input type="text" required className="popup__input popup__input_type_job" defaultValue name="about" placeholder="Введите вашу профессию" minLength="2" maxLength="200" />
        <span className="popup__input-error popup__input-error_position_dawn" />
      </div>
    </PopupWithForm>

    <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Добавить">
      <div className="popup__section">
        <input type="text" required className="popup__input popup__input_type_title" defaultValue name="name" placeholder="Название" minLength='2' maxLength='30' />
        <span className="popup__input-error popup__input-error_position_up" />
      </div>
      <div className="popup__section">
        <input type="url" required className="popup__input popup__input_type_link" defaultValue name="link" placeholder="Ссылка на картинку" />
        <span className="popup__input-error popup__input-error_position_dawn" />
      </div>
    </PopupWithForm>

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Изменить">
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