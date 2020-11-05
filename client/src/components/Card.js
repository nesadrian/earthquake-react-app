import React from 'react'
import './Card.css'

const Card = ({ earthquake, toggleSelected }) => {
  const { place, mag, tsunami, title } = earthquake.properties;

  if (!earthquake.selected) {
    return (
      <article className="card" onClick={() => toggleSelected(earthquake.id)}>
        <p className="card_text">{title}</p>
      </article>
    )
  }

  return (
    <article className="card" onClick={() => toggleSelected(earthquake.id)}>
      <p className="card_text">Location: {place}</p>
      <p className="card_text">Magnitude: {mag}</p>
      <p className="card_text">Tsunami: {tsunami}</p>
    </article>
  )
}

export default Card;
