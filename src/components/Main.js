import React, { useState, useEffect } from 'react';
import api from '../utils/api'
import Card from './Card'


function Main(props) {

  let [userName, setUserName] = useState('');  //Стэйт имени профиля
  let [userDescription, setUserDescription] = useState('');  //Стэйт описания профиля
  let [userAvatar, setUserAvatar] = useState('');  //Стэйт аватара профиля
  let [cards, setCards] = useState([]); //Стэйт массива для карточек

  //Получаем данные профиля и карточек
  useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(cards)
      })
      .catch((e) => {
        console.log(`Ошибка при получении данных: ${e}`)
      })
  }, [])

  return (
    <main className="main">
      {/* секция профиля */}
      <section className="profile profile_top_margin">
        <div className="profile__xl-container">
          <img src={userAvatar} alt="фото профиля" className="profile__avatar" onClick={props.onEditAvatar} />
          <div className="profile__xl-container-without-img">
            <div className="profile__name-and-button">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Изменить" onClick={props.onEditProfile}/>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}/>
      </section>
      {/* секция с карточками */}
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card key={card._id} card={card} onCardClick={props.cardImageClick}/>
            );
          })}
        </section >

    </main>
  )
}

export default Main