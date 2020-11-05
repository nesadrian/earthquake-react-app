import React from 'react'
import Card from './Card';
import './List.css'

const List = ({ earthquakes, toggleSelected }) => {
  return (
    <section className="list">
      {earthquakes.map(earthquake => <Card key={earthquake.id} earthquake={earthquake} toggleSelected={toggleSelected} />)}
    </section>
  )
}

export default List;
