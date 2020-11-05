import React from 'react'

const Card = ({ earthquake }) => {
  const { mag } = earthquake.properties;

  return (
    <div>
      <p>Magnitude: {mag}</p>
    </div>
  )
}

export default Card;
