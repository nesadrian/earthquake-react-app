import React from 'react'
import { LocationOn } from '@material-ui/icons'
import './Card.css'

const Card = ({ earthquake, toggleSelected }) => {
  const { place, mag, tsunami, title } = earthquake.properties;

  if (!earthquake.selected) {
    return (
      <article className="card" onClick={() => toggleSelected(earthquake.id)}>
        <div className="card_text card_title card_title">{title}</div>
      </article>
    )
  }

  return (
    <article className="card card--selected" onClick={() => toggleSelected(earthquake.id)}>
      <div className="card_text card_title card_title--selected">{title}</div>
      <div className="card_content">
        <p className="card_content_name">Location</p>
        {place}
      </div>
      <div className="card_content">
        <p className="card_content_name">Magnitude</p>
        {mag}
      </div>
      <div className="card_content">
        <p className="card_content_name">Tsunami</p>
        {tsunami}
      </div>
      <div className="card_content card_content--location">
        <LocationOn />
      </div>
    </article>
  )
}

export default Card;
