import React from 'react'
import './Card.css'

const Card = ({ earthquake }) => {
  const { place, mag, tsunami } = earthquake.properties;

  return (
    <article className="card">
      <p className="card_text">Location: {place}</p>
      <p className="card_text">Magnitude: {mag}</p>
      <p className="card_text">Tsunami: {tsunami}</p>
    </article>
  )
}

export default Card;
