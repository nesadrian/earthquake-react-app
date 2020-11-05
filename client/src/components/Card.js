import React from 'react'

const Card = ({ earthquake }) => {
  const { place, mag, tsunami } = earthquake.properties;

  return (
    <div>
      <p>Location: {place}</p>
      <p>Magnitude: {mag}</p>
      <p>Tsunami: {tsunami}</p>
    </div>
  )
}

export default Card;
