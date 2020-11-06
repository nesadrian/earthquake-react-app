import React, { useEffect } from 'react'
import { LocationOn } from '@material-ui/icons'
import { getCircle, moveMap } from '../helpers'
import './Card.css'

const Card = ({ earthquake, toggleSelected, map }) => {
  const { place, mag, tsunami, title, time } = earthquake.properties;
  const [lng, lat, rad] = earthquake.geometry.coordinates;

  useEffect(() => {
    //map.dispose();
    const circle = getCircle(lat, lng, rad * 1000, earthquake.selected)
    circle.addEventListener('tap', () => toggleSelected(earthquake.id))
    map.addObject(circle)
  }, [map])

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
        <p className="card_content_name">Date</p>
        {new Date(time).toISOString().split('T')[0]}
      </div>
      <div className="card_content">
        <p className="card_content_name">Time</p>
        {new Date(time).toLocaleTimeString()}
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
        <LocationOn onClick={() => moveMap(map, lat, lng, 5)} />
      </div>
    </article>
  )
}

export default Card;
