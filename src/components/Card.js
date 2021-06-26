import React from "react"

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }   

  return (
      <div className="card card_margin_bottom">
        <button className="card__delete-button hidden" type="button"></button>
        <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick}/>
        <div className="card__title-and-button">
          <h2 className="card__title">{props.card.name}</h2>
          <div className="card__container">
            <button className="card__like-button" type="button"></button>
            <p className="card__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
  )
}

export default Card